// function slider(cssClass, timing) {
//     $(cssClass + ' > div:first-child').addClass('isActive');
//
//     setInterval(function () {
//         $(cssClass + ' .isActive').appendTo(cssClass).removeClass('isActive');
//         $(cssClass + ' > div:first-child').addClass('isActive');
//     }, timing);
// }
//
// slider('.about__list', 30000);
// slider('.testim__list', 40000);


function Slider(config) {
    var sliderInterval = function() {};
    var sliderBlock = document.querySelector(config.sliderBlock);
    var firstChild = document.querySelector(config.sliderItem + ':first-child');

    firstChild.classList.add(config.sliderItemActive);

    function nextSlide() {
        var activeChild = document.querySelector(config.sliderItem + '.' + config.sliderItemActive);
        var nextChild = document.querySelector(config.sliderItem + '.' + config.sliderItemActive + ' + ' + config.sliderItem);

        activeChild.classList.remove(config.sliderItemActive);
        sliderBlock.appendChild(activeChild);
        nextChild.classList.add(config.sliderItemActive)
    }

    function prevSlide() {
        var activeChild = document.querySelector(config.sliderItem + '.' + config.sliderItemActive);
        var lastChild = document.querySelector(config.sliderItem + ':last-child');

        activeChild.classList.remove(config.sliderItemActive);
        sliderBlock.insertBefore(lastChild, activeChild);

        setTimeout(function() {
            lastChild.classList.add(config.sliderItemActive)
        }, 0)
    }

    document.querySelector(config.sliderWrapper).addEventListener('mouseover', function() {
        clearInterval(sliderInterval)
    });

    document.querySelector(config.sliderWrapper).addEventListener('mouseout', function() {
        startSlider()
    });

    document.querySelector(config.sliderNext).addEventListener('click', function() {
        nextSlide()
    });

    document.querySelector(config.sliderPrev).addEventListener('click', function() {
        prevSlide()
    });

    function startSlider() {
        sliderInterval = setInterval(function () {
            nextSlide()
        }, config.sliderTiming)
    }

    startSlider()
}

var someOtherSliderConfig = {
    sliderWrapper: '.about__carousel',
    sliderBlock: '.about__list',
    sliderItem: '.about_slide',
    sliderItemActive: 'isActive',
    sliderPrev: '.someOtherSlider--prev',
    sliderNext: '.someOtherSlider--next',
    sliderTiming: 5000
};

Slider(someOtherSliderConfig);

var sliderConfig = {
    sliderWrapper: '.testim__carousel',
    sliderBlock: '.testim__list',
    sliderItem: '.testim_slide',
    sliderItemActive: 'isActive',
    sliderPrev: '.slider__nav--prev',
    sliderNext: '.slider__nav--next',
    sliderTiming: 5000
};

Slider(sliderConfig);

