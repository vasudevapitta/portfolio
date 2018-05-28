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
});