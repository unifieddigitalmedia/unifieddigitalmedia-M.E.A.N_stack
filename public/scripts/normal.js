
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");
}



function testScroll(ev){

    if(window.pageYOffset > 3000) move();

}

window.onscroll=testScroll


function move() {
  
 
  var elem_HTML5 = document.getElementById("HTML5");
  var elem_CSS3 = document.getElementById("CSS3");
  var elem_JAVASCRIPT = document.getElementById("JAVASCRIPT");   
  var elem_JQUERY = document.getElementById("JQUERY");   
  var elem_ANGULAR = document.getElementById("ANGULAR");   
  var elem_BOOTSTRAP = document.getElementById("BOOTSTRAP");   
  var elem_NODE = document.getElementById("NODE");   
  var elem_EXPRESS = document.getElementById("EXPRESS");   
  var elem_MONGO = document.getElementById("MONGO");   
  var elem_XHTML = document.getElementById("XHTML");   
  var elem_XML = document.getElementById("XML");   
  var elem_JSON = document.getElementById("JSON");   
  var elem_PHP = document.getElementById("PHP");   
  var elem_MYSQL = document.getElementById("MYSQL");   
  var elem_RESPONSIVE = document.getElementById("RESPONSIVE");   
  var elem_DREAMWEAVER = document.getElementById("DREAMWEAVER");   
  var elem_WORDPRESS = document.getElementById("WORDPRESS");   
  var elem_CROSS = document.getElementById("CROSS");   
  

  var width = 1;
  var id_HTML5 = setInterval(function() { frame(80,id_HTML5,elem_HTML5) } , 10); 
  var id_CSS3 = setInterval(function() { frame( 70,id_CSS3,elem_CSS3) } , 10);    
  var id_JAVASCRIPT = setInterval(function() { frame( 70,id_JAVASCRIPT,elem_JAVASCRIPT) } , 10);  
  var id_JQUERY = setInterval(function() { frame( 60,id_JQUERY,elem_JQUERY) } , 10);  
  var id_ANGULAR = setInterval(function() { frame( 50,id_ANGULAR,elem_ANGULAR) } , 10);  
  var id_BOOTSTRAP = setInterval(function() { frame( 70,id_BOOTSTRAP,elem_BOOTSTRAP) } , 10);  
  var id_NODE = setInterval(function() { frame( 50,id_NODE,elem_NODE) } , 10); 
  var id_EXPRESS = setInterval(function() { frame( 50,id_EXPRESS,elem_EXPRESS) } , 10);  
  var id_MONGO = setInterval(function() { frame( 50,id_MONGO,elem_MONGO) } , 10);  
  var id_XHTML = setInterval(function() { frame( 70,id_XHTML,elem_XHTML) } , 10);  
  var id_XML = setInterval(function() { frame( 70,id_XML,elem_XML) } , 10);  
  var id_JSON = setInterval(function() { frame( 70,id_JSON,elem_JSON) } , 10);  
  var id_PHP = setInterval(function() { frame( 60,id_PHP,elem_PHP) } , 10);   
  var id_MYSQL = setInterval(function() { frame( 70,id_MYSQL,elem_MYSQL) } , 10);  
  var id_RESPONSIVE = setInterval(function() { frame( 70,id_RESPONSIVE,elem_RESPONSIVE) } , 10);  
  var id_DREAMWEAVER = setInterval(function() { frame( 70,id_DREAMWEAVER,elem_DREAMWEAVER) } , 10);  
  var id_WORDPRESS = setInterval(function() { frame( 70,id_WORDPRESS,elem_WORDPRESS) } , 10);  
  var id_CROSS = setInterval(function() { frame( 80,id_CROSS,elem_CROSS) } , 10);


  function frame(para,para1,para2) {

    if (width >= para) {

      clearInterval(para1);
    
    } else {
    
      width++; 
    
      para2.style.width = width + '%'; 
    
    }
 
  }


}