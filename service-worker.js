"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","551f678a0155771287e95924df07d232"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.8b732dd1.chunk.js","691bb8dfa558b4872831713aaad096fa"],["/static/js/1.3d1f4499.chunk.js","d29aecefdca539722d3a6f09d88fbfdb"],["/static/js/10.aea4bc47.chunk.js","c31af02e373df33e1cd242851201b25b"],["/static/js/11.8d660448.chunk.js","d94a9aa94f1e516b39b17502baeb1cfe"],["/static/js/12.544b0840.chunk.js","9efb8839a86c432c26f4a8a71c5be078"],["/static/js/13.67c90936.chunk.js","2d40166afbf29d8ce80d444401ee6ea2"],["/static/js/14.611d7ecb.chunk.js","8f6ff6a84d0a356cff7c5b930cb95113"],["/static/js/15.2fbac440.chunk.js","c09cfde82463f0f522d1cf8bb8461803"],["/static/js/16.adced305.chunk.js","1e9aff53feb1808d48bc39e270f68979"],["/static/js/17.324da1f3.chunk.js","240246c8c53b51f93c8e2444d138ee58"],["/static/js/18.f40f6160.chunk.js","d0501444e7ac8a6fc30780edefc007b2"],["/static/js/19.dd1a0f84.chunk.js","6bf907f4bb423c43d50229e48349d56b"],["/static/js/2.4b9208b3.chunk.js","e2a06e946dbeb116bdfbaff981ae2565"],["/static/js/20.2ff743da.chunk.js","0db22ef725a751593386f8f9bf6a795c"],["/static/js/21.548dbe3d.chunk.js","6a2ba595c412fa771b16812732d926ce"],["/static/js/22.6a8355ec.chunk.js","a720b1b083602ebba8d38ea63b146b5d"],["/static/js/3.faf5dd94.chunk.js","a99cb62b440a9e07ce52ec09cc76c7f6"],["/static/js/4.494e27de.chunk.js","e09b39a97c3a6f344faae761e1b38f44"],["/static/js/5.56ef1054.chunk.js","49e2e64c3c182c480c9711074ef152b7"],["/static/js/6.b293f0b7.chunk.js","0a9a41ee5c93e94d101066ef9f3991fe"],["/static/js/7.0b286dcf.chunk.js","47e99a17d3b48f803b36d7965edb7e78"],["/static/js/8.5f1b3287.chunk.js","9ce0455f5020dd023019a53ead6db7ae"],["/static/js/9.588f242f.chunk.js","def740834373249a229899f115008110"],["/static/js/main.4c6d64cd.js","5ed29b9180c08879117ec195ed7de1f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});