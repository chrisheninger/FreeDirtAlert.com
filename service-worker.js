"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6f7718ecd6fc591c5ddcf8f8dc534421"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.aaa89d4f.chunk.js","1f1f2a795740430289f54df05ed5aad3"],["/static/js/1.22654485.chunk.js","b451e8d0c684a4d9f3ec6880f2c54cfe"],["/static/js/10.e11601f6.chunk.js","9bbafe29ee6e5ae825825c5bb62f21db"],["/static/js/11.e45fa923.chunk.js","15beeaff7a7c7c3644b0d783bbd76e2e"],["/static/js/12.26ecd74b.chunk.js","3f1681c3ef673a47221df9a4b715c601"],["/static/js/13.3a5a4488.chunk.js","e07031dcf15d03bfee14aa34c44cd683"],["/static/js/14.91a00d4b.chunk.js","1171c90842679cffa909436b3276c7e0"],["/static/js/15.8c906aec.chunk.js","5c91f4442da4553c552d11a3d1a87e40"],["/static/js/16.686c742a.chunk.js","c4e6f74e78c9da21bbebdb2e8eb708af"],["/static/js/17.2631b773.chunk.js","6cb286c84f4de3a4597bdf3889339227"],["/static/js/18.a25915b9.chunk.js","53b8bbd0f773a17ddd018bf19a35d4a2"],["/static/js/19.7f7ea053.chunk.js","4e312ea8e6a25218119b75a0fa3cc60e"],["/static/js/2.9833a8d9.chunk.js","d1f39215e4496c072859009c68cd82cc"],["/static/js/20.1e7e0d5f.chunk.js","75c9616906dfeb749854aa528ff7f296"],["/static/js/21.6a40bb9e.chunk.js","3077527a4da6e5a721787435f85c6142"],["/static/js/22.4e0dfa7c.chunk.js","98837c25ae96367b045717025c1dee20"],["/static/js/3.52816d53.chunk.js","56ede4e7e937d9f458a44c6907e40af1"],["/static/js/4.e99d2afb.chunk.js","6ed8bb4284ced45a8510c2186ce32d94"],["/static/js/5.9235ddce.chunk.js","571d325fd41e06f77d1b94c223ead382"],["/static/js/6.cc0c3064.chunk.js","bd97981063ff820e532ad4da3ebd429b"],["/static/js/7.34ccb7c1.chunk.js","f3ffdd6b1512c2c0340cb80293b13bfa"],["/static/js/8.afc8bad9.chunk.js","859f1c571af1d6f9ff6d5d5f190d00d7"],["/static/js/9.7b222255.chunk.js","817f3a82103736dab087dac604ecaf44"],["/static/js/main.6b19d8e4.js","865217ccd63474467740231fbe4424b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});