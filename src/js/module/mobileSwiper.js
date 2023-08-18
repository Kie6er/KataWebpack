// let slider;

export function mobileSwiper() {
	mobileSlider();
	initializedSwiper();

	window.addEventListener('resize', () => {
		mobileSlider();
		initializedSwiper();
	});
}

const allSwiper = document.querySelectorAll('[data-swiper]');
let swipers = document.querySelectorAll('.slider-container');
let newSlider;


function mobileSlider() {
	allSwiper.forEach((el) => {
		let data = el.dataset.swiper;

		if (window.outerWidth <= 575) {
			addClasses(el, data);
		} else {
			removeClasses(el, data);
		}
	});
}

function removeClasses(element, d) {
	if (d == 'swiper') {
		element.classList.remove('swiper');
	} else if (d == 'swiper-wrapper') {
		element.classList.remove('swiper-wrapper');
	} else if (d == 'swiper-slide') {
		element.classList.remove('swiper-slide');
	} else if (d == 'swiper-pagination') {
		element.classList.remove('swiper-pagination');
	}
}

function addClasses(element, d) {
	if (d == 'swiper') {
		element.classList.add('swiper');
	} else if (d == 'swiper-wrapper') {
		element.classList.add('swiper-wrapper');
	} else if (d == 'swiper-slide') {
		element.classList.add('swiper-slide');
	} else if (d == 'swiper-pagination') {
		element.classList.add('swiper-pagination');
	}
}

function initializedSwiper() {

	swipers.forEach((el) => {
		if (window.innerWidth <= 575 && el.dataset.mobile == 'false' && el.classList.contains('swiper')) {
			newSlider = new Swiper(el, {
				slidesPerView: "auto",
				spaceBetween: 16,
				pagination: {
					el: el.querySelector('.slider-pagination'),
					clickable: true
				},
				breakpoints: {
					350: {
						slidesPerView: 1
					},

					500: {
						slidesPerView: 2
					}
				},
			});
			el.dataset.mobile = 'true';
		}
		if (window.innerWidth > 575) {
			if (el.classList.contains('swiper-initialized')) {
				newSlider.destroy(true, true)
			}
			el.dataset.mobile = 'false';
		}
	});
}