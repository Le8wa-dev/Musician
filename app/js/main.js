$(function(){

    $('.slider__items').slick({
        prevArrow: '<button class="slick-prev slick-arrow" ><img class="prev" src="images/icons/prevarrow.png" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow" ><img class="next" src="images/icons/nextarrow.png" alt=""></button>',
        dots: true,
    });

    $('.history__inner').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    }); 
        
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});