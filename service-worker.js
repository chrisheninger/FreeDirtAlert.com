"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a609aa3f1cc1577996b45b0c7a12995f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.fd3d1454.chunk.js","5ca8d52702b1bfa8c0fe6ff9daeeda4e"],["/static/js/1.2246e9a4.chunk.js","f31bec1ac8ebcac2c658f1397d061733"],["/static/js/10.87a240b0.chunk.js","08c9eef4d40dfa97256453a451b057eb"],["/static/js/11.5e5e9d42.chunk.js","4ff82ba59de45c6329f84e336cc61306"],["/static/js/12.906b3a01.chunk.js","8f47f2a557c5ae5416dc55f1fa7f97f6"],["/static/js/13.9dbb37f9.chunk.js","1a2b5cda88c54dcb340754d92ecf597e"],["/static/js/14.bd7fbcb9.chunk.js","e92bf189cb14fcf43f9bbd987870013b"],["/static/js/15.ff2a64bc.chunk.js","c2d91d4c185ef98fa686ba57ba3dbfdc"],["/static/js/16.e520c3e6.chunk.js","9c70b091260950e2ae030c8c354d33de"],["/static/js/17.6ec847c9.chunk.js","78507954f65dab41c569c3c31932f568"],["/static/js/18.cbe7aa85.chunk.js","f85dbf4df477cc1fb84684f1f2f276c8"],["/static/js/19.b7ff87e8.chunk.js","589f4ca288cecd59f98b384289bd8593"],["/static/js/2.a3957389.chunk.js","d48b97f3794a7808ade93380e207a222"],["/static/js/20.1aac2905.chunk.js","4a86060d27a85a0c789bb3c385dc8ed4"],["/static/js/21.250283e9.chunk.js","6bd7d751373607c11555211fd7086267"],["/static/js/22.7d11b813.chunk.js","8de817664d336958c50f43e129d532d9"],["/static/js/3.5752df10.chunk.js","ae1d42e0e9fe6cf738da7f4015601eb3"],["/static/js/4.66cbfc40.chunk.js","f45554075a6594e4943247732be122a7"],["/static/js/5.dc006512.chunk.js","fe953fa01f98459bdd63ca604ea45838"],["/static/js/6.f3902115.chunk.js","2639c4ede91e6efc3a4985bed0e2321b"],["/static/js/7.107b0130.chunk.js","21b44cd2b90a93ee802bf83172a59f3b"],["/static/js/8.b3fccc8b.chunk.js","4e4c502101b3ec6fcf2c5c4a3924cdaf"],["/static/js/9.6893a632.chunk.js","3a493eb0e3394851388bbe0164430aa1"],["/static/js/main.5697bd84.js","13c1498133787a7414a5e67c08ff9fd9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});