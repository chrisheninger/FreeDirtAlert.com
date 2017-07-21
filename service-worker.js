"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9fd685b178efe3717f8523b95e9c3162"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.2543a1c7.chunk.js","f812b2c37e2e8bfd2cd49a4e99249010"],["/static/js/1.742ffc82.chunk.js","78287d694a219dc79475025c6db69abf"],["/static/js/10.f9439460.chunk.js","7ed7309e1b17e484814f12f06c316f92"],["/static/js/11.7a6506c1.chunk.js","2403aa9d8e0fb6ae944e3aabe71b389c"],["/static/js/12.a265b33d.chunk.js","8538931bc5324890ef616618176dfff9"],["/static/js/13.74edba39.chunk.js","61edabdbff16787cb5a9e52f15946789"],["/static/js/14.32ba6b75.chunk.js","88e19bbe205beea225410dad2282a95a"],["/static/js/15.8f4b967f.chunk.js","fff2cf1911861b303267185047988e9e"],["/static/js/16.68b5d241.chunk.js","3d89ac158b35767839575f16a8a8ad39"],["/static/js/17.1b511933.chunk.js","802fe0db21932ccb4e42dc043106959b"],["/static/js/18.e9f78a89.chunk.js","852dea65f2926e92d4f0f078ac122561"],["/static/js/19.14ca9d6d.chunk.js","721960d7defe3cc12288fba15a45b4f8"],["/static/js/2.8e92f8f9.chunk.js","1646c91f8b22c9b9ba181005e95b4ca7"],["/static/js/20.274668d5.chunk.js","287e5ef6b83b440f0aaae9733f675deb"],["/static/js/21.3847e5d1.chunk.js","91cc9f1f85a4b11b2623a6bbcc506ec2"],["/static/js/22.c25b1e5d.chunk.js","693d44aae43495946e8c69454ac1f243"],["/static/js/3.6676465c.chunk.js","8bb3dacd3440cee8e43a70b8e74f91f5"],["/static/js/4.bd10098f.chunk.js","7613381b727540e4f68d027f5406f641"],["/static/js/5.d9e7eaf5.chunk.js","fd68a3375a7ee1fcc3fb9ba51f93028e"],["/static/js/6.abba0f09.chunk.js","7177bcb659025b5e2479c1b527133f7c"],["/static/js/7.9c3a51f7.chunk.js","5ab1a3037f735c4436a153260f68cce2"],["/static/js/8.58c946e4.chunk.js","a4836c97d3ca44c17b61fb024bda849a"],["/static/js/9.8b58118d.chunk.js","006b6e53d4cc05c21238e981491daaf3"],["/static/js/main.54b0990c.js","68b4b0cfddcac054c01bee1f511c8771"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});