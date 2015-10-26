$(document).ready(function() {

    var myAnimation = new DrawFillSVG({
        elementId: "svg-1"
    });

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };
});

