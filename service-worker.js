"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","76c7ca441428bda3c82a84e58df5c21a"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.1bdc3d1f.chunk.js","2896f5afac6f17c1904f81dc3a7110b3"],["/static/js/1.8787e9a2.chunk.js","31f9bd394ec1bcb9ec4b11ee9dab3ebd"],["/static/js/10.5d03c4d0.chunk.js","da2221779caa31232cdbea4d0482dc1d"],["/static/js/11.ab3916a9.chunk.js","f73f1fe7db21b65abfa89cce36237feb"],["/static/js/12.fb52cf80.chunk.js","edfb161587679f4e26899e658b1f76ac"],["/static/js/13.51f40e42.chunk.js","5c414f023493575a7498788774604476"],["/static/js/14.81506693.chunk.js","16b81638e6d54be0bc2ee0a83caa6fdb"],["/static/js/15.d70bf755.chunk.js","da8eb5ed2212ee894e250cce10bbce63"],["/static/js/16.b8172155.chunk.js","0aa7628e886ea4ff158a39a4f5e74cbe"],["/static/js/17.00150bea.chunk.js","4a625b3e85b25c342670c1c696ad517b"],["/static/js/18.d50151e8.chunk.js","1ccf92d926ed4dad71eff0376ef3d9cf"],["/static/js/19.955cc493.chunk.js","1764fb35ab2aa191daae01cd47e16524"],["/static/js/2.2a92d987.chunk.js","d04ee7bc0296121607e3fcbc37d9f003"],["/static/js/20.e9cbf06c.chunk.js","8bccb6d00f580654d72d389135512867"],["/static/js/21.2c4ddbca.chunk.js","33194258d5570f71e49a75ef1b7fdbbf"],["/static/js/22.f2b50a6c.chunk.js","565d5f019ae1dc225d59242d306e7d51"],["/static/js/3.5c91bb5f.chunk.js","4ad964df0d4c065829c005ec90f77e3d"],["/static/js/4.3ddaa7bb.chunk.js","02027a0290a5c0957ecf8070f812fd90"],["/static/js/5.29d023bf.chunk.js","7972f756e7d24aadd6f8dbdd3c03f109"],["/static/js/6.e5dcc7bb.chunk.js","4f1b8134f5a928bbce982bfed2126c37"],["/static/js/7.0f0dfcef.chunk.js","798b5b3561dbe22d35af9a801d86a5b6"],["/static/js/8.284d6ad8.chunk.js","fe7e442c65a9f9308073e348d1b3617c"],["/static/js/9.629b8925.chunk.js","06aa5db173643bc35591a1280c81a7b7"],["/static/js/main.51524873.js","4592d8faa9275988dab0d80ea06cde6a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});