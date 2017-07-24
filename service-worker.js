"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","229e93deb6464aebbd724664984de0bd"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.a122a624.chunk.js","25fda0166a3a550204e1086ce841e733"],["/static/js/1.78ef5f7c.chunk.js","a7f44a0e7cf6c137a2abc57754f92f3d"],["/static/js/10.f23fd5f2.chunk.js","955857315ee59ed0b5f4918f934ff65f"],["/static/js/11.fe431e6c.chunk.js","ed9aba15d146bbe2e1d48fb4085f83a7"],["/static/js/12.9ed94c8d.chunk.js","fbd95a192bb448d4b1d6603318ec61a1"],["/static/js/13.27ae27eb.chunk.js","406ce8652540e567df659e30cb3dac63"],["/static/js/14.28554998.chunk.js","87260965c680e141b3b213584f3f4110"],["/static/js/15.ab9c2505.chunk.js","7ccd7bb417426f5de3b4f48579507f72"],["/static/js/16.d15333e3.chunk.js","f39ad9c8f74a8a1e25ed1dd245751660"],["/static/js/17.acba7dd1.chunk.js","aa10e38370cb10c28d4599823e5adc31"],["/static/js/18.7b5a3d0c.chunk.js","97c26af5e6631a7ce7173ac0d824a55e"],["/static/js/19.a01b6121.chunk.js","2503910e44089258b5bb48b417cd800d"],["/static/js/2.4864dd20.chunk.js","a976b8a1e5f01f3cd4aa7ff494d6193b"],["/static/js/20.324d2fee.chunk.js","116b5ea23b0396f50d9fcc7a2d1e1b9e"],["/static/js/21.7e04fb03.chunk.js","3738d1bcb7b3cad5551711465936e443"],["/static/js/22.8f1e2b27.chunk.js","952eaf051538bb931c1dc4bf03c84368"],["/static/js/3.922a691d.chunk.js","9d142c1cc10106a3d55c515e08b485eb"],["/static/js/4.163f3f6d.chunk.js","bcb87ed0abd8da24eea174fe75418c15"],["/static/js/5.a0e2f29f.chunk.js","d8207b4d41335c2d40e2feddbd739c9d"],["/static/js/6.3201e9ee.chunk.js","242afd1578045d5f853ff7f56a4454bb"],["/static/js/7.ede705dd.chunk.js","cf2819bfdae6950e89b84813e2ea728c"],["/static/js/8.d49ca995.chunk.js","ced933de31e7446b89a9e585dbe5374f"],["/static/js/9.2abf1c93.chunk.js","47b26b00fd45cb3febd71207cc2b2d93"],["/static/js/main.06b7430e.js","54048e5e423616ce045bebfc1522e7b8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});