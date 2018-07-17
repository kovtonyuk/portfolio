$(function(){
    $('.team__list .team__item');
    // $('.team__description').each(function(){
    //     $(this).text($(this).parent().children('img').attr('alt'));
    //     $(this).width($(this).parent().width());
    //     $(this).height($(this).parent().height());
    // });
    $('.team__item').mouseover(function(){
        $(this).children('.team__description').fadeIn(500);
    });
    $('.team__item').mouseleave(function(){
        $(this).children('.team__description').fadeOut(500);
    });
});

/*------------ HOVER Services ------------*/

$(function(){
    $('.services__list .services__item');
    // $('.team__description').each(function(){
    //     $(this).text($(this).parent().children('img').attr('alt'));
    //     $(this).width($(this).parent().width());
    //     $(this).height($(this).parent().height());
    // });
    $('.services__item').mouseover(function(){
        $(this).children('.services__description').fadeIn(1000);
    });
    $('.services__item').mouseleave(function(){
        $(this).children('.services__description').fadeOut(500);
    });
});