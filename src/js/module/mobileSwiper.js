export function mobileSwiper() {
	mobileSlider();
	initializedSwiper();

	window.addEventListener('resize', () => {
		mobileSlider();
		initializedSwiper();
	});
}

const allSwiper = document.querySelectorAll('[data-swiper]');
const mediaQuery = window.matchMedia('(max-width: 575px)');
let swiperBrands = document.querySelector('.services-brands__swiper');
let swiperRepair = document.querySelector('.services-repair__swiper');
let swiperPrice = document.querySelector('.services-price__table');

let sliderBrands;
let sliderRepair;
let sliderPrice;

function mobileSlider() {
	allSwiper.forEach((el) => {
		let data = el.dataset.swiper;

		if (window.outerWidth <= 575) {
			addClasses(el, data);
		}

		if (window.outerWidth > 575) {
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
	swiperInitBrands();
	swiperInitRepair();
	swiperInitPrice();
}

function swiperInitBrands() {
	if (mediaQuery.matches) {
		sliderBrands = new Swiper(swiperBrands, {
			slidesPerView: "auto",
			spaceBetween: 16,
			pagination: {
				el: swiperBrands.querySelector('.slider-pagination'),
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
		swiperBrands.dataset.mobile = 'true';
	}

	if (!mediaQuery.matches) {
		if (swiperBrands.classList.contains('swiper-initialized')) {
			sliderBrands.destroy(true, true)
		}
		swiperBrands.dataset.mobile = 'false';
	}
}

function swiperInitRepair() {
	if (mediaQuery.matches) {
		sliderRepair = new Swiper(swiperRepair, {
			slidesPerView: "auto",
			spaceBetween: 16,
			pagination: {
				el: swiperRepair.querySelector('.slider-pagination'),
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
		swiperRepair.dataset.mobile = 'true';
	}

	if (!mediaQuery.matches) {
		if (swiperRepair.classList.contains('swiper-initialized')) {
			sliderRepair.destroy(true, true)
		}
		swiperRepair.dataset.mobile = 'false';
	}
}

function swiperInitPrice() {
	if (mediaQuery.matches) {
		sliderPrice = new Swiper(swiperPrice, {
			slidesPerView: "auto",
			spaceBetween: 16,
			pagination: {
				el: swiperPrice.querySelector('.slider-pagination'),
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
		swiperPrice.dataset.mobile = 'true';
	}

	if (!mediaQuery.matches) {
		if (swiperPrice.classList.contains('swiper-initialized')) {
			sliderPrice.destroy(true, true)
		}
		swiperPrice.dataset.mobile = 'false';
	}
}