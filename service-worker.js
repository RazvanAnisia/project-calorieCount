"use strict";var precacheConfig=[["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/index.html","d2e8edc447a41c6d11eed6c5a143fc24"],["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/static/css/main.c5e18e06.css","96f80caece47c69cdad1275d2ebfce79"],["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/static/js/main.33b602c3.js","9efeebb9f68126a52cad77cb27a9025c"],["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/static/media/barcode2.3d797a29.png","3d797a299a58bb3951f5ddbde3eb4e6a"],["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/static/media/hero_plate_logo.f3dfc705.jpg","f3dfc7050b776fc3db5369cfa766fe49"],["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/static/media/logo_web_white.db654079.png","db6540798046672f28b8c6acd0783f11"],["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/static/media/openFood.273eb894.png","273eb8944c1def41a749c88b7e5d7695"],["%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/static/media/user_red.10851de3.png","10851de3ffde9f4690c794f7841fd45a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="%7BRazvanAnisia%7D.github.io/%7BCalorieCount%7D/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});