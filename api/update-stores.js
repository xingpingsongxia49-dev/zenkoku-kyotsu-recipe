/* 本部管理画面から呼ばれるAPI。
   店舗ごとの表示・非表示（各レシピの stores フィールド）を書き換えて、
   GitHubへ直接コミットする。

   必要な環境変数（Vercelのプロジェクト設定 > Environment Variables で登録）：
   - GITHUB_TOKEN     : このリポジトリへの書き込み権限を持つ GitHub のトークン
   - ADMIN_API_SECRET : 管理画面からのリクエストだけを通すための合言葉
     （ブラウザに配信されるJSに含まれるため、悪意ある「なりすましbot」対策の
      域を出ない。本当に守っているのは「PINを知っている本部の人だけがこの
      画面を開く」という運用ルールの方。過信しないこと。）
*/

const REPO = "xingpingsongxia49-dev/zenkoku-kyotsu-recipe";
const FILE_PATH = "age3-recipe-data.js";
const ALL_STORES = ["ginza", "harajuku", "asakusa", "kama", "hida"];

function findRecipeBlock(text, id) {
  const marker = "id: '" + id + "'";
  const idIdx = text.indexOf(marker);
  if (idIdx === -1) return null;
  const openIdx = text.lastIndexOf("{", idIdx);
  if (openIdx === -1) return null;

  let depth = 0;
  let inStr = null;
  for (let i = openIdx; i < text.length; i++) {
    const ch = text[i];
    if (inStr) {
      if (ch === "\\") { i++; continue; }
      if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") { inStr = ch; continue; }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return { start: openIdx, end: i + 1 };
    }
  }
  return null;
}

function setStoresForBlock(blockText, stores) {
  const storesRe = /\bstores:\s*\[[^\]]*\]\s*,?/;
  const isAll = ALL_STORES.every(function (s) { return stores.indexOf(s) >= 0; }) && stores.length >= ALL_STORES.length;
  if (isAll) {
    return storesRe.test(blockText) ? blockText.replace(storesRe, "") : blockText;
  }
  const arr = "['" + stores.join("','") + "']";
  const newProp = "stores: " + arr + ",";
  if (storesRe.test(blockText)) return blockText.replace(storesRe, newProp);
  const openBraceIdx = blockText.indexOf("{");
  const insertAt = openBraceIdx + 1;
  return blockText.slice(0, insertAt) + "\n  " + newProp + blockText.slice(insertAt);
}

function applyStoreChanges(text, changes) {
  const results = [];
  for (const c of changes) {
    const block = findRecipeBlock(text, c.id);
    if (!block) { results.push({ id: c.id, ok: false, error: "レシピが見つかりません" }); continue; }
    const original = text.slice(block.start, block.end);
    const updated = setStoresForBlock(original, c.stores);
    text = text.slice(0, block.start) + updated + text.slice(block.end);
    results.push({ id: c.id, ok: true });
  }
  return { text: text, results: results };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "POSTのみ対応しています" });
    return;
  }

  const secret = req.headers["x-admin-secret"];
  if (!secret || secret !== process.env.ADMIN_API_SECRET) {
    res.status(401).json({ ok: false, error: "認証エラー" });
    return;
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    res.status(500).json({ ok: false, error: "サーバー側の設定不足（GITHUB_TOKEN未設定）" });
    return;
  }

  let changes;
  try {
    changes = req.body && req.body.changes;
    if (!Array.isArray(changes) || !changes.length) throw new Error("changesが空です");
    for (const c of changes) {
      if (typeof c.id !== "string" || !Array.isArray(c.stores)) throw new Error("不正なデータ形式です");
      for (const s of c.stores) {
        if (ALL_STORES.indexOf(s) < 0) throw new Error("不正な店舗id: " + s);
      }
    }
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
    return;
  }

  try {
    const getResp = await fetch(
      "https://api.github.com/repos/" + REPO + "/contents/" + FILE_PATH,
      { headers: { Authorization: "Bearer " + GITHUB_TOKEN, Accept: "application/vnd.github+json" } }
    );
    if (!getResp.ok) throw new Error("GitHub取得失敗: " + getResp.status);
    const getData = await getResp.json();
    const currentText = Buffer.from(getData.content, "base64").toString("utf-8");
    const sha = getData.sha;

    const applied = applyStoreChanges(currentText, changes);
    const failed = applied.results.filter(function (r) { return !r.ok; });

    const newContentB64 = Buffer.from(applied.text, "utf-8").toString("base64");
    const putResp = await fetch(
      "https://api.github.com/repos/" + REPO + "/contents/" + FILE_PATH,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + GITHUB_TOKEN,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "管理画面: 店舗表示設定を更新（" + changes.length + "件）",
          content: newContentB64,
          sha: sha,
          branch: "main"
        })
      }
    );
    if (!putResp.ok) {
      const errText = await putResp.text();
      throw new Error("GitHub保存失敗: " + putResp.status + " " + errText);
    }
    const putData = await putResp.json();
    res.status(200).json({
      ok: true,
      commitSha: putData.commit && putData.commit.sha,
      applied: applied.results.filter(function (r) { return r.ok; }).length,
      failed: failed
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: String((e && e.message) || e) });
  }
};
