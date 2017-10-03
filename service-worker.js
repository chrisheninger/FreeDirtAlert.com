"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","4640516e49d8e4407b8ed2dec3b848f8"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.d83efe00.chunk.js","9c85715951d8001f584e8259fbee5cb7"],["/static/js/1.a2ed214a.chunk.js","88212773eb6a0227aec3c9c6056b644b"],["/static/js/10.92907e3f.chunk.js","77b81e7ffc38f5b3737055de6b0d4d4a"],["/static/js/11.6f63c6fe.chunk.js","07cd557da627c6eeea34d500bf09cb20"],["/static/js/12.6f17159d.chunk.js","209a6862a63d4ccaf4244493db4890a5"],["/static/js/13.d23000a3.chunk.js","8afebeb9595d021f97456a447c413097"],["/static/js/14.9a8a853e.chunk.js","54af26cc51dd5b8a4143c947f2c6b0db"],["/static/js/15.b305a55e.chunk.js","39b97710c31312f3085d16542f0d13b6"],["/static/js/16.5cd2add2.chunk.js","8fa294f7c25b43b0bec3d87fcc7405d1"],["/static/js/17.46b05ef1.chunk.js","0703ff0dba35e8396cc97353bc7a1ec4"],["/static/js/18.9b8e2e90.chunk.js","0c23ec0c2faa48beaefb1d71624379f1"],["/static/js/19.b6b9e611.chunk.js","3b8852c526cf8d9dc37fe174d4046759"],["/static/js/2.94f43f1c.chunk.js","79d6ef065a4bb4d6beb15cf27de0f129"],["/static/js/20.2cd96cca.chunk.js","6f4f20062c31f678bab2de1d86d58cde"],["/static/js/21.f18cdcc1.chunk.js","f0e894f65b58be2dfde314a31426a90d"],["/static/js/22.bf734e13.chunk.js","9a25b1825bb83ed33ba8bd939f544d1f"],["/static/js/3.1565d636.chunk.js","8de766b80f690da30b249dc6b4d74dfc"],["/static/js/4.d1ab0420.chunk.js","8560b4ba1b5266e7f1e8b0ca9bb0b4da"],["/static/js/5.81532d97.chunk.js","b27e43a47fffe6984044bbc417f29f0b"],["/static/js/6.36a688a2.chunk.js","cf333af4a346409ed176868bc00512c6"],["/static/js/7.ecde1ea2.chunk.js","51e6b6f2b9a8ced58164799f0da5df07"],["/static/js/8.3d43bf3e.chunk.js","f23dac1c9fe7f7e6fdd81929c2119322"],["/static/js/9.e4d7d7fe.chunk.js","638311ce1a1c752227351fff16ca0b07"],["/static/js/main.9a65631d.js","a047f4ab4ede5e027067ca3a18b20cc9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});