self.addEventListener('install', function(e) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
});
const CACHE_NAME = "castings-app-v1";

const urlsToCache = [
"/",
"https://www.castingscinetv.com/",
"https://www.castingscinetv.com/search/label/M%C3%A9xico",
"https://www.castingscinetv.com/search/label/Argentina",
"https://www.castingscinetv.com/search/label/España"
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
