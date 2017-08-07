"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","94d4d6709cc6cc75dc4a6e1f3bdfcfe3"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.0952c940.chunk.js","b3e85acdc538afc1a4918f881d5a5a20"],["/static/js/1.983d5310.chunk.js","5ab25c692e878d07c0233526272ddc16"],["/static/js/10.212a61a9.chunk.js","d7b5cd5c0e12f648a43fe3fa01656682"],["/static/js/11.95f76e04.chunk.js","e9bb710c1c0241932f8e2159a6da3d6e"],["/static/js/12.9d1a0f12.chunk.js","fad43a1b55b488583f3e8bce8ab593b2"],["/static/js/13.85b7bda3.chunk.js","9b63738bae4f9113628506296f49b75a"],["/static/js/14.b29947b2.chunk.js","b86fc10ec3bd0cbdd4b3c1d89010444a"],["/static/js/15.9ba82576.chunk.js","661b2664658099c9afea4fd6837deee5"],["/static/js/16.01e92d62.chunk.js","704d7c8344cea8f5bbcd1555c9f024b1"],["/static/js/17.3e6cfd3e.chunk.js","25f31a10a3419c6712fc0ebf9632291d"],["/static/js/18.3c9616d0.chunk.js","f7548db943f5cf453ffbe3c78f30ead9"],["/static/js/19.c190d306.chunk.js","a33328f0fb87f5feb50a099542defd37"],["/static/js/2.8a56f97c.chunk.js","d97f946237d075893b81e78c1195bcab"],["/static/js/20.a85d1b5c.chunk.js","27a310a296dfc71234c44ec01897caed"],["/static/js/21.f84bd4b3.chunk.js","0ad85b4184857812064f48e3e45d2534"],["/static/js/22.0e3eac9f.chunk.js","0c9b9be5a6486265647e10c6cae2f060"],["/static/js/3.fe746d2f.chunk.js","c9a3c999089899ed578a08741bed49e3"],["/static/js/4.9df764eb.chunk.js","c2dc0828e4bea11d9c194a9af554594b"],["/static/js/5.0b8fba9f.chunk.js","3bfe806ef81e1fe5961d0195e4aef859"],["/static/js/6.c582e964.chunk.js","822c672e5cd5161bf8cc6f4a298211e7"],["/static/js/7.9ce3b53d.chunk.js","dfce4ef427fc2e9c1213427fc8af9235"],["/static/js/8.d1b23a76.chunk.js","5cde0927cd652f5846ecd6219abb2868"],["/static/js/9.863994cb.chunk.js","746758578a44710766fe3e78c048e67a"],["/static/js/main.cce8a92c.js","84beb81267dba7b79115661f4b8caa59"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});