"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6ef8d8f72185e71904217bce084f2beb"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.6fecb233.chunk.js","f7089bd06c99861ae78a7c5100377f64"],["/static/js/1.5b2cacb4.chunk.js","ec703b0bf8dd3aeeba243590c7ea2d2e"],["/static/js/10.f0108f23.chunk.js","8ebaac769cd82bb29a1d25ed899c700c"],["/static/js/11.c389ac05.chunk.js","33e474409a6293265856331272d3fdd0"],["/static/js/12.7f213b04.chunk.js","c05d9f47847d2c9c0b91aa3eed8b72fa"],["/static/js/13.d300c7ac.chunk.js","b803c2b4df1345fd631ce4245620d3ec"],["/static/js/14.77fefc7d.chunk.js","5d571845f3dd117b3bb7d874721aa1c6"],["/static/js/15.779e24bf.chunk.js","6e3e9531e9a885ec453ba0aee130d7fa"],["/static/js/16.c061e597.chunk.js","fb031b78347f76cb81c8232aa51291da"],["/static/js/17.cb6a145b.chunk.js","6c7f68d2142f0739bb4cdb39605d0645"],["/static/js/18.693232e2.chunk.js","fd44d413234a1ebae5f48c1fbe6c097c"],["/static/js/19.9423003c.chunk.js","c983fa50d41c48bcd1e5ce74ad2efc22"],["/static/js/2.33cb0550.chunk.js","c2f5cbe235cf0868590b09362c0ca244"],["/static/js/20.ff324327.chunk.js","8ef8fb33b59449cdc30f773612b7319b"],["/static/js/21.9c68f6fe.chunk.js","79d5a392d19f01ad3abcbccc3dba0800"],["/static/js/22.bb988fe0.chunk.js","b682003ca396203f9fd8bb38487be0cb"],["/static/js/3.5a623e5d.chunk.js","c58ea0b30d953b11998d069bb43a4c74"],["/static/js/4.ad0fd520.chunk.js","ae376c11e5bf4c321f0b1b29913e28c6"],["/static/js/5.946af5cd.chunk.js","20d0e70a89efbb6f19cbc2ede8f71836"],["/static/js/6.bb380288.chunk.js","b0e85d6c318682dda839ca1bacecd597"],["/static/js/7.0d2447ad.chunk.js","7d4624450074e9e324c1a66e855c01a4"],["/static/js/8.e787e92b.chunk.js","389b2f0973f329ec7922671cb5dbc841"],["/static/js/9.833b0a1a.chunk.js","bca3e44599e25e2b33ef3ced72e8607b"],["/static/js/main.066e760b.js","fb15a19da0ba4f2a321391908971404b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});