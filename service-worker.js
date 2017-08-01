"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ad86eeddecf70a8931f22d4a77dfd9cb"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.e41302e3.chunk.js","e9213b35829d3797a93cbce437f5e767"],["/static/js/1.92de66a3.chunk.js","1aefd2a9a958c341608f4ce9401a2a7c"],["/static/js/10.e8b62173.chunk.js","91b2ffa38d14cd512fcf4ed3d6e6e502"],["/static/js/11.8c49b93b.chunk.js","cfe7acf9fbfab29c9f0f772b8d1e9178"],["/static/js/12.84831db3.chunk.js","706c3cf19c7841417fdedb4cfaa234f3"],["/static/js/13.4a91a9fb.chunk.js","54d8b45d93b1e8939fe0483f8cdf3492"],["/static/js/14.a656e26a.chunk.js","a1a7730806e77d98c80872274d59c9b1"],["/static/js/15.6004e3a8.chunk.js","c715d7332addfcb57f7ba216e1f2a437"],["/static/js/16.331fb242.chunk.js","ffeb8b879101269d90f7637ed94e2733"],["/static/js/17.3b6a22f9.chunk.js","39c9802ea8683fd9c6435733777e3625"],["/static/js/18.78ce51d4.chunk.js","bcb6edadc8e39c2072e5921ad4cd02be"],["/static/js/19.31f74559.chunk.js","a2eca1d82842779355398ae723715826"],["/static/js/2.e970bb5a.chunk.js","3050db9bb8ea0c0ce4e0a898fe423f3a"],["/static/js/20.30acd606.chunk.js","8141c67841347afb21fdb4d92597b700"],["/static/js/21.f8f6e973.chunk.js","602b534ed1485f37476b2421fe489e85"],["/static/js/22.71ffd09c.chunk.js","3144f925dd33b60ad12ee9cde4f11864"],["/static/js/3.8c0f7792.chunk.js","bcac9a7496fefae4af53c3433fbef8b0"],["/static/js/4.6ad37d03.chunk.js","f345579aff58146185ec6177783a9744"],["/static/js/5.7f3d5f02.chunk.js","91d40649b4c5ac42f4142dc0bfd9588a"],["/static/js/6.a0db0805.chunk.js","519129c99d607a6fd16f27de77664610"],["/static/js/7.46d9ac8d.chunk.js","e123f7883affd0202899238456b1314f"],["/static/js/8.7c07a80d.chunk.js","406519252259f3849183be96fac5b2a6"],["/static/js/9.a029e2a0.chunk.js","04614ded9195ea02e46056916a31e557"],["/static/js/main.ecc70b78.js","8ad9342ad81e7e2ca858c52b715a9d29"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});