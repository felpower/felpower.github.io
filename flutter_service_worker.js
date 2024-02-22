'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "66fe5f8f98728fc0f64cd706f5afb0ab",
"assets/AssetManifest.bin.json": "7ec2ae4bb1331065650d4aaff98181c2",
"assets/AssetManifest.json": "678df496afb6446604b0917bce14216a",
"assets/assets/audio/Background_Music.mp3": "47251ebb387a749f169a5520b0a35333",
"assets/assets/audio/losing_music.mp3": "6783d86e383e3359c5895c27e4d465e0",
"assets/assets/audio/winning_music.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/icons/ak_uni_logo.jpg": "f405a575190b9fa4e1c8d60e29f1b7d5",
"assets/assets/icons/android-chrome-512x512.png": "804902361a3dfaef9882feeacf531036",
"assets/assets/images/background/background_new.png": "aec8b96e08795e2884f58eb69720dc39",
"assets/assets/images/background/background_new2.png": "9cfd7af4bcc161f809aed516ac52aa2e",
"assets/assets/images/bombs/jelly_bunt.png": "6f221c59ecb73d152ac2c907e13fdac9",
"assets/assets/images/bombs/jelly_gelb.png": "4f2d7ab55419441310524459f2eff81f",
"assets/assets/images/bombs/jelly_gelb_horizontal.png": "747b846a47b61942b91fc858a560d50b",
"assets/assets/images/bombs/jelly_gelb_vertical.png": "8fecacb0483ebe1f61ff5f73dbed8cc6",
"assets/assets/images/login/login-page.png": "f45c95902f8a94a7d0d768041671142b",
"assets/assets/instructions/InstallAndroid.png": "a46e612f4645d6b54331a3edcc69c0e5",
"assets/assets/instructions/InstallAndroid_alt1.png": "f8bee7d186c1b92818b97cc00c03236b",
"assets/assets/instructions/InstallAndroid_alt2.png": "29b38862caec931e5b4b975c069d22a3",
"assets/assets/instructions/InstallIos.png": "6c0a7580139a81710b6f6526949c8fc7",
"assets/assets/instructions/ins_1.png": "bc612bd2b7fd49d0d754b61267e9b030",
"assets/assets/instructions/ins_2.png": "4e9726f83e0d0a9f2d53ea5070346f62",
"assets/assets/instructions/ins_3.png": "9d08068f11dc3bcb6465ad418ddbb3b3",
"assets/assets/instructions/ins_4.png": "87f6384672d167f926cd6529a6856679",
"assets/assets/instructions/ins_6_1_activated.png": "31c2064c0204e83a992cac6cea50f35c",
"assets/assets/instructions/ins_6_1_competition.png": "d2e2cc8aaf448333987fdf486d558b44",
"assets/assets/instructions/ins_6_1_deactivated.png": "74a86c3a5b55b24efc245fcd02efc7f4",
"assets/assets/instructions/ins_6_1_FoMo.png": "41a9c0bbf087b01c5e9f513755d29deb",
"assets/assets/instructions/ins_6_activated.png": "9100766934d700b279212af368e786b3",
"assets/assets/instructions/ins_6_competition.png": "9100766934d700b279212af368e786b3",
"assets/assets/instructions/ins_6_deactivated.png": "1fe6ed3762ff691f4a9d010b5c825aae",
"assets/assets/instructions/ins_6_FoMo.png": "1fe6ed3762ff691f4a9d010b5c825aae",
"assets/assets/instructions/welcome_1.png": "d338c4c12188acafe75737d9ec1d9933",
"assets/assets/instructions/welcome_2.png": "3c7831caf310dec29f56ee6f2c1e6bbc",
"assets/assets/unityLevels.json": "5bb7d2079a40ddffdf2eae7dd97e0e09",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "291f5b5002adb361f77e0786197954c5",
"assets/NOTICES": "f905197b58af4a74aa0e911be61feced",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "496db7c343c8280b1689a665721d8757",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"auth.html": "a5c3bbb6fb398b8842553d026c91c335",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "804902361a3dfaef9882feeacf531036",
"firebase-messaging-custom.js": "c3e2ec9673ba16e85d26b595b2a77065",
"firebase-messaging-sw.js": "ff9a7de782a352f01966ac8e4225218e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "1b053054a6b03d313d113f8608135878",
"icons/Icon-512.png": "804902361a3dfaef9882feeacf531036",
"index.html": "7e391269f7744225f75be7b00a2bb57f",
"/": "7e391269f7744225f75be7b00a2bb57f",
"main.dart.js": "5ef9c2a8a4a8debd568fee328c9eb803",
"manifest.json": "8a30a71d689a5fe636d33599e3f6a741",
"splash/img/dark-1x.png": "babbb8ce9d0bca90ac67e16347413653",
"splash/img/dark-2x.png": "fd3abc944375ac52383241945b159b27",
"splash/img/dark-3x.png": "ef6b3223dc0527637a2cae34166c2943",
"splash/img/dark-4x.png": "f51177002122442d889d8f1b98bf2016",
"splash/img/light-1x.png": "babbb8ce9d0bca90ac67e16347413653",
"splash/img/light-2x.png": "fd3abc944375ac52383241945b159b27",
"splash/img/light-3x.png": "ef6b3223dc0527637a2cae34166c2943",
"splash/img/light-4x.png": "f51177002122442d889d8f1b98bf2016",
"UnityLibrary/Build/3690ed0e1a6de62a8aa8bc00a4daacb6.js": "3690ed0e1a6de62a8aa8bc00a4daacb6",
"UnityLibrary/Build/5d906ecde05b7dd48e7a5e3b7772241f.data": "5d906ecde05b7dd48e7a5e3b7772241f",
"UnityLibrary/Build/a1a7e3b6d922b0852f9db2af98d793bf.wasm": "a1a7e3b6d922b0852f9db2af98d793bf",
"UnityLibrary/Build/UnityLibrary.loader.js": "994b982bded056bd905895cd517202da",
"UnityLibrary/index.html": "6706045351ff0a61c8a1d365bd351f39",
"UnityLibrary/StreamingAssets/UnityServicesProjectConfiguration.json": "317a5bcee0617d1b38bbde499b2d27d5",
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
