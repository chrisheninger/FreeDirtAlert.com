"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0527e2ea50231d18ed5c7b9b00cea8cf"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.1d93b1b2.chunk.js","b107d6df51de0d399c5a90fa336af03b"],["/static/js/1.c6a4298b.chunk.js","3be31dd1a6b4d281e443a0673a25be24"],["/static/js/10.8da65347.chunk.js","40613326ba7abcd3a6a929ce72cab5ab"],["/static/js/11.c672ee3d.chunk.js","8b4a2daa8e643399cda95ae4b608fa78"],["/static/js/12.eb58c3a3.chunk.js","87c33f16322969c219e3977842666617"],["/static/js/13.59f86e5f.chunk.js","1d94c019f2cbae7bac82b00f0b06a901"],["/static/js/14.cc6ed34c.chunk.js","ecdcb4c4edb60f03c40531a413b6050f"],["/static/js/15.63d6d2a9.chunk.js","c3bf948c60dc06eeefd157b307499b6b"],["/static/js/16.91389ad1.chunk.js","aef9dc7ffbb36d42b8bed97bc447bac2"],["/static/js/17.d4d74f04.chunk.js","9dc54adb4ab8d23d39d5f3314e462028"],["/static/js/18.fde7da0b.chunk.js","dee4305090dc053780e7adcc7915859d"],["/static/js/19.893ac8ec.chunk.js","cb7d3d084a13333515137f389b6695ec"],["/static/js/2.894c3248.chunk.js","120017a345fb294b436a9961be2c46a7"],["/static/js/20.37de6c63.chunk.js","48e5151a6b838b3336f7689523d9ca45"],["/static/js/21.53b47db8.chunk.js","b045a291781dd1a626f4ec86772174ba"],["/static/js/22.5bdc4e94.chunk.js","2269e81092615060d4d74506e111e0a6"],["/static/js/3.0ca77e4a.chunk.js","5846aa5d33329719cf403c341aa4960f"],["/static/js/4.5cc37283.chunk.js","88a736341ada3523f82f9458c314307d"],["/static/js/5.8aa45cbf.chunk.js","97b607184a08b6080dd3028bf883ebb8"],["/static/js/6.64fd8541.chunk.js","7328a8d591f5ce1699c39f057a2d008d"],["/static/js/7.c02eff10.chunk.js","a6338e22c0ed448c2a3c9afe5e4c24f5"],["/static/js/8.31e7b27e.chunk.js","2ab195c8ae1ec48324e0114020cd639e"],["/static/js/9.bed40143.chunk.js","c41773bb61a63e1938a7d9471523df24"],["/static/js/main.74f2bc27.js","9cfa379cb53cc4ce0995ba3cbef85366"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});