/* ============================================================================
   Age.3 レシピ — 収録内容
   出どころ：Age.3 STANDARD RECIPE カード（CONFIDENTIAL — DO NOT COPY）
     AS-L-01 / AS-L-02 / AS-L-03 / AS-L-04 / AS-L-05 /
     AS-L-06 / AS-L-07 / AS-L-08 / AS-08 ／ アイスブリュレ（旧フォーマット）

   書き方の決まり
     ・レシピカードに書かれていることだけを写す。分量・手順・ポイントを足さない。
     ・完成基準が用紙に無い旧フォーマットの品だけ、手順から読み取れる仕上がりを記載している。
     ・カードに書かれていない項目は null にする。相場や一般論で埋めない。
     ・英文もカードに載っている文をそのまま写す。無い場合は null。
     ・カードの数量表記（1/2個・3〜4枚・約60g など）は原文のまま残す。

   1件の形
     id       : 画像ファイル名にも使う短い名前
     code     : カードの CODE。旧フォーマットで番号が無いものは null
     ver      : カードの VER。無ければ null
     issued   : カードの年月。無ければ null
     name/en  : 品名（和文・英文）
     serve    : カード左上の区分（SWEETS / Savory / 1個分 など）。無ければ null
     category : カードの CATEGORY 表記
     limited  : 期間限定と書かれているか
     yield    : 何個分のレシピか
     ing      : [和名, 英名, 数量, 単位]  英名・単位が無ければ null
     steps    : { jp, en, point:{jp,en} }  point が無ければ null
     finish   : { jp, en } 完成基準。無ければ null
     notes    : カード上の注意書き、およびカードに書かれていない事項の申し送り
     video    : 作り方動画の YouTube 動画ID（11文字）。紐づけていなければ null。
                ここに動画IDを1行足すだけで、その品の詳細に動画が出る。
   ========================================================================== */

var RECIPE_META = {
  assetVersion: '20260822',
  brand: 'Age.3',
  title: 'Age.3 レシピ',
  sub: '揚げサンド スタンダードレシピ',
  source: 'Age.3 STANDARD RECIPE カード',
  confidential: 'このレシピは社外秘です。持ち出し・複製・SNS等への掲載を禁じます。',
  updated: '2026年8月',
  note: '数量・手順・ポイントは、すべてレシピカードに書かれている通りに写しています。カードに書かれていないことは載せていません。',

  /* 作り方動画の置き場所（YouTubeのプレイリストID）。
     各レシピの video に動画IDを入れると、その品の詳細に動画が出る。
     入れていない品は、このプレイリストを開くボタンになる。 */
  videoPlaylist: 'PLd6x2EVLblGi7aDWkzoQT2UbfW5kwLJOL',

  /* レギュラー商品用のプレイリスト。group が regular- で始まる品は、
     動画を紐づけていない場合こちらを開く。 */
  videoPlaylistRegular: 'PLd6x2EVLblGhlqTur7gwhA-7LGX5d45cM'
};

/* ============================================================================
   商品切り替えのお知らせ
   出どころ：Age.3 ／ ANCHOR「商品切り替えのお知らせ」（店舗共有）
             2026年8月5日 デザインミーティング決定事項より／作成：松尾
             共有先：リーダーグループ
   お知らせに書かれていることだけを写す。書かれていない品目や日付を足さない。
   ========================================================================== */
var RECIPE_NOTICE = {
  title: '商品切り替えのお知らせ',
  source: '2026年8月5日 デザインミーティング決定事項より',
  author: '松尾',
  audience: 'リーダーグループ',
  asOf: '2026年8月5日',
  draft: 'このお知らせは下書きです。店舗への共有・掲示の前に、必ずご自身と上長の目で確認してください。',
  change: '内容は2026年8月5日時点の決定事項です。変更が出た場合は改めて共有されます。',
  sections: [
    {
      when: '8月末で終了', tone: 'end',
      title: '揚げサンド', scope: null,
      items: [
        { name: 'ティラミス',          code: 'F', state: '終了', detail: '8月末で終了・定番化なし', recipe: 'as-l-02' },
        { name: 'ピーナツバタージャム', code: 'E', state: '終了', detail: '8月末で終了・定番化なし', recipe: 'as-l-01' }
      ]
    },
    {
      when: '8月末で終了', tone: 'end',
      title: '旨辛シリーズ（揚げサンド）', scope: null,
      items: [
        { name: '旨辛ナポリタン',   code: 'S-1', state: '終了', detail: 'HOT NAPOLITAN NOODLE', recipe: 'as-l-04' },
        { name: '旨辛チーズカレー', code: 'S-2', state: '終了', detail: 'HOT CHEESE CURRY',     recipe: 'as-l-05' },
        { name: '旨辛焼肉',         code: 'S-3', state: '終了', detail: 'HOT BEEF YAKINIKU',    recipe: 'as-l-03' }
      ]
    },
    {
      when: '9月〜 開始', tone: 'start',
      title: '秋の新商品', scope: null,
      items: [
        { name: '紅蜜芋ブリュレ',   state: '揚げサンド', detail: null, recipe: 'as-l-06' },
        { name: 'マスカット',       state: '揚げサンド', detail: null, recipe: 'as-l-07' },
        { name: 'いちじく',         state: '揚げサンド', detail: null, recipe: 'as-l-08' },
        { name: '北海道あんバター', state: '揚げサンド', detail: 'あんバターのビジュアルを変更。材料も北海道餡に変更。', recipe: 'as-08-hokkaido' }
      ]
    },
    {
      when: '10月', tone: 'plan',
      title: 'ハロウィン商戦', scope: null,
      lines: [
        'ハロウィン商品を「新商品」の位置づけで打ち出します。',
        'イチジク・マスカットは継続。'
      ]
    },
    {
      when: '11月', tone: 'plan',
      title: '冬メニュー（予定）', scope: null,
      lines: [
        'ヤンニョムチキンを投入（白身フライを入れるかは未定）。',
        '紅蜜芋ブリュレは継続。'
      ]
    }
  ]
};

/* ============================================================================
   質問箱 — こちらから確認したいこと
   レシピカードや動画を突き合わせた結果、用紙だけでは決められなかった点。
   推測で埋めずにここへ出し、答えが返ってきたらレシピ本体に反映する。
   answered: true にすると「解決ずみ」に移る。
   ========================================================================== */
var RECIPE_QUESTIONS = [
  { id:'q-choco-brulee-bread', recipe:'choco-brulee', tag:'材料',
    q:'チョコブリュレに「揚げたパン」は使いますか。',
    why:'用紙の材料欄に揚げたパンの記載がありません。他のレシピには必ず書かれているので、書き漏れかどうか判断できませんでした。',
    options:['使う（他と同じ 揚げパン 1/2個）','使わない','その他（下に書く）'] },

  { id:'q-choco-brulee-custard', recipe:'choco-brulee', tag:'材料',
    q:'チョコブリュレの手順2「カスタードクリーム」は、材料欄のクリミビット（約30g）のことですか。',
    why:'手順に出てくるカスタードクリームが材料欄にありません。別物なら分量が分からず、同じ物なら呼び名を揃えたいです。',
    options:['クリミビットのこと（同じ物）','別のカスタードクリームを使う','その他（下に書く）'] },

  { id:'q-sakura-bread', recipe:'sakura-matcha', tag:'材料',
    q:'SAKURA抹茶に「揚げたパン」は使いますか。',
    why:'こちらも用紙の材料欄に揚げたパンの記載がありません。手順には「パンの内側に」と書かれています。',
    options:['使う（他と同じ 揚げパン 1/2個）','使わない','その他（下に書く）'] },

  { id:'q-sakura-cream', recipe:'sakura-matcha', tag:'呼び名',
    q:'SAKURA抹茶は「抹茶クリーム」と「抹茶ホイップクリーム」のどちらが正しいですか。',
    why:'材料欄は「抹茶クリーム 約80g」、手順1は「抹茶ホイップクリーム」と書かれていて、用紙の中で揃っていません。',
    options:['抹茶クリームが正しい','抹茶ホイップクリームが正しい','同じ物なのでどちらでもよい'] },

  { id:'q-melon-parfait-pie', recipe:'melon-parfait', tag:'分量',
    q:'メロンパフェのパイシートは、1個分に何枚使いますか。',
    why:'材料欄が「パイシート 1枚（48カット）」で、1枚を48に切り分けたうちの1枚なのか、それとも別の意味なのかが読み取れませんでした。',
    options:['48カットしたうちの1枚','パイシート1枚まるごと','その他（下に書く）'] },

  { id:'q-ice-whip-name', recipe:null, tag:'呼び名',
    q:'アイス揚げサンド4品のクリームは「ホイップクリーム」と「チョコ／抹茶／リスホイップ」のどちらが正しいですか。',
    why:'4品とも材料欄は「ホイップクリーム 25g」ですが、手順では味ごとに「チョコホイップ」「抹茶ホイップ」「リスホイップ」と書かれています。味ごとに色つきのクリームを使うのであれば、材料欄を直したほうが現場が迷いません。',
    options:['味ごとに違うクリームを使う（手順が正しい）','どれも同じホイップクリーム（材料欄が正しい）','その他（下に書く）'] },

  { id:'q-chocolate-typo', recipe:null, tag:'用紙の誤り',
    q:'抹茶あんこ・チョコいちごの材料欄にある「Chocolate」の記述は、消してよいですか。',
    why:'「揚げたパン（半分）Chocolate」と書かれていますが、前後とつながりません。いまは原本のまま残しています。',
    options:['書き間違いなので消してよい','意味がある（下に書く）'] },

  { id:'q-daifuku-spell', recipe:'ichigo-daifuku', tag:'表記',
    q:'いちご大福の英語表記を「Strawberry Daifuku」に直してよいですか。',
    why:'用紙は「Strawberry Difuku(mochi)」となっています。外国人スタッフ向けの表示なので、直すなら早いほうがよいと思っています。',
    options:['Daifuku に直してよい','用紙のまま Difuku にしておく'] },

  { id:'q-video-vanilla', recipe:'ice-vanilla-strawberry', tag:'動画',
    q:'バニラいちごの動画は「アイスジャムいちご」で合っていますか。',
    why:'アイス揚げサンド4品のうち他の3品が名前で決まったため、残り同士で当てています。動画の名前と品名が一致していないので、いちばん自信がありません。',
    options:['合っている','違う（正しい動画名を下に書く）'] },

  { id:'q-video-peanut', recipe:'as-l-01', tag:'動画',
    q:'ピーナッツバタージャムの動画は「ピーナッツバター」で合っていますか。',
    why:'動画名が「PeanutButter / ピーナッツバター」で、品名と完全には一致していません。',
    options:['合っている','違う（正しい動画名を下に書く）'] },

  { id:'q-video-icebrulee', recipe:'ice', tag:'動画',
    q:'アイスブリュレの動画は「アイスクリームブリュレ」で合っていますか。',
    why:'動画名が「Ice Cream Brûlée / アイスクリームブリュレ」で、品名と完全には一致していません。',
    options:['合っている','違う（正しい動画名を下に書く）'] },

  { id:'q-video-missing', recipe:null, tag:'動画',
    q:'北海道あんバター・メロン揚げサンド・ドバイチョコの動画は、非公開になっていませんか。',
    why:'プレイリストに「4本の利用できない動画が非表示になっています」と出ていて、この3品の動画が見つかりません。公開設定を「限定公開」にしていただければ、こちらから紐づけられます。',
    options:['非公開だった（設定を直す）','もともと動画が無い','その他（下に書く）'] },

  { id:'q-melon-photo', recipe:'melon', tag:'写真',
    q:'メロン揚げサンドの用紙の画像を、もう一度送っていただけますか。',
    why:'22品のうちこの1品だけ写真が入っていません。以前いただいたのはLINEのスクリーンショットで、スマホの画面枠が写り込んでいたため使いませんでした。',
    options:['あとで送る','用紙が無い（写真なしのままでよい）'] },

  { id:'q-more-recipes', recipe:null, tag:'追加',
    q:'動画はあるのにレシピが無い14品のカードを、いただけますか。',
    why:'チーズバーガー／パイン／チョコドレスクレープ／抹茶ドレスクレープ／いちごドレスクレープ／金の抹茶栗あん団子／白身フライ／天丼／ミックスベリーオペラ／ローストビーフ／チョコミント／飛騨牛ステーキ／抹茶ブリュレ／タイティー抹茶ブリュレ。カードをいただければ同じように登録できます。',
    options:['あとで送る','揚げサンド以外は入れなくてよい','その他（下に書く）'] }
];

var RECIPES = [

/* ---------------------------------------------------------------- AS-L-01 */
{
  id: 'as-l-01', code: 'AS-L-01', ver: 'Ver.1.0', issued: '2026.06',
  name: 'ピーナッツバタージャム', en: 'Peanut Butter Jam',
  serve: '1個分 / PER PIECE', category: '揚げサンド（期間限定）', limited: true,
  video: 'UwJNGxswAvg',
  videoNote: 'プレイリストの動画名は「PeanutButter / ピーナッツバター」。この品の名前（ピーナッツバタージャム）と完全には一致していない。違っていたら差し替える。',
  status: { tone: 'end', label: '8月末で終了', detail: '定番化なし' },
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン', 'Fried bun', '1/2', '個'],
    ['ホイップクリーム', 'Whipped cream', '60', 'g'],
    ['ピーナッツバター', 'Peanut butter', '35', 'g'],
    ['いちご', 'Strawberry', '3〜4', '枚'],
    ['ラズベリーソース', 'Raspberry sauce', '30', 'g']
  ],
  steps: [
    { jp: 'ラズベリーソース15gをパンの内側全体に塗る。',
      en: 'Spread 15g raspberry sauce over the inner surface of the bun.',
      point: null },
    { jp: 'ホイップクリーム60gを擦り切りで詰める。',
      en: 'Fill with 60g whipped cream, leveled flat.',
      point: { jp: 'ホイップは平らに擦り切る。盛りすぎない。', en: 'Level the cream flat; do not overfill.' } },
    { jp: 'ピーナッツバター35gを表面に均一に塗る。',
      en: 'Spread 35g peanut butter evenly over the surface.',
      point: { jp: '下の白いクリームが見えない／にじまないよう、境界を汚さず均一に塗る。', en: 'Spread evenly so the white cream below is hidden and not smeared at the edges.' } },
    { jp: 'いちごを3〜4枚乗せる。',
      en: 'Top with 3–4 strawberry slices.',
      point: { jp: 'ハートの向きと間隔を揃える。断面が正面を向くように置く。', en: 'Align the hearts and spacing evenly; place with the cut face forward.' } },
    { jp: 'ラズベリーソース15gを上にかける。',
      en: 'Pour 15g raspberry sauce on top.',
      point: null }
  ],
  finish: { jp: 'ピーナッツバターが滲んでいない。ソースが全体にかかっている。',
            en: 'Peanut butter is not smeared; sauce covers the whole surface.' },
},

/* ---------------------------------------------------------------- AS-L-02 */
{
  id: 'as-l-02', code: 'AS-L-02', ver: 'Ver.1.0', issued: '2026.06',
  name: 'ティラミス', en: 'Tiramisu',
  serve: '1個分 / PER PIECE', category: '揚げサンド（期間限定）', limited: true,
  video: 'PoNn-yQt1nE',
  status: { tone: 'end', label: '8月末で終了', detail: '定番化なし' },
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン', 'Fried bun', '1/2', '個'],
    ['チーズホイップ', 'Cheese whip', '80', 'g'],
    ['コーヒーソース', 'Coffee sauce', '20', 'g'],
    ['ココアパウダー', 'Cocoa powder', '1', 'g'],
    ['ココアビスケット', 'Cocoa biscuit', '1', '枚']
  ],
  steps: [
    { jp: 'パンの内側にコーヒーソース15gをかける。',
      en: 'Pour 15g coffee sauce on the inner surface of the bun.',
      point: null },
    { jp: 'チーズホイップ80gを詰める。',
      en: 'Fill with 80g cheese whip.',
      point: { jp: '側面にクリームを付けない。表面は平らにならす。', en: 'Do not apply cream on the sides; level the top flat.' } },
    { jp: 'コーヒーソース5gを縦一本線にかける。',
      en: 'Pour 5g coffee sauce in a single vertical line.',
      point: null },
    { jp: 'バーガー袋に入れ、ココアパウダーを全体にかける。',
      en: 'Place in a burger bag and dust cocoa powder over the whole surface.',
      point: { jp: '白い部分が見えなくなるまでかける。袋に入れて飛散を防ぐ。', en: 'Dust until no white shows. Use the bag to prevent scattering.' } },
    { jp: 'ビスケットを半分に折り、向かって左上に斜めにずらして挿す。',
      en: 'Fold the biscuit in half and insert it diagonally at the upper left.',
      point: { jp: '写真のように斜めにずらして挿す。', en: 'Insert at a slant as shown in the photo.' } }
  ],
  finish: { jp: 'ココアで表面の白い部分が見えなくなっている。ビスケットが左上に斜めに挿',
            en: 'Cocoa fully covers the surface (no white showing); biscuit inserted diagonally at the upper left.' },
},

/* ---------------------------------------------------------------- AS-L-03 */
{
  id: 'as-l-03', code: 'AS-L-03', ver: '1.0', issued: '2026.06',
  name: '旨辛焼肉', en: 'Hot Beef Yakiniku',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'fHcaqgIRPRA',
  status: { tone: 'end', label: '8月末で終了', detail: '旨辛シリーズ S-3' },
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['レタス', 'Lettuce', '1', '枚'],
    ['ポテトサラダ', 'Potato salad', '80', 'g'],
    ['スパイシー焼肉（牛カルビ）', 'Spicy beef short rib yakiniku', '1', 'pc'],
    ['チリパウダー', 'Chili powder', '1', 'g'],
    ['半熟タマゴ', 'Soft-boiled egg', '1', '個'],
    ['ハラペーニョ', 'Jalapeño slices', '3', '枚'],
    ['白胡麻', 'White sesame seeds', '1', 'g'],
    ['乾燥唐辛子', 'Dried chili', '1', 'g']
  ],
  steps: [
    { jp: '揚げパンにレタス（1枚）を入れ、ポテトサラダ（80g）を詰める。',
      en: 'Place lettuce (1) in the fried bread and fill with potato salad (80g).',
      point: { jp: 'レタスは3〜5cm外に出す。', en: 'Let the lettuce stick out 3–5cm.' } },
    { jp: 'スパイシー焼肉（1パック）を盛り、チリパウダー（1g）を振りかける。',
      en: 'Arrange the spicy yakiniku (1 pack) and sprinkle chili powder (1g).',
      point: { jp: '中央を窪ませ卵を乗せやすくする。汁は入れすぎない。', en: 'Make a hollow in the center for the egg. Don\'t add too much sauce.' } },
    { jp: '半熟タマゴをのせて少し割る。',
      en: 'Place the soft-boiled egg and cut it slightly.',
      point: { jp: '卵は必ず包丁で切れ目を入れる。箸や指で割らない。', en: 'Always cut the egg with a knife — never break it with chopsticks or fingers.' } },
    { jp: '白胡麻（1g）を全体に振る。',
      en: 'Sprinkle white sesame (1g) over the whole surface.',
      point: null },
    { jp: 'ハラペーニョ（3枚）を卵の周りに散らす。',
      en: 'Scatter jalapeño (3 slices) around the egg.',
      point: null },
    { jp: '乾燥唐辛子（1g）を乗せて完成。',
      en: 'Top with dried chili (1g) to finish.',
      point: { jp: '乾燥唐辛子は卵の上に立体的に乗せ、赤を見せる。', en: 'Place the dried chili on top of the egg for height and red color.' } }
  ],
  finish: { jp: '卵に切れ目が入り黄身がとろり、ハラペーニョの緑と赤い唐辛子が見えている',
            en: 'Egg cut with runny yolk; green jalapeño and red chili visible' }
},

/* ---------------------------------------------------------------- AS-L-04 */
{
  id: 'as-l-04', code: 'AS-L-04', ver: '1.0', issued: '2026.06',
  name: '旨辛ナポリタン', en: 'Hot Napolitan Noodle',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'bnu34XCQaRo',
  status: { tone: 'end', label: '8月末で終了', detail: '旨辛シリーズ S-1' },
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['目玉焼き（冷凍）', 'Fried egg (frozen)', '1', '個'],
    ['ナポリタン', 'Napolitan pasta', '110', 'g'],
    ['ザネッティチーズ', 'Zanetti cheese', '5', 'g'],
    ['タバスコ', 'Tabasco', '3', 'g'],
    ['ハラペーニョ', 'Jalapeño slices', '3', '枚'],
    ['乾燥唐辛子', 'Dried chili', '1', 'g']
  ],
  steps: [
    { jp: '揚げパンに、揚げた目玉焼き（1個）を入れる。',
      en: 'Place the fried egg (1) inside the fried bread.',
      point: { jp: '黄身を割らないように静かに入れる。', en: 'Place it gently so the yolk doesn\'t break.' } },
    { jp: 'ナポリタン（110g）を詰める。',
      en: 'Fill with Napolitan pasta (110g).',
      point: { jp: 'ナポリタンがしっかり温まっているか必ず確認する。', en: 'Always check the pasta is fully heated through.' } },
    { jp: 'タバスコ（3g）を全体に回しかける。',
      en: 'Drizzle Tabasco (3g) over the whole surface.',
      point: null },
    { jp: 'ザネッティチーズ（5g）を中央に山高く削りかける。',
      en: 'Grate Zanetti cheese (5g) high in the center.',
      point: { jp: '中央に山高く削る。全体に散らさない。', en: 'Pile it high in the center; don\'t spread it all over.' } },
    { jp: 'ハラペーニョ（3枚）、乾燥唐辛子（1g）を乗せて完成。',
      en: 'Top with jalapeño (3 slices) and dried chili (1g) to finish.',
      point: { jp: 'ハラペーニョは中央周りに散らし、乾燥唐辛子は赤を見せる。', en: 'Scatter jalapeño around the center; show the red of the dried chili.' } }
  ],
  finish: { jp: '麺が外にはみ出ておらず、ハラペーニョの緑と赤い唐辛子が見えている',
            en: 'No pasta sticking out; green jalapeño and red chili visible' }
},

/* ---------------------------------------------------------------- AS-L-05 */
{
  id: 'as-l-05', code: 'AS-L-05', ver: '1.0', issued: '2026.06',
  name: '旨辛チーズカレー', en: 'Hot Cheese Curry',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'PWr7owjii3I',
  status: { tone: 'end', label: '8月末で終了', detail: '旨辛シリーズ S-2' },
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['カレー', 'Keema curry', '110', 'g'],
    ['チーズ', 'Cheese', '10', 'g'],
    ['チリパウダー', 'Chili powder', '1', 'g'],
    ['ハラペーニョ', 'Jalapeño slices', '3', '枚'],
    ['乾燥唐辛子', 'Dried chili', '1', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにカレー（110g）を詰める。',
      en: 'Fill the fried bread with curry (110g).',
      point: { jp: 'カレーがしっかり温まっているか必ず確認する。', en: 'Always check the curry is fully heated through.' } },
    { jp: 'チーズ（10g）を全体に乗せ、溶かすように炙って焼き目をつける。',
      en: 'Top with cheese (10g) and torch to melt and brown.',
      point: { jp: '遠火で炙る。焦げすぎないようにする。', en: 'Torch from a distance; don\'t let it burn.' } },
    { jp: 'チリパウダー（1g）をかける。',
      en: 'Sprinkle chili powder (1g).',
      point: { jp: '全体に散らしすぎない。', en: 'Don\'t over-sprinkle across the whole surface.' } },
    { jp: 'ハラペーニョ（3枚）、乾燥唐辛子（1g）を乗せる。',
      en: 'Top with jalapeño (3 slices) and dried chili (1g).',
      point: { jp: 'ハラペーニョは中央周りに散らし、乾燥唐辛子で赤を見せる。', en: 'Scatter jalapeño around the center; show the red of the dried chili.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.',
      point: null }
  ],
  finish: { jp: 'チーズが溶けて焼き目がつき、ハラペーニョの緑と赤いチリが見えている',
            en: 'Cheese melted and browned; green jalapeño and red chili visible' }
},

/* ---------------------------------------------------------------- AS-L-06 */
{
  id: 'as-l-06', code: 'AS-L-06', ver: '1.0', issued: '2026.06',
  name: '紅蜜芋ブリュレ', en: 'Purple Sweet Potato Brûlée',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'J31wyTxW1TU',
  status: { tone: 'start', label: '9月〜', detail: '秋の新商品' },
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['芋餡（底10g＋仕上げ5g）', 'Sweet potato paste (10g base + 5g finish)', '15', 'g'],
    ['カスタードホイップ', 'Custard whipped cream', '60', 'g'],
    ['紫芋クリミビット', 'Purple sweet potato Kurimibit', '30', 'g'],
    ['グラニュー糖（表面用）', 'Granulated sugar (for surface)', '5', 'g'],
    ['大学芋', 'Candied sweet potato', '3', '個']
  ],
  steps: [
    { jp: 'パンの底に芋餡（10g）を敷き、カスタードホイップ（60g）を詰める。',
      en: 'Spread sweet potato paste (10g) on the bottom of the bread, then fill with custard whipped cream (60g).',
      point: { jp: '芋餡は底全体に平らに広げる。片寄ると味が片側だけになる。', en: 'Spread the paste flat across the whole bottom; uneven paste means uneven flavor.' } },
    { jp: 'その上に紫芋クリミビット（30g）を塗る。',
      en: 'Spread purple sweet potato Kurimibit (30g) on top.',
      point: { jp: 'ムラなく覆う（薄い部分を作らない）。薄いと下のクリームに熱が伝わって溶け出す。', en: 'Cover evenly — no thin spots. Thin areas let heat reach the cream below and melt it.' } },
    { jp: 'グラニュー糖（5g）をまぶし、バーナーで炙る。',
      en: 'Coat with granulated sugar (5g) and heat with a burner.',
      point: { jp: '全体がきつね色になるまで、バーナーであぶる。', en: 'Heat with a burner until golden all over.' } },
    { jp: '炙った表面の中央に、芋餡（5g）を縦に1本引く。',
      en: 'Draw one vertical line of sweet potato paste (5g) down the center of the torched surface.',
      point: { jp: '中央にまっすぐ1本。太くしすぎず紫の面を左右に残す。', en: 'One straight line down the center; keep it thin so purple remains on both sides.' } },
    { jp: '芋餡の上に大学芋（3個）を等間隔で乗せて完成。',
      en: 'Place candied sweet potato (3 pieces) evenly on the paste line to finish.',
      point: { jp: '必ず芋餡の線の上に乗せる。縁からはみ出させず、上下も詰めすぎない。', en: 'Always sit them on the paste line; keep them inside the edges and evenly spaced.' } }
  ],
  finish: { jp: '表面がきつね色に飴化し、中央の芋餡の上に大学芋3個がはみ出さず並んでいる',
            en: 'Golden caramelized surface; 3 candied potatoes sit on the center paste line without overhanging' }
},

/* ---------------------------------------------------------------- AS-L-07 */
{
  id: 'as-l-07', code: 'AS-L-07', ver: '1.0', issued: '2026.06',
  name: 'シャインマスカット', en: 'Shine Muscat',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'uwg8lxcTATA',
  status: { tone: 'start', label: '9月〜', detail: '秋の新商品（お知らせでは「マスカット」）' },
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['キウイソース（内側10g＋仕上げ15g）', 'Kiwi sauce (10g inside + 15g finish)', '25', 'g'],
    ['リス（ホイップ）', 'Ris whipped cream', '80', 'g'],
    ['シャインマスカット（横半分カット／10切れ）', 'Shine Muscat (halved crosswise / 10 pieces)', '5', '粒']
  ],
  steps: [
    { jp: 'シャインマスカット（5粒）を横半分に切り、10切れにする。',
      en: 'Cut Shine Muscat (5 grapes) in half crosswise to make 10 pieces.',
      point: { jp: '真横に切る。縦に切ると断面が丸くならず並べたときに揃わない。', en: 'Cut crosswise; lengthwise cuts lose the round face and will not line up.' } },
    { jp: '揚げパンの内側にキウイソース（10g）をかけ、マスカット1切れを入れる。',
      en: 'Put kiwi sauce (10g) inside the fried bread and insert 1 muscat piece.',
      point: { jp: 'ソースは内側の底に落とす。パンの外に垂らさない。', en: 'Drop the sauce onto the inside bottom; do not let it run outside the bread.' } },
    { jp: 'リス（80g）を詰め、表面を平らにならす。',
      en: 'Fill with Ris whipped cream (80g) and level the surface.',
      point: { jp: '中のマスカットが隠れるまで詰める。表面が凸凹だと上のマスカットが傾く。', en: 'Fill until the inner piece is hidden; an uneven surface tilts the muscat on top.' } },
    { jp: '残りのマスカット9切れを、左2・中央5・右2で並べる。',
      en: 'Arrange the remaining 9 muscat pieces: 2 left, 5 center, 2 right.',
      point: { jp: '断面を上に向ける。中央の5切れは縦一直線にそろえる。', en: 'Cut side up; keep the center 5 in a straight vertical line.' } },
    { jp: 'キウイソース（15g）をかけて完成。',
      en: 'Finish with kiwi sauce (15g).',
      point: { jp: 'マスカットの上から細くかける。かけすぎると緑が濁って粒が見えなくなる。', en: 'Drizzle thinly over the top; too much muddies the green and hides the fruit.' } }
  ],
  finish: { jp: 'マスカット9切れが左2・中央5・右2に並び、断面が上を向いてツヤが出ている',
            en: '9 muscat halves arranged 2-5-2, cut side up and glossy' },
},

/* ---------------------------------------------------------------- AS-L-08 */
{
  id: 'as-l-08', code: 'AS-L-08', ver: '1.0', issued: '2026.06',
  name: 'いちじく', en: 'Fig',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  video: '4I8EPbL_Kys',
  status: { tone: 'start', label: '9月〜', detail: '秋の新商品' },
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['ラズベリーソース（内側10g＋仕上げ15g）', 'Raspberry sauce (10g inside + 15g finish)', '25', 'g'],
    ['リス（ホイップ）', 'Ris whipped cream', '80', 'g'],
    ['いちじく（1/2個／4等分くし切り）', 'Fig (1/2 fruit / cut into 4 wedges)', '4', '切れ'],
    ['ブルーベリー', 'Blueberry', '6', '粒']
  ],
  steps: [
    { jp: 'いちじく1/2個を、4等分のくし切りにする。',
      en: 'Cut half a fig into 4 wedges.',
      point: { jp: '皮つきのまま縦に切る。断面の赤い部分が見える向きに切る。', en: 'Cut lengthwise with the skin on so the red flesh shows on the cut face.' } },
    { jp: '揚げパンの内側にラズベリーソース（10g）をかけ、リス（80g）を詰める。',
      en: 'Put raspberry sauce (10g) inside the fried bread, then fill with Ris whipped cream (80g).',
      point: { jp: 'ソースは内側の底に落とす。パンの外に垂らさない。', en: 'Drop the sauce onto the inside bottom; do not let it run outside the bread.' } },
    { jp: 'いちじく4切れを、断面を上に向けて斜めに並べる。',
      en: 'Arrange the 4 fig wedges diagonally with the cut face up.',
      point: { jp: '少しずつ重ねてずらす。間隔を空けすぎるとクリームが見えすぎる。', en: 'Overlap them slightly; too much gap leaves the cream over- exposed.' } },
    { jp: 'ブルーベリー（6粒）を隙間に散らす。',
      en: 'Scatter 6 blueberries into the gaps.',
      point: { jp: 'いちじくの間の白い部分に置く。片側に偏らせない。', en: 'Place them on the white cream between the figs; do not group them on one side.' } },
    { jp: 'ラズベリーソース（15g）をかけて完成。',
      en: 'Finish with raspberry sauce (15g).',
      point: { jp: 'いちじくの上から線状にかける。全面を覆わず白いクリームを残す。', en: 'Drizzle in lines over the figs; leave some white cream showing.' } }
  ],
  finish: { jp: 'いちじく4切れが斜めに並び、ブルーベリー6粒と赤いソースが見えている',
            en: '4 fig wedges arranged diagonally; 6 blueberries and red sauce visible' }
},

/* ------------------------------------------------------------------ AS-08 */
{
  id: 'as-08-hokkaido', code: 'AS-08', ver: '2.0', issued: '2026.08',
  name: '北海道あんバター', en: 'Hokkaido Anko & Butter',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  status: { tone: 'start', label: '9月〜',      detail: '秋の新商品。ビジュアルを変更し、材料も北海道餡に変更' },
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['北海道あんこ', 'Hokkaido red bean paste', '50', 'g'],
    ['バター（1/2カット）', 'Butter (half-cut pieces)', '3', '個'],
    ['塩', 'Salt', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにホイップ（80g）を詰め、表面を平らにならす。',
      en: 'Fill the fried bread with whipped cream (80g) and level the surface.',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: '北海道あんこ（50g）を平らに広げて乗せる。',
      en: 'Spread Hokkaido red bean paste (50g) flat on top.',
      point: { jp: '縁に白いホイップが見える幅を必ず残す。全面を覆わない。', en: 'Always leave white cream showing around the edge; do not cover the whole surface.' } },
    { jp: '1/2カットのバター3個を、菱形の向きで縦一列に並べる。',
      en: 'Set 3 half-cut butter pieces in a vertical line, turned diamond-wise.',
      point: { jp: '必ずあんこの上に置く。ホイップの上に直接置くと、炙った時にクリームが溶ける。', en: 'Always place on the bean paste — butter set on cream will melt the cream when torched.' } },
    { jp: 'バター部分だけをバーナーで炙り、少し溶かす。',
      en: 'Torch only the butter until it just starts to melt.',
      point: { jp: '遠火で角が丸くなる程度まで。溶かし切らない。', en: 'Torch from a distance until the corners round off; do not melt it fully.' } },
    { jp: '塩（0.2g）を全体にふりかけて完成。',
      en: 'Sprinkle salt (0.2g) over the whole surface to finish.',
      point: { jp: '全体に薄く散らす。1か所に固めない。', en: 'Scatter thinly over the whole piece; do not concentrate it in one spot.' } }
  ],
  finish: { jp: 'あんこの縁に白いホイップが見え、菱形のバター3個が縦に並んで表面が少し溶けている',
            en: 'White cream visible around the bean paste; 3 diamond-set butter pieces in a line, lightly melted' },
},

/* ------------------------------------------------------------------- 旧版 */
{
  id: 'ice', code: 'AS-02', ver: '1.0', issued: '2026.05',
  name: 'アイスクリームブリュレ', en: 'Vanilla Ice Brûlée',
  serve: 'SWEETS 提供 / SERVE', category: null, limited: false,
  video: 'LRvSJbXvQs0',
  videoNote: 'プレイリストの動画名は「Ice Cream Brûlée / アイスクリームブリュレ」。この品の名前（アイスブリュレ）と完全には一致していない。違っていたら差し替える。',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['カスタードホイップ', 'Custard whipped cream', '60', 'g'],
    ['クリミビット', 'Kurimibit', '30', 'g'],
    ['バニラアイス', 'Vanilla ice cream', '45', 'g'],
    ['キャラメルソース', 'Caramel sauce', '10', 'g'],
    ['カラメルクランチ', 'Caramel crunch', '1', 'g']
  ],
  steps: [
    { jp: '揚げたパンにカスタードホイップを詰め、その上にクリミビットを塗る。',
      en: 'Put custard whipped cream inside the fried bread, then spread Kurimibit on top.',
      point: null },
    { jp: '表面にグラニュー糖をまぶし、バーナーの火であぶって、砂糖を溶かして焦げ目をつける。',
      en: 'Coat the surface with granulated sugar, then heat with a burner to melt the sugar and make it golden.',
      point: { jp: '全体がきつね色になるまで、バーナーであぶる。', en: 'Heat with a burner until golden all over.' } },
    { jp: 'バニラアイス（45g）を上に乗せる。',
      en: 'Top with vanilla ice cream (45g).',
      point: { jp: 'アイスは手早く乗せる。時間をかけると溶けて形が崩れる。', en: 'Place quickly — ice cream melts and loses shape if you\'re slow.' } },
    { jp: 'キャラメルソースとカラメルクランチをかけて完成。',
      en: 'Drizzle caramel sauce and caramel crunch to finish.',
      point: { jp: 'キャラメルソースとクランチはアイスの上だけにかける。', en: 'Put caramel sauce and crunch ONLY on top of the ice cream.' } }
  ],
  finish: { jp: '表面はパリッと、アイスは形を保つ',
            en: 'Crisp surface, ice cream holding its shape' },
},

/* ------------------------------------------- アイス揚げサンド（旧フォーマット） */
{
  id: 'ice-choco-banana', code: 'AS-06', ver: '1.0', issued: '2026.05',
  name: 'チョコバナナ', en: 'Ice Fried Sandwich — Chocolate Banana',
  serve: 'SWEETS 提供 / SERVE', category: null, series: 'アイス揚げサンド', limited: false,
  video: 'Wj5VU-r3Uys',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['チョコホイップ', 'Chocolate whipped cream', '25', 'g'],
    ['チョコアイス（2個）', 'Chocolate ice cream (2 scoops)', '90', 'g'],
    ['バナナ（輪切り 5〜7mm）', 'Banana, sliced 5–7mm', '2', '枚'],
    ['チョコソース', 'Chocolate sauce', '15', 'g'],
    ['カラースプレー', 'Color sprinkles', '1', 'g']
  ],
  steps: [
    { jp: '揚げパンにチョコホイップ（25g）を入れ、側面全体に塗る。',
      en: 'Put chocolate whipped cream (25g) inside the bread and spread it over the sides.',
      point: { jp: 'ホイップは入れすぎない。多いとアイスがのらない。', en: 'Don\'t overfill with cream — too much leaves no room for ice cream.' } },
    { jp: 'チョコアイスを2個（各約45g）乗せる。',
      en: 'Place 2 scoops of chocolate ice cream (about 45g each).',
      point: { jp: 'アイスは溶けすぎないうちに手早く乗せる。', en: 'Place quickly before the ice cream melts too much.' } },
    { jp: 'バナナの輪切り2枚を、2つのアイスの間に立てて挿す。',
      en: 'Stand 2 banana slices upright between the two scoops.',
      point: { jp: 'バナナの厚さは5〜7mm。薄いと崩れ、厚いと挿さらない。', en: 'Slice banana 5–7mm thick — too thin breaks, too thick won\'t stand.' } },
    { jp: 'チョコソース（15g）を全体にかける。',
      en: 'Drizzle chocolate sauce (15g) over the whole top.',
      point: null },
    { jp: 'カラースプレーをかけて完成。',
      en: 'Sprinkle color sprinkles to finish.',
      point: { jp: 'カラースプレーは中央に少量。バナナが隠れない程度に。', en: 'Add a small amount in the center — don\'t bury the' } }
  ],
  finish: { jp: 'アイスが溶けていない／バナナが見える',
            en: 'Ice cream not melted, banana visible' },
},

{
  id: 'ice-matcha-anko', code: 'AS-03', ver: '1.0', issued: '2026.05',
  name: '抹茶あんこ', en: 'Ice Fried Sandwich — Matcha Red Bean',
  serve: 'SWEETS 提供 / SERVE', category: null, series: 'アイス揚げサンド', limited: false,
  video: 'XRr4N72KUng',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['抹茶ホイップ', 'Matcha whipped cream', '25', 'g'],
    ['抹茶アイス（2個）', 'Matcha ice cream (2 scoops)', '90', 'g'],
    ['あんこ', 'Sweet red bean paste', '15', 'g'],
    ['抹茶パウダー', 'Matcha powder', '2', 'g'],
    ['黒蜜', 'Brown sugar syrup', '15', 'g'],
    ['きなこ', 'Roasted soybean flour', '5', 'g']
  ],
  steps: [
    { jp: '揚げパンに抹茶ホイップ（25g）を入れ、側面全体に塗る。',
      en: 'Put matcha whipped cream (25g) inside the bread and spread it over the sides.',
      point: { jp: 'ホイップは入れすぎない。多いとアイスがのらない。', en: 'Don\'t overfill with cream — too much leaves no room for ice cream.' } },
    { jp: '抹茶パウダーを全体にかける。',
      en: 'Sprinkle matcha powder over the whole surface.',
      point: null },
    { jp: '抹茶アイスを2個（各約45g）乗せる。',
      en: 'Place 2 scoops of matcha ice cream (about 45g each).',
      point: { jp: 'アイスは溶けすぎないうちに手早く乗せる。', en: 'Place quickly before the ice cream melts too much.' } },
    { jp: 'あんこ（15g）を垂れるように乗せる。',
      en: 'Add sweet red bean paste (15g), letting it drizzle slightly.',
      point: null },
    { jp: '黒蜜・きなこをかけて完成。',
      en: 'Drizzle brown sugar syrup and sprinkle soybean flour to finish.',
      point: { jp: 'きなこは全体にかけすぎない。緑色が見えるように残す。', en: 'Don\'t over-sprinkle the flour — keep the green color visible.' } }
  ],
  finish: { jp: 'アイスが溶けていない／緑色が見える',
            en: 'Ice cream not melted, green color visible' }
},

{
  id: 'ice-vanilla-strawberry', code: 'AS-04', ver: '1.1', issued: '2026.05',
  name: 'ジャムいちご', en: 'Ice Fried Sandwich — Strawberry',
  serve: 'SWEETS 提供 / SERVE', category: null, series: 'アイス揚げサンド', limited: false,
  video: 'Er1oZFpMRbw',
  videoNote: 'プレイリストの動画名は「Jam Strawberry Ice / アイスジャムいちご」。この品の名前（バニラいちご）と一致していない。アイス揚げサンド4品のうち他の3品が決まったため、残りとして当てている。違っていたら差し替える。',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '25', 'g'],
    ['バニラアイス（2個）', 'Vanilla ice cream (2 scoops)', '90', 'g'],
    ['冷凍いちご（半分カット・2切れ）', 'Frozen strawberry, halved', '1', '個'],
    ['いちごソース', 'Strawberry sauce', '15', 'g'],
    ['カラースプレー', 'Sprinkles', '1', 'g']
  ],
  steps: [
    { jp: '揚げパンにホイップ（25g）を入れ、側面全体に塗る。',
      en: 'Put whipped cream (25g) inside the bread and spread it over the sides.',
      point: { jp: 'ホイップは入れすぎない。多いとアイスがのらない。', en: 'Don\'t overfill with cream — too much leaves no room for ice cream.' } },
    { jp: 'バニラアイスを2個（各約45g）乗せる。',
      en: 'Place 2 scoops of vanilla ice cream (about 45g each).',
      point: { jp: 'アイスは溶けすぎないうちに手早く乗せる。', en: 'Place quickly before the ice cream melts too much.' } },
    { jp: '冷凍いちご1個を半分にカットし、2切れともアイスの上に並べる。',
      en: 'Cut 1 frozen strawberry in half and place both halves on top of the ice cream.',
      point: null },
    { jp: 'いちごソース（15g）を上から垂れるようにかける。',
      en: 'Drizzle strawberry sauce (15g) over the top.',
      point: { jp: 'ソースは全体を覆わない。果肉と赤色が見えるように残す。', en: 'Don\'t cover everything — keep the fruit and red color visible.' } },
    { jp: 'カラースプレーをかけて完成。',
      en: 'Sprinkle with sprinkles to finish.',
      point: null }
  ],
  finish: { jp: 'アイスが溶けていない／赤色が見える',
            en: 'Ice cream not melted, red color visible' },
},

{
  id: 'ice-choco-strawberry', code: 'AS-05', ver: '1.0', issued: '2026.05',
  name: 'チョコいちご', en: 'Ice Fried Sandwich — Chocolate Strawberry',
  serve: 'SWEETS 提供 / SERVE', category: null, series: 'アイス揚げサンド', limited: false,
  video: 'GFgLSeysUcc',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '25', 'g'],
    ['バニラアイス（2個）', 'Vanilla ice cream (2 scoops)', '90', 'g'],
    ['冷凍いちご（半分にカット）', 'Frozen strawberry, halved', '1', '個'],
    ['チョコソース', 'Chocolate sauce', '15', 'g'],
    ['カラースプレー', 'Color sprinkles', '1', 'g']
  ],
  steps: [
    { jp: '揚げパンにホイップ（25g）を入れ、側面全体に塗る。',
      en: 'Put whipped cream (25g) inside the bread and spread it over the sides.',
      point: { jp: 'ホイップは入れすぎない。多いとアイスがのらない。', en: 'Don\'t overfill with cream — too much leaves no room for ice cream.' } },
    { jp: 'バニラアイスを2個（各約45g）乗せる。',
      en: 'Place 2 scoops of vanilla ice cream (about 45g each).',
      point: { jp: 'アイスは溶けすぎないうちに手早く乗せる。', en: 'Place quickly before the ice cream melts too much.' } },
    { jp: '半分にカットした冷凍いちご2切れを、アイスの間に立てて挿す。',
      en: 'Stand 2 halved frozen strawberry pieces upright between the scoops.',
      point: { jp: 'カット面（赤い断面）を前に向ける。', en: 'Face the cut (red) side forward.' } },
    { jp: 'チョコソース（15g）を全体にかける。',
      en: 'Drizzle chocolate sauce (15g) over the whole top.',
      point: null },
    { jp: 'カラースプレーをかけて完成。',
      en: 'Sprinkle color sprinkles to finish.',
      point: { jp: 'カラースプレーは中央に少量。いちごが隠れない程度に。', en: 'Add a small amount in the center — don\'t bury the strawberry.' } }
  ],
  finish: { jp: 'アイスが溶けていない／いちごが見える',
            en: 'Ice cream not melted, strawberry visible' },
},



/* ------------------------------------------------ 追加分（写真は未登録） */
{
  id: 'ichigo-daifuku', code: null, ver: null, issued: null,
  name: 'いちご大福', en: 'Strawberry Difuku(mochi)',
  serve: null, category: null, limited: false,
  video: 'uYjwgyCQF1Q',
  yield: '1個分', kind: 'sweets', oldFormat: true, photo: false,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ホイップクリーム', 'Whipped cream', '70〜80', 'g'],
    ['求肥', 'Soft mochi (gyuhi)', '1', '枚'],
    ['いちご（スライス）', 'Strawberry slices', '3', '個'],
    ['あんこ（中に10g・トッピング15g）', 'Sweet red bean paste (filling 10g / topping 15g)', '25', 'g']
  ],
  steps: [
    { jp: '求肥の半分をパンの中に織り込んで入れ、半分はパンの外側に垂れた状態にする。',
      en: 'Fold half of the gyuhi (soft mochi) into the bread, leaving the remaining half draped over the outside.', point: null },
    { jp: 'あんこを詰める【約10g】',
      en: 'Fill with sweet red bean paste (anko), approximately 10g.', point: null },
    { jp: 'クリームを詰め、ぎゅうひ側にあんこ【約15g】を乗せ、中央に来るようにいちごを並べる。',
      en: 'Add whipped cream. Place additional anko (approximately 15g) on the gyuhi side, then arrange the strawberries in the center so they are evenly aligned.', point: null }
  ],
  finish: { jp: '求肥の半分がパンの外に垂れ、あんこの上にいちごが中央にまっすぐ並んでいる',
            en: 'Half the gyuhi hanging outside the bread; strawberries lined up straight down the center on the bean paste' },
},

{
  id: 'melon', code: null, ver: null, issued: null,
  name: 'メロン揚げサンド', en: 'Melon',
  serve: null, category: null, limited: false,
  yield: '1個分', kind: 'sweets', oldFormat: true, photo: false,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ホイップクリーム', 'Whipped cream', '70〜80', 'g'],
    ['メロン（幅1.5cm）', 'Melon slices (1.5 cm width)', '4', '切れ'],
    ['メロンソース', 'Melon sauce', '15', 'g']
  ],
  steps: [
    { jp: 'メロンを12等分カットする（幅1.5cm）',
      en: 'Cut the melon into 12 equal pieces (1.5 cm width).',
      point: { jp: 'メロンが小さい場合は等分カットを変えて対応', en: 'If the melon is small, adjust the number of cuts accordingly.' } },
    { jp: '揚げたパンの中にメロン1個とソースを入れる',
      en: 'Put one piece of melon and sauce inside the fried bread.', point: null },
    { jp: 'ホイップをつめてメロンを3個斜めに乗せる',
      en: 'Fill with whipped cream and place three melon pieces diagonally on top.', point: null },
    { jp: 'メロンソースをかけて完成',
      en: 'Drizzle melon sauce on top to finish.', point: null }
  ],
  finish: { jp: 'メロン3切れが斜めに向きをそろえて並び、メロンソースが全体にかかっている',
            en: 'Three melon slices set at the same angle, with melon sauce over the whole top' },
},

{
  id: 'melon-parfait', code: null, ver: null, issued: null,
  name: 'メロンパフェ', en: 'Melon Parfait',
  serve: null, category: null, limited: false,
  video: '23DwD5fM-_w',
  yield: '1個分', kind: 'sweets', oldFormat: true, photo: false,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ホイップクリーム', 'Whipped cream', '70〜80', 'g'],
    ['メロン（幅1.5cm）', 'Melon slices (1.5 cm width)', '4', '切れ'],
    ['メロンソース（緑）', 'Green melon sauce', '約20', 'g'],
    ['メロンソース（オレンジ）', 'Orange melon sauce', '約10', 'g'],
    ['さくらんぼ', 'Cherry', '1', '個'],
    ['パイシート（48カット）', 'Puff pastry sheet (cut into 48 pieces)', '1', '枚']
  ],
  steps: [
    { jp: 'メロンをくし形に8等分にカットし、さらにそれぞれを幅1.5cmにカットする',
      en: 'Cut the melon into 8 wedge-shaped pieces, then slice each piece into 1.5 cm widths.',
      point: { jp: 'メロンが小さい場合はカット数を調整する', en: 'If the melon is small, adjust the number of cuts accordingly.' } },
    { jp: '揚げたパンの中にメロン1切れを入れ、パンの内側にメロンソース（緑）をかける',
      en: 'Place one slice of melon inside the fried bread, then drizzle green melon sauce on the inside of the bread.', point: null },
    { jp: 'ホイップクリームを詰め、メロンを写真の図のように斜めに3切れ乗せる。メロンソース（緑）→（オレンジ）の順でかける',
      en: 'Fill with whipped cream, then place three melon slices diagonally on top as shown. Drizzle green melon sauce, then orange melon sauce on top.', point: null },
    { jp: 'パイシートを向かって左側に、奥側が高くなるよう斜めに挿し、メロンの1個目と2個目の間にさくらんぼを置く',
      en: 'Insert the puff pastry on the left side at an angle, with the back side higher, and place a cherry between the first and second melon slices.', point: null }
  ],
  finish: { jp: 'メロン3切れが斜めに並び、左のパイシートが奥に向かって立ち上がり、1切れ目と2切れ目の間にさくらんぼが乗っている',
            en: 'Three melon slices in a diagonal line; the pastry sheet rising toward the back on the left; a cherry between the first and second slices' },
},

{
  id: 'choco-brulee', code: null, ver: null, issued: null,
  name: 'チョコブリュレ', en: 'chocolate Brulee',
  serve: null, category: null, limited: false,
  video: 'ppqnfNudRgQ',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['チョコレートホイップ', 'Chocolate whipped cream', '50〜60', 'g'],
    ['クリミビット', 'Cremyvit', '約30', 'g'],
    ['砂糖', 'Sugar', '10', 'g'],
    ['ココアパウダー', 'Cocoa powder', '1', 'g']
  ],
  steps: [
    { jp: 'チョコレートホイップをパンのすり切れまで詰める',
      en: 'Fill the bread with chocolate whipped cream up to the very edge.',
      point: { jp: '上からクリームを塗るため、すり切れにしている', en: 'It is leveled off to allow the top cream to be spread smoothly.' } },
    { jp: 'その上にカスタードクリームを全体に塗る。クリームの面を砂糖につけ、バーナーで炙る',
      en: 'Spread custard cream evenly over the top. Dip the cream-covered surface into sugar and torch until caramelized.',
      point: { jp: 'バーナーで炙った際に下のホイップが溶け出すため、この時に下のクリームが見えないように塗る', en: 'When torching, the chocolate whipped cream underneath may melt, so make sure it is completely covered.' } },
    { jp: '炙った後、表面の約1/4にココアパウダーを振りかけて完成',
      en: 'After torching, lightly dust cocoa powder over about one-quarter of the bread surface to finish.', point: null }
  ],
  finish: { jp: '表面の砂糖が溶けて均一に焦げ目がつき、その約1/4にココアパウダーがかかっている',
            en: 'Sugar melted to an evenly browned surface, with cocoa powder over about a quarter of it' },
},

{
  id: 'choco-marshmallow', code: null, ver: null, issued: null,
  name: 'チョコマシュマロ', en: 'chocolate marshmallow',
  serve: null, category: null, limited: false,
  video: 'jo5I4HcVI_w',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['チョコレートクリーム', 'Chocolate cream', '70', 'g'],
    ['マシュマロ（半分にカットしたもの）', 'Marshmallows, halved', '3', '個分'],
    ['チョコレートソース', 'Chocolate sauce', '10〜15', 'g']
  ],
  steps: [
    { jp: 'チョコレートクリームを詰める',
      en: 'Fill the bread with chocolate cream.',
      point: { jp: '通常より盛りすぎず、表面がややフラットになるように調整する。', en: 'Do not overfill; keep the surface slightly flat rather than domed.' } },
    { jp: '半分に切ったマシュマロを3つ並べる',
      en: 'Arrange three halved marshmallows.',
      point: { jp: '1個目はそのまま置き、2個目・3個目は立てかけるように配置する。すべて断面を下にして置く。', en: 'Place the first flat, then lean the second and third slightly. Always place them cut-side down.' } },
    { jp: '霧吹きでマシュマロ全体を軽く濡らし、バーナーで遠火からあぶる。チョコレートソースをかけて完成',
      en: 'Lightly mist the marshmallows with water, then torch gently from a distance. Drizzle chocolate sauce to finish.',
      point: { jp: '焦げすぎないよう注意する。', en: 'Avoid burning; aim for a light, even toast.' } }
  ],
  finish: { jp: 'マシュマロ3つが等間隔に並んで表面に焼き目がつき、チョコレートソースが全体にかかっている',
            en: 'Three marshmallows evenly spaced with browned surfaces, chocolate sauce over the whole top' },
},

{
  id: 'sakura-matcha', code: null, ver: null, issued: null,
  name: 'SAKURA抹茶', en: 'SAKURA MATCHA',
  serve: null, category: null, limited: false,
  video: 'NxQi0Cju238',
  videoNote: 'プレイリストの動画名は「sakuramatcha / さくら抹茶」。',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['抹茶クリーム', 'Matcha cream', '90', 'g'],
    ['抹茶パウダー', 'Matcha powder', '約1', 'g'],
    ['チョコフレーク', 'Chocolate flakes', '約3', 'g'],
    ['サクラソース', 'Sakura sauce', '約5', 'g'],
    ['イチゴ', 'Strawberry', '1', '切れ']
  ],
  steps: [
    { jp: 'パンの内側にさくらソースをかけ、抹茶ホイップクリームを詰め、上半分にチョコフレークをふりかける',
      en: 'Drizzle sakura sauce on the inside of the bread, fill with matcha whipped cream, and sprinkle chocolate flakes over the top half.', point: null },
    { jp: '何もかかっていない下半分に抹茶パウダーをかける',
      en: 'Dust matcha powder over the lower half where no toppings are added.', point: null },
    { jp: '抹茶パウダーとチョコフレークの境目に、いちごを少し斜めにのせる（1個）。さくらソースをかけて完成。',
      en: 'Place one strawberry slightly angled at the border between the matcha powder and chocolate flakes. Drizzle sakura sauce to finish.',
      point: { jp: 'ソースはチョコフレークの部分のみにかけてください。', en: 'Drizzle the sauce only over the chocolate flake section.' } }
  ],
  finish: { jp: '上半分のチョコフレークと下半分の抹茶パウダーの境目が横一直線に見え、その境目にいちごが斜めに1切れ乗っている',
            en: 'A straight horizontal border between the chocolate flakes above and the matcha powder below, with one strawberry set at an angle on that border' },
},

{
  id: 'dubai-choco', code: null, ver: null, issued: null,
  name: 'ドバイチョコ', en: 'Dubai chocolate',
  serve: null, category: null, limited: false,
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['チョコクリーム', 'Chocolate cream', '約45', 'g'],
    ['カダイフミックス', 'Kataifi-pistachio mix', '約35', 'g'],
    ['ヌテラ', 'Nutella', '約30', 'g'],
    ['ピスタチオペースト', 'Pistachio paste', '約3', 'g'],
    ['いちごソース', 'Strawberry sauce', '約5', 'g'],
    ['ピスタチオクランチ', 'Pistachio crunch', '約2', 'g']
  ],
  sub: {
    title: 'カダイフミックス配合レシピ',
    ing: [
      ['揚げてクラッシュしたカダイフ', 'Deep-fried and crushed kataifi pastry', '350', 'g'],
      ['ピスタチオペースト', 'Pistachio paste', '140', 'g'],
      ['グラニュー糖', 'Granulated sugar', '35', 'g']
    ],
    note: 'カダイフは揚げると油をすってg数が増えるため、乾燥カダイフは280gで揚げる。280g→350gに変わる。'
  },
  steps: [
    { jp: 'カダイフを揚げ、細かくクラッシュする。そこにピスタチオペーストと砂糖を分量分加えて混ぜ合わせる',
      en: 'Deep-fry the kataifi pastry and crush it finely. Add the measured amount of pistachio paste and sugar, then mix well.', point: null },
    { jp: 'パンにチョコクリーム45gを詰め、その上に①のカダイフミックスを約35g詰める',
      en: 'Fill the bread with 45 g of chocolate cream, then add about 35 g of the kataifi-pistachio mixture on top.', point: null },
    { jp: 'その上からヌテラ約30gを塗り、さらにピスタチオペーストといちごソースをかける。最後にピスタチオクランチを縦に振りかけて完成',
      en: 'Spread about 30 g of Nutella on top, then drizzle pistachio paste and strawberry sauce. Finish by sprinkling pistachio crunch vertically over the top.', point: null }
  ],
  finish: { jp: 'カダイフミックスの上にヌテラが均一に塗られ、ピスタチオクランチが縦一列に振りかかっている',
            en: 'Nutella spread evenly over the kataifi mixture, with pistachio crunch scattered in a vertical line' },
}
,

/* ---------------------------------------------------------------- 抹茶ブリュレ */
{
  id: 'matcha-brulee', code: null, ver: null, issued: null,
  name: '抹茶ブリュレ', en: 'MATCHA Brulee',
  serve: null, category: null, limited: false,
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['抹茶クリーム', 'Matcha whipped cream', '60', 'g'],
    ['クリミビット', 'Cremyvit', '30', 'g'],
    ['砂糖', 'Sugar', '10', 'g'],
    ['抹茶パウダー', 'Matcha powder', '1.5', 'g']
  ],
  sub: {
    title: '抹茶カスタードクリーム 配合レシピ',
    ing: [
      ['カスタードパウダー', 'Custard powder', '350', 'g'],
      ['抹茶パウダー', 'Matcha powder', '30', 'g'],
      ['水', 'Water', '1', 'ℓ']
    ],
    note: null
  },
  steps: [
    { jp: '抹茶ホイップをパンの表面ギリギリまでつめる',
      en: 'Fill the bread with matcha whipped cream up to the very edge.', point: null },
    { jp: '抹茶カスタードクリームをホイップが見えなくなるまで塗る',
      en: 'Cover the whipped cream completely by spreading matcha custard cream over it.', point: null },
    { jp: 'グラニュー糖をまぶし、バーナーで焼き色が出るまで炙る',
      en: 'Sprinkle with granulated sugar and torch until golden brown.', point: null }
  ],
  finish: { jp: '表面のグラニュー糖が溶けて均一に焼き色がつき、縁に抹茶の緑が見えている',
            en: 'Granulated sugar melted to an even golden-brown surface, with the green matcha visible around the edge' },
},

/* ---------------------------------------------------------------- ローストビーフ */
{
  id: 'roast-beef', code: null, ver: null, issued: null,
  name: 'ローストビーフ', en: 'roast beef',
  serve: null, category: null, limited: false,
  yield: '1個分', kind: 'savory', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ローストビーフ（60g）', 'Roast beef (60 g)', '5', '枚'],
    ['ポテトサラダ', 'Potato salad', '80', 'g'],
    ['サニーレタス', 'Green leaf lettuce', '1', '枚'],
    ['きみプチ', 'Kimi-Puchi (egg yolk sphere)', '1', '個'],
    ['ステーキソース', 'Steak sauce', '15', 'g'],
    ['ホワイトソース', 'White sauce', '10', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g'],
    ['ブラックペッパー', 'Black pepper', '0.2', 'g'],
    ['ラディッシュパウダー', 'Radish powder', '1', 'g']
  ],
  steps: [
    { jp: 'パンの内側にステーキソースをかけ、レタスを横に入れてポテトサラダを詰める',
      en: 'Pour steak sauce on the inside of the bread, place lettuce sideways, and fill with potato salad.',
      point: { jp: '中央が山になるように盛る。', en: 'Shape the potato salad into a mound in the center.' } },
    { jp: 'その上からステーキソースをかけ、1枚目のローストビーフを丸く盛り付ける',
      en: 'Drizzle more steak sauce on top, then place the first slice of roast beef in a circular shape.',
      point: { jp: 'バラの形を意識する。', en: 'Aim for a rose shape.' } },
    { jp: '残りのローストビーフを半分に折り、バラ状に巻き付けていく（合計5枚使用）',
      en: 'Fold the remaining slices in half and wrap them around the first slice to form a rose shape (5 slices in total).', point: null },
    { jp: 'すべて巻き終えたらバーガー袋に入れ、ステーキソースを追加し、中心から右側にホワイトソースを立てるようにかける',
      en: 'Once all slices are wrapped, place the sandwich into a burger bag, add more steak sauce, and pour white sauce from the center toward the right side to create height.', point: null },
    { jp: '中心に「きみプチ」をのせ、パセリと黒胡椒をかけて完成',
      en: 'Place one "Kimi-Puchi" (egg yolk sphere) in the center and finish with parsley and black pepper.',
      point: { jp: 'いくら追加の場合は、スプーン1杯（約15g）を目安にのせる。', en: 'For customers adding salmon roe, use one spoonful (approx. 15 g) as a guideline.' } }
  ],
  finish: { jp: 'ローストビーフがバラの形に巻かれ、その中心にきみプチがのっている',
            en: 'The roast beef wrapped into a rose shape with the Kimi-Puchi set in the center' },
},

/* ---------------------------------------------------------------- はみ出るうなたま */
{
  id: 'unatama', code: null, ver: null, issued: null,
  name: 'はみ出るうなたま', en: 'Unagi & Tamago',
  serve: null, category: null, limited: false,
  yield: '1個分', kind: 'savory', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['鰻（1/8カット）', 'Unagi, 1/8 cut', '2', '切'],
    ['卵焼き', 'Japanese omelet (tamagoyaki)', '1', '個'],
    ['焼きおにぎり', 'Grilled rice ball', '1', '個'],
    ['蒲焼のタレ', 'Unagi sauce', '10', 'g']
  ],
  steps: [
    { jp: '卵焼きを16等分（約1cm）の幅でカットしておく',
      en: 'Cut the Japanese omelet (tamagoyaki) into 16 pieces, each about 1 cm wide.', point: null },
    { jp: 'パンの内側に鰻のタレをかける。冷凍の焼きおにぎりを電子レンジで温め、崩しながらパンにいれる',
      en: 'Drizzle unagi sauce on the inner side of the bread. Microwave the frozen grilled rice ball and break it apart while placing it on the bread.',
      point: { jp: 'おにぎりは、営業中は保温庫に保管しておく。', en: 'Keep the rice balls warm in a warmer during service.' } },
    { jp: 'ご飯部分にタレを少し（5g）かけ、カットした卵を1枚乗せる（常温でOK）、うなぎを2枚乗せる',
      en: 'Drizzle a small amount (5 g) of unagi sauce over the rice. Place one slice of the cut omelet (room temperature is fine), then add two slices of unagi.',
      point: { jp: 'うなぎは1/8カット。', en: 'Each unagi piece is a 1/8 cut.' } },
    { jp: 'うなぎをバーナーで少し焼き目がつくまで炙り、タレをかけて完成',
      en: 'Lightly sear the unagi with a kitchen torch until a slight char appears, then drizzle more unagi sauce to finish.', point: null }
  ],
  finish: { jp: 'うなぎ2枚に焼き目がつき、卵焼きとうなぎがパンから縦にはみ出している',
            en: 'Two seared unagi slices with light char, the omelet and unagi extending vertically beyond the bread' },
},

/* ---------------------------------------------------------------- AS-01 */
{
  id: 'as-01', code: 'AS-01', ver: '1.0', issued: '2026.05',
  name: 'ホイップ', en: 'Whipped Cream',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: '5KbSGnsnXVw',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '60', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約60g）を詰めて、表面を綺麗にならす。',
      en: 'Fill the bread with cream (about 60g) and smooth out the surface evenly.',
      point: { jp: 'パンの外側（側面）にクリームがつかないようにする。', en: 'Keep cream off the outer sides of the bread.' } }
  ],
  finish: { jp: '側面が汚れず、断面が真っ白',
            en: 'Sides clean, cross-section pure white' }
},
/* ---------------------------------------------------------------- AS-02 */
{
  id: 'as-02', code: 'AS-02', ver: '1.0', issued: '2026.05',
  name: 'ジャムいちご', en: 'Jam Strawberry',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'Ns69FoVChcE',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['いちご（ハート型カット）', 'Strawberry, heart-cut', '3〜4', '枚'],
    ['いちごジャム', 'Strawberry jam', '15', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'いちごをハート型にカットし、3〜4枚を等間隔に縦に並べる。',
      en: 'Cut strawberries into heart shapes and arrange 3–4 vertically, evenly spaced.',
      point: { jp: 'ハートの向きと間隔をそろえる。断面が正面を向くように置く。', en: 'Align the heart shapes and spacing; face the cut sides forward.' } },
    { jp: 'いちごジャム（15g）をかけて完成。',
      en: 'Top with strawberry jam (15g) to finish.',
      point: { jp: 'いちごの上を中心に置く。赤が見えるように残す。', en: 'Place mainly over the strawberries; keep the red visible.' } }
  ],
  finish: { jp: 'いちごが等間隔に見え、ソースが全体にかかっている',
            en: 'Strawberries evenly spaced, sauce covering the whole top' }
},
/* ---------------------------------------------------------------- AS-03 */
{
  id: 'as-03', code: 'AS-03', ver: '1.0', issued: '2026.05',
  name: 'チョコいちご', en: 'Chocolate Strawberry',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'UeysOhYzCTQ',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['いちご（ハート型カット）', 'Strawberry, heart-cut', '3〜4', '枚'],
    ['チョコソース', 'Chocolate sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'いちごをハート型にカットし、3〜4枚を等間隔に縦に並べる。',
      en: 'Cut strawberries into heart shapes and arrange 3–4 vertically, evenly spaced.',
      point: { jp: 'ハートの向きと間隔をそろえる。断面が正面を向くように置く。', en: 'Align the heart shapes and spacing; face the cut sides forward.' } },
    { jp: 'チョコソース（15g）をかけて完成。',
      en: 'Drizzle with chocolate sauce (15g) to finish.',
      point: { jp: '全体に細く線状にかける。いちごの赤が見えるように残す。', en: 'Drizzle in thin lines; keep the red of the strawberries visible.' } }
  ],
  finish: { jp: 'いちごが等間隔に見え、チョコが全体にかかっている',
            en: 'Strawberries evenly spaced, chocolate covering the whole top' }
},
/* ---------------------------------------------------------------- AS-04 */
{
  id: 'as-04', code: 'AS-04', ver: '1.0', issued: '2026.05',
  name: 'チョコバナナ', en: 'Chocolate Banana',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'iJve4PPseTQ',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['バナナ（輪切り1cm幅）', 'Banana, sliced 1cm thick', '3', '枚'],
    ['チョコソース', 'Chocolate sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'バナナを1cm幅の輪切りにし、3枚を等間隔に縦に並べる。',
      en: 'Slice the banana into 1cm-thick rounds and arrange three vertically, evenly spaced.',
      point: { jp: '間隔をそろえる。切り口が正面を向くように置く。', en: 'Keep the spacing even; face the cut sides forward.' } },
    { jp: 'チョコソース（15g）をかけて完成。',
      en: 'Drizzle with chocolate sauce (15g) to finish.',
      point: { jp: '全体に細く線状にかける。バナナの黄が見えるように残す。', en: 'Drizzle in thin lines; keep the yellow of the banana visible.' } }
  ],
  finish: { jp: 'バナナが等間隔に見え、チョコが全体にかかっている',
            en: 'Banana evenly spaced, chocolate covering the whole top' }
},
/* ---------------------------------------------------------------- AS-05 */
{
  id: 'as-05', code: 'AS-05', ver: '1.0', issued: '2026.06',
  name: '生みかん', en: 'Mandarin Orange',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'dzZBsbHGFe8',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['みかん（シロップ漬・房）', 'Mandarin segments (in syrup)', '7', '房'],
    ['みかんソース', 'Mandarin sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'みかん（7房）を等間隔に縦に並べる。',
      en: 'Arrange 7 mandarin segments vertically, evenly spaced.',
      point: { jp: '向きと間隔をそろえる。断面が正面を向くように置く。水気を切ってから乗せる。', en: 'Align the direction and spacing; face the cut sides forward. Drain well before placing.' } },
    { jp: 'みかんソース（15g）をかけて完成。',
      en: 'Drizzle with mandarin sauce (15g) to finish.',
      point: { jp: '全体に細く線状にかける。みかんのオレンジが見えるように残す。', en: 'Drizzle in thin lines; keep the orange of the mandarin visible.' } }
  ],
  finish: { jp: 'みかんが等間隔に見え、ソースが全体にかかっている',
            en: 'Mandarin evenly spaced, sauce covering the whole top' }
},
/* ---------------------------------------------------------------- AS-06 */
{
  id: 'as-06', code: 'AS-06', ver: '1.0', issued: '2026.05',
  name: 'ブルーベリー', en: 'Blueberry',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'JM-6D4z8yHY',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['ブルーベリー', 'Blueberry', '15', 'g'],
    ['ブルーベリーソース', 'Blueberry sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'ブルーベリーを約15g、中央に寄せて乗せる。',
      en: 'Place about 15g of blueberries, gathered in the center.',
      point: { jp: '乗せる前にブルーベリーにソースを少し混ぜ、まとわせておく。', en: 'Before placing, toss the blueberries with a little sauce to coat them.' } },
    { jp: 'ブルーベリーソース（15g）をかけて完成。',
      en: 'Drizzle with blueberry sauce (15g) to finish.',
      point: { jp: '全体に行き渡らせる。粒が見えるように残す。', en: 'Spread over the whole top; keep the berries visible.' } }
  ],
  finish: { jp: 'ブルーベリーが中央にまとまり、ソースが全体にかかっている',
            en: 'Blueberries gathered in the center, sauce covering the whole top' }
},
/* ---------------------------------------------------------------- AS-07 */
{
  id: 'as-07', code: 'AS-07', ver: '1.0', issued: '2026.05',
  name: 'マンゴー', en: 'Mango',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'RHfPDzh966o',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['冷凍マンゴー（カット済 1.5cm角）※海外はフレッシュ可', 'Frozen cut mango, 1.5cm/ fresh OK overseas', '3', '個'],
    ['マンゴーソース', 'Mango sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: '半解凍のマンゴーを3個、等間隔に縦に並べる。',
      en: 'Arrange three half-thawed mango cubes vertically, evenly spaced.',
      point: { jp: '解凍しすぎない（ドロドロになる）。半解凍をキープ。乗せる前にソースをまとわせる。', en: 'Do not over-thaw (turns mushy); keep it half-thawed. Toss with a little sauce before placing.' } },
    { jp: 'マンゴーソース（15g）をかけて完成。',
      en: 'Drizzle with mango sauce (15g) to finish.',
      point: { jp: '全体に行き渡らせる。マンゴーが見えるように残す。', en: 'Spread over the whole top; keep the mango visible.' } }
  ],
  finish: { jp: 'マンゴーが等間隔に見え、ソースが全体にかかっている',
            en: 'Mango evenly spaced, sauce covering the whole top' }
},
/* ---------------------------------------------------------------- AS-08 */
{
  id: 'as-08', code: 'AS-08', ver: '1.0', issued: '2026.05',
  name: 'あんバター', en: 'Red Bean & Butter',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'SFNCoAqnx-c',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['あんこ', 'Red bean paste', '25', 'g'],
    ['バター（スライス）', 'Butter, sliced', '1', '枚/10g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'あんこ（25g）を絞り袋で中央に絞り、自然な形に整える。',
      en: 'Pipe red bean paste (25g) into the center, then shape it naturally.',
      point: { jp: '絞ったあと表面を軽くならし、絞り目を残さず自然な形に。', en: 'After piping, lightly smooth the surface so no piping lines remain.' } },
    { jp: 'バター（スライス1枚 10g）をあんの右側のクリームに挿して完成。',
      en: 'Insert one butter slice (10g) into the cream on the right side of the bean paste to finish.',
      point: { jp: 'バターが半分見えるくらいの位置までクリームに挿す。', en: 'Insert into the cream until about half of the butter remains visible.' } }
  ],
  finish: { jp: 'あんが自然な形で中央にあり、バターが右側に挿さっている',
            en: 'Bean paste sits naturally in the center, butter inserted on the right side' }
},
/* ---------------------------------------------------------------- AS-09 */
{
  id: 'as-09', code: 'AS-09', ver: '1.0', issued: '2026.05',
  name: 'キャラメルビスケット', en: 'Caramel Biscuit',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'D3qcH5gK0Mo',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['キャラメルクランチ', 'Caramel crunch', '5', 'g'],
    ['キャラメルソース', 'Caramel sauce', '15', 'g'],
    ['ロータスビスケット', 'Lotus biscuit', '1', '枚']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: '容器にキャラメルクランチ（5g）を入れ、クリーム面を押し当ててまぶす。',
      en: 'Put caramel crunch (5g) in a container; press the cream side onto it to coat.',
      point: { jp: 'クリーム面全体に均一につける。押しつけすぎない。', en: 'Coat the whole cream surface evenly; do not press too hard.' } },
    { jp: 'キャラメルソース（15g）をかける。',
      en: 'Drizzle caramel sauce (15g) on top.',
      point: { jp: '全体にかける。クランチが見える程度に残す。', en: 'Drizzle over the whole top; keep some crunch visible.' } },
    { jp: 'ロータスビスケットを半分に折り、V字に挿して完成。',
      en: 'Snap the Lotus biscuit in half and insert it in a V shape to finish.',
      point: { jp: 'クリームに挿して立てる。倒れない深さまで。', en: 'Insert into the cream to stand; deep enough not to fall.' } }
  ],
  finish: { jp: 'クリーム面にクランチが均一につき、ビスケットがV字に立っている',
            en: 'Crunch evenly coats the cream, biscuit standing in a V shape' }
},
/* ---------------------------------------------------------------- AS-10 */
{
  id: 'as-10', code: 'AS-10', ver: '1.1', issued: '2026.08',
  name: 'モンブラン', en: 'Mont Blanc',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'U-IJwKHStu8',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['モンブランクリーム', 'Mont Blanc cream', '20', 'g'],
    ['栗', 'Chestnut', '1', '個']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'モンブランクリーム（20g）を円を描くように絞る。',
      en: 'Pipe the Mont Blanc cream (20g) in a circular motion.',
      point: { jp: '白い部分が見えないように覆う。線が1本1本しっかり形に残るように絞る。', en: 'Cover so no white shows. Pipe so each strand keeps its distinct shape.' } },
    { jp: '栗を真ん中に乗せて完成。',
      en: 'Place a chestnut in the center to finish.',
      point: null }
  ],
  finish: { jp: '白い部分が見えず、クリームの線が形を保ち、栗が中央にある',
            en: 'No white showing, piped strands hold their shape, chestnut centered' }
},
/* ---------------------------------------------------------------- AS-11 */
{
  id: 'as-11', code: 'AS-11', ver: '1.0', issued: '2026.06',
  name: 'クレームブリュレ', en: 'Crème Brûlée',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'o5Zo9rgEcbk',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['カスタードホイップ', 'Custard whipped cream', '60', 'g'],
    ['クリミビット', 'Kurimibit', '30', 'g'],
    ['グラニュー糖（表面用）', 'Granulated sugar (for surface)', '5', 'g']
  ],
  steps: [
    { jp: '揚げたパンにカスタードホイップを詰める。',
      en: 'Put custard whipped cream inside the fried bread.',
      point: null },
    { jp: 'その上にクリミビットを塗る。',
      en: 'Spread Kurimibit on top.',
      point: { jp: 'クリミビット30gをムラなく覆う（薄い部分を作らない）。薄いと下のクリームに熱が伝わって溶け出す。', en: 'Cover evenly with 30g of Kurimibit — no thin spots. Thin areas let heat reach the cream below and melt it.' } },
    { jp: '表面にグラニュー糖をまぶし、バーナーであぶって焦げ目をつけて完成。',
      en: 'Coat the surface with granulated sugar, then heat with a burner to make it golden to finish.',
      point: { jp: '全体がきつね色になるまで、バーナーであぶる。', en: 'Heat with a burner until golden all over.' } }
  ],
  finish: { jp: '表面はパリッと全体がきつね色／クリミビットが全面を覆い下のクリームが透',
            en: 'Crisp golden surface; Kurimibit covers fully, cream not showing through' }
},
/* ---------------------------------------------------------------- AS-12 */
{
  id: 'as-12', code: 'AS-12', ver: '1.0', issued: '2026.06',
  name: '大学芋', en: 'Candied Sweet Potato',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: '3XJWZkX2J1k',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['芋クリーム', 'Sweet potato cream', '10', 'g'],
    ['大学芋（ピース）', 'Candied sweet potato pieces', '7', '個']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: '芋クリーム（10g）をクリームの中央に1本線を引くようにかける。',
      en: 'Pipe the sweet potato cream (10g) in a single line down the center of the cream.',
      point: null },
    { jp: '大学芋を下に6個・上に1個乗せるように盛り付けて完成。',
      en: 'Arrange the candied sweet potato — 6 on the bottom, 1 on top — to finish.',
      point: null }
  ],
  finish: { jp: '中央に芋クリームの線が見え、大学芋が下6個・上1個に盛られている',
            en: 'Center cream line visible; 6 pieces below and 1 on top' }
},
/* ---------------------------------------------------------------- AS-13 */
{
  id: 'as-13', code: 'AS-13', ver: '1.0', issued: '2026.06',
  name: '黒蜜きなこ', en: 'Kuromitsu Kinako',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'NqhisK4REjc',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['きなこ', 'Kinako (roasted soybean flour)', '5', 'g'],
    ['黒蜜', 'Kuromitsu (brown sugar syrup)', '15', 'g']
  ],
  steps: [
    { jp: 'パンにクリーム（約80g）を詰める。',
      en: 'Fill the bread with cream (about 80g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'クリームの上に黒蜜（15g）をかける。',
      en: 'Drizzle kuromitsu (15g) over the cream.',
      point: null },
    { jp: 'その上にきなこ（5g）をかけて完成。',
      en: 'Dust kinako (5g) on top to finish.',
      point: { jp: '必ず黒蜜が先、きなこが後。順番が逆だときなこが黒蜜を弾いてのらない。', en: 'Always kuromitsu first, kinako second. Reversed, the kinako is repelled and will not stick.' } }
  ],
  finish: { jp: '黒蜜が見え、きなこが全体にかかっている',
            en: 'Kuromitsu visible, kinako dusted all over' }
},
/* ---------------------------------------------------------------- AS-14 */
{
  id: 'as-14', code: 'AS-14', ver: '1.0', issued: '2026.06',
  name: '黒蜜たっぷりきな粉', en: 'Kuromitsu Extra Kinako',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'OoP6B2a_kzs',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ホイップ', 'Whipped cream', '80', 'g'],
    ['きなこ', 'Kinako (roasted soybean flour)', '20', 'g'],
    ['黒蜜', 'Kuromitsu (brown sugar syrup)', '30', 'g']
  ],
  steps: [
    { jp: 'パンにホイップ（約80g）を詰める。',
      en: 'Fill the bread with whipped cream (about 80g).',
      point: { jp: '側面につけない。表面は平らにならす。', en: 'Keep cream off the sides; smooth the surface flat.' } },
    { jp: 'クリームの上に黒蜜をかける（1回目）。',
      en: 'Drizzle kuromitsu over the cream (1st time).',
      point: null },
    { jp: 'バーガー袋にサンドを入れ、きなこ（20g）を大量にかける。',
      en: 'Put the sandwich in a burger bag and coat generously with kinako (20g).',
      point: { jp: '袋の中で全体にたっぷりまぶす。これがエクストラの特徴。', en: 'Coat thoroughly inside the bag — this generous amount is what makes it "Extra".' } },
    { jp: 'その上からもう一度黒蜜をかけて完成（2回目）。',
      en: 'Drizzle kuromitsu once more on top to finish (2nd time).',
      point: null }
  ],
  finish: { jp: 'きなこがたっぷり全体を覆い、黒蜜が2回かかっている',
            en: 'Generously coated with kinako; kuromitsu drizzled twice' }
},
/* ---------------------------------------------------------------- AS-15 */
{
  id: 'as-15', code: 'AS-15', ver: '1.0', issued: '2026.06',
  name: 'チョコベリーナッツ', en: 'Chocolate Cream Berry Nuts',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'cnRocqhA9j0',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['チョコホイップ', 'Chocolate whipped cream', '90', 'g'],
    ['いちご（ハート型カット）', 'Strawberry, heart-cut', '3〜4', '枚'],
    ['ナッツ', 'Nuts', '5', 'g'],
    ['ココアパウダー', 'Cocoa powder', '1', 'g'],
    ['ラズベリーソース', 'Raspberry sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにチョコホイップ（約90g）を詰める。',
      en: 'Fill the bread with chocolate whipped cream (about 90g).',
      point: { jp: '側面につけない。表面は平らにならす。', en: 'Keep cream off the sides; smooth the surface flat.' } },
    { jp: 'ナッツ（5g）を全体にトッピングする。',
      en: 'Top with nuts (5g) all over.',
      point: null },
    { jp: 'ココアパウダー（1g）を全体に薄くかける。',
      en: 'Dust cocoa powder (1g) lightly over the whole surface.',
      point: { jp: 'かけすぎない。下のクリームが少し見えるくらい。かけすぎるとソースを弾く。', en: 'Do not over-dust — let some cream show through. Too much repels the sauce.' } },
    { jp: 'いちご（ハート型3〜4枚）を縦に並べる。',
      en: 'Arrange heart-cut strawberries (3–4 pcs) vertically.',
      point: null },
    { jp: 'ラズベリーソース（15g）をかけて完成。',
      en: 'Drizzle raspberry sauce (15g) to finish.',
      point: null }
  ],
  finish: { jp: 'ココアが薄くかかり（かかりすぎず下のクリームが少し見える）、ハートいち',
            en: 'Cocoa lightly dusted (not too much, cream slightly visible); 3–4 heart strawberries in a line; sauce drizzled' }
},
/* ---------------------------------------------------------------- AS-16 */
{
  id: 'as-16', code: 'AS-16', ver: '1.0', issued: '2026.06',
  name: 'チョコクリームいちご', en: 'Chocolate Cream Strawberry',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'o-UvWqqhEVk',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['チョコホイップ', 'Chocolate whipped cream', '90', 'g'],
    ['いちご（ハート型カット）', 'Strawberry, heart-cut', '3〜4', '枚'],
    ['チョコソース', 'Chocolate sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにチョコホイップ（約90g）を詰める。',
      en: 'Fill the bread with chocolate whipped cream (about 90g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'いちごをハート型にカットし、3〜4枚を等間隔に縦に並べる。',
      en: 'Cut strawberries into heart shapes and arrange 3–4 vertically, evenly spaced.',
      point: { jp: 'ハートの向きと間隔をそろえる。断面が正面を向くように置く。', en: 'Align the heart shapes and spacing; face the cut sides forward.' } },
    { jp: 'チョコソース（15g）をかけて完成。',
      en: 'Drizzle chocolate sauce (15g) to finish.',
      point: { jp: '全体に細く線状にかける。いちごの赤が見えるように残す。', en: 'Drizzle in thin lines; keep the red of the strawberries visible.' } }
  ],
  finish: { jp: 'いちごが等間隔に見え、チョコが全体にかかっている',
            en: 'Strawberries evenly spaced, chocolate covering the whole top' }
},
/* ---------------------------------------------------------------- AS-17 */
{
  id: 'as-17', code: 'AS-17', ver: '1.0', issued: '2026.06',
  name: 'チョコクリームバナナ', en: 'Chocolate Cream Banana',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'UVoDjAkzws4',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['チョコホイップ', 'Chocolate whipped cream', '90', 'g'],
    ['バナナ（輪切り1cm幅）', 'Banana, sliced 1cm thick', '3', '枚'],
    ['チョコソース', 'Chocolate sauce', '15', 'g']
  ],
  steps: [
    { jp: 'パンにチョコホイップ（約90g）を詰める。',
      en: 'Fill the bread with chocolate whipped cream (about 90g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'バナナを1cm幅の輪切りにし、3枚を等間隔に縦に並べる。',
      en: 'Slice the banana into 1cm-thick rounds and arrange three vertically, evenly spaced.',
      point: { jp: '間隔をそろえる。切り口が正面を向くように置く。', en: 'Keep the spacing even; face the cut sides forward.' } },
    { jp: 'チョコソース（15g）をかけて完成。',
      en: 'Drizzle with chocolate sauce (15g) to finish.',
      point: { jp: '全体に細く線状にかける。バナナの黄が見えるように残す。', en: 'Drizzle in thin lines; keep the yellow of the banana visible.' } }
  ],
  finish: { jp: 'バナナが等間隔に見え、チョコが全体にかかっている',
            en: 'Banana evenly spaced, chocolate covering the whole top' }
},
/* ---------------------------------------------------------------- AS-18 */
{
  id: 'as-18', code: 'AS-18', ver: '1.0', issued: '2026.06',
  name: '生チョコチョコ', en: 'Ganache Chocolate',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'kwHfvb0aRrA',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['チョコホイップ', 'Chocolate whipped cream', '90', 'g'],
    ['生チョコ', 'Nama choco (ganache squares)', '10', '個'],
    ['ココアパウダー', 'Cocoa powder', '1', 'g']
  ],
  steps: [
    { jp: 'パンにチョコホイップ（約90g）を詰める。',
      en: 'Fill the bread with chocolate whipped cream (about 90g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: '生チョコ10個を乗せる。上から3個・4個・3個の並びにする。',
      en: 'Place 10 nama choco squares: 3, 4, then 3 from the top.',
      point: { jp: '間隔をそろえて全体に広げる。崩さないように置く。', en: 'Space them evenly across the surface; place gently without breaking.' } },
    { jp: 'ココアパウダーをかけて完成。',
      en: 'Dust with cocoa powder to finish.',
      point: { jp: 'クリーム部分が見えなくなるまで全体にかける。', en: 'Dust over the whole top until the cream is no longer visible.' } }
  ],
  finish: { jp: '生チョコが3・4・3で並び、ココアでクリームが見えない',
            en: 'Nama choco set 3-4-3, cream fully hidden by cocoa' }
},
/* ---------------------------------------------------------------- AS-19 */
{
  id: 'as-19', code: 'AS-19', ver: '1.0', issued: '2026.06',
  name: '生チョコ抹茶', en: 'Ganache Matcha',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'G70NlcougSM',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['抹茶ホイップ', 'Matcha whipped cream', '90', 'g'],
    ['生チョコ', 'Nama choco (ganache squares)', '10', '個'],
    ['抹茶パウダー', 'Matcha powder', '1', 'g']
  ],
  steps: [
    { jp: 'パンに抹茶ホイップ（約90g）を詰める。',
      en: 'Fill the bread with matcha whipped cream (about 90g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: '生チョコ10個を乗せる。上から3個・4個・3個の並びにする。',
      en: 'Place 10 nama choco squares: 3, 4, then 3 from the top.',
      point: { jp: '間隔をそろえて全体に広げる。崩さないように置く。', en: 'Space them evenly across the surface; place gently without breaking.' } },
    { jp: '抹茶パウダーをかけて完成。',
      en: 'Dust with matcha powder to finish.',
      point: { jp: 'クリーム部分が見えなくなるまで全体にかける。', en: 'Dust over the whole top until the cream is no longer visible.' } }
  ],
  finish: { jp: '生チョコが3・4・3で並び、抹茶でクリームが見えない',
            en: 'Ganache set 3-4-3, cream fully hidden by matcha' }
},
/* ---------------------------------------------------------------- AS-20 */
{
  id: 'as-20', code: 'AS-20', ver: '1.0', issued: '2026.06',
  name: 'はちみつレアチーズ', en: 'Honey Rare Cheese',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'PB0Ar_wPeZQ',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['チーズクリーム', 'Cheese cream', '90', 'g'],
    ['寒天はちみつ', 'Agar honey', '20', 'g']
  ],
  steps: [
    { jp: '揚げパンにチーズクリーム（90g）を詰める。',
      en: 'Fill the bread with cheese cream (90g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: '寒天はちみつ（20g）を全体にかけて完成。',
      en: 'Top with agar honey (20g) to finish.',
      point: { jp: '中央に山形にのせる。垂らしすぎて白が消えないようにする。', en: 'Mound it in the center; don\'t cover all the white.' } }
  ],
  finish: { jp: '側面にクリームが付いておらず、はちみつが均一にかかっている',
            en: 'No cream on the sides, honey evenly drizzled' }
},
/* ---------------------------------------------------------------- AS-21 */
{
  id: 'as-21', code: 'AS-21', ver: '1.0', issued: '2026.06',
  name: 'ベリーピスタチオ', en: 'Berry Pistachio',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'baxvu2rqEJs',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ピスタチオホイップ', 'Pistachio whipped cream', '90', 'g'],
    ['ピスタチオクランチ', 'Pistachio crunch', '10', 'g'],
    ['ラズベリーソース', 'Raspberry sauce', '15', 'g']
  ],
  steps: [
    { jp: '揚げパンにピスタチオホイップ（90g）を詰める。',
      en: 'Fill the bread with pistachio whipped cream (90g).',
      point: { jp: '側面にクリームをつけない。表面は平らにならす。', en: 'Keep cream off the sides and smooth the surface flat.' } },
    { jp: 'ピスタチオクランチ（10g）を全面につける。',
      en: 'Coat the whole surface with pistachio crunch (10g).',
      point: { jp: 'クリームが見えなくなるまで全面につける。', en: 'Cover the surface until the cream is no longer visible.' } },
    { jp: 'ラズベリーソース（15g）をかけて完成。',
      en: 'Drizzle with raspberry sauce (15g) to finish.',
      point: { jp: '全体に細く線状にかける。緑が見えるように残す。', en: 'Drizzle in thin lines; keep the green visible.' } }
  ],
  finish: { jp: '全面がクランチで覆われ、ラズベリーソースが線状にかかっている',
            en: 'Surface fully coated with crunch, raspberry sauce drizzled in lines' }
},
/* ---------------------------------------------------------------- AS-35 */
{
  id: 'as-35', code: 'AS-35', ver: '1.0', issued: '2026.06',
  name: 'シナモンアップルパイ', en: 'Cinnamon Apple Pie',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  video: 'fiW4CwPA4XA',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['カスタードホイップ', 'Custard whipped cream', '60', 'g'],
    ['クリミビット', 'Kurimibit', '30', 'g'],
    ['りんご', 'Apple slices', '3', '枚'],
    ['砂糖（表面用）', 'Sugar (for surface)', '10', 'g'],
    ['シナモンパウダー', 'Cinnamon powder', '0.5', 'g'],
    ['キャラメルクランチ', 'Caramel crunch', '1', 'g']
  ],
  steps: [
    { jp: '揚げパンにカスタードホイップを擦り切りで詰める。',
      en: 'Fill the fried bread with custard whipped cream, level to the edge.',
      point: null },
    { jp: 'その上にクリミビット（30g）を塗る。',
      en: 'Spread Kurimibit (30g) on top.',
      point: { jp: 'クリミビット30gをムラなく覆う（薄い部分を作らない）。薄いと下のクリームに熱が伝わって溶け出す。', en: 'Cover evenly with 30g of Kurimibit — no thin spots. Thin areas let heat reach the cream below and melt it.' } },
    { jp: 'りんご3枚を均等に上に置く。',
      en: 'Place 3 apple slices evenly on top.',
      point: null },
    { jp: '砂糖をかけて全体に焼き目がつくようバーナーで炙る。',
      en: 'Coat with sugar and torch until golden all over.',
      point: { jp: '全体がきつね色になるまで、バーナーであぶる。', en: 'Heat with a burner until golden all over.' } },
    { jp: 'キャラメルクランチとシナモンパウダーをかけて完成。',
      en: 'Sprinkle caramel crunch and cinnamon powder to finish.',
      point: null }
  ],
  finish: { jp: '表面がきつね色に焦げ、りんごが均等に見える',
            en: 'Surface torched golden, apple slices evenly visible' }
},
/* ---------------------------------------------------------------- AS-36 */
{
  id: 'as-36', code: 'AS-36', ver: '1.0', issued: '2026.06',
  name: 'バナナブリュレ', en: 'Banana Brûlée',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-sweets',
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['カスタードホイップ', 'Custard whipped cream', '60', 'g'],
    ['クリミビット', 'Kurimibit', '30', 'g'],
    ['バナナ', 'Banana', '1/2', '本'],
    ['グラニュー糖（表面用）', 'Granulated sugar (for surface)', '10', 'g'],
    ['キャラメルソース', 'Caramel sauce', '15', 'g'],
    ['ミント', 'Mint', '1', '枚']
  ],
  steps: [
    { jp: 'バナナを厚さ1cmの輪切り3枚と斜め切りにカットする。',
      en: 'Cut the banana into 3 rounds (1cm thick) and diagonal slices.',
      point: null },
    { jp: '揚げパンにカスタードホイップを擦り切りで詰め、上にクリミビット（30g）を全体に塗る。',
      en: 'Fill the fried bread with custard whipped cream level to the edge, then spread Kurimibit (30g) over the top.',
      point: { jp: 'クリミビット30gをムラなく覆う（薄い部分を作らない）。薄いと下のクリームに熱が伝わって溶け出す。', en: 'Cover evenly with 30g of Kurimibit — no thin spots. Thin areas let heat reach the cream below and melt it.' } },
    { jp: '右側に輪切りバナナ3枚、左側に斜め切りバナナを乗せ、グラニュー糖をかける。',
      en: 'Place 3 banana rounds on the right, diagonal slices on the left, then coat with granulated sugar.',
      point: null },
    { jp: '表面をバーナーで炙りキャラメリゼする。',
      en: 'Torch the surface to caramelize.',
      point: { jp: '同じところに火を当てすぎてバナナを焦がさない。全体を均一に動かしながら炙る。', en: 'Don\'t hold the flame on one spot — keep it moving so the banana doesn\'t burn.' } },
    { jp: 'キャラメルソースをかけ、ミントを乗せて完成。',
      en: 'Drizzle caramel sauce and place a mint leaf to finish.',
      point: null }
  ],
  finish: { jp: '焦げている箇所がなく、表面がキャラメリゼされきつね色',
            en: 'No burnt spots, surface caramelized golden' }
},
/* ---------------------------------------------------------------- AS-22 */
{
  id: 'as-22', code: 'AS-22', ver: '1.1', issued: '2026.08',
  name: '月見照り焼き', en: 'Tsukimi Teriyaki',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'XdlAsvxL-Is',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['パティ', 'Patty', '1', '枚'],
    ['照り焼きソース', 'Teriyaki sauce', '10', 'g'],
    ['目玉焼き', 'Fried egg', '1', '枚'],
    ['レタス', 'Lettuce', '1', '枚'],
    ['マヨネーズ', 'Mayonnaise', '20', 'g']
  ],
  steps: [
    { jp: '揚げパンの内側にマヨネーズ（10g）を全体に塗り、レタスを差し込む。',
      en: 'Spread mayonnaise (10g) inside the bread and tuck in the lettuce.',
      point: null },
    { jp: '揚げたパティを半分に切り、照り焼きソース（10g）にくぐらせ、断面を下に向けて入れる。',
      en: 'Halve the fried patty, coat in teriyaki sauce (10g), and insert cut-side down.',
      point: { jp: '断面を下に向け、パティが2枚に見えるように入れる。', en: 'Place cut-side down so the patty looks like two pieces.' } },
    { jp: '揚げた目玉焼きをパティの脇に差し込む。',
      en: 'Tuck the fried egg in beside the patty.',
      point: { jp: '黄身が正面から見えるように差し込む。', en: 'Insert so the yolk faces forward.' } },
    { jp: 'マヨネーズ（10g）をかけて完成。',
      en: 'Drizzle with mayonnaise (10g) to finish.',
      point: { jp: '全体に細く線状にかける。具が見えるように残す。', en: 'Drizzle in thin lines; keep the fillings visible.' } }
  ],
  finish: { jp: 'パティが2枚に見え、黄身とレタスが正面から見えている',
            en: 'Patty looks like two pieces; yolk and lettuce visible from the front' }
},
/* ---------------------------------------------------------------- AS-23 */
{
  id: 'as-23', code: 'AS-23', ver: '1.0', issued: '2026.06',
  name: 'ポテトサラダ', en: 'Potato Salad',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'VXQqHodgg_g',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ポテトサラダ', 'Potato salad', '110', 'g'],
    ['スライス玉子', 'Sliced egg', '1', '枚'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにポテトサラダ（110g）を詰める。',
      en: 'Fill the fried bread with potato salad (110g).',
      point: { jp: 'パンの端まで詰める。隙間を作らない。', en: 'Fill all the way to the edges — no gaps.' } },
    { jp: 'スライス玉子を中央に乗せる。',
      en: 'Place the sliced egg in the center.',
      point: { jp: '黄身が正面から見えるように置く。', en: 'Set it so the yolk faces forward.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.',
      point: { jp: '玉子と全体に軽く散らす。かけすぎない。', en: 'Scatter lightly over the egg and the whole top; don\'t overdo it.' } }
  ],
  finish: { jp: 'サラダが端まで詰まり、中央の玉子とパセリが見えている',
            en: 'Salad fills to the edges; egg and parsley visible in the center' }
},
/* ---------------------------------------------------------------- AS-24 */
{
  id: 'as-24', code: 'AS-24', ver: '1.0', issued: '2026.06',
  name: 'タマゴサラダ', en: 'Egg Salad',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'Ze9hBFeOk2g',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['タマゴサラダ', 'Egg salad', '110', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにタマゴサラダ（110g）を詰める。',
      en: 'Fill the fried bread with egg salad (110g).',
      point: { jp: 'パンの端までしっかり詰める。隙間を作らない。', en: 'Fill firmly all the way to the edges — no gaps.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.',
      point: { jp: '中央に軽く散らす。かけすぎない。', en: 'Scatter lightly in the center; don\'t overdo it.' } }
  ],
  finish: { jp: 'サラダが端まで詰まり、パセリが中央に見えている',
            en: 'Salad fills to the edges; parsley visible in the center' }
},
/* ---------------------------------------------------------------- AS-25 */
{
  id: 'as-25', code: 'AS-25', ver: '1.0', issued: '2026.06',
  name: 'ツナマヨネーズ', en: 'Tuna Mayonnaise',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'TDqTJKHfnAU',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ツナ', 'Tuna', '110', 'g'],
    ['レタス', 'Lettuce', '1', '枚'],
    ['パセリ', 'Parsley', '0.2', 'g'],
    ['粗挽き胡椒', 'Coarse black pepper', '0.3', 'g']
  ],
  steps: [
    { jp: '揚げパンにレタスを差し込む。',
      en: 'Tuck the lettuce into the fried bread.',
      point: null },
    { jp: 'ツナマヨネーズ（110g）を詰める。',
      en: 'Fill with tuna mayonnaise (110g).',
      point: { jp: 'パンの端までしっかり詰める。隙間を作らない。', en: 'Fill firmly all the way to the edges — no gaps.' } },
    { jp: '粗挽き胡椒（0.3g）とパセリ（0.2g）をかけて完成。',
      en: 'Sprinkle coarse black pepper (0.3g) and parsley (0.2g) to finish.',
      point: { jp: '全体に軽く散らす。かけすぎない。', en: 'Scatter lightly over the top; don\'t overdo it.' } }
  ],
  finish: { jp: 'ツナが端まで詰まり、レタスの緑と胡椒・パセリが見えている',
            en: 'Tuna fills to the edges; green lettuce, pepper and parsley visible' }
},
/* ---------------------------------------------------------------- AS-26 */
{
  id: 'as-26', code: 'AS-26', ver: '1.0', issued: '2026.06',
  name: '焼きチーズクリームシチュー', en: 'Grilled Cheese Cream Stew',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'fDBvPTzM1ew',
  videoNote: 'プレイリストの動画名は「焼きチーズシチュー」。この品の名前（焼きチーズクリームシチュー）と表記が異なる。',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['シチュー', 'Cream stew', '110', 'g'],
    ['チーズ', 'Cheese', '10', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにシチュー（110g）を詰める。',
      en: 'Fill the fried bread with cream stew (110g).',
      point: { jp: 'シチューがしっかり温まっているか必ず確認する。', en: 'Always check the stew is fully heated through.' } },
    { jp: 'チーズ（10g）を全体に乗せる。',
      en: 'Top evenly with cheese (10g).',
      point: null },
    { jp: 'チーズを溶かすように炙り、焼き目をつける。',
      en: 'Torch the cheese to melt it and brown the top.',
      point: { jp: '遠火で炙る。焦げすぎないようにする。', en: 'Torch from a distance; don\'t let it burn.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.',
      point: { jp: '中央に集めてかける。全体には散らさない。', en: 'Concentrate it in the center; don\'t spread it all over.' } }
  ],
  finish: { jp: 'チーズが溶けて焼き目がつき、パセリが中央に見えている',
            en: 'Cheese melted and browned; parsley visible in the center' }
},
/* ---------------------------------------------------------------- AS-27 */
{
  id: 'as-27', code: 'AS-27', ver: '1.0', issued: '2026.06',
  name: '焼きキーマカレー', en: 'Baked Keema Curry',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'hMb3xyBHXKk',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['カレー', 'Keema curry', '110', 'g'],
    ['チーズ', 'Cheese', '10', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにカレー（110g）を詰める。',
      en: 'Fill the fried bread with curry (110g).',
      point: { jp: 'カレーがしっかり温まっているか必ず確認する。', en: 'Always check the curry is fully heated through.' } },
    { jp: 'チーズ（10g）を全体に乗せる。',
      en: 'Top evenly with cheese (10g).',
      point: null },
    { jp: 'チーズを溶かすように炙り、焼き目をつける。',
      en: 'Torch the cheese to melt it and brown the top.',
      point: { jp: '遠火で炙る。焦げすぎないようにする。', en: 'Torch from a distance; don\'t let it burn.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.',
      point: { jp: '中央に軽く散らす。かけすぎない。', en: 'Scatter lightly in the center; don\'t overdo it.' } }
  ],
  finish: { jp: 'チーズが溶けて焼き目がついている',
            en: 'Cheese melted and browned' }
},
/* ---------------------------------------------------------------- AS-28 */
{
  id: 'as-28', code: 'AS-28', ver: '1.1', issued: '2026.08',
  name: '激辛！焼きキーマカレー', en: 'Hot Grill Keema Curry',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'Lmj704VxHY4',
  videoNote: 'プレイリストの動画名は「激辛焼きキーマカレー（新）」。この品の名前（激辛！焼きキーマカレー）と表記が異なる。',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['カレー', 'Keema curry', '120', 'g'],
    ['チーズ', 'Cheese', '10', 'g'],
    ['チリパウダー', 'Chili powder', '0.2', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにカレー（120g）を詰める。',
      en: 'Fill the fried bread with curry (120g).',
      point: { jp: 'カレーがしっかり温まっているか必ず確認する。', en: 'Always check the curry is fully heated through.' } },
    { jp: 'チーズ（10g）を全体に乗せる。',
      en: 'Top evenly with cheese (10g).',
      point: null },
    { jp: 'チーズを溶かすように炙り、焼き目をつける。',
      en: 'Torch the cheese to melt it and brown the top.',
      point: { jp: '遠火で炙る。焦げすぎないようにする。', en: 'Torch from a distance; don\'t let it burn.' } },
    { jp: 'チリパウダー（0.2g）をかける。',
      en: 'Sprinkle chili powder (0.2g).',
      point: { jp: '中央に集めてかける。全体には散らさない。', en: 'Concentrate it in the center; don\'t spread it all over.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.',
      point: null }
  ],
  finish: { jp: 'チーズが溶けて焼き目がつき、中央に赤いチリパウダーが見えている',
            en: 'Cheese melted and browned; red chili powder visible in the center' }
},
/* ---------------------------------------------------------------- AS-29 */
{
  id: 'as-29', code: 'AS-29', ver: '1.1', issued: '2026.08',
  name: 'とろたまナポリタン', en: 'Egg + Napolitan',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: '-0w8zAdAW4A',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['目玉焼き（冷凍）', 'Fried egg (frozen)', '1', '枚'],
    ['ナポリタン', 'Napolitan pasta', '100', 'g'],
    ['ザネッティチーズ', 'Zanetti cheese', '5', 'g']
  ],
  steps: [
    { jp: '揚げパンに、揚げた目玉焼き（1枚）を入れる。',
      en: 'Place the fried egg (1) inside the fried bread.',
      point: { jp: '黄身を割らないように静かに入れる。', en: 'Place it gently so the yolk doesn\'t break.' } },
    { jp: 'ナポリタン（100g）を詰める。',
      en: 'Fill with Napolitan pasta (100g).',
      point: { jp: 'ナポリタンがしっかり温まっているか必ず確認する。', en: 'Always check the pasta is fully heated through.' } },
    { jp: 'ザネッティチーズ（5g）を上から削りかける。',
      en: 'Grate Zanetti cheese (5g) over the top.',
      point: { jp: '中央に山高く削る。全体に散らさない。', en: 'Pile it high in the center; don\'t spread it all over.' } }
  ],
  finish: { jp: '麺が外にはみ出ていない',
            en: 'No pasta sticking out from the bread' }
},
/* ---------------------------------------------------------------- AS-30 */
{
  id: 'as-30', code: 'AS-30', ver: '1.1', issued: '2026.08',
  name: 'とろたまナポリタン 追いチーズ', en: 'Egg + Napolitan Extra Cheese',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'H0OhVkor01k',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['目玉焼き（冷凍）', 'Fried egg (frozen)', '1', '枚'],
    ['ナポリタン', 'Napolitan pasta', '100', 'g'],
    ['ザネッティチーズ', 'Zanetti cheese', '15', 'g']
  ],
  steps: [
    { jp: '揚げパンに、揚げた目玉焼き（1枚）を入れる。',
      en: 'Place the fried egg (1) inside the fried bread.',
      point: { jp: '黄身を割らないように静かに入れる。', en: 'Place it gently so the yolk doesn\'t break.' } },
    { jp: 'ナポリタン（100g）を詰める。',
      en: 'Fill with Napolitan pasta (100g).',
      point: { jp: 'ナポリタンがしっかり温まっているか必ず確認する。', en: 'Always check the pasta is fully heated through.' } },
    { jp: 'ザネッティチーズ（15g）を上から削りかける。',
      en: 'Grate Zanetti cheese (15g) over the top.',
      point: { jp: '麺が見えなくなるまで全体を覆う。', en: 'Cover the whole surface until the pasta is hidden.' } }
  ],
  finish: { jp: '麺が外にはみ出ていない／麺が見えなくなるようにチーズをかける',
            en: 'No pasta sticking out; cheese covers the pasta completely' }
},
/* ---------------------------------------------------------------- AS-31 */
{
  id: 'as-31', code: 'AS-31', ver: '1.1', issued: '2026.08',
  name: 'とろタマ焼きそば', en: 'Egg + Fried Noodle',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'nuQiq05uMjg',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['目玉焼き（冷凍）', 'Fried egg (frozen)', '1', '枚'],
    ['焼きそば', 'Yakisoba noodles', '100', 'g'],
    ['中濃ソース', 'Tonkatsu-style sauce', '15', 'g'],
    ['紅生姜', 'Pickled red ginger', '5', 'g'],
    ['青のり', 'Green seaweed flakes', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンの内側に中濃ソース（5g）をかけ、揚げた目玉焼き（1枚）を入れる。',
      en: 'Brush sauce (5g) inside the fried bread, then place the fried egg (1).',
      point: { jp: '黄身を割らないように静かに入れる。', en: 'Place it gently so the yolk doesn\'t break.' } },
    { jp: '焼きそば（100g）を詰め、中濃ソース（10g）を上からかける。',
      en: 'Fill with yakisoba (100g), then drizzle sauce (10g) over the top.',
      point: { jp: '焼きそばがしっかり温まっているか必ず確認する。', en: 'Always check the yakisoba is fully heated through.' } },
    { jp: '紅生姜（5g）・青のり（0.2g）をかけて完成。',
      en: 'Top with pickled red ginger (5g) and green seaweed (0.2g) to finish.',
      point: { jp: '中央に集めてかける。全体には散らさない。', en: 'Concentrate it in the center; don\'t spread it all over.' } }
  ],
  finish: { jp: '麺が外にはみ出ていない／中央に紅生姜と青のりが見えている',
            en: 'No noodles sticking out; red ginger and green seaweed visible in the center' }
},
/* ---------------------------------------------------------------- AS-32 */
{
  id: 'as-32', code: 'AS-32', ver: '1.0', issued: '2026.06',
  name: '旨だれ牛カルビ焼肉', en: 'Beef Short Rib Yakiniku with Special BBQ Sauce',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'KGa9H1QcQwU',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['レタス', 'Lettuce', '1', '枚'],
    ['ポテトサラダ', 'Potato salad', '80', 'g'],
    ['焼肉（牛カルビ）', 'Beef short rib yakiniku', '1', 'pc'],
    ['半熟タマゴ', 'Soft-boiled egg', '1', '個'],
    ['白胡麻', 'White sesame seeds', '1', 'g']
  ],
  steps: [
    { jp: '揚げパンにレタス（1枚）を入れ、ポテトサラダ（80g）を詰める。',
      en: 'Place lettuce (1) in the fried bread and fill with potato salad (80g).',
      point: { jp: 'レタスは3〜5cm外に出す。', en: 'Let the lettuce stick out 3–5cm.' } },
    { jp: '焼肉（1パック）をポテトサラダの上に盛り付ける。',
      en: 'Arrange the yakiniku (1 pack) on top of the potato salad.',
      point: { jp: '中央を窪ませ、卵が乗せやすいようにする。焼肉の汁は入れすぎない。パンに染みてふやけるため。', en: 'Make a hollow in the center for the egg. Don\'t add too much sauce — it soaks the bread and makes it soggy.' } },
    { jp: '半熟タマゴをのせて少し割り、白胡麻（1g）を振って完成。',
      en: 'Place the soft-boiled egg, cut it slightly, and sprinkle white sesame (1g) to finish.',
      point: { jp: '卵は必ず包丁で切れ目を入れる。箸や指で割らない。', en: 'Always cut the egg with a knife — never break it with chopsticks or fingers.' } }
  ],
  finish: { jp: '卵に切れ目が入り、黄身がとろり、レタスの緑が見えている',
            en: 'Egg cut with runny yolk; green lettuce visible' }
},
/* ---------------------------------------------------------------- AS-33 */
{
  id: 'as-33', code: 'AS-33', ver: '1.0', issued: '2026.06',
  name: 'チキン南蛮', en: 'Chicken Nanban',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'mgzGwkJpu8Q',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['レタス', 'Lettuce', '1', '枚'],
    ['タマゴサラダ', 'Egg salad', '80', 'g'],
    ['唐揚げ', 'Fried chicken', '3', '個'],
    ['甘酢', 'Sweet vinegar sauce', '10', 'g'],
    ['タルタルソース', 'Tartar sauce', '15', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにレタス（1枚）を入れる。',
      en: 'Place lettuce (1) in the fried bread.',
      point: { jp: 'レタスは3〜5cm外に出す。', en: 'Let the lettuce stick out 3–5cm.' } },
    { jp: 'タマゴサラダ（80g）を詰める。',
      en: 'Fill with egg salad (80g).',
      point: null },
    { jp: '唐揚げ（3個）を均等に並べる。',
      en: 'Arrange the fried chicken (3 pieces) evenly.',
      point: null },
    { jp: '甘酢（10g）をかけ、タルタルソース（15g）を乗せる。',
      en: 'Drizzle sweet vinegar sauce (10g), then top with tartar sauce (15g).',
      point: { jp: '甘酢が先、タルタルは後。順番を守る。', en: 'Sweet vinegar first, tartar second — keep the order.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.',
      point: null }
  ],
  finish: { jp: '唐揚げが均一に並び、甘酢が全体・タルタルが中央・パセリが全体にかかって',
            en: 'Chicken evenly arranged; sweet vinegar over all, tartar in the center, parsley over all' }
},
/* ---------------------------------------------------------------- AS-34 */
{
  id: 'as-34', code: 'AS-34', ver: '1.1', issued: '2026.08',
  name: '炙りチーズスモークサーモン', en: 'Grilled Cheese + Smoked Salmon',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  group: 'regular-savory',
  video: 'f2PSzyX5Tj0',
  videoNote: 'プレイリストの動画名は「炙りチーズサーモン」。この品の名前（炙りチーズスモークサーモン）と表記が異なる。',
  yield: '1個分', kind: 'savory',
  ing: [
    ['揚げパン（半分）', 'Fried bread (half)', '1/2', '個'],
    ['ポテトサラダ', 'Potato salad', '100', 'g'],
    ['スモークサーモン', 'Smoked salmon', '15', 'g'],
    ['アボカド', 'Avocado', '5', '個'],
    ['チーズ', 'Cheese', '10', 'g'],
    ['オリーブオイル', 'Olive oil', '1', 'g'],
    ['粗挽き胡椒', 'Coarse black pepper', '0.3', 'g'],
    ['パセリ', 'Parsley', '0.2', 'g']
  ],
  steps: [
    { jp: '揚げパンにポテトサラダ（100g）を詰める。',
      en: 'Fill the fried bread with potato salad (100g).',
      point: null },
    { jp: 'スモークサーモン（15g）を3枚、斜めに重ねて並べる。',
      en: 'Arrange smoked salmon (15g) in 3 slices, overlapping diagonally.',
      point: null },
    { jp: 'アボカド（5g）を5つ散らす。',
      en: 'Scatter avocado (5g) in 5 pieces.',
      point: { jp: '中央は開けておく。チーズが乗るため。', en: 'Leave the center open for the cheese.' } },
    { jp: 'チーズ（10g）を中央に乗せ、遠火で溶かすように炙り、焼き目をつける。',
      en: 'Place cheese (10g) in the center and torch from a distance to melt and brown.',
      point: { jp: '遠火で炙る。焦げていない。', en: 'Torch from a distance; not burnt.' } },
    { jp: 'オリーブオイル・粗挽き胡椒・パセリをかけて完成。',
      en: 'Drizzle olive oil, coarse pepper and parsley to finish.',
      point: null }
  ],
  finish: { jp: 'チーズが中央で溶けて焼き目がつき、サーモンとアボカドの緑が見えている',
            en: 'Cheese melted and browned in the center; salmon and green avocado visible' }
}



];
