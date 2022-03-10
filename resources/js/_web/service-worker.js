importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

if (workbox) {

    // top-level routes we want to precache

	const precacheManifest = [injectionPoint];

	workbox.core.setCacheNameDetails({ prefix: 'd4' })
	//Change this value every time before you build
	const LATEST_VERSION = 'v1.0.5'
	self.addEventListener('activate', (event) => {
	  console.log(`%c ${LATEST_VERSION} `, 'background: #ddd; color: #0000ff')
	  if (caches) {
	    caches.keys().then((arr) => {
	      arr.forEach((key) => {
	        if (key.indexOf('d4-precache') < -1) {
	          caches.delete(key).then(() => console.log(`%c Cleared ${key}`, 'background: #333; color: #ff0000'))
	        } else {
	          caches.open(key).then((cache) => {
	            cache.match('version').then((res) => {
	              if (!res) {
	                cache.put('version', new Response(LATEST_VERSION, { status: 200, statusText: LATEST_VERSION }))
	              } else if (res.statusText !== LATEST_VERSION) {
	                caches.delete(key).then(() => console.log(`%c Cleared Cache ${LATEST_VERSION}`, 'background: #333; color: #ff0000'))
	              } else console.log(`%c Great you have the latest version ${LATEST_VERSION}`, 'background: #333; color: #00ff00')
	            })
	          })
	        }
	      })
	    })
	  }
	})

	workbox.core.skipWaiting()
	workbox.core.clientsClaim()

	self.__precacheManifest = [].concat(self.__precacheManifest || [])
	workbox.precaching.precacheAndRoute(self.__precacheManifest, {})


    // match routes for homepage, blog and any sub-pages of blog
     workbox.routing.registerRoute(
        '/thankyou',
        new workbox.strategies.CacheFirst({
          cacheName: 'semi-static'
        })
      )
      workbox.routing.registerRoute(
        '/',
        new workbox.strategies.CacheFirst({
            cacheName: 'semi-static'
        })
      )

    // js/css files
    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources',
        })
    );

    workbox.routing.registerRoute(
        new RegExp('/images/'),
        new workbox.strategies.CacheFirst({
          cacheName: 'static-files'
        })
    )

    workbox.routing.registerRoute(
        new RegExp('/products/'),
        new workbox.strategies.CacheFirst({
          cacheName: 'product-images'
        })
    )

    workbox.routing.registerRoute(
        '/admin/dashboard',
        new workbox.strategies.NetworkOnly({
            cacheName: 'semi-static'
        })
    )

    workbox.routing.registerRoute(
	    /.*(?:fonts\.googleapis|gstatic)\.com.*$/,
	    new workbox.strategies.CacheFirst({
	      cacheName: 'google-fonts'
	    })
	  )

	  workbox.routing.registerRoute(
        new RegExp('/api/*'),
        new workbox.strategies.NetworkFirst({
          cacheName: 'api-get-requests'
        })
      )

    // images
    workbox.routing.registerRoute(
        // Cache image files.
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        // Use the cache if it's available.
        new workbox.strategies.CacheFirst({
            // Use a custom cache name.
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    // Cache upto 50 images.
                    maxEntries: 50,
                    // Cache for a maximum of a week.
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );

}
