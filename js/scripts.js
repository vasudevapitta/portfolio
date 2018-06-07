$(()=>{
	
$(".scrollUp").on("click", function(){
  document.querySelector('#logo').scrollIntoView({ 
  behavior: 'smooth' 
});
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