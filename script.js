function plusSlides(m, n) {
  showSlides(m, slideIndex += n);
}

function currentSlide(m, n) {
  showSlides(m, slideIndex = n);
}

function showSlides(m, n) {
  var divs = document.getElementsByClassName("slideslist");

    var i;
    var slides = divs[m].getElementsByClassName("mySlides");
    console.log(slides);
    var dots = divs[m].getElementsByClassName("dot");
    console.log(dots);
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }

    console.log(slides.length);
    console.log(slideIndex);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
}