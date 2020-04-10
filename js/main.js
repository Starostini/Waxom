$(function () {
    $('.slider__inner').slick({
        prevArrow: '<button class="slick-prev slick-btn" type="button"></button>',
        nextArrow: '<button class="slick-next slick-btn" type="button"></button>',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        speed: 500,
        fade: false,
        cssEase: 'linear'
    });

    $('select').styler();

    $('.icon__menu_button').on('click', function () {
        $('.header__menu ul').slideToggle();
    })
});
