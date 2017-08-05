"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ec348949745dc090515ef09720b11549"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.939d07d8.chunk.js","2a2396f4f4684134d7b0c60b7e06386e"],["/static/js/1.bfa631d5.chunk.js","69b67458d8f7a6b867bd463d881ec307"],["/static/js/10.4a7f6b3a.chunk.js","7e1c93f1c910193c9dafce98dbd6741b"],["/static/js/11.b15d5bd6.chunk.js","2ecf587e8cd062aa2ef0c8ec05166143"],["/static/js/12.2e56edbd.chunk.js","aa4c812747b446014732914b9938327a"],["/static/js/13.15401a96.chunk.js","c6d6d83d1b4ab2ae3841fc6415fdcf3d"],["/static/js/14.b77713fc.chunk.js","da7d41a42196e01718fa37fac44ccba1"],["/static/js/15.84768ba8.chunk.js","9446621bad328f2c4fa0b9ecb7ba7dde"],["/static/js/16.06a2a09a.chunk.js","e2133d3d7d7f6b69a228adff11632821"],["/static/js/17.8cae6577.chunk.js","e2b5440dc75ff5e0654841a4e91a9d75"],["/static/js/18.e4eddbad.chunk.js","aa0e98f36271f5db65df87b533b82555"],["/static/js/19.46e54656.chunk.js","f29adedd459ef44226eaf8e754dbe719"],["/static/js/2.9d94f3cf.chunk.js","8eefe97393ded4ae9400949ca36c948e"],["/static/js/20.269d07c7.chunk.js","c7c87312a3b8766bdc23f0f4e7541e07"],["/static/js/21.d2b4244b.chunk.js","3d72529f654ef4a6458d50a90383d90f"],["/static/js/22.174772c6.chunk.js","25d3786b33fdc11f526ab8ef500c05fc"],["/static/js/3.db0388b0.chunk.js","c86ae3ba4f90f8cb33f7c96a55e01c1b"],["/static/js/4.aa7b384e.chunk.js","c0b49775275ebfb7fa97ae9659e1c330"],["/static/js/5.c2729716.chunk.js","84b0b335a83f14e3a1e57402b608016a"],["/static/js/6.b6132456.chunk.js","516c386f4a333a3176e56b787ffdd659"],["/static/js/7.70f817e6.chunk.js","f539d1f161871011bb8381b21bbec880"],["/static/js/8.913cada4.chunk.js","a27b8ccb5933f28961a07fd4397ebbb4"],["/static/js/9.a2f5521a.chunk.js","a9c5c5cc24cef1def65289275b2b561f"],["/static/js/main.374c2388.js","a3668f52f9f7826635517a1d5b665f26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});