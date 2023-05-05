// Service worker script
const CACHE_NAME = "v1";
const ASSETS_TO_CACHE = [
  "/icon-144x144.png",
  "/icon-192x192.png",
  "/icon-256x256.png",
  "/icon-384x384.png",
  "/icon-512x512.png"
];

this.addEventListener("install", event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Cache opened!");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

this.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request);
    })
  );
});
