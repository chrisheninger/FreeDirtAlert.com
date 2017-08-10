"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","65fe704710a22d30a86a927b627c5832"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.7b30a611.chunk.js","93781909937b651354b53427b8ff6e70"],["/static/js/1.aaca1ea4.chunk.js","adeb51cc75d3f5b3c2596d9c08809bf4"],["/static/js/10.32adcdb2.chunk.js","35eadfcee69fec945aba0d1a727049fe"],["/static/js/11.5bbdb7d7.chunk.js","1f6dbc9efce0cf3d2059eafb6e4225a0"],["/static/js/12.d6e7915e.chunk.js","8c5aa0c25db29bad180009ac6b911539"],["/static/js/13.c904b032.chunk.js","e4b2f061813e8dc999931714f9591327"],["/static/js/14.83e3485c.chunk.js","de1289c9f57c9150143a9d54268084d6"],["/static/js/15.ada76f89.chunk.js","8ee96734e911bbaf2e452c70d4632a07"],["/static/js/16.c7e130c5.chunk.js","08878f61e6efc6b90a0770b36ae29908"],["/static/js/17.428d47d9.chunk.js","8039c4263172d43f7c337d8ded7aaee3"],["/static/js/18.2a4d18a5.chunk.js","e00f282606362e8dba4b7150ed84d782"],["/static/js/19.1f82ddfd.chunk.js","3c1e30f2c0e70f38cec428cba87877c2"],["/static/js/2.7c1ca4d1.chunk.js","4f0f68e8d654fd5632c23e78450b4460"],["/static/js/20.6e8efda5.chunk.js","a8860592d51d6332d613c2d8e2671544"],["/static/js/21.aec75362.chunk.js","82c302864d93b9ded9e2bdb780b848c6"],["/static/js/22.b67dda46.chunk.js","d4cffa6ca19cc0dd4ee35895f3df3936"],["/static/js/3.29b55440.chunk.js","04e88a6102a1b20aa29a241903068826"],["/static/js/4.dfb5907b.chunk.js","efc5f87fd4d18449d0f45e4985e11bf9"],["/static/js/5.91655727.chunk.js","121962a175c0251472a58ecd992eb1db"],["/static/js/6.e963b6a2.chunk.js","f4a12317c6486a8280c644781256dba0"],["/static/js/7.3b286d60.chunk.js","6f8ec69e5c86ab31e819179222583ee1"],["/static/js/8.d5f136f5.chunk.js","f017e9169cfe89d1e6057347f2aa3dee"],["/static/js/9.8cd7f86f.chunk.js","c4e8e63848e23c675211a88d503823c1"],["/static/js/main.58f023d5.js","ec3b97b5f91f92d197613811e9fc55b5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});