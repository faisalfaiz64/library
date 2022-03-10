// FILE PATH: /resources/js/service-worker.js

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    // injected assets by Workbox CLI
    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(
    // Cache API Request
	    new RegExp('/api/(.*)'),
	    workbox.strategies.staleWhileRevalidate({
	         cacheName: 'apiCache',
	         plugins : [
	            new workbox.expiration.ExpirationPlugin({
	                maxEntries: 100,
	                maxAgeSeconds: 30 * 60 // 30 Minutes
	            })
	        ]
	    })
	);


    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.CacheFirst({
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
        /.*(?:fonts\.googleapis|gstatic)\.com.*$/,
        new workbox.strategies.CacheFirst({
          cacheName: 'google-fonts'
        })
      )

    // images
    workbox.routing.registerRoute(
	    new RegExp('\.(png|svg|jpg|jpeg)$'),
	    workbox.strategies.cacheFirst({
	        cacheName: 'image-cache',
	        plugins: [
	            new workbox.expiration.Plugin({
	                maxAgeSeconds: 60 * 60 * 24 * 7,
	                maxEntries: 50,
	                purgeOnQuotaError: true
	            })
	        ]
	    })
	);

	workbox.routing.registerRoute(
	    new RegExp('http://localhost:8000/api/v1/survey/get'),
	    workbox.strategies.staleWhileRevalidate({
	        cacheName: 'survey-get',
	        cacheExpiration: {
	            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
	        }
	    })
	);

    const networkFirstHandler = new workbox.strategies.NetworkFirst({
        cacheName: 'dynamic',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    });

    // const FALLBACK_URL = workbox.precaching.getCacheKeyForURL('/offline.html');
    // const matcher = ({ event }) => event.request.mode === 'navigate';
    // const handler = args =>
    //     networkFirstHandler
    //         .handle(args)
    //         .then(response => response || caches.match(FALLBACK_URL))
    //         .catch(() => caches.match(FALLBACK_URL));

    // workbox.routing.registerRoute(matcher, handler);

    workbox.routing.registerRoute(
        '/thankyou',
        new workbox.strategies.NetworkFirst({
          cacheName: 'semi-static'
        })
      )
      workbox.routing.registerRoute(
        '/',
        new workbox.strategies.NetworkFirst({
            cacheName: 'semi-static'
        })
      )

      workbox.routing.registerRoute(
        '/admin/dashboard',
        new workbox.strategies.NetworkOnly({
            cacheName: 'semi-static'
        })
      )


    workbox.routing.registerRoute(
        new RegExp('/api/*'),
        new workbox.strategies.NetworkFirst({
          cacheName: 'api-get-requests'
        })
      )
    self.addEventListener('message', function (event) {
        console.log('user request for update... (' + event.data.action + ')');
        if (event.data.action === 'skipWaiting') {
            self.skipWaiting();
        }
    });
}

