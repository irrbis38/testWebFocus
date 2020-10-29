$(document).ready(function(){

  $('.main__slider').slick({
	  arrows: true,
	  slidesToShow: 1,
    speed: 1000,
    prevArrow: $('.main__prev'),
    nextArrow: $('.main__next')
  });

  $('.principles__slider').slick({
	  arrows: true,
	  slidesToShow: 1,
    speed: 1000,
    prevArrow: $('.principles__prev'),
    nextArrow: $('.principles__next')
  });
  
});