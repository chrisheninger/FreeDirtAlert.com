"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","267a37342c9b4332964f445eec73c4fd"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.a532f132.chunk.js","03b4035e8bcef07f6467243754f99f7c"],["/static/js/1.86260f19.chunk.js","df1e659104754b36d8b92d7ded207f0e"],["/static/js/10.7bdf2fdc.chunk.js","9ce18d862fc4eb551ce323cdb8f2515e"],["/static/js/11.dd245508.chunk.js","522901220a6a1ff09109c95b52022b63"],["/static/js/12.da7a397c.chunk.js","a074d3c00553e23ec329be542e3c9e47"],["/static/js/13.655d9ef8.chunk.js","3c20a365acc4596e3582a0956a18942a"],["/static/js/14.3dd611bd.chunk.js","511fecfe5d51b22b037ba5413a2681ac"],["/static/js/15.34b0c2b5.chunk.js","fcd4ae251973722d1b806cb2b0581b3c"],["/static/js/16.ff756e49.chunk.js","56448a2787bd830ef98eea126a3ea057"],["/static/js/17.9eefbb84.chunk.js","0502d7ee75dadde826339a4f8d6825ef"],["/static/js/18.7c101e9f.chunk.js","4bf273fcd5ef36d7349902e1f9fe4c2e"],["/static/js/19.c8b32ea1.chunk.js","f79453d2c53d82a7549e6a98c88e8517"],["/static/js/2.074e7d80.chunk.js","3410729eb8daacd5ba416aebe20abf2b"],["/static/js/20.d71b90f2.chunk.js","d5faefdb8f6020bbdaef7aa562519f59"],["/static/js/21.3f27d2b7.chunk.js","d6a6233e7823976bce1fda9bc029ff4c"],["/static/js/22.558d77c7.chunk.js","ffb475aadf9f35138071101d5cbf372d"],["/static/js/3.e2d6de0e.chunk.js","419cc1474adf4a3f9b6a0629873efddc"],["/static/js/4.aa779d7d.chunk.js","89e8c7f8bea829581c3ce3bd90bd2de8"],["/static/js/5.93cccf39.chunk.js","917ee8b6c9f64db5b8b051e9fdcaa259"],["/static/js/6.7e513c39.chunk.js","9afd22b13b4a466af3f5f397960ad2df"],["/static/js/7.c537472a.chunk.js","858b4e79ad734fe6382b9c4701c00239"],["/static/js/8.c031e574.chunk.js","df6d3e87635890329b7dff76ec4abc4f"],["/static/js/9.e8b25676.chunk.js","90be91fdbde83ec56b12212eb990f201"],["/static/js/main.bb225546.js","3c86c3c07d7761cba098004b81849ef5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});