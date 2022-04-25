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
    const resizeWindow = () => {
        const listItemMenu = document.querySelectorAll('.menu-item.header__menu--item > a');
        const listItemSubMenu = document.querySelectorAll('.menu-item.header__menu--item > .sub-menu');
        const functionPreventDefault = (e, index, el) => {
            e.preventDefault();
            if (el.parentElement) {
                if (el.parentElement.children.length > 1) {
                    if (el.parentElement.children[1].style.display === 'none') {
                        el.parentElement.children[1].style.display = 'block';
                        if (el) {
                            if (el.children[1]) {
                                el.children[1].classList.add('active');
                            }
                        }
                    }
                    else {
                        el.parentElement.children[1].style.display = 'none';
                        if (el) {
                            if (el.children[1]) {
                                el.children[1].classList.remove('active');
                            }
                        }
                    }
                }
            }
        }
        if ($(window).innerWidth() > 768) {
            clickOutSideMenu();
            [...listItemSubMenu].forEach(el => {
                el.style = '';
            })
            $('.header__menu').removeClass('transition-1/2s');
            [...listItemMenu].forEach((el, index) => {
                el.removeEventListener('click', (event) => { functionPreventDefault(event, index) })
            })
        }
        else {
            $('.header__menu').addClass('transition-1/2s');
            [...listItemSubMenu].forEach(el => {
                el.style.display = 'none';
            });
            [...listItemMenu].forEach((el, index) => {
                if (el.children.length > 1) {
                    el.addEventListener('click', (event) => { functionPreventDefault(event, index, el) })
                }
            })
        }
    }
    $(window).on('resize', resizeWindow)
    resizeWindow();
    //menu code

    //about 
    const listTabAbout = [$('.about_tab--most-view'), $('.about_tab--most-new')];
    const aboutTabUl = document.querySelector('.about__tab--ul');
    if (aboutTabUl) {
        [...aboutTabUl.children].forEach((item, index) => {
            item.addEventListener('click', () => {
                console.log(123);
                listTabAbout.forEach(el => {
                    el.hide();
                });
                [...aboutTabUl.children].forEach((item_) => {
                    item_.classList.remove('active');
                });
                listTabAbout[index].show();
                item.classList.add('active');
            });
        });
    }
    //about

    // scroll back to top
    $(document).on('scroll', () => {
        if ($(this).scrollTop() > 300) {
            $('.backtotop').addClass('active');
        }
        else {
            $('.backtotop').removeClass('active');
        }
    });
    $('.backtotop').on('click', () => {
        $(window).scrollTop(0)
    })
    // scroll back to top

});
//