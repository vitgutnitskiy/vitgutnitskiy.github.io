$(document).ready(function() { 

	$(".active").click(function() {
		$(this).toggleClass("on");
		$(".form__fedback").slideToggle();
	});

});