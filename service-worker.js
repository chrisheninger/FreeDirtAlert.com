"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b29f5b7a61b4e80a02987e2b9298dc73"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.fe70ae77.chunk.js","9518b4525c42caeaedbb9691aa58f0eb"],["/static/js/1.8dd21576.chunk.js","af50c25ad29c8f704c162b596149f27f"],["/static/js/10.fdd48f37.chunk.js","a029a931ebb5732e49af7e0ad59245b4"],["/static/js/11.361b3c97.chunk.js","ca015f984b1b9fa29ebdb6ac650fe854"],["/static/js/12.86253ef4.chunk.js","675d58cc932d2596550f1c008733db1c"],["/static/js/13.54be9334.chunk.js","fc7e22ab7895475c46215ae2ce78178b"],["/static/js/14.5db2a391.chunk.js","3add66e31dd3284b4791ff433fece3f2"],["/static/js/15.9824ac5e.chunk.js","7d1d120484cc8bf99ef736eddf2b7513"],["/static/js/16.c12a1c4b.chunk.js","c568fb2a09ef7d733846d8faeac0c30d"],["/static/js/17.b944b49b.chunk.js","26d498769e0f794e9f00d901b83a68b7"],["/static/js/18.5f4f848a.chunk.js","3a98f3ef7ff39ee021b031c691c7394a"],["/static/js/19.1c714a5a.chunk.js","9210dd17f6c8f9ed0141614ec82eb6f7"],["/static/js/2.c2d24049.chunk.js","49494fdcbaacbb8469f58289a13adb21"],["/static/js/20.e7c9ed60.chunk.js","7cd77b5b5ceefd717303953312aa7a46"],["/static/js/21.c91c92d0.chunk.js","7d016099a48184e64a3f1a04c5a644c4"],["/static/js/22.cead1fc3.chunk.js","950e3def7d0a42b6e3704820b4452d0f"],["/static/js/3.0d8b927d.chunk.js","4c8fe3a1d2a8e05e10cc68382f0525fb"],["/static/js/4.2e38c0e8.chunk.js","c7494ba37b97f2ce0860c26aa15cc571"],["/static/js/5.d731936d.chunk.js","f28546e1cce9786d24e5726147418fe6"],["/static/js/6.c3850885.chunk.js","b146fc4b4489d32cb19cc2fd8035d3ba"],["/static/js/7.6a964917.chunk.js","5f13b3e28b91ad0396694ad61997f24a"],["/static/js/8.4432c289.chunk.js","8e328a5ad3e85ab1790c6b00ee5d5bc0"],["/static/js/9.00990288.chunk.js","569ac3f00989883a5bd644ffe13b8825"],["/static/js/main.78808243.js","6b0b89cab754e95f014d475654ffe443"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});