document.addEventListener("DOMContentLoaded", () => {
	"use strict";
	function scrollto(el) {
		const selectHeader = document.querySelector("#header");
		let offset = 0;
		if (selectHeader.classList.contains("sticked")) {
			offset = document.querySelector("#header.sticked").offsetHeight;
		} else if (selectHeader.hasAttribute("data-scrollto-offset")) {
			offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute("data-scrollto-offset"));
		}
		window.scrollTo({
			top: document.querySelector(el).offsetTop - offset,
			behavior: "smooth",
		});
	}

	/**
	 * Fires the scrollto function on click to links .scrollto
	 */
	let selectScrollto = document.querySelectorAll(".scrollto");
	selectScrollto.forEach((el) =>
		el.addEventListener("click", function (event) {
			if (document.querySelector(this.hash)) {
				event.preventDefault();

				let mobileNavActive = document.querySelector(".mobile-nav-active");
				if (mobileNavActive) {
					mobileNavActive.classList.remove("mobile-nav-active");

					let navbarToggle = document.querySelector(".mobile-nav-toggle");
					navbarToggle.classList.toggle("bi-list");
					navbarToggle.classList.toggle("bi-x");
				}
				scrollto(this.hash);
			}
		})
	);

	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener("load", () => {
		if (window.location.hash) {
			if (document.querySelector(window.location.hash)) {
				scrollto(window.location.hash);
			}
		}
	});

	/**
	 * Mobile nav toggle
	 */
	const mobileNavToogle = document.querySelector(".mobile-nav-toggle");
	if (mobileNavToogle) {
		mobileNavToogle.addEventListener("click", function (event) {
			event.preventDefault();

			document.querySelector("body").classList.toggle("mobile-nav-active");

			this.classList.toggle("bi-list");
			this.classList.toggle("bi-x");
		});
	}

	/**
	 * Toggle mobile nav dropdowns
	 */
	const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

	navDropdowns.forEach((el) => {
		el.addEventListener("click", function (event) {
			if (document.querySelector(".mobile-nav-active")) {
				event.preventDefault();
				this.classList.toggle("active");
				this.nextElementSibling.classList.toggle("dropdown-active");

				let dropDownIndicator = this.querySelector(".dropdown-indicator");
				dropDownIndicator.classList.toggle("bi-chevron-up");
				dropDownIndicator.classList.toggle("bi-chevron-down");
			}
		});
	});

	/**
	 * Auto generate the hero carousel indicators
	 */
	let heroCarouselIndicators = document.querySelector("#hero .carousel-indicators");
	if (heroCarouselIndicators) {
		let heroCarouselItems = document.querySelectorAll("#hero .carousel-item");

		heroCarouselItems.forEach((item, index) => {
			if (index === 0) {
				heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}" class="active"></li>`;
			} else {
				heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}"></li>`;
			}
		});
	}

	/**
	 * Scroll top button
	 */
	const scrollTop = document.querySelector(".scroll-top");
	if (scrollTop) {
		const togglescrollTop = function () {
			window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
		};
		window.addEventListener("load", togglescrollTop);
		document.addEventListener("scroll", togglescrollTop);
		scrollTop.addEventListener(
			"click",
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		);
	}

	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
		selector: ".glightbox",
	});

	/**
	 * Porfolio isotope and filter
	 */
	let portfolionIsotope = document.querySelector(".portfolio-isotope");

	if (portfolionIsotope) {
		let portfolioFilter = portfolionIsotope.getAttribute("data-portfolio-filter") ? portfolionIsotope.getAttribute("data-portfolio-filter") : "*";
		let portfolioLayout = portfolionIsotope.getAttribute("data-portfolio-layout")
			? portfolionIsotope.getAttribute("data-portfolio-layout")
			: "masonry";
		let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
			? portfolionIsotope.getAttribute("data-portfolio-sort")
			: "original-order";

		window.addEventListener("load", () => {
			let portfolioIsotope = new Isotope(document.querySelector(".portfolio-container"), {
				itemSelector: ".portfolio-item",
				layoutMode: portfolioLayout,
				filter: portfolioFilter,
				sortBy: portfolioSort,
			});

			let menuFilters = document.querySelectorAll(".portfolio-isotope .portfolio-flters li");
			menuFilters.forEach(function (el) {
				el.addEventListener(
					"click",
					function () {
						document.querySelector(".portfolio-isotope .portfolio-flters .filter-active").classList.remove("filter-active");
						this.classList.add("filter-active");
						portfolioIsotope.arrange({
							filter: this.getAttribute("data-filter"),
						});
						if (typeof aos_init === "function") {
							aos_init();
						}
					},
					false
				);
			});
		});
	}

	/**
	 * Clients Slider
	 */
	new Swiper(".clients-slider", {
		speed: 400,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 80,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 120,
			},
		},
	});

	/**
	 * Testimonials Slider
	 */
	new Swiper(".testimonials-slider", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});

	/**
	 * Testimonials Slider
	 */
	new Swiper(".portfolio-details-slider", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});

	/**
	 * Animation on scroll function and init
	 */
	function aos_init() {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}
	window.addEventListener("load", () => {
		aos_init();
	});
});

//  Auto Hide and Translate

var lastScrollTop = 0;

function throttle(type, name, obj) {
	var obj = obj || window;
	var running = false;
	var func = function () {
		if (running) {
			return;
		}
		running = true;
		requestAnimationFrame(function () {
			obj.dispatchEvent(new CustomEvent(name));
			running = false;
		});
	};
	obj.addEventListener(type, func);
}

// Apply the throttle function to the scroll event
throttle("scroll", "optimizedScroll");

window.addEventListener("optimizedScroll", function () {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	// Determine scroll direction
	var isScrollingDown = scrollTop > lastScrollTop;

	// Adjust scrollTop based on direction
	scrollTop = isScrollingDown ? scrollTop * 0.5 : -scrollTop * 0.5;

	// Ensure the translation values are within the desired range
	scrollTop = Math.min(250, Math.max(100, scrollTop));

	// Select the boxes
	var box1 = document.querySelector('.box[data-box="1"]');
	var box2 = document.querySelector('.box[data-box="2"]');
	var box3 = document.querySelector('.box[data-box="3"]');
	var box4 = document.querySelector('.box[data-box="4"]');
	var box5 = document.querySelector('.box[data-box="5"]');
	var box6 = document.querySelector('.box[data-box="6"]');

	// Apply the transformations for each box
	box1.style.transform = `translateX(${scrollTop}px) translateY(${scrollTop}px)`;
	box2.style.transform = `translateX(-${scrollTop}px) translateY(${scrollTop}px)`;
	box3.style.transform = `translateX(${scrollTop}px) translateY(-${scrollTop}px)`;
	box4.style.transform = `translateX(-${scrollTop}px) translateY(-${scrollTop}px)`;
	box5.style.transform = `translateX(${scrollTop}px)`; // Move right horizontally
	box6.style.transform = `translateX(-${scrollTop}px)`; // Move left horizontally

	// Update lastScrollTop
	lastScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
	const sideImages = document.querySelectorAll(".side-images");

	sideImages.forEach((image) => {
		image.addEventListener("mouseenter", function () {
			this.classList.add("rotate");
		});

		image.addEventListener("mouseleave", function () {
			this.classList.remove("rotate");
		});
	});
});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".navbar").addClass("scroll");
		} else {
			$(".navbar").removeClass("scroll");
		}
	});
});

// Function to initialize tilt effect
function initializeTilt() {
	// Initialize tilt effect
	$("[data-tilt]").tilt({
		// Tilt options if needed
	});
}

// Call initializeTilt function on document ready and window resize
$(document).ready(function () {
	initializeTilt();
});

$(window).resize(function () {
	initializeTilt();
});
