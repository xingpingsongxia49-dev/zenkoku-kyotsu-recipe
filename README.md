# 全国共通レシピ

Age.3 レシピアプリ（age-3013.vercel.app/age3-recipe.html）とバイト単位で同一の複製リポジトリ。

## 構成

| ファイル | 役割 |
| --- | --- |
| age3-recipe.html | アプリ本体（CSS・JS・PINゲート・ハッシュルーティングをすべて内包） |
| age3-recipe-data.js | レシピデータ（材料・工程・ポイント・完成基準・お知らせ・質問箱） |
| age3-recipe.webmanifest | PWAマニフェスト |
| sw.js | Service Worker |
| age3-recipe-favicon.png ほか | アイコン各種（favicon / 192 / 512 / maskable / apple-touch） |
| index.html | ルートから /age3-recipe.html へのリダイレクト（複製時に追加） |

## URL 構造

ハッシュルーティング。例: /age3-recipe.html#/r/melon

## デプロイ

Vercel の静的ホスティング（ビルド不要）。main への push で自動デプロイ。

## 元ソースの再同期

Actions → import-source → Run workflow を実行すると、元アプリから再ダウンロードして同期する。

