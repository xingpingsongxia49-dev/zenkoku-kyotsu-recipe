/**
 * STARLIST 8 サービスワーカー。
 * 一度読み込んだ画面と画像をスマホに残し、オフラインでも開けるようにする。
 * - 画面（HTML）: ネット優先。オフライン時だけキャッシュで開く（更新が届かなくなるのを防ぐ）
 * - ハッシュ付きの静的ファイル（JS・画像）: キャッシュ優先（内容が変わればファイル名も変わるため安全）
 */
const RUNTIME = 'starlist8-v4';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== RUNTIME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // 画面を開く操作：ネット優先、オフライン時はキャッシュした index.html でSPAを起動
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME).then((c) => c.put('/index.html', copy));
          return res;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // 静的アセット：キャッシュ優先＋裏で保存
  if (
    url.pathname.startsWith('/_expo/') ||
    url.pathname.startsWith('/assets/') ||
    /\.(png|jpg|jpeg|svg|webmanifest|ttf|woff2?)$/.test(url.pathname)
  ) {
    e.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(RUNTIME).then((c) => c.put(req, copy));
            }
            return res;
          })
      )
    );
  }
});
