$(function(){
    $('.mouseover_desc .mouseover_desc_item').append('<div class="mouseover_desc_text"></div>');
    $('.mouseover_desc_text').each(function(){
        $(this).text($(this).parent().children('img').attr('alt'));
        $(this).width($(this).parent().width());
        $(this).height($(this).parent().height());
    });
    $('.mouseover_desc_item').mouseover(function(){
        $(this).children('.mouseover_desc_text').fadeIn(1000);
    });
    $('.mouseover_desc_item').mouseleave(function(){
        $(this).children('.mouseover_desc_text').fadeOut(500);
    });
});