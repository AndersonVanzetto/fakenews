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
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
<<<<<<< HEAD
function ocultar()
{
   var camada=document.getElementById("limpar");
   camada.style.display="none";
   camada.style.visibility="hidden";
}
=======
>>>>>>> 8be46c3b71ee4153d79c07c08fe9bd7a7acef444
