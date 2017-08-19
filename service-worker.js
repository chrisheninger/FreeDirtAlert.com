"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0f4aec2bedaab044a91578009eb861dd"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.66835224.chunk.js","921035c12020b3b4f3eaf0029ce918d9"],["/static/js/1.5c4ef05c.chunk.js","ae5f9b779ace1950483b6313b2fec10a"],["/static/js/10.1e23e815.chunk.js","3bc9d0a55f60474e932bda51b35d5749"],["/static/js/11.a1f43710.chunk.js","ac94a1d086f4cb276eb11493ea5b0ec3"],["/static/js/12.450336f3.chunk.js","cc75e7e72d1dfcf9a9928fac0835984f"],["/static/js/13.4af0599d.chunk.js","c7f35e7cd00519f362d8304cf76465b6"],["/static/js/14.e3936504.chunk.js","8a44dce8ca9854848214a1029edc2563"],["/static/js/15.a9f5beea.chunk.js","ead6720cc539ba61fc9efb0a5b4d1c72"],["/static/js/16.d1e45096.chunk.js","cc65bae378c5e55edb0daed4f7cf53bb"],["/static/js/17.ff3de98a.chunk.js","3f28f0493aa914b0b898c004d5a188a9"],["/static/js/18.2ba60830.chunk.js","3cf3f53b502dd250124742ddde885cf1"],["/static/js/19.a8875f3f.chunk.js","bc6c81b63b57b9c6468347f2a636dde7"],["/static/js/2.ad3d674e.chunk.js","592120cbd7a25d86a6c6d41a184fb323"],["/static/js/20.2ae4ea5b.chunk.js","4dc8e5544bdf5186f1c0db627fe2dc78"],["/static/js/21.e4461a02.chunk.js","d51a296a27dbbf207646daca0dbea670"],["/static/js/22.49910648.chunk.js","730248d06e01c5c235f5d30d6f41fbc2"],["/static/js/3.53f8cb41.chunk.js","17862e7bf562cf1ff2105d0b09b84dc6"],["/static/js/4.d47da7bc.chunk.js","9d12f066968cb1ba6d6eadfeb08f85fb"],["/static/js/5.176374a1.chunk.js","c186f321721aa49a0bc5a0820ad67ff4"],["/static/js/6.b627af45.chunk.js","ba6cd09cdf7fb8ca5872265cf041297b"],["/static/js/7.b4c1ff6b.chunk.js","25cff943bcde2adb31762fc3b804e091"],["/static/js/8.01aa96a3.chunk.js","64bdc94b489f684982481b944f6563ee"],["/static/js/9.ef6a7c5f.chunk.js","c3168510250567bbe3ed535ee8979257"],["/static/js/main.c7a3773d.js","c63292e80cd5e696f552c37376e0a9ab"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});