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
        cssEase: 'linear',
    });

});
let container = document.body;
let menu = document.querySelector('.menu_nav');
let itemOfLi = document.querySelectorAll('.menu_nav_li');
function _boot() {
    let btn = document.querySelector('.svg-inline--fa');
    btn.addEventListener('click', switchMenu);
}

function switchMenu(e) {
    e.stopPropagation();
    if (!menu.classList.contains('open')) {
        e.target.className = menu.classList.add('open');
    }
    else {
        e.target.className = menu.classList.remove('open');
    }
}

_boot();

container.addEventListener('click', function (event) {
    menu.classList.remove('open');
});
// document.querySelector('.little__menu').addEventListener('click', function (event) {
// 	event.stopPropagation();
//     if (navigation.classList.contains('close')) {
//         navigation.classList.remove('close');
//         navigation.classList.add('show');
//         navigation.classList.add('menuanim');
//     } else if (navigation.classList.contains('show')){
//         navigation.classList.add('close');
//         navigation.classList.remove('show');

//     } else {
//         navigation.classList.remove('close');
//         navigation.classList.add('show');

//     }
// });
// container.addEventListener('click', function (event) {
//     navigation.classList.remove('show');
//     navigation.classList.add('close');
// })

itemOfLi.forEach(element => element.addEventListener('click', function (event) {
    event.stopPropagation();
}));

