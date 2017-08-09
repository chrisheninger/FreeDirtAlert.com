"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b9e12e6b84bfac158d24e2df8cf152ea"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.bdfbe506.chunk.js","38f3dce9cf990f9bbcf43e5a14e59053"],["/static/js/1.b304402a.chunk.js","79488b79dfc724a483482989c51c56bd"],["/static/js/10.53a19c0b.chunk.js","bf94c162b52ab509d346ae08fe5584dd"],["/static/js/11.f39b8967.chunk.js","6872b1cabf1a61febedec68571adae8e"],["/static/js/12.859ad45b.chunk.js","8614a0bba73217dd25d17451a346f3fa"],["/static/js/13.902cd683.chunk.js","f89025a3fa7362a19791d20979b290a2"],["/static/js/14.09dc0e97.chunk.js","4d9be2a7d3c590d0dc6019d526d015f6"],["/static/js/15.f8c37491.chunk.js","dc73b4c94ae68e4005df0fd4437b11b6"],["/static/js/16.939bfe52.chunk.js","f7ec8e6397a5081dcf01d2f2c81bc57c"],["/static/js/17.227f660f.chunk.js","4565362e5354adf4646aed90fd9f8f5f"],["/static/js/18.21f5dc0f.chunk.js","8dd5f86da4026a88c60dabe8a18ef296"],["/static/js/19.d844560f.chunk.js","f3261945bf1a4a36829384e47bffc810"],["/static/js/2.41e755a9.chunk.js","6806697af5dd694ba50673bc09b3ce55"],["/static/js/20.e85a84ae.chunk.js","f05a294656b32dbfad36ff794f2cd4a0"],["/static/js/21.79522e1b.chunk.js","c653db447b2698630ae83ff6b73e5abf"],["/static/js/22.ef04897b.chunk.js","6488ce5e40b35302bbfa21d19b22ebec"],["/static/js/3.2f4a95c7.chunk.js","e1ad61fa606ce7cb74cb15d0b830c326"],["/static/js/4.19042971.chunk.js","3db5fa3f8abe79d11b906af25aa2746d"],["/static/js/5.b419cb44.chunk.js","821efaf50ef5af6f89d04909334fd03e"],["/static/js/6.a8690aa7.chunk.js","73209bdaf2d573ca2da17e76ebf3be78"],["/static/js/7.7b4b63e2.chunk.js","f08d145c64583efe151803480a3a47cf"],["/static/js/8.5a7646fd.chunk.js","ec532237ce4eec5f09a483557a2b4592"],["/static/js/9.3d1f6051.chunk.js","e5fff26ceeb8d9de65406ad3e9be1e2a"],["/static/js/main.5d1dc374.js","bc56b7ff23cedf8dcb834eaa36ee01a5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});