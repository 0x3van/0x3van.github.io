var GHPATH = '/0x3van.github.io';
var APP_PREFIX = 'epwa_';
var VERSION = 'version_002';
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/app.ea157e18.css`,
  `${GHPATH}/css/404.1d2c4aa3.css`,
  `${GHPATH}/css/about.9c65333d.css`,
  `${GHPATH}/css/admin.d19cd596.css`,
  `${GHPATH}/css/work.5187ca25.css`,
  `${GHPATH}/img/encretard_white.png`,
  `${GHPATH}/img/gc.jpg`,
  `${GHPATH}/img/blue.png`,
  `${GHPATH}/img/c.png`,
  `${GHPATH}/img/bg-mario.55940065.png`,
  `${GHPATH}/img/iuri-de-paula.16d3bf63.png`,
  `${GHPATH}/js/app.d629961d.js`,
  `${GHPATH}/js/`

]

var CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        console.log('Responding with cache : ' + e.request.url);
        return request
      } else {       
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i] );
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})

if (navigator.serviceWorker) {
  navigator.serviceWorker.register (
    'sw.js',
    {scope: '/0x3van.github.io/'}
  )
}