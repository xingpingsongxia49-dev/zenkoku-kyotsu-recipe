/* ============================================================================
   Age.3 レシピ — 収録内容
   出どころ：Age.3 STANDARD RECIPE カード（CONFIDENTIAL — DO NOT COPY）
     AS-L-01 / AS-L-02 / AS-L-03 / AS-L-04 / AS-L-05 /
     AS-L-06 / AS-L-07 / AS-L-08 / AS-08 ／ アイスブリュレ（旧フォーマット）

   書き方の決まり
     ・レシピカードに書かれていることだけを写す。分量・手順・ポイントを足さない。
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
  videoPlaylist: 'PLd6x2EVLblGi7aDWkzoQT2UbfW5kwLJOL'
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
      title: '夏メニューの終了', scope: '嘉麻店のみ',
      items: [
        { name: 'かき氷',                    state: '終了', detail: '無料期間・通常300円ともに終了' },
        { name: 'フルールサンド（ピーチ・メロン）', state: '終了', detail: null },
        { name: 'アサイーかき氷',            state: '終了', detail: '夏季のみの提供' },
        { name: 'ボタ山ソフトクリーム',      state: '継続', detail: '引き続き販売します' }
      ]
    },
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
        { name: 'スイーツサンド【嘉麻店】', state: 'ほうじ茶', detail: 'ビジュアル制作中' },
        { name: '紅蜜芋ブリュレ',   state: '揚げサンド', detail: null, recipe: 'as-l-06' },
        { name: 'マスカット',       state: '揚げサンド', detail: null, recipe: 'as-l-07' },
        { name: 'いちじく',         state: '揚げサンド', detail: null, recipe: 'as-l-08' },
        { name: '北海道あんバター', state: '揚げサンド', detail: 'あんバターのビジュアルを変更。材料も北海道餡に変更。', recipe: 'as-08' }
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
  status: { tone: 'end',   label: '8月末で終了', detail: '定番化なし' },
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
      en: 'Spread 15g raspberry sauce over the inner surface of the bun.', point: null },
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
      en: 'Pour 15g raspberry sauce on top.', point: null }
  ],
  finish: { jp: 'ピーナッツバターが滲んでいない。ソースが全体にかかっている。',
            en: 'Peanut butter is not smeared; sauce covers the whole surface.' },
  notes: ['ラズベリーソース30gの内わけは、内側に15g・仕上げに15g。']
},

/* ---------------------------------------------------------------- AS-L-02 */
{
  id: 'as-l-02', code: 'AS-L-02', ver: 'Ver.1.0', issued: '2026.06',
  name: 'ティラミス', en: 'Tiramisu',
  serve: '1個分 / PER PIECE', category: '揚げサンド（期間限定）', limited: true,
  video: 'PoNn-yQt1nE',
  status: { tone: 'end',   label: '8月末で終了', detail: '定番化なし' },
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
      en: 'Pour 15g coffee sauce on the inner surface of the bun.', point: null },
    { jp: 'チーズホイップ80gを詰める。',
      en: 'Fill with 80g cheese whip.',
      point: { jp: '側面にクリームを付けない。表面は平らにならす。', en: 'Do not apply cream on the sides; level the top flat.' } },
    { jp: 'コーヒーソース5gを縦一本線にかける。',
      en: 'Pour 5g coffee sauce in a single vertical line.', point: null },
    { jp: 'バーガー袋に入れ、ココアパウダーを全体にかける。',
      en: 'Place in a burger bag and dust cocoa powder over the whole surface.',
      point: { jp: '白い部分が見えなくなるまでかける。袋に入れて飛散を防ぐ。', en: 'Dust until no white shows. Use the bag to prevent scattering.' } },
    { jp: 'ビスケットを半分に折り、向かって左上に斜めにずらして挿す。',
      en: 'Fold the biscuit in half and insert it diagonally at the upper left.',
      point: { jp: '写真のように斜めにずらして挿す。', en: 'Insert at a slant as shown in the photo.' } }
  ],
  finish: { jp: 'ココアで表面の白い部分が見えなくなっている。ビスケットが左上に斜めに挿さっている。',
            en: 'Cocoa fully covers the surface (no white showing); biscuit inserted diagonally at the upper left.' },
  notes: ['コーヒーソース20gの内わけは、内側に15g・仕上げの一本線に5g。']
},

/* ---------------------------------------------------------------- AS-L-03 */
{
  id: 'as-l-03', code: 'AS-L-03', ver: '1.0', issued: '2026.06',
  name: '旨辛焼肉', en: 'Hot Beef Yakiniku',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'fHcaqgIRPRA',
  status: { tone: 'end',   label: '8月末で終了', detail: '旨辛シリーズ S-3' },
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
      point: { jp: '中央を窪ませ卵を乗せやすくする。汁は入れすぎない。', en: "Make a hollow in the center for the egg. Don't add too much sauce." } },
    { jp: '半熟タマゴをのせて少し割る。',
      en: 'Place the soft-boiled egg and cut it slightly.',
      point: { jp: '卵は必ず包丁で切れ目を入れる。箸や指で割らない。', en: 'Always cut the egg with a knife — never break it with chopsticks or fingers.' } },
    { jp: '白胡麻（1g）を全体に振る。',
      en: 'Sprinkle white sesame (1g) over the whole surface.', point: null },
    { jp: 'ハラペーニョ（3枚）を卵の周りに散らす。',
      en: 'Scatter jalapeño (3 slices) around the egg.', point: null },
    { jp: '乾燥唐辛子（1g）を乗せて完成。',
      en: 'Top with dried chili (1g) to finish.',
      point: { jp: '乾燥唐辛子は卵の上に立体的に乗せ、赤を見せる。', en: null } }
  ],
  finish: { jp: '卵に切れ目が入り黄身がとろり、ハラペーニョの緑と赤い唐辛子が見えている',
            en: 'Egg cut with runny yolk; green jalapeño and red chili visible' },
  notes: []
},

/* ---------------------------------------------------------------- AS-L-04 */
{
  id: 'as-l-04', code: 'AS-L-04', ver: '1.0', issued: '2026.06',
  name: '旨辛ナポリタン', en: 'Hot Napolitan Noodle',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'bnu34XCQaRo',
  status: { tone: 'end',   label: '8月末で終了', detail: '旨辛シリーズ S-1' },
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
      point: { jp: '黄身を割らないように静かに入れる。', en: "Place it gently so the yolk doesn't break." } },
    { jp: 'ナポリタン（110g）を詰める。',
      en: 'Fill with Napolitan pasta (110g).',
      point: { jp: 'ナポリタンがしっかり温まっているか必ず確認する。', en: 'Always check the pasta is fully heated through.' } },
    { jp: 'タバスコ（3g）を全体に回しかける。',
      en: 'Drizzle Tabasco (3g) over the whole surface.', point: null },
    { jp: 'ザネッティチーズ（5g）を中央に山高く削りかける。',
      en: 'Grate Zanetti cheese (5g) high in the center.',
      point: { jp: '中央に山高く削る。全体に散らさない。', en: "Pile it high in the center; don't spread it all over." } },
    { jp: 'ハラペーニョ（3枚）、乾燥唐辛子（1g）を乗せて完成。',
      en: 'Top with jalapeño (3 slices) and dried chili (1g) to finish.',
      point: { jp: 'ハラペーニョは中央周りに散らし、乾燥唐辛子は赤を見せる。', en: 'Scatter jalapeño around the center; show the red of the dried chili.' } }
  ],
  finish: { jp: '麺が外にはみ出ておらず、ハラペーニョの緑と赤い唐辛子が見えている',
            en: 'No pasta sticking out; green jalapeño and red chili visible' },
  notes: []
},

/* ---------------------------------------------------------------- AS-L-05 */
{
  id: 'as-l-05', code: 'AS-L-05', ver: '1.0', issued: '2026.06',
  name: '旨辛チーズカレー', en: 'Hot Cheese Curry',
  serve: 'Savory 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'PWr7owjii3I',
  status: { tone: 'end',   label: '8月末で終了', detail: '旨辛シリーズ S-2' },
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
      point: { jp: '遠火で炙る。焦げすぎないようにする。', en: "Torch from a distance; don't let it burn." } },
    { jp: 'チリパウダー（1g）をかける。',
      en: 'Sprinkle chili powder (1g).',
      point: { jp: '全体に散らしすぎない。', en: "Don't over-sprinkle across the whole surface." } },
    { jp: 'ハラペーニョ（3枚）、乾燥唐辛子（1g）を乗せる。',
      en: 'Top with jalapeño (3 slices) and dried chili (1g).',
      point: { jp: 'ハラペーニョは中央周りに散らし、乾燥唐辛子で赤を見せる。', en: 'Scatter jalapeño around the center; show the red of the dried chili.' } },
    { jp: 'パセリ（0.2g）をかけて完成。',
      en: 'Sprinkle parsley (0.2g) to finish.', point: null }
  ],
  finish: { jp: 'チーズが溶けて焼き目がつき、ハラペーニョの緑と赤いチリが見えている',
            en: 'Cheese melted and browned; green jalapeño and red chili visible' },
  notes: []
},

/* ---------------------------------------------------------------- AS-L-06 */
{
  id: 'as-l-06', code: 'AS-L-06', ver: '1.0', issued: '2026.06',
  name: '紅蜜芋ブリュレ', en: 'Purple Sweet Potato Brûlée',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'J31wyTxW1TU',
  status: { tone: 'start', label: '9月〜',      detail: '秋の新商品' },
  yield: '1個分', kind: 'sweets',
  ing: [
    ['揚げパン（半分）', 'Fried bread', '1/2', '個'],
    ['芋餡（底10g＋仕上げ5g）', 'Sweet potato paste (10g base + 5g finish)', '15', 'g'],
    ['カスタードホイップ', 'Custard whipped cream', '60', 'g'],
    ['紫芋クリミビット', 'Purple sweet potato Kurimibit', '30', 'g'],
    ['グラニュー糖（表面用）', 'Granulated sugar (for surface)', '10', 'g'],
    ['大学芋', 'Candied sweet potato', '3', '個']
  ],
  steps: [
    { jp: 'パンの底に芋餡（10g）を敷き、カスタードホイップ（60g）を詰める。',
      en: 'Spread sweet potato paste (10g) on the bottom of the bread, then fill with custard whipped cream (60g).',
      point: { jp: '芋餡は底全体に平らに広げる。片寄ると味が片側だけになる。', en: 'Spread the paste flat across the whole bottom; uneven paste means uneven flavor.' } },
    { jp: 'その上に紫芋クリミビット（30g）を塗る。',
      en: 'Spread purple sweet potato Kurimibit (30g) on top.',
      point: { jp: 'ムラなく覆う（薄い部分を作らない）。薄いと下のクリームに熱が伝わって溶け出す。', en: 'Cover evenly — no thin spots. Thin areas let heat reach the cream below and melt it.' } },
    { jp: 'グラニュー糖（10g）をまぶし、バーナーで炙る。',
      en: 'Coat with granulated sugar (10g) and heat with a burner.',
      point: { jp: '全体がきつね色になるまで、バーナーであぶる。', en: 'Heat with a burner until golden all over.' } },
    { jp: '炙った表面の中央に、芋餡（5g）を縦に1本引く。',
      en: 'Draw one vertical line of sweet potato paste (5g) down the center of the torched surface.',
      point: { jp: '中央にまっすぐ1本。太くしすぎず紫の面を左右に残す。', en: 'One straight line down the center; keep it thin so purple remains on both sides.' } },
    { jp: '芋餡の上に大学芋（3個）を等間隔で乗せて完成。',
      en: 'Place candied sweet potato (3 pieces) evenly on the paste line to finish.',
      point: { jp: '必ず芋餡の線の上に乗せる。縁からはみ出させず、上下も詰めすぎない。', en: 'Always sit them on the paste line; keep them inside the edges and evenly spaced.' } }
  ],
  finish: { jp: '表面がきつね色に飴化し、中央の芋餡の上に大学芋3個がはみ出さず並んでいる',
            en: 'Golden caramelized surface; 3 candied potatoes sit on the center paste line without overhanging' },
  notes: []
},

/* ---------------------------------------------------------------- AS-L-07 */
{
  id: 'as-l-07', code: 'AS-L-07', ver: '1.0', issued: '2026.06',
  name: 'シャインマスカット', en: 'Shine Muscat',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  video: 'uwg8lxcTATA',
  status: { tone: 'start', label: '9月〜',      detail: '秋の新商品（お知らせでは「マスカット」）' },
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
  notes: ['10切れのうち1切れはパンの内側に入れ、残り9切れを上に並べる。']
},

/* ---------------------------------------------------------------- AS-L-08 */
{
  id: 'as-l-08', code: 'AS-L-08', ver: '1.0', issued: '2026.06',
  name: 'いちじく', en: 'Fig',
  serve: 'SWEETS 提供 / SERVE', category: '揚げサンド', limited: false,
  video: '4I8EPbL_Kys',
  status: { tone: 'start', label: '9月〜',      detail: '秋の新商品' },
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
      point: { jp: '少しずつ重ねてずらす。間隔を空けすぎるとクリームが見えすぎる。', en: 'Overlap them slightly; too much gap leaves the cream over-exposed.' } },
    { jp: 'ブルーベリー（6粒）を隙間に散らす。',
      en: 'Scatter 6 blueberries into the gaps.',
      point: { jp: 'いちじくの間の白い部分に置く。片側に偏らせない。', en: 'Place them on the white cream between the figs; do not group them on one side.' } },
    { jp: 'ラズベリーソース（15g）をかけて完成。',
      en: 'Finish with raspberry sauce (15g).',
      point: { jp: 'いちじくの上から線状にかける。全面を覆わず白いクリームを残す。', en: 'Drizzle in lines over the figs; leave some white cream showing.' } }
  ],
  finish: { jp: 'いちじく4切れが斜めに並び、ブルーベリー6粒と赤いソースが見えている',
            en: '4 fig wedges arranged diagonally; 6 blueberries and red sauce visible' },
  notes: []
},

/* ------------------------------------------------------------------ AS-08 */
{
  id: 'as-08', code: 'AS-08', ver: '2.0', issued: '2026.08',
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
  notes: ['このカードだけ VER 2.0（2026.08）。他は 1.0（2026.06）。']
},

/* ------------------------------------------------------------------- 旧版 */
{
  id: 'ice', code: null, ver: null, issued: null,
  name: 'アイスブリュレ', en: 'Vanilla Ice Brulee',
  serve: null, category: null, limited: false,
  video: 'LRvSJbXvQs0',
  videoNote: 'プレイリストの動画名は「Ice Cream Brûlée / アイスクリームブリュレ」。この品の名前（アイスブリュレ）と完全には一致していない。違っていたら差し替える。',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['カスタード', 'Custard cream', '約60', 'g'],
    ['クリミビット', 'Cremibit', '約20', 'g'],
    ['バニラアイス', 'Vanilla ice cream', '約45', 'g'],
    ['キャラメルソース', 'Caramel sauce', '約10', 'g'],
    ['カラメルクランチ', 'Caramel crunch', '約1', 'g']
  ],
  steps: [
    { jp: '揚げたパンの中にカスタードクリームとクリミビットを入れる',
      en: 'Put custard cream and Cremibit inside the fried bread.', point: null },
    { jp: '表面にグラニュー糖をまぶし、バーナーで炙りキャラメリゼする',
      en: 'Coat the surface with granulated sugar and torch it to caramelize.', point: null },
    { jp: 'バニラアイス（45g）を上に乗せる',
      en: 'Top with vanilla ice cream (45 g).', point: null },
    { jp: 'キャラメルソース、カラメルクランチをかける',
      en: 'Drizzle with caramel sauce and caramel crunch.',
      point: { jp: 'キャラメルソース、カラメルクランチはアイスの上のだけトッピング', en: null } }
  ],
  finish: null,
  notes: [
    'このレシピだけ他と用紙のかたちが違う（旧フォーマット）。CODE・VER・完成基準の記載が無い。',
    '手順2のグラニュー糖は、材料欄に分量の記載が無い。'
  ]
},

/* ------------------------------------------- アイス揚げサンド（旧フォーマット） */
{
  id: 'ice-choco-banana', code: null, ver: null, issued: null,
  name: 'チョコバナナ', en: 'Chocolate banana',
  serve: null, category: null, series: 'アイス揚げサンド', limited: false,
  video: 'Wj5VU-r3Uys',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ホイップクリーム', 'Whipped cream', '25', 'g'],
    ['チョコアイス（1個約45g）', 'Chocolate ice cream (about 45 g each)', '2', '個'],
    ['バナナ（スライス）', 'Banana slices', '2', '枚'],
    ['チョコソース', 'Chocolate sauce', '15', 'g'],
    ['カラースプレー', 'Color sprinkles', '5', 'g']
  ],
  cardOutdated: true,
  steps: [
    { jp: '揚げたパンにチョコホイップ25gを入れ、側面全体に塗る',
      en: 'Fill the fried bread with 25 g of chocolate whipped cream and spread it over the entire side surface.', point: null },
    { jp: 'アイスを2つ乗せる（1つ約45g）',
      en: 'Place two scoops of ice cream on top (about 45 g each).', point: null },
    { jp: 'バナナ厚めスライスを写真のように乗せる',
      en: 'Place thick banana slices on top as shown in the photo.', point: null },
    { jp: 'チョコソース、スプレーをかけて完成',
      en: 'Drizzle chocolate sauce and add sprinkles to finish.', point: null }
  ],
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    'カラースプレーは新しい用紙で 1g → 5g に変わっている。ここでは新しい用紙（5g）に合わせている。',
    '材料欄は「ホイップクリーム」、手順1は「チョコホイップ」と書かれている。どちらが正しいか確認が要る。',
    '「レシピカード原本」に出るのは前の版（カラースプレー1g）の用紙。新しい用紙の画像は未登録。'
  ]
},

{
  id: 'ice-matcha-anko', code: null, ver: null, issued: null,
  name: '抹茶あんこ', en: 'Matcha red bean',
  serve: null, category: null, series: 'アイス揚げサンド', limited: false,
  video: 'XRr4N72KUng',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ホイップクリーム', 'Whipped cream', '25', 'g'],
    ['抹茶アイス（1個約45g）', 'Matcha ice cream (about 45 g each)', '2', '個'],
    ['あんこ', 'Sweet red bean paste', '15', 'g'],
    ['抹茶パウダー', 'Matcha powder', '2', 'g'],
    ['黒蜜', 'Brown sugar syrup', '15', 'g'],
    ['きなこ', 'Roasted soybean flour', '5', 'g']
  ],
  cardOutdated: true,
  steps: [
    { jp: '揚げたパンに抹茶ホイップ25gを入れ、側面全体に塗る',
      en: 'Fill the fried bread with 25 g of matcha whipped cream and spread it over the entire side surface.', point: null },
    { jp: '抹茶パウダーを全体にかける',
      en: 'Sprinkle matcha powder over the entire surface.', point: null },
    { jp: 'アイスを2つ乗せる（1つ約45g）',
      en: 'Place two scoops of ice cream on top (about 45 g each).', point: null },
    { jp: 'あんこ15gを垂れるように乗せる',
      en: 'Add 15 g of sweet red bean paste, allowing it to drizzle slightly.', point: null },
    { jp: '黒蜜、きなこをかけて完成',
      en: 'Drizzle brown sugar syrup and sprinkle roasted soybean flour to finish.',
      point: { jp: 'きなこは全体にかけすぎないように', en: 'Do not add too much soybean flour so that the green color remains visible.' } }
  ],
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    '新しい用紙では手順の番号が整理され、5手順になった。ここでは新しい用紙に合わせている。',
    '手順5のPOINTの日本語「きなこは全体にかけすぎないように」は前の版の用紙に書かれていたもの。新しい用紙には英文の注意書きだけが載っている。',
    '材料欄は「ホイップクリーム」、手順1は「抹茶ホイップ」と書かれている。どちらが正しいか確認が要る。',
    '材料欄の「揚げたパン（半分）」の行に「Chocolate」と書かれているが、他の記述とつながらない。原本のまま残している。',
    '「レシピカード原本」に出るのは前の版の用紙。新しい用紙の画像は未登録。'
  ]
},

{
  id: 'ice-vanilla-strawberry', code: null, ver: null, issued: null,
  name: 'バニラいちご', en: 'Vanilla strawberry',
  serve: null, category: null, series: 'アイス揚げサンド', limited: false,
  video: 'Er1oZFpMRbw',
  videoNote: 'プレイリストの動画名は「Jam Strawberry Ice / アイスジャムいちご」。この品の名前（バニラいちご）と一致していない。アイス揚げサンド4品のうち他の3品が決まったため、残りとして当てている。違っていたら差し替える。',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ホイップクリーム', 'Whipped cream', '25', 'g'],
    ['バニラアイス（1個約45g）', 'Vanilla ice cream (about 45 g each)', '2', '個'],
    ['冷凍いちご（1/2カット）', 'Frozen strawberries (cut into 1/2 pieces)', '2', '個'],
    ['いちごソース', 'Strawberry sauce', '15', 'g'],
    ['カラースプレー', 'Color sprinkles', '5', 'g']
  ],
  cardOutdated: true,
  steps: [
    { jp: '揚げたパンにリスホイップ25gを入れ、側面全体に塗る',
      en: 'Fill the fried bread with 25 g of Lis whipped cream and spread it over the entire side surface.', point: null },
    { jp: 'アイスを2つ乗せる（1つ約45g）',
      en: 'Place two scoops of ice cream on top (about 45 g each).', point: null },
    { jp: '冷凍いちごを半分に切り、写真のように乗せる',
      en: 'Cut the frozen strawberries in half and place them on top as shown in the photo.', point: null },
    { jp: 'いちごソース、カラースプレーをかけて完成',
      en: 'Drizzle strawberry sauce and add color sprinkles to finish.', point: null }
  ],
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    'カラースプレーは新しい用紙で 1g → 5g に変わっている。ここでは新しい用紙（5g）に合わせている。',
    '材料欄は「ホイップクリーム」、手順1は「リスホイップ」と書かれている。どちらが正しいか確認が要る。',
    '「レシピカード原本」に出るのは前の版（カラースプレー1g）の用紙。新しい用紙の画像は未登録。'
  ]
},

{
  id: 'ice-choco-strawberry', code: null, ver: null, issued: null,
  name: 'チョコいちご', en: 'Chocolate strawberry',
  serve: null, category: null, series: 'アイス揚げサンド', limited: false,
  video: 'GFgLSeysUcc',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['ホイップクリーム', 'Whipped cream', '25', 'g'],
    ['バニラアイス（1個約45g）', 'Vanilla ice cream (about 45 g each)', '2', '個'],
    ['冷凍いちご（1/2カット）', 'Frozen strawberries (cut into 1/2 pieces)', '2', '個'],
    ['チョコソース', 'Chocolate sauce', '15', 'g'],
    ['カラースプレー', 'Color sprinkles', '5', 'g']
  ],
  cardOutdated: true,
  steps: [
    { jp: '揚げたパンにリスホイップ25gを入れ、側面全体に塗る',
      en: 'Fill the fried bread with 25 g of Lis whipped cream and spread it over the entire side surface.', point: null },
    { jp: 'アイスを2つ乗せる（1つ約45g）',
      en: 'Place two scoops of ice cream on top (about 45 g each).', point: null },
    { jp: '冷凍いちごを半分に切り、写真のように乗せる',
      en: 'Cut the frozen strawberries in half and place them on top as shown in the photo.', point: null },
    { jp: 'チョコソース、カラースプレーをかけて完成',
      en: 'Drizzle chocolate sauce and add color sprinkles to finish.', point: null }
  ],
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    'カラースプレーは新しい用紙で 1g → 5g に変わっている。ここでは新しい用紙（5g）に合わせている。',
    '材料欄は「ホイップクリーム」、手順1は「リスホイップ」と書かれている。どちらが正しいか確認が要る。',
    '材料欄の「揚げたパン（半分）」の行に「Chocolate」と書かれているが、他の記述とつながらない。原本のまま残している。',
    '「レシピカード原本」に出るのは前の版（カラースプレー1g）の用紙。新しい用紙の画像は未登録。'
  ]
},

/* ------------------------------------------------ バナナブリュレ（旧フォーマット） */
{
  id: 'banana-brulee', code: null, ver: null, issued: null,
  name: 'バナナブリュレ', en: 'Banana Brûlée',
  serve: null, category: null, limited: false,
  video: 'kIInFjR8Ww8',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['カスタードクリーム', 'Custard cream', '60', 'g'],
    ['クリミビット', 'custard cream', '20', 'g'],
    ['バナナ', 'Banana', '1/2', '本'],
    ['グラニュー糖', 'Granulated sugar', '10', 'g'],
    ['キャラメルソース', 'Caramel sauce', '15', 'g'],
    ['ミント', 'Mint', '1', '枚']
  ],
  steps: [
    { jp: '図のようにバナナをカットする',
      en: 'Cut the banana as shown.', point: null },
    { jp: '揚げたパンにカスタードクリームを詰め、その上からクリミビットを全体に塗る',
      en: 'Fill the fried bread with custard cream, then spread custard cream evenly over the top.', point: null },
    { jp: 'パンの右側に輪切りのバナナを3つ乗せ、左側に斜めにカットしたバナナを乗せる。その上にグラニュー糖をかける',
      en: 'Place three banana slices on the right side of the bread, and place diagonally cut banana on the left side. Sprinkle granulated sugar over the top.', point: null },
    { jp: '表面をバーナーで炙りキャラメリゼした後、キャラメルソースをかけ、ミントを乗せて完成',
      en: 'Torch the surface to caramelize, then drizzle caramel sauce and place a mint leaf on top to finish.', point: null }
  ],
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    '材料欄で「クリミビット 20g」の英文が「custard cream 20 g」になっており、カスタードクリームと同じ英語表記になっている。原本のまま残している。',
    'バナナの切り方は原本の図を見ること（「レシピカード原本」で確認できる）。'
  ]
},

/* ------------------------------------------------ 追加分（写真は未登録） */
{
  id: 'ichigo-daifuku', code: null, ver: null, issued: null,
  name: 'いちご大福', en: 'Strawberry Difuku(mochi)',
  serve: null, category: null, limited: false,
  video: 'uYjwgyCQF1Q',
  yield: '1個分', kind: 'sweets', oldFormat: true,
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
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    'あんこの25gは、用紙の「中に10g・トッピング15g」を足した数。用紙には合計の記載は無い。',
    '英語表記が「Strawberry Difuku(mochi)」になっている（Daifuku ではない）。原本のまま残している。'
  ]
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
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    '材料欄は「メロン4切れ」、手順1は「12等分カット」。使うのは中に1切れ・上に3切れの合計4切れ。',
    '写真は未登録。用紙の画像が届いていないため。'
  ]
},

{
  id: 'melon-parfait', code: null, ver: null, issued: null,
  name: 'メロンパフェ', en: 'Melon Parfait',
  serve: null, category: null, limited: false,
  video: '23DwD5fM-_w',
  yield: '1個分', kind: 'sweets', oldFormat: true,
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
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    'パイシートは「1枚（48カット）」と書かれている。1枚を48に切り分けたうちの1枚という意味かは用紙からは読み取れない。確認が要る。'
  ]
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
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    '材料欄に「揚げたパン」の記載が無い。他のレシピと同じ揚げパンを使うと思われるが、用紙に書かれていないためそのままにしている。',
    '手順2で「カスタードクリーム」を使うが、材料欄にカスタードクリームの記載が無い。クリミビット（約30g）のことかどうか確認が要る。',
    '英語表記が「Cremyvit」になっている（他の用紙では Cremibit）。原本のまま残している。'
  ]
},

{
  id: 'choco-marshmallow', code: null, ver: null, issued: null,
  name: 'チョコマシュマロ', en: 'chocolate marshmallow',
  serve: null, category: null, limited: false,
  video: 'jo5I4HcVI_w',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['揚げたパン（半分）', 'Fried bread (half piece)', null, null],
    ['チョコレートクリーム', 'Chocolate cream', '70〜80', 'g'],
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
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。'
  ]
},

{
  id: 'sakura-matcha', code: null, ver: null, issued: null,
  name: 'SAKURA抹茶', en: 'SAKURA MATCHA',
  serve: null, category: null, limited: false,
  video: 'NxQi0Cju238',
  videoNote: 'プレイリストの動画名は「sakuramatcha / さくら抹茶」。',
  yield: '1個分', kind: 'sweets', oldFormat: true,
  ing: [
    ['抹茶クリーム', 'Matcha cream', '約80', 'g'],
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
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    '材料欄に「揚げたパン」の記載が無い。他のレシピと同じ揚げパンを使うと思われるが、用紙に書かれていないためそのままにしている。',
    '材料欄は「抹茶クリーム」、手順1は「抹茶ホイップクリーム」と書かれている。どちらが正しいか確認が要る。',
    '材料欄は「イチゴ 1切れ」、手順3は「いちご（1個）」。数え方が用紙の中で揃っていない。'
  ]
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
  finish: null,
  notes: [
    '旧フォーマットの用紙。CODE・VER・完成基準の記載が無い。',
    'カダイフミックスは仕込み（まとめて作る）。1個分に使うのは約35g。'
  ]
}

];
