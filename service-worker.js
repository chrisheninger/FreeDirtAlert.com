"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f5602265e88f7dd241c8c9f82f332857"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.44c0f7b3.chunk.js","55692a5e98857eca3a4346e008b1e853"],["/static/js/1.0d60dda7.chunk.js","7462721e648b88a7e7aa169f0dee0079"],["/static/js/10.dbd76966.chunk.js","b1cce6823cc315f5c235440d17c7a727"],["/static/js/11.0315687d.chunk.js","2099ed259a68acf9782c4a979519401c"],["/static/js/12.8d7b1340.chunk.js","a2421977d0161467beef5281e1b503ad"],["/static/js/13.97c51a55.chunk.js","fe86bf1e4cc6e8ae9ca09c8a71afca0f"],["/static/js/14.e7e83a10.chunk.js","6a2e87cd39f60b31c75dd7d41812854d"],["/static/js/15.526e1251.chunk.js","ac1027b52b561e44fb322e79bee1fb22"],["/static/js/16.7f656352.chunk.js","0ae6ffd3ae7e079071fe8eb6b289b656"],["/static/js/17.e99cd2bf.chunk.js","bbde8d27d60e39729c17f5610a2dfd1f"],["/static/js/18.a4f8e5c3.chunk.js","2a4a4b54e517128befbc765370dd7000"],["/static/js/19.88c3f0d3.chunk.js","d81ee418902fb48b3e6812917b0486d5"],["/static/js/2.bdcd25db.chunk.js","cf9c585f24a34e93827f89cdf8a499bd"],["/static/js/20.461386be.chunk.js","c33df9d79014bdab81d9adb1f860cc69"],["/static/js/21.e8d9db03.chunk.js","bc8b19983686beb490a19adb803ead2b"],["/static/js/22.4ed5fb76.chunk.js","7a5d765198621984cba14072e21b904d"],["/static/js/3.5adebe93.chunk.js","7586a349dd4cfcf992b16b25fb725e25"],["/static/js/4.dc279df1.chunk.js","54e92f9b0aa5b6f281142d1253fb0b87"],["/static/js/5.77a43ac0.chunk.js","334d3cb51f399149726d9d48af0ae1ef"],["/static/js/6.8116e789.chunk.js","c0b9361032660fdfbf6618d9134cad8f"],["/static/js/7.52366359.chunk.js","60d3f1e3a9a7b089162d4d3c7dc74720"],["/static/js/8.e325f90c.chunk.js","c6f3f93fb2d535fcee5951aa4ac7a938"],["/static/js/9.0dfdcffe.chunk.js","2dab51e54526213d399a150cef53b0be"],["/static/js/main.499fa158.js","f2c8101d60bdea6c11c5b04d005fd3c7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});