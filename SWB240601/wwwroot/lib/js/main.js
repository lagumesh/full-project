$(function () {

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

});


// ignore for now
function validate(val) {
	v1 = document.getElementById("fname");
	v2 = document.getElementById("lname");
	v3 = document.getElementById("email");
	v4 = document.getElementById("mob");
	v5 = document.getElementById("job");
	v6 = document.getElementById("ans");

	flag1 = true;
	flag2 = true;
	flag3 = true;
	flag4 = true;
	flag5 = true;
	flag6 = true;

	if (val >= 1 || val == 0) {
		if (v1.value == "") {
			v1.style.borderColor = "red";
			flag1 = false;
		}
		else {
			v1.style.borderColor = "green";
			flag1 = true;
		}
	}

	if (val >= 2 || val == 0) {
		if (v2.value == "") {
			v2.style.borderColor = "red";
			flag2 = false;
		}
		else {
			v2.style.borderColor = "green";
			flag2 = true;
		}
	}
	if (val >= 3 || val == 0) {
		if (v3.value == "") {
			v3.style.borderColor = "red";
			flag3 = false;
		}
		else {
			v3.style.borderColor = "green";
			flag3 = true;
		}
	}
	if (val >= 4 || val == 0) {
		if (v4.value == "") {
			v4.style.borderColor = "red";
			flag4 = false;
		}
		else {
			v4.style.borderColor = "green";
			flag4 = true;
		}
	}
	if (val >= 5 || val == 0) {
		if (v5.value == "") {
			v5.style.borderColor = "red";
			flag5 = false;
		}
		else {
			v5.style.borderColor = "green";
			flag5 = true;
		}
	}
	if (val >= 6 || val == 0) {
		if (v6.value == "") {
			v6.style.borderColor = "red";
			flag6 = false;
		}
		else {
			v6.style.borderColor = "green";
			flag6 = true;
		}
	}

	flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

	return flag;
}

