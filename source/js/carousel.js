$('.about__item > div:first-child').addClass('isActive');

function rotateClass() {
    $('.about__item > .isActive').appendTo('.about__item').removeClass('isActive');
    $('.about__item > div:first-child').addClass('isActive');
}

// Set the Delay Time
setInterval(function () {
    rotateClass();
}, 5000);



$('.testim__item > div:first-child').addClass('isActive');

function rotateClassTestim() {
    $('.testim__item > .isActive').appendTo('.testim__item').removeClass('isActive');
    $('.testim__item > div:first-child').addClass('isActive');
}
// Set the Delay Time
setInterval(function () {
    rotateClassTestim();
}, 5000);


$('.testim__item--text > div:first-child').addClass('isActive');

function rotateClassTestimText() {
    $('.testim__item--text > .isActive').appendTo('.testim__item--text').removeClass('isActive');
    $('.testim__item--text > div:first-child').addClass('isActive');
}
// Set the Delay Time
setInterval(function () {
    rotateClassTestimText();
}, 5000);
