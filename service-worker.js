"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","7b7f43ac4733f552ca910e91f933eb97"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.126df0c3.chunk.js","699d5c922c5852ce9e6c73c729bb3d63"],["/static/js/1.aa0f7d64.chunk.js","3b06f66c97bee823e64ce5fbe1fdb7f6"],["/static/js/10.881f15bb.chunk.js","16cd17a4e06c4b3074a7ba40a66017e6"],["/static/js/11.9af154ba.chunk.js","73ae5ad4abac43b9db5d8bf849bffffe"],["/static/js/12.a9c7a03f.chunk.js","65b7808c4c6c488d0c7d5988396ec9c9"],["/static/js/13.cc840367.chunk.js","6ab77f0aa9847c84a1545d3f7cd92abd"],["/static/js/14.9387991f.chunk.js","20bce1cbfb8bb00e7f229286495db651"],["/static/js/15.00131b3d.chunk.js","37ff4d1e8da504d20baa78830763aa32"],["/static/js/16.40f8c43e.chunk.js","ca3a1d4d5f287ef1d05271afd2d81969"],["/static/js/17.269fa919.chunk.js","f5619a229fa096185311769eb01d2a20"],["/static/js/18.6be3e749.chunk.js","c7b46e9d740705ba44ebe96bac90b988"],["/static/js/19.26fffb22.chunk.js","5ebb2f74863e30155f72228c6c0a7359"],["/static/js/2.7cb74370.chunk.js","0f716e330d36db8c28fec860832927cd"],["/static/js/20.791a2284.chunk.js","4fae478e8ad1f6eea632f796617f06af"],["/static/js/21.12610c1e.chunk.js","0c92e7e8ce178d5c262295ae2fef6acb"],["/static/js/22.e846cf54.chunk.js","41d7015be05acb752f46f92aee50872d"],["/static/js/3.576f407c.chunk.js","5e68c44fc8ff2d82b9cf39857a5a4655"],["/static/js/4.d1f9799c.chunk.js","533d21146096eedebb45831ec15238ff"],["/static/js/5.76099c65.chunk.js","7a60831ac6f2debdce1fd93e5f28d011"],["/static/js/6.0e88fcb8.chunk.js","332c90e25b6a813f0f7bec69b603779e"],["/static/js/7.30d1e018.chunk.js","4aad7169d13fc33a034e015197fc471e"],["/static/js/8.5398e98b.chunk.js","6aca8729dea34389534541472f91cfbf"],["/static/js/9.98a619ed.chunk.js","4bb0fe648c83a11b401caf27b7a1273a"],["/static/js/main.84459a77.js","20b16c1f26865c9ff7a984b97f3a7a5a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});