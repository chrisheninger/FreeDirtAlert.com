"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","5f006d9d2a4d10cad9976b74452c6fd7"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.9691f6f8.chunk.js","4ff05bd5968665ae03e72c4f2ce8f0f8"],["/static/js/1.ab052e14.chunk.js","321ad422ac36f747947671af1a3dcd38"],["/static/js/10.7124a99e.chunk.js","bce83033257256b9c24a8543cf2d0321"],["/static/js/11.aaeccc7e.chunk.js","0f42293b2de4a5af42f8e482e655696a"],["/static/js/12.28568aa0.chunk.js","9cbb9abde0d5dbdb739647ff0f731966"],["/static/js/13.f1ba865d.chunk.js","eac868ec4d1f1aa569d977221f410ae1"],["/static/js/14.01ddc18b.chunk.js","4e796ff0cf08f2f2201b3021f1e4716f"],["/static/js/15.2267261f.chunk.js","9efe31238fde24d0790d47c90b33f806"],["/static/js/16.1fa8c224.chunk.js","cb9d4541857f34a830bd6d1719afac2d"],["/static/js/17.1245288c.chunk.js","d7d266bcee8f8144e7e98eeb9a56e30f"],["/static/js/18.b832974d.chunk.js","76c9692a8a00cb915738a2187b201def"],["/static/js/19.382d1a40.chunk.js","bc06183d2ded7d2db2cf1964ab0f7d0e"],["/static/js/2.17d23d27.chunk.js","94bcc23ead96a2eefdf966f088e2d5b2"],["/static/js/20.10cb8149.chunk.js","88cb6734d59fff3a7871e79c635af482"],["/static/js/21.0d94ed72.chunk.js","a203ec79968d02a9510eee8ff1ff40ed"],["/static/js/22.d447bfe9.chunk.js","233d92593a162b1bd2bfbe19a81aa6ff"],["/static/js/3.08e97037.chunk.js","e4fd8690f24cb0dd2e27f20358981f29"],["/static/js/4.cd27641e.chunk.js","8bc17f63d91cbf7ef793809b009218cf"],["/static/js/5.9b27faf8.chunk.js","a30d073433c6e259aec86cc5b27db8c9"],["/static/js/6.32cf9225.chunk.js","511f6159792d73dc49fc1de3a71dd518"],["/static/js/7.92dd70c2.chunk.js","141100987b95b0a621130b04150e0160"],["/static/js/8.504a3e72.chunk.js","ad5256596050a74591d82eb5a5157fc6"],["/static/js/9.a079be5d.chunk.js","c0f2dff834ccff193c77fb87ef7c98aa"],["/static/js/main.0690c074.js","e1d1e4010095937cf89d70e31df2fc85"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});