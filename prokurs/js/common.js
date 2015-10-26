$(document).ready(function() {



 $('.popup').magnificPopup({type:'image'});

$.stellar({
	responsive: true,
	horizontalOffset: 60
});


  $('.carousel').owlCarousel({
  	loop : true,
  	responsive : {
  		0 : {
  			items : 1,
  			nav : true
  		}
  	},
  	navText : ""
  });



function wResize() {
	$("header").css("min-height", $(window).height());
};
wResize();
$(window).resize(function(){
	wResize()
});
 
 $(".top_phone .wrapper .tab").click(function(){
 	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active")
 $(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");

 $(".bottom_phone .wrapper .tab").click(function(){
 	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active")
 $(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");

 $(".tabs_header .wrapper .tab").click(function(){
 	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active")
 $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");

 $(".contacts_top .tab").click(function(){
 	$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active")
 $(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");

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
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});

//load 
$(window).load(function() {
	//   animate h1 and h2
$(".top_header h1").animated("fadeInDown", "fadeOutDown");
$(".top_header h2").animated("fadeInUp", "fadeOut");

// animate  tabs
$(".tabs_header .wrapper").animated("flipInY", "fadeOut");

// animate ican i
$(".profi_item").animated("fadeInRight", "fadeOut");

// animate form 
$(".s_profi form").animated("zoomInRight", "fadeOut");

//animate 
$(".s_back h3").animated("fadeInUp", "fadeOut");

//animate footer
$("footer h2").animated("fadeInUp", "fadeOut");

$(".s_rewview h2").animated("fadeInUp", "fadeOut");

});