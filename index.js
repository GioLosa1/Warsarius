
//scroll button
  let mybutton = document.getElementById("mytn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//scroll button //

$('.carousel').carousel({
  interval: 2000
})
// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".carousel-item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

