"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","cd2acf383ad9636f721c0544d95a8b88"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.42916ad5.chunk.js","582a246e46b9364ee00de595fcea6e1b"],["/static/js/1.52c457cb.chunk.js","1ea65c63dd4d3bb91a92be285db68483"],["/static/js/10.79657420.chunk.js","f658baf45585bb21e872af53d3b5f204"],["/static/js/11.a634aa5b.chunk.js","0fe83c912ee6474985c11545f6983dbc"],["/static/js/12.e55dc8bd.chunk.js","3213f4d9b06e65896e750e1a4a4ee9ec"],["/static/js/13.09e08065.chunk.js","59b294735b71b126d5d26a1fc78dfa69"],["/static/js/14.6536dbe9.chunk.js","2c3a4e43109cae4169dde11f4e3aa8e4"],["/static/js/15.29301c0d.chunk.js","89b12b2d876085caf4ac40a082404895"],["/static/js/16.5b493994.chunk.js","6f0e322af90145fd927ceca3c4240030"],["/static/js/17.26dd6faf.chunk.js","6b03ded4391e7517980bb70de7c38988"],["/static/js/18.c11232a4.chunk.js","33d742067b437925ffe9f2957a66c701"],["/static/js/19.6a1f6e4b.chunk.js","1650ee5e240e3332e594f1747ed53e11"],["/static/js/2.c5527316.chunk.js","5dacfcbd5ae99bc4e0610988dd17be4b"],["/static/js/20.13752678.chunk.js","20e7856c2d6a67f4e3150e6c2161c746"],["/static/js/21.dfbed422.chunk.js","3e8a2787612aafd25db8436f7206f609"],["/static/js/22.e9b4f20a.chunk.js","c5adfc82d32c0399e16c27065c98a876"],["/static/js/3.51b2d47f.chunk.js","a5356c2f84d69244dcbe9c740f60b9f0"],["/static/js/4.391158b9.chunk.js","c5796e0d083076b55530d61142b52b2d"],["/static/js/5.12d0aac6.chunk.js","bd7eeaf3db4ef3c9c60c19f4ef036152"],["/static/js/6.3cb6705a.chunk.js","431b6d7f3af1e5c11e015973965384ca"],["/static/js/7.04290c70.chunk.js","43c277d04e6d3f4d9b527e2ab03ef194"],["/static/js/8.3962b8e9.chunk.js","eeb2dd9eda38a823569cb016de3ed4de"],["/static/js/9.83d088c1.chunk.js","d04d000642bd0e4365c08d518f5d7c10"],["/static/js/main.2a007585.js","26cb68dd7b9cbb4bde35b88138459151"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});