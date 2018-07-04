$('.about__item > div:first-child').addClass('isActive');

function rotateClass() {
    $('.about__item > .isActive').appendTo('.about__item').removeClass('isActive');
    $('.about__item > div:first-child').addClass('isActive');
}

// Set the Delay Time
setInterval(function () {
    rotateClass();
}, 5000);