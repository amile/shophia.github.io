webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	console.log(document.getElementsByClassName('slider'));
	
	function Slideshow(element) {
		this.slider = document.querySelector(element);
		this.slides = this.slider.querySelectorAll('slider__hero');
		this.currentSlide = 0;
		this.init();
	}
	Slideshow.prototype.init = function () {
		setInterval(this.nextSlide, 2000);
	};
	Slideshow.prototype.nextSlide = function () {
		console.log('hello');
		this.slides[this.currentSlide].display = 'none';
		this.currentSlide = (currentSlide + 1) % this.slides.length;
		this.slides[this.currentSlide].display = 'block';
	};
	/* Slideshow.prototype = {
		init: function () {
			this.slides = this.slider.querySelectorAll('slider__hero');
			this.currentSlide = 0;
			setInterval(this.nextSlide, 2000);
		nextSlide: function () {
			this.slides[this.currentSlide].display = 'none';
			this.currentSlide = (currentSlide + 1) % this.slides.length;
			this.slides[this.currentSlide].display = 'block';
		}
	}; */
	var slider = new Slideshow('slider');

/***/ }

})
//# sourceMappingURL=0.8c534d5950de982f7daa.hot-update.js.map