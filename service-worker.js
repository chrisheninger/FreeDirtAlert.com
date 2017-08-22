"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","dff09de56810ddd899e7238604b47012"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.d4928b9b.chunk.js","d478b33e602d441e7d65567aef48be9c"],["/static/js/1.d81ae666.chunk.js","09e8c8a94f0765eae94dcdd8df30b6c2"],["/static/js/10.9c36233a.chunk.js","cb0f81c5b2a46d1591672a8966aa7ca5"],["/static/js/11.0b0bd26e.chunk.js","9d377e8187fe78fb67eba7f575bbaa84"],["/static/js/12.6cee7d80.chunk.js","b4b734897ce87c0db968dea736a83843"],["/static/js/13.1df34b3c.chunk.js","cce5c0c5485c735e979df08892a81abd"],["/static/js/14.210cb8be.chunk.js","a13370e8f6534514e70bef14d217afd2"],["/static/js/15.26266c2a.chunk.js","d0e18aa97d4915379cfce9ea839efc67"],["/static/js/16.8a36bf35.chunk.js","43a8629b1c9fbc7e93dff83689ac2e30"],["/static/js/17.4601d1d7.chunk.js","35bcd8d2cea94db2ceac63cee0c2bf2e"],["/static/js/18.1b44e01a.chunk.js","d449b26029b249c5ea704ed9966f9eeb"],["/static/js/19.23c3d0fd.chunk.js","f10f95bd6ed334b9d4a506ec64f6e396"],["/static/js/2.9d52918a.chunk.js","e603acc04af173bd9dce712f7d834fba"],["/static/js/20.520bde2d.chunk.js","514bfb3e89d83b19d0fecc836fc3f899"],["/static/js/21.e1b605bb.chunk.js","1aa5a1d27d8adead8b6651611617b02f"],["/static/js/22.e923dfad.chunk.js","f014b7fe1ba7b0460ff24aa8c50d3770"],["/static/js/3.34a70775.chunk.js","83dcaceb8f39634d2edc1f63e78d6dff"],["/static/js/4.34f04fb5.chunk.js","252c1873bda7cf9783ee14f3379051bd"],["/static/js/5.d588e85d.chunk.js","03c5cd3863e9b83f2c72ab120f66d75d"],["/static/js/6.67d4784c.chunk.js","8b452ed8380d99eb3eab177a0633eea6"],["/static/js/7.242f6c1e.chunk.js","a5fb874810b839e4746657e3ba4dd1d2"],["/static/js/8.409423ce.chunk.js","2bc54966371695b9686a168d836f8cf0"],["/static/js/9.84ce3acb.chunk.js","c75a71d398e92b4b878279d5d0866c84"],["/static/js/main.266d0f7e.js","7f80bb63fc4950c1942e50018104e66e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});