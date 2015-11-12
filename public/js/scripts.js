$(document).ready(function(){

	"use strict";

	// Smooth scroll

	$('.inner-link').smoothScroll({offset: -96, speed: 800});

	// Scroll Reveal

	if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
       window.scrollReveal = new scrollReveal();
    }else{
    	$('body').addClass('pointer');
    }

	// Feature Selector

	$('.selector-tabs li').click(function(){
		$(this).parent('.selector-tabs').children('li').removeClass('active');
		$(this).addClass('active');

		var activeTab = $(this).index() + 1;

		$(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
		$(this).closest('.feature-selector').find('.selector-content').children('li:nth-child('+activeTab+')').addClass('active');
	});

	// Slider Initializations

	$('.hero-slider').flexslider({});
	$('.image-slider').flexslider({ animation: "slide"});
	$('.testimonials-slider').flexslider({ directionNav: false });

	// Slide Sizes

	$('.slider-fullscreen .slides li').each(function(){
		$(this).css('height', $(window).height());
	});

	$('.fullscreen-element').each(function(){
		$(this).css('height', $(window).height());
	});

	// Append .background-image-holder <img>'s as CSS backgrounds

	$('.background-image-holder').each(function(){
		var imgSrc= $(this).children('img').attr('src');
		$(this).css('background', 'url("' + imgSrc + '")');
    	$(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
	});

	// Accordion

	$('.accordion li').click(function(){
		$(this).parent('.accordion').children('li').removeClass('active');
		$(this).addClass('active');
	});

	/************** Parallax Scripts **************/

    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isChrome = !!window.chrome;
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var prefix;

    if (isFirefox) {
        prefix = '-moz-';
    } else if (isIE) {

    } else if (isChrome || isSafari) {
        prefix = '-webkit-';
    }

    $('.main-container section:first-child').addClass('first-child');

    $('.parallax-background').each(function () {

        if ($(this).closest('section').hasClass('first-child') && !$(this).closest('section').hasClass('slider-fullscreen')) {
            $(this).attr('data-top', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,200px, 0px)');

        } else {

            $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
            $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');

        }

    });

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });

        // Multi Layer Parallax

		$('.hover-background').each(function(){
			$(this).mousemove(function( event ) {
				$(this).find('.background-image-holder').css('transform', 'translate(' + -event.pageX /30 + 'px,' + -event.pageY /45+ 'px)');
				$(this).find('.layer-1').css('transform', 'translate(' + -event.pageX /50 + 'px,' + -event.pageY /50+ 'px)');
				$(this).find('.layer-2').css('transform', 'translate(' + -event.pageX /60 + 'px,' + -event.pageY /60+ 'px)');
			});
		});
    }

    // Map Holder Overlay

	$('.map-holder').click(function(){
		$(this).addClass('on');
	});

	$(window).scroll(function(){
		if($('.map-holder').hasClass('on')){
			$('.map-holder').removeClass('on');
		}
	});

	// Map Details Holder

	$('.details-holder').each(function(){
		$(this).css('height', $(this).width());
	});

	$('.details-holder').mouseenter(function(){
		$(this).closest('.map-overlay').addClass('fade-overlay');
	}).mouseleave(function(){$(this).closest('.map-overlay').removeClass('fade-overlay');});

	// Expanding Lists (updated in Pivot 1.4.0)

	$('.expanding-ul li').click(function(){
		$('.expanding-ul li').removeClass('active');
		$(this).addClass('active');
	});

});

$(window).load(function(){

  "use strict";

	// Align Elements Vertically

	alignVertical();
	alignBottom();

	$(window).resize(function(){
		alignVertical();
		alignBottom();
	});

	// Isotope Projects

	$('.projects-container').isotope({
	  itemSelector: '.project',
	  layoutMode: 'fitRows'
	});

	$('.filters li').click(function() {
	  var current = $(this);

	  current.siblings('li').removeClass('active');
	  current.addClass('active');

	  var filterValue = current.attr('data-filter');
	  var container = current.closest('.projects-wrapper').find('.projects-container');
	  container.isotope({ filter: filterValue });
	});

	// Isotope contained feature boxes

	$('.contained-features-wrapper').isotope({
	  itemSelector: '.no-pad',
	  layoutMode: 'masonry',
	  masonry: {
		  gutter: 0
		}
	});

    // Remove Loader

    $('.loader').css('opacity', 0);
    setTimeout(function(){$('.loader').hide();}, 600);

	// Blog Masonry

	$('.blog-masonry-container').isotope({
	  itemSelector: '.blog-masonry-item',
	  layoutMode: 'masonry'
	});

	$('.blog-filters li').click(function() {
	  var current = $(this);

	  current.siblings('li').removeClass('active');
	  current.addClass('active');

	  var filterValue = current.attr('data-filter');
	  var container = current.closest('.blog-masonry').find('.blog-masonry-container');
	  container.isotope({ filter: filterValue });
	});

});

function alignVertical(){
	$('.align-vertical').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight / 2) - (height/2);
		that.css('padding-top', padAmount);
	});
}

function alignBottom(){
	$('.align-bottom').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight) - (height) - 32;
		that.css('padding-top', padAmount);
	});
}
