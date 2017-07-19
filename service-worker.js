"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c1356c648a3f1ba7ab5ed94b14df369f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.3130bf84.chunk.js","605d62fc1434d248248d3f2cb0e5bf9d"],["/static/js/1.d6b3b99b.chunk.js","01be1755480f4ef5b16978ac30fe4243"],["/static/js/10.9d7581a1.chunk.js","5712948ee156100954657d4ba40f7fa3"],["/static/js/11.71426e21.chunk.js","44d35225940f9554094a1b80803375aa"],["/static/js/12.fdd6f547.chunk.js","cde4e5c6fdb55abf8530cd40b44718f5"],["/static/js/13.72aac57f.chunk.js","fd0887e3a62dc0493c72831e428c830d"],["/static/js/14.1d150067.chunk.js","19d8b867c7ace807fdb93088191dc937"],["/static/js/15.47a69aef.chunk.js","1a9bc980b22ebe77141e47e06bd67227"],["/static/js/16.205a9b13.chunk.js","2230bc757f349cd8f6f587fc612c0455"],["/static/js/17.46e6cf32.chunk.js","a63f13e88c1d3de1f56cfd9c60e35100"],["/static/js/18.f8076528.chunk.js","47c5692c4a4024e82f3fdd9486fb6e7a"],["/static/js/19.85cd5f66.chunk.js","a8d9d4fbd099d9da9e3c3658d2af35e8"],["/static/js/2.28353fca.chunk.js","3d33b8836ad2cfffa62da0a3132c57d1"],["/static/js/20.c0854ef4.chunk.js","b6f770b04960e680fa01e288434560bc"],["/static/js/21.05efa7ee.chunk.js","8d518ce6630b3a4c2abe191acd6e7e3f"],["/static/js/22.2f96d384.chunk.js","b1274ef3c4f8936ddcedf70130a225f0"],["/static/js/3.5442c14c.chunk.js","b636f656ec355e54858ec7d217de2d09"],["/static/js/4.e7aab07c.chunk.js","b811ae45f9fb6e740887080365809a74"],["/static/js/5.0613eecc.chunk.js","6e342aa461bb77fccefb0f4561dd3418"],["/static/js/6.3a66cb87.chunk.js","23eaed249d780f10495f024c0f76ce0f"],["/static/js/7.daf71400.chunk.js","5f160973658b4022b6aec45fde6d86d9"],["/static/js/8.d9bd96fd.chunk.js","e8f20e161a64169e9f7cdf5a2aaa1f68"],["/static/js/9.fe099e8b.chunk.js","e4ec25097b549e432e2212f8b94bb319"],["/static/js/main.528543c4.js","5c9797710fb144ce9a1acac2e5aeae87"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});