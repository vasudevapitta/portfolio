$(document).ready(function(){
/*Arrow function Syntax

$(()=>{

*/

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementvarructor]" 
var isSafari = /varructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

//Sticky Navigation
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


// Home Button Event handlers
var hmeButtnScrllup = $("#homeButton, .scrollup");

hmeButtnScrllup.click(function(){
	scrollTop();
});

hmeButtnScrllup.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	scrollTop();
	}
});

function scrollTop(){
window.scroll({
  top: 0, 
  behavior: 'smooth' 
});
}


// About Button Event handlers
var abtMeBtn = $("#aboutMeButton");

abtMeBtn.click(function() {
	scrollAbout();
});

abtMeBtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	scrollAbout();
	}
});

function scrollAbout(){
	
		if(isChrome || isFirefox){
			window.scroll({
		  	top: 867,
		  	behavior: "smooth"
			});
		}

		else{
			window.scroll(0,770);
		}
}


// Portfolio Button Event handlers
var prtflioBtn = $("#portfolioButton");

prtflioBtn.click(function() {
	scrollPortfolio();
});

prtflioBtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	$('.one').focus();
	scrollPortfolio();
	}
});

function scrollPortfolio(){
		if(isChrome || isFirefox){
		window.scroll({
	  	top: 1509,
	  	behavior: "smooth"
		});
		}

		else {
		window.scroll(0,1509);
		}
}


// Contact Button Event handlers
var cntctBtn = $("#contactButton");

cntctBtn.click(function() {
	scrollContact();
});

cntctBtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	scrollContact();
	}
});

function scrollContact(){
		if(isChrome || isFirefox){
			window.scroll({
		  	top: 2477,
		  	behavior: "smooth"
			});
		}

		else {
			document.querySelector('#contactInfo').scrollIntoView({ 
		  	behavior: 'smooth' 
			});
		}
}

});