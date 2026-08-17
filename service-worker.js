// v3: la app se puede instalar, pero siempre abre la versión nueva de Vercel.
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});
