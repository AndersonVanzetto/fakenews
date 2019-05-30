function myFunction() {
  var x = document.getElementById("conteudo");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  }

}
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
function ocultar()
{
   var camada=document.getElementById("limpar");
   camada.style.display="none";
   camada.style.visibility="hidden";
}
var slideIndex = -1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);

}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
