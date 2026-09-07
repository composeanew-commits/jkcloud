// JK Shiurim Library -- Service Worker
// Strategy:
//  - App shell (the HTML page itself + icons): cache-first, so the app opens
//    instantly and works offline once installed.
//  - Data requests (the shiur index JSON, audio streaming, etc.): network-first,
//    so listings stay current; falls back to the last cached copy if offline.

const CACHE_NAME = "jk-shiurim-shell-v1";
const APP_SHELL = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only handle GET requests; let everything else pass through untouched.
  if (req.method !== "GET") return;

  const isAppShellRequest = APP_SHELL.some((path) =>
    req.url.endsWith(path.replace("./", ""))
  );

  if (isAppShellRequest) {
    // Cache-first for the shell: fast open, works offline.
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
  } else {
    // Network-first for data (shiur index JSON, audio, etc.):
    // always try fresh, fall back to cache if the network fails.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req))
    );
  }
});
