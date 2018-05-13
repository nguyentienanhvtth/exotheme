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
	$("#menu-bar").click(function () {
		// body...
		$("#clone").find("nav.menu").slideToggle('fast');
	});
});