"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a2e6a624bd51295e41373431f16766ec"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.22c1ebef.chunk.js","58476a2b5db1c3d8f6dc0908a4d960c8"],["/static/js/1.a7e23be5.chunk.js","73a7bafdd1c399f34d7d39d109e9a055"],["/static/js/10.a5a33677.chunk.js","2b5719c74e3726b94bc0bf419a24b1c9"],["/static/js/11.1e9e4e39.chunk.js","05f4a6ae3facbda89b49f57bad0a446a"],["/static/js/12.6be6f2b3.chunk.js","41fd55c5f5b0e6bf235c308cbc15e44c"],["/static/js/13.b03e9870.chunk.js","0f7f10a01f11a78f6e5a546e91777510"],["/static/js/14.456e47e2.chunk.js","78ae93785f8d3746edb7c0762fd3dcc8"],["/static/js/15.8507326f.chunk.js","289ebcd871ef693e1238062ae4a9940d"],["/static/js/16.47319645.chunk.js","df6dce2604c9f437710ba74f2e5a5fc2"],["/static/js/17.5c788096.chunk.js","36d4181fd50189342cf5d9dbd857dcfd"],["/static/js/18.b7d6ab26.chunk.js","e6e7bbdb58e7c760a01b791d29562c4a"],["/static/js/19.6fcdedfe.chunk.js","162d6ccc2bae4968d61340e71ad7ac45"],["/static/js/2.c67d3172.chunk.js","8d0c9e9c7fb892b67d069c758ceaac7a"],["/static/js/20.616aa8f4.chunk.js","1aeabdf0f11716ab44a8325d7316d306"],["/static/js/21.fb6f7c53.chunk.js","3aa262a6fe2acfe5739084b719369dcc"],["/static/js/22.55f37303.chunk.js","a3005a11c59244a83e901c2e3fb58e99"],["/static/js/3.461f794a.chunk.js","23cb100dc6f64e7d7666aac99c10160c"],["/static/js/4.787bd5fd.chunk.js","a5b18d76c5770ad3f49050d4bb5e896c"],["/static/js/5.254d0bec.chunk.js","c65569b89fe16a95f25a440fe24d42e6"],["/static/js/6.b3957903.chunk.js","1b630c7a787e9c0c294c312ec953b17c"],["/static/js/7.f0638936.chunk.js","48ad773fe818da9f2ffd23cb864babde"],["/static/js/8.c1bd0763.chunk.js","154387740c91e793d0b37a4d1c9c363c"],["/static/js/9.1f74a6de.chunk.js","04dcf73ddc0a8e9757af5a70fc371741"],["/static/js/main.5e78d5b8.js","f5c08ef52e6989c16c6ab6791e165d32"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});