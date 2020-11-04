$(document).ready(function(){

//burger menu

	$('.header__burger').click(function(event) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock');
	});
	$('.header__navLink').click(function(event) {

			$('.header__burger,.header__menu').removeClass('active');

			$('body').removeClass('lock');
	});

//first slider

	$('.main__slider').slick({
		arrows: true,
		slidesToShow: 1,
		speed: 1000,
		prevArrow: $('.main__prev'),
		nextArrow: $('.main__next'),
		responsive: [
			{
			 breakpoint: 767,
			 settings: {
					slidesToShow: 1,
					arrows: false,
		 			dots: true
			 }
		 }
		]
	});

//second slider

	$('.principles__slider').slick({
		arrows: true,
		slidesToShow: 1,
		speed: 1000,
		prevArrow: $('.principles__prev'),
		nextArrow: $('.principles__next'),
		responsive: [
			{
			 breakpoint: 576,
			 settings: {
					slidesToShow: 1,
					arrows: false,
		 			dots: true
			 }
		 }
		]
	});
	
});