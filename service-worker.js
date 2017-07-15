"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","33f5613bf63d95b253c51f2981416b64"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.3bf4423a.chunk.js","248c4bb167bbe6bf002bc6180107cca4"],["/static/js/1.6c5488ba.chunk.js","d03c05a84a15a346c887699757919227"],["/static/js/10.7abdc437.chunk.js","6fc03dfeb9c6d6489dcc3eaf2637b8b3"],["/static/js/11.8160b883.chunk.js","131e504ff5e102f12bc4fe2b28c7af05"],["/static/js/12.af9b0ca6.chunk.js","cd87fcb03094cb32c57d85a02ab0d7aa"],["/static/js/13.7869150a.chunk.js","bf8ab34309586a1a1a48a412cdd791a0"],["/static/js/14.1ab27b91.chunk.js","3a8877086d7291010c68a072df952586"],["/static/js/15.d7a3c7e5.chunk.js","b1137aec5dd08a628362e5ba2ec7680b"],["/static/js/16.638d416f.chunk.js","7ea0e45e73263b2d28dc5ffd47a36bf2"],["/static/js/17.06de9be0.chunk.js","abc35a0bee178c402758acbb859789de"],["/static/js/18.093dc5bd.chunk.js","b670fa764bdf3da6f76810f25bf0b021"],["/static/js/19.d68cd39c.chunk.js","14e65c4a9c9460a76690d2ea7506f263"],["/static/js/2.06bd42ee.chunk.js","24885f81a7a8f0b2259ef9ef6afb29c8"],["/static/js/20.858b24fb.chunk.js","e487a6ab8ede48dd5a6780c67057b21f"],["/static/js/21.a7a019fa.chunk.js","f6d57cfb50ccd534445c425a043464df"],["/static/js/22.cdee3c9f.chunk.js","8d6a4f79718267653724bf28a65f8ead"],["/static/js/3.52d75183.chunk.js","ad831dd3e98b5b580b8e8a05edddac84"],["/static/js/4.1f54913a.chunk.js","b76c30052cf078aaac61b80f04fd8e39"],["/static/js/5.b4ba56fa.chunk.js","de125c6bb340d212435e0be0321f31db"],["/static/js/6.49803ae1.chunk.js","3e80a71a57868da8ecfafd6d54a89d86"],["/static/js/7.810b2d7a.chunk.js","aeb886154aacbfc566f463d494a8e17c"],["/static/js/8.3a07e790.chunk.js","f46dab740fa29678eedb79387fbdce9e"],["/static/js/9.09447f91.chunk.js","845d93c85e7661fe99d49161507c2ee8"],["/static/js/main.e6025bb5.js","da47b06cdb08b29057d1d9d976a01b65"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});