'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d7136f11dc2d7eae8e6b313d566be68f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/wallet_button.png": "670b849da0c4300f92872eb40434ff22",
"assets/assets/images/home.png": "30f917a619ccda487d3e7fed83289de8",
"assets/assets/images/blue_perk_empty.png": "e0fe4d696ece55e4cdd136758c08babc",
"assets/assets/images/level_number.png": "09aa53a58ac008dcaf588a637882f685",
"assets/assets/images/market.png": "941c9af32e44665362319bc5d7691983",
"assets/assets/images/blue_perk.png": "a6d80aba485ea5a85a8a8c5037f4a2fd",
"assets/assets/images/achieve.png": "a437e90ed090f59ee5685897ac8ef6ed",
"assets/assets/images/green_perk.png": "886d5ffb06ba7e1660fb417c26823f15",
"assets/assets/images/green_perk_empty.png": "0f6de239663a401870a0c3150f8cf31b",
"assets/assets/images/home_selected.png": "c97074775030c3d9c762c1cffddc73d9",
"assets/assets/images/dot.png": "253b1f942f22b01711a2dbdc1df4a6d4",
"assets/assets/images/market_selected.png": "a334d8940101cfdb6d2317313bbaa920",
"assets/assets/images/web.png": "03828adc8773a9f6178f1e64dc80cc5c",
"assets/assets/images/telegram.png": "0cb2705f4051932f21cf8cb91cd61e8f",
"assets/assets/images/tree.png": "72311d2b1656897dbdf2f6b506033bb6",
"assets/assets/images/item.png": "69b8edb38429041b2ece741856383014",
"assets/assets/images/button.png": "b22acee48ff30e75fe69553c2caf7bf8",
"assets/assets/images/tasks.png": "bb7e0bdaaa72a9713d66e5bc55d34ad4",
"assets/assets/images/background.png": "7a9ce84d87092044e293ae6a082c80ef",
"assets/assets/images/check.png": "fb61a5d301ca75afdf7c15cc50803e4c",
"assets/assets/images/purple_perk.png": "185b73dad3ffc618bf9e0602c65ccd0d",
"assets/assets/images/airdrop_selected.png": "5974e3c287a4a92fb0169f1be337cd6e",
"assets/assets/images/lock.png": "6aa3aed576c614fc8d9d507fec29303a",
"assets/assets/images/purple_perk_empty.png": "b0279d0275cab94d0796655c41e08196",
"assets/assets/images/divider.png": "d960e94c9081e3cbba1e2a18a098240a",
"assets/assets/images/tasks_selected.png": "bf12391b1df80f30e6ffeb0ea1447a37",
"assets/assets/images/airdrop.png": "a8884bcdb0245d20aeafebbb42a5095e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/AssetManifest.bin": "07d54fe2a92ce40602d73fc61fd306bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "6523b99fdff1759b290f15d321b71d10",
"assets/NOTICES": "315ad234cd6fd2f45ddaf7c4ff0b3978",
"index.html": "63c08dd98fec76e2289d66cad5588d2a",
"/": "63c08dd98fec76e2289d66cad5588d2a",
"main.dart.js": "2b21f9b444e3775013e92fa7aff4932b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "0538852d30d209f8642da2f9c9d95602",
"tonconnect-manifest.json": "4c5f8b6be89a3f939cd382441ebd86ec",
"flutter_bootstrap.js": "9e26b3d3c461e8e75b169dd144690dae",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"manifest.json": "2c7d6d19d49b2a348b079988e6b20944",
"flutter.js": "f393d3c16b631f36852323de8e583132"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
