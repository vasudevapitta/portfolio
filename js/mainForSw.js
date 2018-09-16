if(navigator.serviceWorker){
	console.log('service worker supported');

	window.addEventListener('load', ()=>{
		navigator.serviceWorker.register('service-worker.js', {scope: 'https://vasudevapitta.github.io/New-Responsive-Portfolio/'})
		.then((response)=>{
			console.log('serviceWorker is registered')
		})
		.catch((error)=>{
			console.log(`serviceWorker is NOT registered: ${error}`)
		})
	})
}