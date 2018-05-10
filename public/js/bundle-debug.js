jQuery(document).ready(function(){
  var owl = $('.auto-play-slider.owl-carousel');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    autoplay:false,
	    autoplayTimeout:5500,
	    animateOut: 'fadeOut'
	});
});

jQuery(document).ready(function(){
  $(window).on('load', function () {
		$('.ma5slider').ma5slider();
 });
});