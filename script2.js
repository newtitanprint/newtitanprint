// Next/previous controls
function plusSlides(m, n) {
  showSlides(m, slideIndex += n);
}

// Thumbnail image controls
function currentSlide(m, n) {
  showSlides(m, slideIndex = n);
}

function showSlides(m, n) {

  var divs = document.getElementsByClassName("softlist");

  var i;
  var slides = divs[m].getElementsByClassName("mySlides");
  console.log(slides);
  var dots = divs[m].getElementsByClassName("demo");
  var captionText = divs[m].getElementsByClassName("caption");


  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText[0].innerHTML = dots[slideIndex - 1].alt;
 
}