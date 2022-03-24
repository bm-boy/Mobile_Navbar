

$(document).ready(function(){

$(".menus li a").click(function(){

    var position = $(this).position();
    var margin = 12;
    $(".slider").css({"left":+position.left+margin, 'transform': 'translateX(0)'});

    $('.menus li a').removeClass('active-icon');
    $(this).addClass("active-icon");
})

})

