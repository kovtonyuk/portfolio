function slider(cssClass, timing) {
    $(cssClass + ' > div:first-child').addClass('isActive');

    setInterval(function () {
        $(cssClass + ' .isActive').appendTo(cssClass).removeClass('isActive');
        $(cssClass + ' > div:first-child').addClass('isActive');
    }, timing);
}

slider('.about__item', 5000);
slider('.testim__list', 4000);
