$(document).ready(function() {

	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_mnu").slideToggle();
	});

	$(".main-footer .toggle_mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".main-footer .toggle_mnu").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".top").click(function() {
		$("html, body").animate({ scrollTop: $(".main_head").height()-20 }, "slow");
		return false;
	});
	$(".arrow_wrap").click(function() {
		$("html, body").animate({ scrollTop: $(".main_head").height()+120 }, "slow");
		return false;
	});

	$(".homesect .section-button .buttons").click(function(){
		$("#callback h4").html($(this).text());
	}).magnificPopup({
		type: "inline",
		mainClass: "mfp-forms"
	});


	$(".section_1 .section-content .info-item").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	$(".s1-battom .info-ite").equalHeights();
	$(".s2-item").equalHeights();
	$(".s2-item .img-wrap").equalHeights();
	$(".cards .card").equalHeights();


	$(".section_4").waypoint(function(){

		$(".section_4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass(".card-off").addClass("card-icon");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


	$(".section_5").waypoint(function(){

		$(".section_5 .tc-item").each(function(index){
			var ths = $(this);
			setTimeout(function(){
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg-" + index
				});

				ths.removeClass("").addClass("");
			}, 800*index);
		});

		this.destroy();

	}, {
		offset : "20%"
	});

	
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText: "",
		loop : true
	});

	$(".section-head p, .section-head h2").animated("fadeInRight");
	$(".info-item-wrap").animated("zoomIn");
	$(".slider .slide").animated("rollIn");
	$(".section_8 .forms").animated("fadeInRight");
	$(".section_4 .cards").animated("bounceInUp-");



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

