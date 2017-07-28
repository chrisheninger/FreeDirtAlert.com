"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","5a5568c917da0935632a16998c176d12"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.13cb4932.chunk.js","08a6859406703e86d7f17485012d9ac9"],["/static/js/1.d998a0e5.chunk.js","9ac99758e0c75298b5ade2db60e1af2f"],["/static/js/10.c9d4c359.chunk.js","421cb189bb9c38536231b3b3c0fb2c8d"],["/static/js/11.ebde4db6.chunk.js","b0feeb4146744147ae41988931ce6e8c"],["/static/js/12.7fbe3ffb.chunk.js","1b748195251ac370c83cc240dd250c3f"],["/static/js/13.84cb5b89.chunk.js","8d1def292d8e72e2a0cc333e8b195253"],["/static/js/14.b538a62e.chunk.js","a84af5a91b71e8c597080aec44e6b9b3"],["/static/js/15.8af655a6.chunk.js","9fe1144030a106f223f1190404e3bc64"],["/static/js/16.257eaca2.chunk.js","b7994e635f531dea349c39329f66a1b8"],["/static/js/17.5773dae3.chunk.js","46c789d0c34fecb381653f7fa1ebe3bc"],["/static/js/18.98d1ea2c.chunk.js","792d90b67209f77b53387468eff3df15"],["/static/js/19.d2a77f14.chunk.js","aa2e396038512835948af5de1d012b90"],["/static/js/2.6f1f6cb9.chunk.js","b2511d808e954174fc2f0d5c71bea707"],["/static/js/20.7497bc36.chunk.js","2a6bcb8f9949b597ecc6bc520ad02351"],["/static/js/21.e6f9bb67.chunk.js","dde0ea8f3b86a5f3876d818a0e767cb1"],["/static/js/22.d27e6148.chunk.js","57393f82dd94f742a80ce8dd1177a7ee"],["/static/js/3.e5cc19fb.chunk.js","b2b04e8a480e3504c51a0ad7a4b23fff"],["/static/js/4.8b7a7230.chunk.js","0f7f3aff0492f18670761acc185a3c49"],["/static/js/5.7f20553e.chunk.js","372dfb45000969ff045f48db62ef506d"],["/static/js/6.97465d4a.chunk.js","b8beec576619ba7c336377f162c60b03"],["/static/js/7.29af8f59.chunk.js","90606bc98f7c0db38d3c54b6df907cb4"],["/static/js/8.7ccefc19.chunk.js","463b3ef37eb924f0a26f5e86dbd8b0ba"],["/static/js/9.2d3c8105.chunk.js","84be1cf5df674b59f8d3db1aaf67ef7c"],["/static/js/main.6299fa96.js","5e61e5e2cd5f0004df5636c25b02c64e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});