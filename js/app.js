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
                if (el.parentElement.classList.contains('has-children')) {
                    if (el.parentElement.children[1].style.display === 'none') {
                        el.parentElement.classList.add('has-children-active');
                        el.parentElement.children[1].style.display = 'block';
                    }
                    else {
                        el.parentElement.classList.remove('has-children-active');
                        el.parentElement.children[1].style.display = 'none';
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
                if (el.parentElement.classList.contains('has-children')) {
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

    // detail travel tour
    $('.detail_tour__content--left--container').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: $('.detail_tour__content--left--button--left'),
        nextArrow: $('.detail_tour__content--left--button--right'),
    });
    $('.detail_tour__content--left--container--nav').slick({
        slidesToScroll: 3,
        slidesToShow: 6,
        asNavFor: '.detail_tour__content--left--container',
        focusOnSelect: true
    });

    const detailDescriptionTop = document.querySelector('.detail__description--top');
    if (detailDescriptionTop) {
        const listDescriptionDetailTourTravel = [$('.detail__description-more'), $('.detail__description--calendar'),
        $('.detail__description--contact')];
        [...detailDescriptionTop.children].forEach((el, index) => {
            el.addEventListener('click', () => {
                listDescriptionDetailTourTravel.forEach(el => {
                    el.hide();
                });
                [...detailDescriptionTop.children].forEach((el_, index_) => {
                    el_.classList.remove('active');
                })
                el.classList.add('active');
                listDescriptionDetailTourTravel[index].show();
            });
        })
    }
    $('.socical__plus').on('click', () => {
        if ($('.socical__plus').hasClass('active')) {
            $('.socical__plus').removeClass('active')
        }
        else {
            $('.socical__plus').addClass('active');
        }
    });
    // detail travel tour

});
//