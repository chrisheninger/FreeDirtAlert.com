"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","15851db339b3131f2383b77aec2c55f7"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.681f526c.chunk.js","19b4bdc6b9027e58776337245390350a"],["/static/js/1.9c776851.chunk.js","7d7d2174417fb8d60d12b25e48f4098e"],["/static/js/10.bb0220b0.chunk.js","3644ea7a7828f765e5371c07583b6f56"],["/static/js/11.d17270da.chunk.js","54c7ca2a2096a852d5a88ddcea2174fd"],["/static/js/12.5de44c41.chunk.js","ea7731b1a7a4b20cbc47aa9eb39a4fba"],["/static/js/13.e70477ca.chunk.js","20bd152374f6b78b6214d00ea282bba5"],["/static/js/14.d4af0122.chunk.js","d11663cd5b733d81ddea04b051f1964a"],["/static/js/15.1883393b.chunk.js","9d85c868de5259a94cd22261b2ac39cc"],["/static/js/16.1def93d3.chunk.js","2b653c349b595cf154bc41efa5f61add"],["/static/js/17.8cd5833e.chunk.js","278e48ab9c511ccfe5e7cfea1ffd0d54"],["/static/js/18.3d0a5cb6.chunk.js","0bee1290f145ea4bde7c5fb68803dca2"],["/static/js/19.27b42a73.chunk.js","7568bb157c9567d0283e7ae82fa3116b"],["/static/js/2.1cfc3d45.chunk.js","6fce020fc4519c5e225bf7df941e674e"],["/static/js/20.9faf5b45.chunk.js","9560673ba67ad49a1f18253317d672ae"],["/static/js/21.27f6cf78.chunk.js","14f0fec33e4a038b81a5f705cafef6c8"],["/static/js/22.ca8fa7d8.chunk.js","d800c2c0fd0ed68f11ae8ff8413f1944"],["/static/js/3.d871e0ff.chunk.js","a15c79b5ec59472b77d90c55bee11568"],["/static/js/4.c759a52a.chunk.js","d9a91341e3b22167fe810c43f28c2fcc"],["/static/js/5.a1485cf4.chunk.js","17869218d108b0b4693d84b75ace934a"],["/static/js/6.dcb5f064.chunk.js","c90cda3ae215137befa4a645f1934756"],["/static/js/7.49341a71.chunk.js","46e9426547a0d666d223bcd550009b05"],["/static/js/8.a330d5f6.chunk.js","3e7bd48dc36a190d636e336dda529695"],["/static/js/9.122f5648.chunk.js","b487882b44d4f65a8f0875e11e639e16"],["/static/js/main.cf90b552.js","76f3ea6e481792cde4bf5ff8ee23d717"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});