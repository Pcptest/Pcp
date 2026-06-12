const CACHE_NAME = 'pcp-portal-v1';
const urlsToCache = [
  '/Pcptest/',
  '/Pcptest/index.html',
  '/Pcptest/logo.png',
  '/Pcptest/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
