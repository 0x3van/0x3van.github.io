// Change this to your repository name
var GHPATH = '/evannnns.github.io';
 
// Choose a different app prefix name
var APP_PREFIX = 'epwa';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/app.ea157e18.css`,
  `${GHPATH}/js/app.d629961d.js`,
  `${GHPATH}/css/work.5187ca25.css`,
]