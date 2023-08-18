import '../scss/style.scss'

import * as sidebar from "./module/sidebar.js"
import * as showEl from "./module/showElement.js"
import * as slider from "./module/mobileSwiper.js"
import * as modal from "./module/modals.js"

sidebar.Sidebar();
showEl.showElement();
slider.mobileSwiper();
modal.showModals();

document.addEventListener('load', () => {
	sidebar.Sidebar();
	showEl.showElement();
	slider.mobileSwiper();
	modal.showModals();
});