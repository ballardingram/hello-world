const CACHE_NAME = 'Hello-World-version_01'
const FILES_TO_CACHE = [
    "./index.html"
];

// Installation
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened Cache');

            return cache.addAll(FILES_TO_CACHE);
        })
    )
})

// Listen for Reqs
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((request) => {
            if (request) {
                console.log('Responding with cache: ' + event.request.url);
                return request
            } else {
                console.log('file is not cached, fetching: ' + event.request.url);
                return fetch(event.request)
            }
        })
    )
})

// Activate Service Worker
self.addEventListener('activate', (event) => {
    cacheAllowList = [];
    cacheAllowList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheAllowList.includes(cacheName)) {
                    return cache.delete(cacheName);
                }
            })
        ))
    )
})