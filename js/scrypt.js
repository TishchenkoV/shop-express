'use strict';

$(document).ready(function(){
  $('.header_text').slick({
  	// dots: true,
    autoplay: true,
    autoplaySpead: 300,
    infinite: true,
    arrows: false,
  	slidesToShow: 1,
  	fade: true,
  	speed: 800,
  });
});


$(document).ready(function(){
  $('.category_pres').slick({
  	dots: false,
    autoplay: true,
    autoplaySpead: 300,
    infinite: true,
    arrows: false,
  	slidesToShow: 2,
  	responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  });
});

// $(document).ready(function(){
//   $('.catalog_shop').slick({
//   	dots: true,
//     autoplay: true,
//     autoplaySpead: 300,
//     infinite: true,
//     arrows: false,
//   	slidesToShow: 3,
//   });
// });


document.getElementById("burger").onclick = function() {
  open()
};

function open() {
  document.getElementById("menu").classList.toggle("show");
};