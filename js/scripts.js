$(()=>{
$(".scrollUp").on("click", function(){
  document.querySelector('#logo').scrollIntoView({ 
  behavior: 'smooth' 
});
});

$('.one').click(function(){
  window.open('https://www.behance.net/vasudevapitta');
  return false;
});

$('.two').click(function(){
  window.open('https://vasudevapitta.github.io/Pixel-Art-Maker/');
  return false;
});

$('.three').click(function(){
  window.open('https://vasudevapitta.github.io/Shopping-List-App/');
  return false;
});

$('.four').click(function(){
  window.open('https://www.behance.net/gallery/27525271/Drawings');
  return false;
});
});