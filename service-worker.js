"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","15698fe67cafb1854b441cbcc449a71f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.f115dcac.chunk.js","15c917957c95b4f0825816b3ee685787"],["/static/js/1.dc6be50c.chunk.js","87f1b03558f68f0dfdfcfdfeb7e5cf77"],["/static/js/10.776872a9.chunk.js","b486eb59b678ff633dfaf12b977e47c1"],["/static/js/11.85441921.chunk.js","fbc12cb699140c5adefc990af5c6fc68"],["/static/js/12.9701b9a9.chunk.js","208566bc809438cda80dad8f81f2ed93"],["/static/js/13.6741bf0d.chunk.js","8505900d6cda1d5ba4ebc270a62984fb"],["/static/js/14.7308e3a9.chunk.js","f73bdc9d27b944d743ae2304dc0aec8a"],["/static/js/15.df64bf89.chunk.js","79bfd630551e1f19fd320aaf67db1f0f"],["/static/js/16.7c990f4b.chunk.js","8482ce86bdc4d2d8988a9c54328db375"],["/static/js/17.163c7688.chunk.js","c7375dbbe7daffbbaf60b71f1f5b5fa5"],["/static/js/18.06e8a00b.chunk.js","985352f6ceaff04a2b1f9de4723d203b"],["/static/js/19.466df7ad.chunk.js","cd16cd80cfec1a54ffb340fe26062692"],["/static/js/2.2d2963e7.chunk.js","91e5c29c903865d8a51427cd00e0387e"],["/static/js/20.99ce55c7.chunk.js","bee60516b846e61ab16419d2deb6f906"],["/static/js/21.1c35569f.chunk.js","88d6851aac0120eb60df96f360caaf2a"],["/static/js/22.67a95a8f.chunk.js","8a294edd8ca680a0191bb2ddeeea5d4c"],["/static/js/3.e81e38a2.chunk.js","ba5fee744b7bb5ac32b4414dbbf9c06b"],["/static/js/4.7234cf22.chunk.js","245264f5fc37e7c6cdd3e9e26d3168fd"],["/static/js/5.2ddf0f73.chunk.js","166c794245bb259f23b070ea42b88f4a"],["/static/js/6.6fda23e0.chunk.js","bbf2cfde30bdfb77594705bed59a7f24"],["/static/js/7.11e296b2.chunk.js","9c08232422ce869759ac3dd11826074f"],["/static/js/8.06c82d98.chunk.js","46c4812f35ca1c67e92cb77e472a710f"],["/static/js/9.651366ba.chunk.js","b9c935e63a461b46d23ea068aa2acb38"],["/static/js/main.c26c5aec.js","75b5d49d7384b649c06809b3675d2d92"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});