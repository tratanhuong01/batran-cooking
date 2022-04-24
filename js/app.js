//
$(document).ready(function () {

    //banner code
    $('.banner__container').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
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