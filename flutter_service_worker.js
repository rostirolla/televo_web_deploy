'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ecedd34ce617c4af35b28b7c2a380f06",
"assets/assets/images/onboarding1.png": "081764669038bf4943129106aaf65c5c",
"assets/assets/images/onboarding2.png": "2557b82ac043ce4f09b216319a91fef1",
"assets/assets/images/onboarding3.png": "254c52815218fa4b828c395b7f768721",
"assets/assets/images/onboarding4.png": "55d2afd96f7fcc5904f271067c4665d7",
"assets/assets/images/onboarding5.png": "6d503ea79ccd9de7b49c6a553619a9ee",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/google_fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/google_fonts/Roboto-BlackItalic.ttf": "99682a78fa4fe61e1177b94757336bbf",
"assets/google_fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/google_fonts/Roboto-BoldItalic.ttf": "5b44818d2b9eda3e23cd5edd7b49b7d5",
"assets/google_fonts/Roboto-Italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/google_fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/google_fonts/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"assets/google_fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/google_fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/google_fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/google_fonts/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/google_fonts/Roboto-ThinItalic.ttf": "35a9c89aff1396595ad345e378a32aca",
"assets/google_fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/google_fonts/RobotoCondensed-BoldItalic.ttf": "c783051f11a8f369e8acc7adfcb5478d",
"assets/google_fonts/RobotoCondensed-Italic.ttf": "d6fc5ec5403ec65bdaecfe44b7b84402",
"assets/google_fonts/RobotoCondensed-Light.ttf": "885e5558c90864ddb72ad486f36470cc",
"assets/google_fonts/RobotoCondensed-LightItalic.ttf": "f0177f3fd234ac8664509f19aef620fb",
"assets/google_fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"assets/google_fonts/RobotoMono-Bold.ttf": "7c13b04382bb3c4a6a50211300a1b072",
"assets/google_fonts/RobotoMono-BoldItalic.ttf": "4a0b78a48050f97c16ef6fc518afd362",
"assets/google_fonts/RobotoMono-Italic.ttf": "c37c35a80051edc42d141ec301066052",
"assets/google_fonts/RobotoMono-Light.ttf": "9d1044ccdbba0efa9a2bfc719a446702",
"assets/google_fonts/RobotoMono-LightItalic.ttf": "85fb02352b0167446e71a91a35d4d6cc",
"assets/google_fonts/RobotoMono-Medium.ttf": "7cfbd4284ec01b7ace2f8edb5cddae84",
"assets/google_fonts/RobotoMono-MediumItalic.ttf": "c1d4ca93da41dc3f8382ec6798d3708e",
"assets/google_fonts/RobotoMono-Regular.ttf": "b4618f1f7f4cee0ac09873fcc5a966f9",
"assets/google_fonts/RobotoMono-Thin.ttf": "288302ea531af8be59f6ac2b5bbbfdd3",
"assets/google_fonts/RobotoMono-ThinItalic.ttf": "355d559cc860016a068bcd16b66e4bd3",
"assets/LICENSE": "e0b46f89fa086b3ae6964407b4710aaf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0db41909cd5bfd986de88ae513c204e0",
"/": "0db41909cd5bfd986de88ae513c204e0",
"main.dart.js": "6bd52a269b2127e0f56aba1aa96caed5",
"manifest.json": "a6ada579a0f66b0d46f57ebd9edc735d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
