"use strict"

const feedbacksSwiper = document.querySelector('.swiper-feedbacks');

if (feedbacksSwiper) {

	const swiper = new Swiper('.swiper-feedbacks', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		speed: 800,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}	