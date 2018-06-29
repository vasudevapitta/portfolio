$(()=>{
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
const hmeButtnScrllup = $("#homeButton, .scrollUp");

hmeButtnScrllup.click(function(){
	scrollTop();
});

hmeButtnScrllup.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	scrollTop();
	}
});

function scrollTop(){
	document.querySelector('#logo').scrollIntoView({ 
  	behavior: 'smooth' 
	});
}


// About Button Event handlers
const abtMeBtn = $("#aboutMeButton");

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
		  	top: 794,
		  	behavior: "smooth"
			});
		}

		else{
			window.scroll(0,794);
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
	  	top: 1359,
	  	behavior: "smooth"
		});
		}

		else {
		window.scroll(0,1250);
		}
}


// Contact Button Event handlers
const cntctBtn = $("#contactButton");

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
		  	top: 1743,
		  	behavior: "smooth"
			});
		}

		else {
			document.querySelector('#contactInfo').scrollIntoView({ 
		  	behavior: 'smooth' 
			});
		}
}




/* ----------Featured Works Event handlers--------------*/
const onebtn = $('.one');
const twobtn = $('.two');
const threebtn = $('.three')
const fourbtn = $('.four');
const facebookbtn = $(".facebook");
const linkedinbtn = $(".linkedin");
const googlebtn = $(".google");


// Behance Event handlers
onebtn.click(function(){
  one();
});

onebtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	one();
	}
});

function one(){
	window.open('https://www.behance.net/vasudevapitta','_blank');
}


// Memory Game Event handlers
twobtn.click(function(){
  two();
});

twobtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	two();
	}
});

function two(){
	window.open('https://vasudevapitta.github.io/Memory-Game/');
}


// Doodle Board Event handlers
threebtn.click(function(){
  three();
});

threebtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	three();
	}
});

function three(){
	window.open('https://vasudevapitta.github.io/Pixel-Art-Maker/');
}


// To Do List App Event handlers
fourbtn.click(function(){
  four();
});

fourbtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	four();
	}
});

function four(){
  window.open('https://vasudevapitta.github.io/Shopping-List-App/','_blank');
}



/* ----------Social media icons Event handlers--------------*/

// facebook Event handlers
facebookbtn.click(function(){
  facebook();
});

facebookbtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	facebook();
	}
});

function facebook(){
	window.open ('https://www.facebook.com/pvrpavankumar','_blank');
}


// linkedin Event handlers
linkedinbtn.click(function(){
  linkedin();
});

linkedinbtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	linkedin();
	}
});

function linkedin(){
	window.open ('https://www.linkedin.com/in/vasudevapitta','_blank');
}



// google Event handlers
googlebtn.click(function(){
  google();
});

googlebtn.keypress(function(ev) {
	if(ev.keyCode===13 || 32){
	google();
	}
});

function google(){
	window.open ("https://plus.google.com/u/0/+VasudevaPitta","_blank");
}

});