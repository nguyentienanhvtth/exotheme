jQuery(document).ready(function(){
  var owl = $('.auto-play-slider.owl-carousel');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:3500,
	    animateOut: 'fadeOut'
	});
});