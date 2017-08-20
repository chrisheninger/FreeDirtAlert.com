"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","047c2a19515f8a130a0b223b6e4c6b4b"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.5536c1d0.chunk.js","ca1857134a237e68712ff5d61bc90d0c"],["/static/js/1.0881d489.chunk.js","385481d082b40c8dafdce63e07cdc3b8"],["/static/js/10.e92fdd88.chunk.js","2e64c8515a203574c3c975ea8eda3709"],["/static/js/11.c01f9aaa.chunk.js","fb0350e67ddaddc82adc974e6cf753a7"],["/static/js/12.874daf91.chunk.js","0d454d9319347aea135ad63129f88a1e"],["/static/js/13.82acb0bd.chunk.js","3b73c224aa466260e33de060ea478142"],["/static/js/14.c1f491e1.chunk.js","0b6a1e480ccf8c32515a2b642c2a2a51"],["/static/js/15.d85a3d69.chunk.js","e99e67e06a18b977835ba2cd8d35eee1"],["/static/js/16.299993a6.chunk.js","5394038b9db7361cb2b42805ae17765c"],["/static/js/17.f22610f0.chunk.js","7b153d9e1f17bef2409f288a4b5bedbd"],["/static/js/18.e608750b.chunk.js","8008542c88efaffb9835edd860c0338c"],["/static/js/19.7a78a4a2.chunk.js","253aa1a65979145e094ed848ee2b4613"],["/static/js/2.db817f9c.chunk.js","90358b8f00e43d5b91368ab037637fe2"],["/static/js/20.c49aed11.chunk.js","c8a16a9fcd660e822ebeb47b1b2f9365"],["/static/js/21.e69c605b.chunk.js","4086da6d46e4cb51e588a5debd8d1b6e"],["/static/js/22.f891b753.chunk.js","d0bccc274ab1eeef54ccd8b8893cfcae"],["/static/js/3.5ee8caf2.chunk.js","144648a664a4da88841070bd550b51d2"],["/static/js/4.dd4ecd37.chunk.js","02e06dd3caf9a6ec6c877129967c8c76"],["/static/js/5.79b89f6d.chunk.js","c3aa2e8411a44aa8fc6ac9309c0c56a9"],["/static/js/6.24a2e73b.chunk.js","136d37c95cc6c8a81b058a31498f96cf"],["/static/js/7.2fd9c08d.chunk.js","ddd4ee1d3047280446669861a7279f97"],["/static/js/8.82596592.chunk.js","b5590058c4c2b973456c7bec49b8a37d"],["/static/js/9.4c699c8d.chunk.js","3af842115cd78e81799394176720135b"],["/static/js/main.56a21d90.js","157b31efad9ca92126ce80d0eeced23a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});