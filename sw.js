// ==========================================
// 🛰️ RIKMAKERSHUB PROGRESSIVE OFFLINE PROXY ENGINE
// ==========================================
const CACHE_NAME = "tet-vault-v1";
const ASSETS_TO_CACHE = [
    "/TET-For-Teachers/index.html",
    "/TET-For-Teachers/style.css",
    "/TET-For-Teachers/script.js",
    "/TET-For-Teachers/manifest.json",
    "/TET-For-Teachers/teacher.png",
    "/TET-For-Teachers/planner.html"
];

// Ingesting files into the device storage layer automatically during install
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("[PWA Engine] Syncing static asset payloads to local disk...");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Intercepting network requests to serve cached assets offline instantly
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
