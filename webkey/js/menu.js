(function(window) {
    var buttonDom = document.querySelector('.header__menu-button');
    var menuDom = document.querySelector('.header__menu');

    buttonDom.addEventListener('click', toggleMenu);
    document.body.addEventListener('click', closeMenu);

    function toggleMenu() {
        if(menuDom.classList.contains('header__menu_open')) {
            menuDom.classList.remove('header__menu_open');
            document.body.classList.remove('body_no-scroll');
        }
        else {
            menuDom.classList.add('header__menu_open');
            document.body.classList.add('body_no-scroll');
        }
    }

    function closeMenu(e) {
        if(e.target.tagName == 'A') {
            menuDom.classList.remove('header__menu_open');
            document.body.classList.remove('body_no-scroll');
        }
    }
})(window);