"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","273a7acb62e416a90534b21a0e585199"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.9f254f1e.chunk.js","0969750a0ce83c0ff3275dda09c9f3e7"],["/static/js/1.9075cf17.chunk.js","aef297711b683df8e7c0aa44155ce725"],["/static/js/10.a56f24a0.chunk.js","59e2ef38ae92b391129312b4a124cac4"],["/static/js/11.943129b2.chunk.js","0bfed09bf1de13227559c993c54e8e52"],["/static/js/12.c7ae6c04.chunk.js","cb42de48420c8cbb521ff38fc2664635"],["/static/js/13.6df0c521.chunk.js","871172b5012f2078307249710d6a5ae1"],["/static/js/14.fc75945c.chunk.js","0db359d7480af70d99043bae0952cacf"],["/static/js/15.a397944c.chunk.js","a1f29ecae332ffea75afc87e192b5c6f"],["/static/js/16.79f06b7c.chunk.js","39cb616395ac9d4d5f2fcd6b25b2ce98"],["/static/js/17.66e7422c.chunk.js","4b2f3ef83a8884dc292fcdc41feb878f"],["/static/js/18.23df1ed3.chunk.js","72bd9ba2114d25f08fccee6b11357024"],["/static/js/19.b9e1df1b.chunk.js","454faaef4a2cac0ae6c11618c3f63a2f"],["/static/js/2.c79b6fdf.chunk.js","64f76cb3829b9aab3a7beb240c7f8854"],["/static/js/20.6e555115.chunk.js","c18c4c2ca3d70ca2b1fec76738b3cc0e"],["/static/js/21.214ff6e1.chunk.js","8b4f30bf38df97001136923ff0a5cef3"],["/static/js/22.132f59d3.chunk.js","7d09ea8d29ccad799f49cf0871b6aba5"],["/static/js/3.104e8162.chunk.js","1909443a094004f1327bbe08da5fe768"],["/static/js/4.5bddc04c.chunk.js","a9ec2addc6ef577829a613be8509a6b8"],["/static/js/5.72b82e57.chunk.js","4e95a1afcb1ca1b55d48118eb9dccc55"],["/static/js/6.4ecbc378.chunk.js","a0f82b3d0b15cf029f167f5c3977d2b2"],["/static/js/7.fbf1cae3.chunk.js","d3e8f1ffa33c23d9d633fc75082846df"],["/static/js/8.bd331e40.chunk.js","5bf01e30eb2d4022ef8618744145994d"],["/static/js/9.37aa8e40.chunk.js","125f8c7af8e350f565b6386d5fb6de10"],["/static/js/main.f483cf84.js","e5a7ab7c8d8010cc9e67dd3085c877b4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});