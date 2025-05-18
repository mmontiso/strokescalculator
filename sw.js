const CACHE_NAME = 'circulation-calc-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './sw.js',
  './icons/192.png',
  './icons/512.png'
];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)))
);

self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
