(function(window) {

    var headerDom = document.querySelector('.header');
    window.addEventListener('scroll', holdHeader);

    function holdHeader() {
        var height = headerDom.offsetHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(scrollTop > height) {
            headerDom.classList.add('header_fixed');
        } else {
            headerDom.classList.remove('header_fixed');
        }
    }

    holdHeader();

})(window);