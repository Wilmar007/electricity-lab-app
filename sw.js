const CACHE_NAME = "electricity-lab-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./circuit-builder.html",
  "./series-circuit.html",
  "./parallel-circuit.html",
  "./power-energy-simulator.html",
  "./electric-charge.html",
  "./ohms-simulator.html",
  "./script.js",
  "./style.css",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
