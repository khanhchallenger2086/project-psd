$(document).ready(function(){
    $('.menu-reponsive').click(() => {
        $('#nav').css('transform','none');
    })

    $('.menu-close').click(() => {
        $('#nav').css('transform','translate3d(-250px, 0px, 0px)');
    })

    $('.filter').click(() => {
        $('.category-box').css('display','block');
    })

    $('.close-category-box').click(() => {
        $('.category-box').css('display','none');
    })

    var scrollTop = $('.scroll-top');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            scrollTop.css("display", "block");
        } else {
            scrollTop.css("display", "none");
        }
    })

    scrollTop.click(function(){
        $("html, body").animate({scrollTop: 0}, 100);
    })

});