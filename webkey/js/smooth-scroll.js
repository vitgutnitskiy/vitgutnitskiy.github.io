$(document).ready(function() {

    $('.header').on('click', smoothScroll);
    $('.intro__wrap').on('click', smoothScroll);

    var menu = $('.header__menu');

    function smoothScroll(e) {
        var target = e.target;
        console.log(target);


        while (target != this) {
            if(target.nodeName == 'A') {
                scrollToHash(target);
                if(menu.hasClass('header__menu_open')) {
                    menu.removeClass('header__menu_open');
                    $(document.body).removeClass('body_no-scroll');
                }
                return false;
            }
            target = target.parentNode;
        }
    }

    function scrollToHash(a) {
        var hash = $(a).attr('href');

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 40
        }, 500);
    }
});

