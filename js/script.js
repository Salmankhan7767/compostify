$(".toggle").click(function(){
    $(".header-menu ul").slideToggle();
});

function myFunction(x) {
  x.classList.toggle("change");
}

// $(".right").click(function(){
//   $(".testimonial-card").slideToggle();
// });
// $(".left").click(function(){
//   $(".testimonial-card").slideToggle();
// });



$('.logos').slick({
  centerMode: true,
  centerPadding: '30px',
  arrows:false,
  slidesToShow: 5,
  autoplay: true,
  cssEase: 'linear',
  autoplaySpeed: 0,
  speed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})


