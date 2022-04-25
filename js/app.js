//
$(document).ready(function () {

    //banner code
    $('.banner__container').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.banner__button--right'),
        prevArrow: $('.banner__button--left'),
    });

    $('.top_tour__content--wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.top_tour__content--button--right'),
        prevArrow: $('.top_tour__content--button--left'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    const listCategoryBanner = [$('.search-tour-content'), $('.search-hotel-content'),
    $('.search-travel-car-content')];
    const resetActiveListCategoryBanner = () => {
        $('.banner__content--top').children().each(function (index) {
            $(this).removeClass('active');
            listCategoryBanner[index].hide();
        })
    }
    $('.banner__content--top').children().each(function (index) {
        $(this).click(function () {
            resetActiveListCategoryBanner();
            $(this).addClass('active');
            listCategoryBanner[index].show();
        });
    });
    //banner code 

    //menu code 
    const clickOutSideMenu = () => {
        $('.header__menu').removeClass('active');
        $('.header__menu--overlay').hide();
        $('.header__menu--overlay').off('click', clickOutSideMenu);
    }
    $('.header__mobile').on('click', function () {
        $('.header__menu--overlay').show();
        $('.header__menu').addClass('active');
        $('.header__menu--overlay').on('click', clickOutSideMenu);
    });
    $('.header__menu--close').on('click', clickOutSideMenu);
    $(window).on('resize', () => {
        if ($(window).innerWidth() > 768) {
            clickOutSideMenu();
            $('.header__menu').removeClass('transition-1/2s');
        }
        else {
            $('.header__menu').addClass('transition-1/2s');
        }
    })
    //menu code
});
//