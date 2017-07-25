"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","1c1f3bbdc9370e6a9d9130574287f4f1"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.1f437c2a.chunk.js","2e70e80851840546a70b903c5736bc41"],["/static/js/1.97992b83.chunk.js","fedc0d3e721c0698736eaaa98abc0777"],["/static/js/10.9a6f7eb0.chunk.js","d1e334bc2f769556a95424ed4b1115b1"],["/static/js/11.d31a33e8.chunk.js","a16199e086acd59de5fa8e20f8282fa8"],["/static/js/12.1a24500b.chunk.js","5d66a0d0716f7353d04a1b101c093013"],["/static/js/13.67e27c95.chunk.js","f1948e2918443448b57bc0971f077f9e"],["/static/js/14.af52b192.chunk.js","77b79ad0511e89f5cf07d84374222da7"],["/static/js/15.69a0da57.chunk.js","96be86a93f11ed6ddf5e0f9bbaafd1e6"],["/static/js/16.5a286a92.chunk.js","bcf90dfd55c0169d0f9dc0a4ec584b31"],["/static/js/17.72b4de7a.chunk.js","dd525e41be960b22bea5265aa5c9ac1e"],["/static/js/18.25f6d2a5.chunk.js","9412a452ec9a7eccb874b2908f6565f1"],["/static/js/19.afccdff2.chunk.js","008b724d434a5386c50b559027603ed3"],["/static/js/2.25ea7182.chunk.js","e8322de4848a8c8b6c01662ba43cc736"],["/static/js/20.07fb285c.chunk.js","1cc0f4c0e2e23bb5b5fd4ce5480481a0"],["/static/js/21.9b76f490.chunk.js","adaf43931c7ae4c7ec8624a25d491456"],["/static/js/22.2c0ea520.chunk.js","9761fa5e42b50453c5a703cf300a7e79"],["/static/js/3.a5057623.chunk.js","e31e489f76124bb74b35e263f9e190eb"],["/static/js/4.ee00f222.chunk.js","6df6972a57c1d65e2a4ae4e5d4b97e21"],["/static/js/5.e6107546.chunk.js","1daa0bc9b2c558dbccfa6d6942863698"],["/static/js/6.4205412a.chunk.js","dde6d9b4cf77a75f0fb3ca9ace3b999a"],["/static/js/7.ad376fe3.chunk.js","f143cbf61e44592eb477ab649bd1968b"],["/static/js/8.6057baa0.chunk.js","b39dd23ca402d5d95802de59604b4c6f"],["/static/js/9.1355b2d5.chunk.js","c71235893fa7da34dd39b1f1f085b662"],["/static/js/main.62a11154.js","431ed4fa3d1e75429ef5ec47884d04ea"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});