$(document).ready(function() {


	$('#header-slider').unslider({
		autoplay: true,
		speed: 700,
		delay: 4000,
		infinite: true,
		nav: false,
		arrows: false
	});

	$('#s6-slider').unslider({
		autoplay: true,
		speed: 700,
		delay: 4000,
		infinite: true,
		nav: false,
		arrows: true
	});
	

	/// scroll
	$(window).on('scroll resize', function() {
		let $t = $(this).scrollTop()
		let $h = $('#header').height()

		if ( $t >= $h ) {
			$('#bar, #nav, #call-to-action-btn').addClass('calm_down')
		} else {
			$('#bar, #nav, #call-to-action-btn').removeClass('calm_down')
		}
	})
})