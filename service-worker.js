"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fc6107e9b4ff842afed966af47181613"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.c677b64a.chunk.js","3a93655aa7fd915996bfb1d868b0ddab"],["/static/js/1.5a5d8a05.chunk.js","7613ae5cf04d1465f000d4afe0a7b53c"],["/static/js/10.06256cc4.chunk.js","56360579ab8ac8b1340dc267d79aed71"],["/static/js/11.716bf5bc.chunk.js","2880bec426ce1b09434d9d8ad99020b9"],["/static/js/12.12199232.chunk.js","9de8f2701f7755d53d6add2c6a19e22b"],["/static/js/13.92dcac3d.chunk.js","0e959709c4e9d8da66ddc7fddb8546b3"],["/static/js/14.7ce0c7a2.chunk.js","fca98521b122c12b0e7014690d309829"],["/static/js/15.ce47ef26.chunk.js","f6b74874fe9189568fd574dd8d632da8"],["/static/js/16.47ee857c.chunk.js","e91ad90f2c4426846ccf32e3cdb33b6e"],["/static/js/17.cfcd6825.chunk.js","8b10315833f75ae41a25d55ace9efe46"],["/static/js/18.96e924ea.chunk.js","66a34be2c2b1ab7b29826ee2ef5a49a3"],["/static/js/19.328053ad.chunk.js","f74bd85dfcdc2baeaf577b9daf376a90"],["/static/js/2.1f205756.chunk.js","e62e5387eac3f853d0f95e8156b2a19f"],["/static/js/20.8c73683d.chunk.js","d8817db7c99031b36c171c3a4f359045"],["/static/js/21.071b1c69.chunk.js","c664630323db5af0255a9202bd12dec9"],["/static/js/22.f86a3ec0.chunk.js","ba0ca7413644e9e5b9e096d8d20350b9"],["/static/js/3.4705fb2d.chunk.js","22d0a1742858a8f0dcf71cb6cdf3a55f"],["/static/js/4.c9a06337.chunk.js","cce7e3c193e976a4d02bcf42413ba33e"],["/static/js/5.daee125a.chunk.js","7f01eb0d6ba13b3871032d64683340d9"],["/static/js/6.27cb4c49.chunk.js","338fee3cde0beb0cd0e1943049ea6d1e"],["/static/js/7.ac8f8699.chunk.js","625397201475d1ab2cf96dab068ee1c1"],["/static/js/8.f02a6d9f.chunk.js","726055aa33d52f10e128b9486615cb9b"],["/static/js/9.5c5150de.chunk.js","c0750720d8d1050b0c6e84a64b9ab0d7"],["/static/js/main.a3acb5a4.js","70744e339248c1e192bdd69f2e26910b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});