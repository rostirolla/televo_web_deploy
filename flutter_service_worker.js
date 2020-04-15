'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "da800dee2db9ee047c2fac0a30ddc00d",
"assets/assets/images/onboarding1.png": "d6dfb4ab7b96ef75428dc4e09a92a0cc",
"assets/assets/images/onboarding2.png": "485630c721f71735fc43b9e9cc522e86",
"assets/assets/images/onboarding3.png": "cdb037610f3fe10f34c5b2d78cdf77c8",
"assets/assets/images/onboarding4.png": "c4f6e67efaf65d7b05efda53210febc1",
"assets/assets/images/onboarding5.png": "d122a7b104afa09b0ca1e5ee3c6331db",
"assets/assets/images/onboarding6.png": "3417fc42a20340778f972006b27d1c02",
"assets/assets/images/onboarding7.png": "3e520dccf77d0dcd20144d9894072958",
"assets/FontManifest.json": "f6f5516706d040a3652032215a256b31",
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
"assets/LICENSE": "09f0454b2615b34b755c690d543f2e92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0db41909cd5bfd986de88ae513c204e0",
"/": "0db41909cd5bfd986de88ae513c204e0",
"main.dart.js": "8dc2af33236e2f866b49aba79dffad60",
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
