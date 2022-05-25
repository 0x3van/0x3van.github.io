if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then((registration) => { 
         // The registration was successful       
      })
      .catch((err) => {
         // The registration failed
      });
  } 

  var urlsToCache = [
    '/index.html',
    '/css/app.ea157e18.css',
    '/js/app.d629961d.js'
  ];
  
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache')
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
  });


  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // The responce is in the cache
          if (response) {
            return response;
          }
  
          // No cache match, we attempt to fetch it from the network
          return fetch(event.request);
        }
      )
    );
  });