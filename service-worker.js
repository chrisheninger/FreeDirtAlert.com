"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b30f15c9c0bccb1a34455deaefce9309"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.448446b7.chunk.js","3939465fa7490e68df601bd43ef94b5b"],["/static/js/1.5ccdc5af.chunk.js","f541f2fd1f63b6df0681bcc9818369d3"],["/static/js/10.0fb95df5.chunk.js","7c436bcfed4ef42a7215677e9f1779f4"],["/static/js/11.d94fafda.chunk.js","f2d3be0a0e69e119b87fb745b9ed443a"],["/static/js/12.6ebb6cea.chunk.js","68dc78a864905cecd9bf868bbf3ab180"],["/static/js/13.c9adf75c.chunk.js","d54aabc0c709505ec2723b85aef357b7"],["/static/js/14.6dc9ce6e.chunk.js","a4fb848a95844879b16d29bd4e7bb978"],["/static/js/15.5c041a7e.chunk.js","411edcd31d9040d893dc8155ea48eae6"],["/static/js/16.5ca08fca.chunk.js","27bd2be1f9ccc7f4fb826034ce170d8b"],["/static/js/17.95aed24a.chunk.js","cc0032fb4a03ce7d530ae1f0559dd30b"],["/static/js/18.8401468a.chunk.js","dc9977bbc91d18a4c45178041e7d663c"],["/static/js/19.d0f9553c.chunk.js","0c4f88949c54384aaf37269519fa369f"],["/static/js/2.1e09a846.chunk.js","cd0bcc69cf8186611d27af6f198a1f2b"],["/static/js/20.68dc6b70.chunk.js","c04ae18525eac36cc34bc01e0084a66d"],["/static/js/21.7b1ff391.chunk.js","90f08b4682246a631e72ad6b3b000aca"],["/static/js/22.a3790a2a.chunk.js","00e11fa012e15dbf2e597cc4e160afbf"],["/static/js/3.cc1b06cc.chunk.js","da2af5111907a52be62f429f3d49bf2f"],["/static/js/4.5b83a98b.chunk.js","5ac14d00b72340283440a31959688e43"],["/static/js/5.15df444c.chunk.js","2bad0c4394259cd3d2dca4c0be3f9f76"],["/static/js/6.3b30d8b1.chunk.js","6a782248a354228351aa388753b84b7e"],["/static/js/7.7691e2f1.chunk.js","7f17ade464fbd4106bb8a24b2e39a78a"],["/static/js/8.d18edde2.chunk.js","0d1b2ae9b58dc6150687c2cbce524f9f"],["/static/js/9.d5177af2.chunk.js","8fcd9b003a1bc5e08e2c2dbd2c2e085b"],["/static/js/main.58db0d9a.js","77c2e00ca0a8f3e21b89ad870c780dd0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});