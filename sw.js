const CACHE_NAME = "electricity-lab-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./circuit-builder.html",
  "./series-circuit.html",
  "./parallel-circuit-simulator.html",
  "./power-energy-simulator.html",
  "./electric-charge.html",
  "./ohms-simulator.html",
  "./script.js",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
