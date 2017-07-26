"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","31bb0d203ae5aa9915b042ca71791540"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.4a54773a.chunk.js","d530db7ce4c45c5cbaab284a49374847"],["/static/js/1.87e77662.chunk.js","918e3977c2c86073542bd03334b59d08"],["/static/js/10.879f32a7.chunk.js","6e93548ba8046473b43cb5628782ad66"],["/static/js/11.fbda0a45.chunk.js","b738fbae001187c6088223d51bfeb0bc"],["/static/js/12.386763c8.chunk.js","22653ae0ebfb461e236f7d583653bf83"],["/static/js/13.a95f554d.chunk.js","8cfdb7e8024aa81dde1f69f2a013f665"],["/static/js/14.cb969ac6.chunk.js","035d0a9a4ab57bb562bcb31e8c9fe8fe"],["/static/js/15.d919df97.chunk.js","41fbd053d434ea9e820e4a7d2226243e"],["/static/js/16.db821e4a.chunk.js","755364fcbaf27180f8cae88c7e686331"],["/static/js/17.8ec3ff95.chunk.js","78d207e1f8d97eecc75190bc409e5a26"],["/static/js/18.fa2015c0.chunk.js","ef1165e118f260d2d084b44261c011e7"],["/static/js/19.ef93c369.chunk.js","eb9c533db3a0dedabcd509c93475a78b"],["/static/js/2.3929b40b.chunk.js","ac2edfdae73e1b8094532e1a5c214cc4"],["/static/js/20.879fd62b.chunk.js","bdfaded2664f3e9c951772c7e5f019d9"],["/static/js/21.8086f76b.chunk.js","4c8a2e0eeca5d4f618de5b0e3205d379"],["/static/js/22.7f34c57b.chunk.js","751fad16690e610f757eaabb9a6f43eb"],["/static/js/3.705e23f1.chunk.js","c3e08cb2bba808b3d8cf7601a3a01cb9"],["/static/js/4.1073fcfe.chunk.js","7b850378c9310539a718bc32eb45f73c"],["/static/js/5.f8661519.chunk.js","bf0827762ce13dea333f76321fe455c2"],["/static/js/6.bfab3c45.chunk.js","5f703dc7e1068830421f912cb9f711cd"],["/static/js/7.c144277e.chunk.js","f14db34ad9ab3ac9b912bc7344b11a5d"],["/static/js/8.9f37b264.chunk.js","bcab17877da3d69bbba09b88bba9d29e"],["/static/js/9.a36204e9.chunk.js","b05e8dc0b3aa19a11ba00027c876483f"],["/static/js/main.3b4402df.js","3f9f9b4762d8d3914497d5a70651d23a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});