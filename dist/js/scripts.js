"use strict";if("Microsoft Internet Explorer"==navigator.appName||!!(navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/))||"undefined"!=typeof $.browser&&1==$.browser.msie)for(var allimages=document.getElementsByTagName("img"),i=0;i<allimages.length;i++)allimages[i].getAttribute("data-src")&&allimages[i].setAttribute("src",allimages[i].getAttribute("data-src"));else{function a(a){a.forEach(function(a){0<a.intersectionRatio&&(observer.unobserve(a.target),b(a.target))})}function b(a){a.src=a.dataset.src,a.classList.add("fade-in")}var images=document.querySelectorAll(".js-lazy-image"),config={rootMargin:"50px 0px",threshold:.01};if(!("IntersectionObserver"in window))Array.from(images).forEach(function(a){return b(a)});else{var observer=new IntersectionObserver(a,config);images.forEach(function(a){observer.observe(a)})}}var isOpera=!!window.opr&&!!opr.addons||!!window.opera||0<=navigator.userAgent.indexOf(" OPR/"),isFirefox="undefined"!=typeof InstallTrigger,isSafari=/varructor/i.test(window.HTMLElement)||function(a){return"[object SafariRemoteNotification]"===a.toString()}(!window.safari||"undefined"!=typeof safari&&safari.pushNotification),isIE=/*@cc_on!@*/!!document.documentMode,isEdge=!isIE&&!!window.StyleMedia,isChrome=!!window.chrome&&!!window.chrome.webstore,isBlink=(isChrome||isOpera)&&!!window.CSS;window.onscroll=function(){myFunction()};var navbar=document.getElementById("navbar"),sticky=navbar.offsetTop;function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}var hmeButtnScrllup=$("#homeButton"),Scrllup=$(".scrollup");Scrllup.click(function(){scrollTop()}),Scrllup.keypress(function(a){(13===a.keyCode||32)&&scrollTop()}),hmeButtnScrllup.click(function(){scrollTop()}),hmeButtnScrllup.keypress(function(a){(13===a.keyCode||32)&&scrollTop()});function scrollTop(){window.scroll({top:0,behavior:"smooth"})}var abtMeBtn=$("#aboutMeButton");abtMeBtn.click(function(){scrollAbout()}),abtMeBtn.keypress(function(a){(13===a.keyCode||32)&&scrollAbout()});function scrollAbout(){document.querySelector("#aboutScroll").scrollIntoView({behavior:"smooth"})}var prtflioBtn=$("#portfolioButton");prtflioBtn.click(function(){scrollPortfolio()}),prtflioBtn.keypress(function(a){(13===a.keyCode||32)&&($(".one").focus(),scrollPortfolio())});function scrollPortfolio(){document.querySelector("#portfolioScroll").scrollIntoView({behavior:"smooth"})}var cntctBtn=$("#contactButton");cntctBtn.click(function(){scrollContact()}),cntctBtn.keypress(function(a){(13===a.keyCode||32)&&scrollContact()});function scrollContact(){document.querySelector("#contactInfo").scrollIntoView({behavior:"smooth"})}