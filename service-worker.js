"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","04d0cbbe50f17af9f76c38fff5f18e84"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.e0f73e9d.chunk.js","b559457602914e0f56b28516c775b321"],["/static/js/1.559670fe.chunk.js","79b4c1d8906f78c0ca0436e6cf7f2e29"],["/static/js/10.f1f37ad3.chunk.js","76b21baa4537ea6ad3bbb1253c31ab96"],["/static/js/11.476aa32e.chunk.js","2f7da48a8068c60baaa8550b8bce456c"],["/static/js/12.d48c3cae.chunk.js","611b9c69a61abd9ee09e57b998c60032"],["/static/js/13.d0a1b546.chunk.js","4ff22458a1b6c636b6ddae9baf68c22c"],["/static/js/14.53f92f94.chunk.js","7606cbbc0b18d13d02ae87548ab2ac24"],["/static/js/15.1c6878ef.chunk.js","0bb6283c2e0b56d52d692ea0edfca627"],["/static/js/16.16420d34.chunk.js","7ebbf82717a426644e52d53160be8910"],["/static/js/17.5fe39c19.chunk.js","6ff4d6859364f7421da45f47e6576ff7"],["/static/js/18.35e819c4.chunk.js","2997d77e59183bcef82ee44d25a3a465"],["/static/js/19.21bf8628.chunk.js","d00e7f66d8f0d569c459287c6d292708"],["/static/js/2.07388157.chunk.js","7d9c45cefbb3c12c5997a21538cfd10a"],["/static/js/20.e84f7560.chunk.js","e806159701ad49ad2ea68935d98b5974"],["/static/js/21.ea468ec3.chunk.js","9c7247db647d737217ebdc82d8822a66"],["/static/js/22.d68956f6.chunk.js","6c5319fb4425ccbe51fd6e32191e8403"],["/static/js/3.51ab68df.chunk.js","673399938dc48284a45f3899b95321bb"],["/static/js/4.b831352b.chunk.js","1768ff73289934b3d26d3f685b655110"],["/static/js/5.4e1d7e3e.chunk.js","fe266cb3f07c7bf17eba91a7cf107c1b"],["/static/js/6.b40cfc69.chunk.js","c95101e8901e1a15f61648487795c525"],["/static/js/7.ba626745.chunk.js","c98bfe3e8f0df1d8a06582e1867f4ec2"],["/static/js/8.52554752.chunk.js","85d969b9e9d77145c567378af52eed26"],["/static/js/9.eb1870d3.chunk.js","77ac185b77fca9d3fc940f0be88acc2f"],["/static/js/main.010c4a66.js","52ea5cbbb7c124674ae902583eff4972"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});