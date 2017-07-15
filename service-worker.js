"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f0758a33e5e2e9eb46efb3a292376550"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.b5e8d77a.chunk.js","a2c886b0190631f43c23fa8622a44fd7"],["/static/js/1.f1fe50cf.chunk.js","503e085826f56840d0e03aa7dc626dc8"],["/static/js/10.27087772.chunk.js","cb1ce0827f708a881265df84aa4462a6"],["/static/js/11.137e950d.chunk.js","f989ca6dc7704e59d4e297cb487ecf31"],["/static/js/12.fc02c9a9.chunk.js","bd46eb954378c9f74fc16b50a32541bf"],["/static/js/13.ef028667.chunk.js","38bbe76b31be65f5f5eaef7903551e32"],["/static/js/14.dab4d058.chunk.js","f3714eada9fdba4e96944b2aed2d916d"],["/static/js/15.a7961cee.chunk.js","b14edbe821c2c4da34113b9389529acd"],["/static/js/16.881c464e.chunk.js","1360012d1b01268a280f2bb90790defb"],["/static/js/17.6ad7376a.chunk.js","e414cc2f447adbe98344f894d0d5ae7b"],["/static/js/18.fcc53ba8.chunk.js","d3b03065b6c9b13d75b7ce3e13c8e29f"],["/static/js/19.a2b9b3a5.chunk.js","9f509979fbbd92781a0de26298fff435"],["/static/js/2.bddbabc1.chunk.js","92c589a6dafdb39fb6ba34f47ba4d608"],["/static/js/20.8df4639e.chunk.js","1533ff349ab8fc61567eca81dec97850"],["/static/js/21.516b4d1c.chunk.js","73792064d1873a4546b68dcc33bf71f7"],["/static/js/22.9596473b.chunk.js","7d577a6117bf5662f45a1dc60f2b4c3a"],["/static/js/3.98c90bd4.chunk.js","8e816538f1d085beaa7e1befdbf6ef76"],["/static/js/4.19814d54.chunk.js","e0968106c79db1e336af6adb179c404d"],["/static/js/5.553ea3c0.chunk.js","c2f28f42d6405bb5aa1be173abd9e159"],["/static/js/6.e74754cd.chunk.js","294673e099415e1ecb46601c3c5ba9a3"],["/static/js/7.b44770a5.chunk.js","0e410898f0363083e33894f3e7014bde"],["/static/js/8.e2faec3e.chunk.js","4b92e330de7f683d20178166f377bffe"],["/static/js/9.a8d9faca.chunk.js","024c1c3fb75e71de63ad39bd3ed10369"],["/static/js/main.88f1e44b.js","174f945da9d57f0d8a5bf3e61d66f9d5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});