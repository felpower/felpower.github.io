'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "008fd098eb8c414f645e8d16be41970f",
"assets/AssetManifest.bin.json": "999a2618ce256c908b0e8cb451ed7dbf",
"assets/AssetManifest.json": "f5af49afb79514bcfe98153adef727bf",
"assets/assets/audio/bomb.wav": "6257b8d00aa498c54260229564862eea",
"assets/assets/audio/game_start.wav": "b704ae71d6b7147492ce752f40a8f777",
"assets/assets/audio/lost.wav": "3c66057ca30502bf8cda7383d070299c",
"assets/assets/audio/move_down.wav": "5415bad0aff80195c2b7e5ae00f20175",
"assets/assets/audio/swap.wav": "3a3734ec432ea13923f68f1dadb34ac3",
"assets/assets/audio/win.wav": "7740f4359c53e7415adae7d44307feb0",
"assets/assets/icons/tile.png": "4a57030ad04ea889ec226fe3eebf6977",
"assets/assets/images/background/background.jpg": "78e869de6ddb81384908778130701273",
"assets/assets/images/background/background2.jpg": "a1ce80eefc6e5a47da5a6bc4c8dbe0c1",
"assets/assets/images/background/background_new.png": "aec8b96e08795e2884f58eb69720dc39",
"assets/assets/images/background/background_new2.png": "9cfd7af4bcc161f809aed516ac52aa2e",
"assets/assets/images/bombs/blue.png": "1ee353e1f2eec8a690f5c3a3dcaee713",
"assets/assets/images/bombs/fireball.png": "72c4cdcecb74c23d47bdd753de769f3d",
"assets/assets/images/bombs/fish_1.png": "4f82f405f8032f9ac7e8e5c8273dfcfc",
"assets/assets/images/bombs/green.png": "78ffc169773ba726e0f512b96f54b433",
"assets/assets/images/bombs/mine.png": "398316f453308703bb0bd19c7cee1238",
"assets/assets/images/bombs/multi_color.png": "597164cb600190a1e14ddae14245402d",
"assets/assets/images/bombs/orange.png": "d5e3a9f2cf62617f2c0864872f509ef5",
"assets/assets/images/bombs/purple.png": "15ba18b94dda8b08ae385e7d39cad972",
"assets/assets/images/bombs/rainbow_fish.png": "acb32fabb650f8469195ce32864d54ad",
"assets/assets/images/bombs/red.png": "55f70075ff52d85f5379968db3f8b5db",
"assets/assets/images/bombs/rocket.png": "134e884cd970c6e977f0f87404386f81",
"assets/assets/images/bombs/tnt.png": "486ee84f8e727c88b6979389dbc88eba",
"assets/assets/images/bombs/yellow.png": "babb16fc0e9a1f687d94eeb3a5ff8de7",
"assets/assets/images/borders/border_1.png": "2a8a1a732c965fb8bdb96d5490af66a0",
"assets/assets/images/borders/border_10.png": "109986b29c33284a6cafc16381226e87",
"assets/assets/images/borders/border_11.png": "ad31e94aa8e864c345f27cab9a262838",
"assets/assets/images/borders/border_12.png": "ad6bad023bc2d5c44971a3d2a299f197",
"assets/assets/images/borders/border_13.png": "53d19d026224498e2667ab7e6a7dc8cb",
"assets/assets/images/borders/border_14.png": "eb30b40bd830f75c951babb15216658d",
"assets/assets/images/borders/border_15.png": "d652c10c33cfa04d612ed1ff53c02e05",
"assets/assets/images/borders/border_2.png": "8cd9760e3f5e66651a8c4be53b404f44",
"assets/assets/images/borders/border_3.png": "b0ed4b713b52069fce3fa461b994831e",
"assets/assets/images/borders/border_4.png": "ce884d98d6610fa38638cc6349ef6caf",
"assets/assets/images/borders/border_5.png": "2573f70c4db315192de991a3dee0cf91",
"assets/assets/images/borders/border_7.png": "4be5f409d94489dc0796fec126b47f8b",
"assets/assets/images/borders/border_8.png": "c184b822acb231a0aca18aee47457647",
"assets/assets/images/credit/bg.png": "d03ec45fe1bed7e84a71e169608aa464",
"assets/assets/images/credit/card_bg.png": "2c4252905bf68cbcaccf8adaff09a455",
"assets/assets/images/credit/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/assets/images/deco/ice_01.png": "e1117638ce968088f802ae04eb4d002f",
"assets/assets/images/deco/ice_02.png": "ec63b218bd6ca04c8389040544899ccf",
"assets/assets/images/deco/wall.png": "555094e03402d7e81aa423831bf0159f",
"assets/assets/images/login/login-page.png": "f45c95902f8a94a7d0d768041671142b",
"assets/assets/images/scratcher/background.jpg": "8a788fe78ceea24ac1259251aa857881",
"assets/assets/images/scratcher/dart.png": "c979b430b2da155059ebc0a22b0a26ac",
"assets/assets/images/scratcher/flutter.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/assets/images/scratcher/google.png": "d35f5dbce08ddcc95a1adf48c9251d63",
"assets/assets/images/scratcher/scratch.png": "73097059a8bc357c8a6e19c7c6c2a37a",
"assets/assets/images/scratcher/unseen.ttf": "e500c532b5183f746af99251e806fcab",
"assets/assets/images/slots/777.svg": "c3554f378ba65f40b0fe9b403c1c9d55",
"assets/assets/images/slots/apple.svg": "4a6f07af8f0b3d0bb41d772529e0cb82",
"assets/assets/images/slots/bar.svg": "aa3bd764bd0b30bf9a778b045992642c",
"assets/assets/images/slots/cherry.svg": "d1b92faccbe9c7c5b78d169fb5aeedf3",
"assets/assets/images/slots/coin.svg": "7299eceeed6d6b8d005cf0bc4fe09984",
"assets/assets/images/slots/crown.svg": "14787fea6f44f4eec3a6371ebd9978fb",
"assets/assets/images/slots/lemon.svg": "920237d173c29eb3344f7ffa79fa7d77",
"assets/assets/images/slots/watermelon.svg": "8f7c333c3cb91ba75f27b3cc2e24176d",
"assets/assets/images/tiles/blue.png": "b5e6dbf6645ab9fc76e1c9a13dbffbde",
"assets/assets/images/tiles/green.png": "61d931eaafd4eb9f42e7bea4b2b6be1d",
"assets/assets/images/tiles/multicolor.png": "ae3ede85c26d69d73a32b156c6a114c6",
"assets/assets/images/tiles/orange.png": "8bb41987081b118017ceecd25210174c",
"assets/assets/images/tiles/purple.png": "f055d0c3e851abae41efb346f11907cb",
"assets/assets/images/tiles/red.png": "66dd652109f6feaee5a9b708d1041187",
"assets/assets/images/tiles/yellow.png": "dcb91d013b67145a4773a6de28baf2e4",
"assets/assets/levels.json": "5e23199875e24ad07eecda422b36a17a",
"assets/assets/unityLevels.json": "5e35f44c3100106296a4a7591320036d",
"assets/assets/videos/spinning_earth.mp4": "38fbb780635feb6721f71d3bab49ebc9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1f34f527fce1573b29d3d05b8f2d5a34",
"assets/NOTICES": "92b9848ecca905864acb21799b3aae8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "496db7c343c8280b1689a665721d8757",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"auth.html": "a5c3bbb6fb398b8842553d026c91c335",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "47d5c4b5b8a90cc74e23f29dbebe06f7",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ff923b275239cee788005fe5ef16820",
"/": "7b6abe3c415e7ab3ba8e888074093615",
"main.dart.js": "b80866946b7e586b1e5edfbe8032fa62",
"manifest.json": "071e4a0753903aa0a1b22e293aebb9b4",
"sw.js": "b29c83a41fba109b7c7fed281182b3aa",
"UnityLibrary/Build/UnityLibrary.data": "1c21a071fa63a67d3ada9fcd344763c1",
"UnityLibrary/Build/UnityLibrary.framework.js": "ceb669a4270938829bcddd11fe7e8f1f",
"UnityLibrary/Build/UnityLibrary.loader.js": "994b982bded056bd905895cd517202da",
"UnityLibrary/Build/UnityLibrary.wasm": "1db36923fda3d34018668dc2357507e2",
"UnityLibrary/index.html": "7b6abe3c415e7ab3ba8e888074093615",
"UnityLibrary/StreamingAssets/UnityServicesProjectConfiguration.json": "e48103a6f8e73d7839d45117951916de",
"UnityLibrary/TemplateData/favicon.ico": "f04ae07ad1b634a4152d2c8175134c56",
"UnityLibrary/TemplateData/fullscreen-button.png": "489a5a9723567d8368c9810cde3dc098",
"UnityLibrary/TemplateData/MemoryProfiler.png": "90178b1c01bd4c66a21b9f2866091783",
"UnityLibrary/TemplateData/progress-bar-empty-dark.png": "781ae0583f8c2398925ecedfa04b62df",
"UnityLibrary/TemplateData/progress-bar-empty-light.png": "4412cb4b67a2ae33b3e99cccf8da54c9",
"UnityLibrary/TemplateData/progress-bar-full-dark.png": "99949a10dbeffcdf39821336aa11b3e0",
"UnityLibrary/TemplateData/progress-bar-full-light.png": "9524d4bf7c6e05b2aa33d1a330491b24",
"UnityLibrary/TemplateData/style.css": "1981b5d803ea85e3a43d1adcb046b0ad",
"UnityLibrary/TemplateData/unity-logo-dark.png": "5f00fa907e7c80061485fc64b62ca192",
"UnityLibrary/TemplateData/unity-logo-light.png": "daf8545f18a102b4fa8f693681c2ffe0",
"UnityLibrary/TemplateData/webgl-logo.png": "0c09503c39e9a26675e5f56d82f061b3",
"UnityLibrary/TemplateData/webmemd-icon.png": "e409a6f1c955c2babb36cd2153d418b5",
"version.json": "0ea410cab75b39fe45c4636f2aaf6001"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
