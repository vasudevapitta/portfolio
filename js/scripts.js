$(()=>{
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$("#homeButton, .scrollUp").on("click", function(){
  document.querySelector('#logo').scrollIntoView({ 
  behavior: 'smooth' 
});
});

$("#aboutMeButton").on('click', function(event) {

		if(isChrome || isFirefox){
			window.scroll({
		  	top: 794,
		  	behavior: "smooth"
			});
		}

		else{
			document.querySelector('#about').scrollIntoView({ 
		  	behavior: 'smooth' 
			});
		}

});



$("#portfolioButton").on('click', function(event) {

		if(isChrome || isFirefox){
			window.scroll({
		  	top: 1359,
		  	behavior: "smooth"
			});
		}

		else {
		document.querySelector('#portfolio').scrollIntoView({ 
		  behavior: 'smooth' 
		});
		}

});

$("#contactButton").on('click', function(event) {

		if(isChrome || isFirefox){
			window.scroll({
		  	top: 1743,
		  	behavior: "smooth"
			});
		}

		else {
			document.querySelector('#contactInfo').scrollIntoView({ 
		  	behavior: 'smooth' 
			});
		}

});

$('.one').click(function(){
  window.open('https://www.behance.net/vasudevapitta');

});

$('.two').click(function(){
  window.open('https://vasudevapitta.github.io/Memory-Game/');
});

$('.three').click(function(){
  window.open('https://vasudevapitta.github.io/Pixel-Art-Maker/');
});

$('.four').click(function(){
  window.open('https://vasudevapitta.github.io/Shopping-List-App/');
});

//link to open my Facebook Page
$(".facebook").click(function(){
window.open ("https://www.facebook.com/pvrpavankumar","_blank");
});

//link to open Linkedin URL
$(".linkedin").click(function(){
window.open ("https://www.linkedin.com/in/vasudevapitta","_blank");
});

//link to open Google Plus URL
$(".google").click(function(){
window.open ("https://plus.google.com/u/0/+VasudevaPitta","_blank");
});

});