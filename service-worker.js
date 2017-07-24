"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fab672639b5d5f62f45072bf627cfea7"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.5d3e9a86.chunk.js","3d6cf00ffa9a1eaccb5b561459c9cf07"],["/static/js/1.134b20b6.chunk.js","5b2854c861a8db35f37280e6856592a9"],["/static/js/10.6b9c929d.chunk.js","0a73caac35da6e696f70fd110d2655f1"],["/static/js/11.e46d40d5.chunk.js","66ffa9d630a835459d7a65c7e9c31f3c"],["/static/js/12.cd3eedbc.chunk.js","3f01da77eb0a20c6fbd34bd15073daa3"],["/static/js/13.3a9a8934.chunk.js","0e4cf6233c70bab630f31741b70f1d65"],["/static/js/14.54013f46.chunk.js","d047505d877715af9f2ff8377e2d905e"],["/static/js/15.571c29a2.chunk.js","c64ce7918ab7613c0e38b304fb832ddc"],["/static/js/16.822867fd.chunk.js","7e6cc7ee36d79ba9a8efb9cdbf11d912"],["/static/js/17.e04f6eb8.chunk.js","b6e5d1712947f9491abea683e66a6fa5"],["/static/js/18.4fadf495.chunk.js","51b106f97df26927321b9266642c24c1"],["/static/js/19.4bfb980e.chunk.js","21fc8f8c7bba078aa8da6892cf558ca0"],["/static/js/2.ac40b60e.chunk.js","6b5303d3718eb561fb00f9b7beffaa79"],["/static/js/20.960ab48f.chunk.js","fe94485ebeb1bd4df37b06f5a3c423bc"],["/static/js/21.45bea9a4.chunk.js","ecff7ae53c864fcfd438dfd3c47705f5"],["/static/js/22.a11926fb.chunk.js","8e1115bc6db55d90f807aa57732cb1eb"],["/static/js/3.cd4b6630.chunk.js","97fec75114309abc04897ad0e3de6754"],["/static/js/4.08bc41d4.chunk.js","c5eedb47f1cf7b416e5753408b370f0f"],["/static/js/5.18c4f294.chunk.js","b72ffb5eba29c03f384a47d6c25a7201"],["/static/js/6.deb59a09.chunk.js","2c9684fbc79437218bf05cc3c1d3fce7"],["/static/js/7.d3311339.chunk.js","f0564b3cad8a3ff6624f2c5b6191684d"],["/static/js/8.c0b260a2.chunk.js","5f0272de28820a2e9114e67b6add946f"],["/static/js/9.10d3b2a2.chunk.js","4c95411e1ec9a7092bf4597e8411876f"],["/static/js/main.d9933ca8.js","7d5ce4646c11839327defb12fe384b1f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});