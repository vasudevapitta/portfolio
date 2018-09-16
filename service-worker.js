const staticCacheName = 'v1';

//list of urls we want to cache
//if you are running a local host - change all paths accordingly

const allCacheURLs = [
'index.html',
'https://code.jquery.com/jquery-3.3.1.js',
'js/scripts.js',
'js/mainForSw.js',
'styles.css',
'all.css',
'images/logo1.svg',
'images/hero-img-1504w.jpg',
'images/hero-img-768w.jpg',
'images/mobile-hero-img-375w.jpg',
'images/mypic.png',
'images/restaurantReview.jpg',
'images/calculator.jpg',
'images/catclicker.jpg',
'images/gamehub.jpg',
'images/pixabayAPI.jpg',
'images/digiegg.jpg',
'images/memorygame.jpg',
'images/pixelart.jpg',
'images/shoppinglistapp.jpg',
'fonts/BeautyDemo.ttf',
'fa-brands-400.woff2',
'fa-solid-900.woff2'
];


/*Here you can see we call caches.open() with our desired cache name,
after which we call cache.addAll() and pass in our array of files.
This is a chain of promises (caches.open() and cache.addAll()).
The event.waitUntil() method takes a promise and uses it to know
how long installation takes, and whether it succeeded or not.

If all the files are successfully cached, then the service worker will be installed.
If any of the files fail to download, then the install step will fail.
This allows you to rely on having all the assets that you defined, but does mean you need to be careful with the list of
files you decide to cache in the install step. Defining a long list of files will increase the chance that one file may fail to cache,
leading to your service worker not getting installed. */
self.addEventListener('install', function(e){
	e.waitUntil(
		caches.open(staticCacheName).then((cache)=>{
			return cache.addAll(allCacheURLs, );
		})
	);
});


//when our browser is making a url request
/*
Here we've defined our fetch event and within event.respondWith(), we pass in a promise from caches.match().
This method looks at the request and finds any cached results from any of the caches your service worker created.

If we have a matching response, we return the cached value, otherwise we return the result of a call to fetch,
which will make a network request and return the data if anything can be retrieved from the network.
This is a simple example and uses any cached assets we cached during the install step.

If we want to cache new requests cumulatively, we can do so by handling the response of the fetch request
and then adding it to the cache, like below.
*/
self.addEventListener('fetch', function(e){

	e.respondWith(
		caches.match(e.request).then((response)=>{ //we are looking whether the URL(which we are currently requesting) is available in our cache
			if(response){//if the url is available in cache - then the response evaluates to true
				return response;//then we return the url found in the cache
			}
				// IMPORTANT: Clone the request. A request is a stream and
		        // can only be consumed once. Since we are consuming this
		        // once by cache and once by the browser for fetch, we need
		        // to clone the response.
				const fetchRequest = e.request.clone();

				return fetch(fetchRequest).
				then((response)=>{
					if(!response || response.status !== 200 || response.type !== 'basic'){
						return response;
					}

					// IMPORTANT: Clone the response. A response is a stream
		            // and because we want the browser to consume the response
		            // as well as the cache consuming the response, we need
		            // to clone it so we have two streams.

            		var responseToCache = response.clone();

            		caches.open(staticCacheName)
            		.then((cache)=>{
            			cache.put(e.request, responseToCache);
            		});

            		return response;
					});
		})
	);
});



self.addEventListener('activate', function(e) {
  console.log('Activating new service worker');

		  e.waitUntil(
			    caches.keys().then(function(cacheNames) {
				      return Promise.all(
					        cacheNames.filter(function(cacheName) {
					          return cacheName.startsWith('') && cacheName !== staticCacheName;
					          }).map(function(cacheName){
					            return caches.delete(cacheName);
					          })
				        );
			    })
		  );
});