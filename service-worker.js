"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","de22a8e6059067158a4bdb56cfc0de52"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.639e3b56.chunk.js","88f629fc0ddc89c269af74b2a1d90eda"],["/static/js/1.b26a2888.chunk.js","610965a2912e3ad800853930dc2776cd"],["/static/js/10.29450cee.chunk.js","ced90d9b126a5f93399cd4e58180545c"],["/static/js/11.0fd63e39.chunk.js","47a084665f1b2afe3e054377769d740f"],["/static/js/12.042c6882.chunk.js","a90c90080a17e3f196c530553ee2c630"],["/static/js/13.87cdc341.chunk.js","682c6b055381b7b4e813c350daeaf9f8"],["/static/js/14.d46cea5f.chunk.js","384c35cbeba7b37e411e7a083cbb7e50"],["/static/js/15.ad496cb1.chunk.js","960743a827b05e8b4ac69532d71a6b22"],["/static/js/16.1493efa4.chunk.js","2fcd2ee8f6281ddb28d577bcf772db5f"],["/static/js/17.35a76fd9.chunk.js","f8e4befab438ece0a7820e7870198e79"],["/static/js/18.00093682.chunk.js","e11665ddc34bbe9f933237d266ca9764"],["/static/js/19.1c72db3f.chunk.js","d5feae8e1ad8bfaf383ebce39639550e"],["/static/js/2.57c99302.chunk.js","28c614fae545ee3ac44ddd20db10f697"],["/static/js/20.d31704e5.chunk.js","b943dca51bcd19e005782fc930f43c89"],["/static/js/21.41020f14.chunk.js","83a6b5b167850d812eb76b53ce6f6fd1"],["/static/js/22.0b3ba259.chunk.js","87d0ce331b80f19af5c2b38acaef0bfc"],["/static/js/3.098e4c92.chunk.js","280d5bf0cdd10dac4d55719dc8e1706c"],["/static/js/4.659625a1.chunk.js","c60ad83d2dd1254f76d91ab358fd66fb"],["/static/js/5.ab153676.chunk.js","4fa4cddc6beb4bfb490ed2586691d3ee"],["/static/js/6.12c3796a.chunk.js","308cf20a0862f4276d236f1cf3c41a3a"],["/static/js/7.b143abef.chunk.js","1bdfa9b274d90281c8efff40344df62b"],["/static/js/8.b3b090ab.chunk.js","7401a727693507d5dbeb7b2a3c25d987"],["/static/js/9.5a581b62.chunk.js","43723216ade7e4a74e4fdfdcf33c9cc6"],["/static/js/main.a31732b9.js","452252c39e2405a073afaaafba356f5a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});