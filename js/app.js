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

});
//