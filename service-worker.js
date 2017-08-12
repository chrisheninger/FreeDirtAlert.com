"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","966d63ddba24104721b3f7ab49f69ddf"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.78148003.chunk.js","0d87e3024e81f467629c37b8b14105ef"],["/static/js/1.cb472ea8.chunk.js","854b215493034d9fdd80a5e9c3884c04"],["/static/js/10.6c31de90.chunk.js","77a29d1af20f7bd21594fb53f9ff41cc"],["/static/js/11.eb75fea5.chunk.js","1f5dc20a6d556f7a59abb4889a1104ee"],["/static/js/12.919176db.chunk.js","082caada592e9e91db3e2aad8ecd21c9"],["/static/js/13.e2b790a8.chunk.js","48fb9082f846b79da3ad790d03777532"],["/static/js/14.941a3bc4.chunk.js","a9e993c7285d71b7e51f4ad1325c73f0"],["/static/js/15.38657c2e.chunk.js","c0ee2beace80baaa4aabb486eb4fd51d"],["/static/js/16.8d76db1a.chunk.js","baa5593e830ef87103b1b01669e08712"],["/static/js/17.ec5b2bbe.chunk.js","775cc08a31fba197b76a559fa1caa794"],["/static/js/18.33d4d0ad.chunk.js","61f1f8101dc0912a13064fd245e4d0e9"],["/static/js/19.e0dc2446.chunk.js","52fad64d445c64479f8bad4b53589f20"],["/static/js/2.0305d20b.chunk.js","5bda1435e7be37384170bece4f0a2d50"],["/static/js/20.29614b3b.chunk.js","138245055d116b5a731336bd92a786bf"],["/static/js/21.103d238a.chunk.js","c730a9c82d3efcb611a249ce6aad6ad2"],["/static/js/22.dc1d4fa0.chunk.js","b32392edbbd20b35c9604f7400d859c3"],["/static/js/3.f407545f.chunk.js","6a94cd037220100e4db57fd5774787be"],["/static/js/4.b1d5def0.chunk.js","203c4a05d9f36cfc25fc82d280cc42b0"],["/static/js/5.c4af8d99.chunk.js","cb11f7ba20f41baacc84c138cbe70343"],["/static/js/6.fc82eb37.chunk.js","0c4d9206b577f56b6027060496c4d602"],["/static/js/7.75e4af20.chunk.js","282a205fd2b500563a25201dc7012a90"],["/static/js/8.b701fe83.chunk.js","5816d27a35d1bd7bcef0ef40d2398aee"],["/static/js/9.3ce65e43.chunk.js","d90afcf198b3d19319a3104de4df95f3"],["/static/js/main.c04a9173.js","f82a50f23cc1df85d530af0b6e1d070d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});