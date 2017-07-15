"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","55ac731c132b41f3f211bf091f133c30"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.037a1cb9.chunk.js","ff1bda665f8efe4d8e9804f3dccac828"],["/static/js/1.c580d454.chunk.js","df10600feac8e14334f76901cb2e41fd"],["/static/js/10.8dc5bc91.chunk.js","7556a92636a7149cc553ba29251ee4d0"],["/static/js/11.0b525d02.chunk.js","e912fe23656e7d1e4d0b5859f69313d2"],["/static/js/12.baba15e9.chunk.js","bd6ea1384126143c01cb42535a43dd14"],["/static/js/13.d8756a59.chunk.js","470ce9d7e7b56893ae2c4f3bd88c684f"],["/static/js/14.9d4f11f8.chunk.js","d148072e3589709186846b6ebd54cca9"],["/static/js/15.66e42acd.chunk.js","96fe98f31997b5d946117d06012fb8ae"],["/static/js/16.20ecc414.chunk.js","745e2f6c8f95b92ddbc250f6555aefe1"],["/static/js/17.da7f94fa.chunk.js","c234fb3c0e153940c905dc306b90a19b"],["/static/js/18.622c9e64.chunk.js","89a71de56cde3886ecac7b0d566bf85a"],["/static/js/19.d0d4627f.chunk.js","9f5aa7e48850d2434efc3192d4e4ffe5"],["/static/js/2.be50e359.chunk.js","337020818607d457121c115534da7322"],["/static/js/20.0f10dcab.chunk.js","0cd49046280d2815a092deebbce1f79c"],["/static/js/21.a0f3bf92.chunk.js","b503f88f69d005b16fa049361fcc2dcc"],["/static/js/22.2d28380a.chunk.js","47edff4b3f481d73c8eac76e5581aa3f"],["/static/js/3.d7aa1c8f.chunk.js","c671188b3771f26a55a822122b8cf71a"],["/static/js/4.af851aae.chunk.js","334b42107f874d204e8e6c61ddb890d7"],["/static/js/5.b8d25cd5.chunk.js","5b8da00e2f3f4ced0565cc284e89d729"],["/static/js/6.7fde0672.chunk.js","f5a2bed14406588a03731e3caa9ff916"],["/static/js/7.86cd3946.chunk.js","ce590b3064553914bb85321b51538b78"],["/static/js/8.641500c8.chunk.js","13b7ab8078f56dc581ea1940de79bf3f"],["/static/js/9.2dc1b0a9.chunk.js","3b6c0b2c57748a9f54cc62010c87374e"],["/static/js/main.10bf6bd4.js","eb47f65b3bb96a1a4e84e51d2ce94dc4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});