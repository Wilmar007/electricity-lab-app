const CACHE_NAME = "electricity-lab-v3"; // 🔥 bump version

const urlsToCache = [
  "./",
  "./index.html",

  // Simulators
  "./circuit-builder.html",
  "./series-circuit.html",
  "./parallel-circuit-simulator.html",
  "./power-energy-simulator.html",
  "./electric-charge.html",
  "./ohms-simulator.html",

  // ✅ QUIZZES (ADD THESE)
  "./series-quiz.html",
  "./parallel-quiz.html",
  "./power-energy-quiz.html",
  "./electric-charge-quiz.html",
  "./ohms-quiz.html",
  "./teacher.html",

  // Magnetism
  "./simulators/magnetism.html",
  "./simulators/magnetism-part.html",

  // Assets
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
