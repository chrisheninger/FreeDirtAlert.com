"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","12b9cf977ed3b61f979f95d2b2604193"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.f0109bbd.chunk.js","d8ab2a9c1c66b60f2b7a2e64647cd14b"],["/static/js/1.77110c06.chunk.js","31b46b27ccf092f3b5ddd8e607a025ba"],["/static/js/10.97a550f4.chunk.js","48bbed4f608211f6602f786aba81069b"],["/static/js/11.7ebd716f.chunk.js","c0b17ea153590946b6466b1992c2306a"],["/static/js/12.f6a52a88.chunk.js","aad5add357801cf81fb0ddffdf89e04c"],["/static/js/13.ab7050b3.chunk.js","b2800470af9a6765c93fde11dd115239"],["/static/js/14.8c4e395e.chunk.js","16342a888fdbe644724a79152107048c"],["/static/js/15.6e7e163f.chunk.js","891ed8878c581920d1c1ba7b4b2a5931"],["/static/js/16.ae043774.chunk.js","b751644ecb9be5225b945626eb87dab3"],["/static/js/17.591b9655.chunk.js","09e1973114933c415ce5ff552781da35"],["/static/js/18.c24df725.chunk.js","8fdf1e6b7d0cd1a23e28d202907fd6e8"],["/static/js/19.f3f6a350.chunk.js","37b2d4a171483ddc014d695667850edf"],["/static/js/2.c67b2b10.chunk.js","9cf2ea9c703ec22932fffbcf8837a4ad"],["/static/js/20.060367a0.chunk.js","ed0808cfa068a867a9b3de2e1fb2805d"],["/static/js/21.5c8c8ec3.chunk.js","131c77202b63d9da3b6948e728557252"],["/static/js/22.a7262a24.chunk.js","7ba988bd7f0d44d70fdb7daac42e798a"],["/static/js/3.c7cd6eed.chunk.js","9b17a4b40821da60936d12effc20d65f"],["/static/js/4.f96093c8.chunk.js","f9828385281467c5b4780c4188eb1585"],["/static/js/5.2a9d4744.chunk.js","2ad8a738aa69b924dc64678a8fbc7ca6"],["/static/js/6.4999ece3.chunk.js","613613addcd0b2aa2d06c1dace961957"],["/static/js/7.f6c3e5f9.chunk.js","fbd60bf789f35b400968ecd2daafa37f"],["/static/js/8.a0f41201.chunk.js","cae0ab362c6435402d70ae14b47bd283"],["/static/js/9.c91e4aaa.chunk.js","20ed2a4536fc351c8917d7422c9f3e7e"],["/static/js/main.7a2ba79e.js","76ba7667b69873ac88873d46a07390ce"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});