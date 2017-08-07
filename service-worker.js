"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","50cdfc2da9f975d41d82dd0d26dab78f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.ba253d05.chunk.js","a81f1e0d1e5856d3c16869f382cf0452"],["/static/js/1.6be77247.chunk.js","9562f1354c0871a4d3862c7d211cfd5e"],["/static/js/10.0c47995b.chunk.js","95ea2970560456f7161edc6a93ffc66a"],["/static/js/11.58c9b84b.chunk.js","0663577bffd235e73bcd858b93f174b8"],["/static/js/12.e5a6802e.chunk.js","1c08fa112d14f717acd805620aed7895"],["/static/js/13.04241b8d.chunk.js","496a476a24aec9161ff28835a03ef0fb"],["/static/js/14.b21e9578.chunk.js","ddaf89f068d065add1f305b141190f69"],["/static/js/15.db5c81e1.chunk.js","719a19daeffd8ca7b51632d18b6430b0"],["/static/js/16.df5eee1c.chunk.js","b1c5e65e919e0fbfb2a520c9c183d4fc"],["/static/js/17.ecf9c377.chunk.js","23e59285795a424e72cf558c977e3044"],["/static/js/18.b70c214f.chunk.js","2157ccf38b440376d7b2e0c4a3e3f9c6"],["/static/js/19.1e5045d6.chunk.js","9da61cc31cf95e460b27b404100b97b6"],["/static/js/2.d6c7ef13.chunk.js","40c1a1cb4b8b20743fa1c20c3776dce2"],["/static/js/20.2c247a30.chunk.js","b63948389f3a04c11654dab6aca1e57d"],["/static/js/21.69957171.chunk.js","886e8b416d05ab4a901f32d2e1c90b55"],["/static/js/22.311ff9d5.chunk.js","c83182e09f3e094fa112ac105baae5b8"],["/static/js/3.80c6868e.chunk.js","6cdbdae101b719bf290463a88c14606e"],["/static/js/4.06762f99.chunk.js","c0b42d89fb4e8507fb9ef5f2b2c2e00f"],["/static/js/5.cec35e8b.chunk.js","de388225e17057f00731988e868231ac"],["/static/js/6.df9f8bdc.chunk.js","034aa3c92083dc54877b1f06c708e375"],["/static/js/7.d532d1d7.chunk.js","0a29314d83589e7651a1ad362d3ba390"],["/static/js/8.adaabbb1.chunk.js","4627dd049b01812334c8a41744be5313"],["/static/js/9.c14d0559.chunk.js","d278a6b2552b0c94db17d24299f81e5d"],["/static/js/main.8e32c193.js","4561fed548cae64a0cecf01836c50604"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});