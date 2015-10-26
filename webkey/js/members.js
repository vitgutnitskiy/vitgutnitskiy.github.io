(function(){
    var canSlide = true;

    function randomSlide(inputs) {
        return Math.floor(Math.random()*(inputs.length));
    }

    function toNextSlide(activeInput, inputs) {
        if(canSlide && activeInput < inputs.length - 1) {
            inputs[activeInput + 1].checked = true;
        } else if(canSlide && activeInput == inputs.length - 1) {
            activeInput = 0;
            inputs[activeInput].checked = true;
        }
    }

    function activeInput(inputs) {
        var i;
        for(i = 0; i < inputs.length; i++) {
            if(inputs[i].checked == true) {
                return i;
            }
        }
    }

    function init() {
        var inputs = document.querySelectorAll('.members__input');
        var slider = document.querySelector('.members__slider');

        slider.addEventListener('mouseover', function(){
            canSlide = false;
        });
        slider.addEventListener('mouseleave', function() {
            canSlide = true;
        });

        inputs[randomSlide(inputs)].checked = true;

        setInterval(function() {
            toNextSlide(activeInput(inputs), inputs);
        }, 5000);
    }

    init();
})();