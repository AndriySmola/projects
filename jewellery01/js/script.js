"use strict"

const icon = document.querySelector('.header__icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

const feedbacksSwiper = document.querySelector('.swiper-feedbacks');

if (feedbacksSwiper) {

	const swiper = new Swiper('.swiper-feedbacks', {
		// Optional parameters
		// autoHeight: true,
		loop: true,
		speed: 800,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 767.98px
			767.98: {
				slidesPerView: 1.3,
				spaceBetween: 15
			},
			// when window width is >= 991.98px
			991.98: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}
	});
}	