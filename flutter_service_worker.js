'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "59af49c026aa2c03754c04109d1d7b0d",
"assets/AssetManifest.bin.json": "b1cea608b54f6c2298eadaefcd43bbe5",
"assets/AssetManifest.json": "4c4be817272cc71e1515cdd330395331",
"assets/assets/icons/android-chrome-512x512.png": "804902361a3dfaef9882feeacf531036",
"assets/assets/images/background/background_new.png": "aec8b96e08795e2884f58eb69720dc39",
"assets/assets/images/background/background_new2.png": "9cfd7af4bcc161f809aed516ac52aa2e",
"assets/assets/images/bombs/jelly_bunt.png": "6f221c59ecb73d152ac2c907e13fdac9",
"assets/assets/images/bombs/jelly_gelb.png": "4f2d7ab55419441310524459f2eff81f",
"assets/assets/images/login/login-page.png": "f45c95902f8a94a7d0d768041671142b",
"assets/assets/images/others/close.png": "8b42946a746e241c3297b86b4bc8503e",
"assets/assets/instructions/InstallAndroid.png": "a46e612f4645d6b54331a3edcc69c0e5",
"assets/assets/instructions/InstallAndroid_alt1.png": "f8bee7d186c1b92818b97cc00c03236b",
"assets/assets/instructions/InstallAndroid_alt2.png": "29b38862caec931e5b4b975c069d22a3",
"assets/assets/instructions/InstallIOS.png": "6c0a7580139a81710b6f6526949c8fc7",
"assets/assets/instructions/ins_1.png": "9e8d0ce5dee60eb307e822196b66cd81",
"assets/assets/instructions/ins_2.png": "817f26ba86b1f979fe4e991a12c2a0be",
"assets/assets/instructions/ins_3.png": "9fd62c0e8710426f8708e68135edddf0",
"assets/assets/instructions/ins_4.png": "d97d3acb15bbc77c549ad34eba2d94ec",
"assets/assets/instructions/ins_5.png": "b50f0bd4e9191c3d916e9d6c0fa5f26a",
"assets/assets/instructions/ins_5_alt.png": "8b0ccab8054c543bda862fe6b64037ab",
"assets/assets/unityLevels.json": "f4a58f7144db065c6fd257a707c50f73",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "13562b66f2a43b61f33e30a7d752c371",
"assets/NOTICES": "8e7ded456a5956c0751a5792e3a96b50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "496db7c343c8280b1689a665721d8757",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"auth.html": "a5c3bbb6fb398b8842553d026c91c335",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "34eb740000df15c03210028f34bc9cf5",
"canvaskit/canvaskit.wasm": "2778fe4a13eac805b37df04590085ba3",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "afe994e4d3d6d23db1d643573c9839ce",
"canvaskit/chromium/canvaskit.wasm": "1ec8ac7ed8ea5906c2e03fc14cb2c22a",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "36607a151127e3736083d241f6e7356b",
"canvaskit/skwasm.wasm": "045364c77c9eedecbd12d2c77fe8fa0a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "804902361a3dfaef9882feeacf531036",
"firebase-messaging-sw.js": "39e321cf7c107e84ba9a90b4e79c1f0e",
"flutter.js": "5aee128657b91f4e3e1eeec85c7ee066",
"icons/Icon-192.png": "1b053054a6b03d313d113f8608135878",
"icons/Icon-512.png": "804902361a3dfaef9882feeacf531036",
"index.html": "4318f711227cfaf90d0f5e2bdbb78dbd",
"/": "4318f711227cfaf90d0f5e2bdbb78dbd",
"main.dart.js": "4555dbdb95fa44e19ec94a36a6c6ab36",
"manifest.json": "8a30a71d689a5fe636d33599e3f6a741",
"UnityLibrary/Build/UnityLibrary.data": "f2822e4a03f20dcd6394d5bbd22a2679",
"UnityLibrary/Build/UnityLibrary.framework.js": "8791a0715670824db384025d976ab54c",
"UnityLibrary/Build/UnityLibrary.loader.js": "994b982bded056bd905895cd517202da",
"UnityLibrary/Build/UnityLibrary.wasm": "4f6f70118bbe5f5d1abf0e62dcca6f9c",
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
"version.json": "00deb62699f84b44348922cb3f84cbcd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
