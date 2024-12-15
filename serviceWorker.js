const staticCarShop = "car-shop-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/car1.jpg",
  "/images/car2.jpg",
  "/images/car3.jpg",
  "/images/car4.jpg",
  "/images/car5.jpg",
  "/images/car6.jpg",
  "/images/car7.jpg",
  "/images/car8.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCarShop).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })