"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a2faabb63634269e6b6e699cf8087b58"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.f989ad1d.chunk.js","906a3891839a76ef90fbce5120c7e253"],["/static/js/1.735a56db.chunk.js","069d986aa4f3a06229728f94fed19008"],["/static/js/10.f7745a52.chunk.js","61b239e74427202f6b070bb622aa919e"],["/static/js/11.7ed3109a.chunk.js","b4076e88eb33ec76076043263e9036a0"],["/static/js/12.9552f27c.chunk.js","96f0fc2c64199a13fa5a50f4f7b032ff"],["/static/js/13.60a240bb.chunk.js","4ad7849619e21828fd55e253ba73e927"],["/static/js/14.122931f4.chunk.js","1b87386b4279194881af5e0c92e4b13d"],["/static/js/15.b6f1e785.chunk.js","2562cf6bdef04ded66f2377b0135b8f2"],["/static/js/16.b30dbb55.chunk.js","14d22e3764b870bb41f9f06d22a1571e"],["/static/js/17.5b997c73.chunk.js","81eccbdd3b1a6f21ae779a97014f0747"],["/static/js/18.3bb700ad.chunk.js","3d9efe8b224c76b7bd9110cd1c462689"],["/static/js/19.c7b370e1.chunk.js","c0f610c4c7649a7919f3130e13f5ae78"],["/static/js/2.40eef83a.chunk.js","6824783f021779015c2dee2b698021b8"],["/static/js/20.84f4f003.chunk.js","bcdb49239f806dcc9b1daa1681978e68"],["/static/js/21.b6c68dff.chunk.js","09b441f7b230c1e6358dbdf076960bc1"],["/static/js/22.0624344a.chunk.js","745e5d84493875f69221b98c0a987197"],["/static/js/3.f24d37fc.chunk.js","cc36156f174cd080b1c79eb1fe92b22f"],["/static/js/4.22ed95d8.chunk.js","23d21885d59a6e9a82fd373b3419b175"],["/static/js/5.f37fee6c.chunk.js","5e7de804a697390cf91886e1c1eba393"],["/static/js/6.9d2486e8.chunk.js","dda9fe0abe5cb0a3e914d4e6235ac518"],["/static/js/7.0110d097.chunk.js","aa5494b69b83a62370d9f89c977293da"],["/static/js/8.4c99871d.chunk.js","728b88528d06b49261e136086eab2149"],["/static/js/9.5b493542.chunk.js","9115a4ace48f226e772a8325d025ad92"],["/static/js/main.aa3679e6.js","4251bb5be418d80e4de0d9466c18e515"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});