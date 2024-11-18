/*-----------------------------------------------------------------------------------

    Project Name: 
    Version: 1.0.0
    Project URI: https://html.themestransmit.com/html/qunesa/
    Description: 
    Author URI: http://themeforest.net/user/themestransmit
    Support: themestransmit@gmail.com

-----------------------------------------------------------------------------------*/


(function ($) {
    "use strict";


    /* ============================================================ */
    /* MOBILE MENU START
    /* ============================================================ */
    function offcanvas_menu(selector, actionSelector) {
        var offcanvas_menu = $(selector);
        offcanvas_menu.on('click', function() {
            $(selector).toggleClass('is-menu-open');
        });

        var hamburgerbtn = $(selector);
        hamburgerbtn.on('click', function() {
            $(actionSelector).toggleClass('is-menu-open');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(offcanvas_menu);
            if (
                selectorType.is(e.target) !== true &&
                selectorType.has(e.target).length === 0
            ) {
                $(actionSelector).removeClass('is-menu-open');
                $(selector).removeClass('is-menu-open');
            }
        });
        $('.overlay-menu').on('click', function(e) {
            $(actionSelector).removeClass('is-menu-open');
            $(selector).removeClass('is-menu-open');
        });
    }
    offcanvas_menu(
        'header .sidebar_toggler, .menu-trigger ',
        '.offcanvas-menu, .overlay-menu, body'
    );

    $('.offcanvas-menu, .footer_mobile_menus .menu-item-has-children').on('click', '.menu-link', function() {
        var $this = $(this);
        $this.toggleClass('active').next('.sub-menu').slideToggle();
        $this.parent().siblings().find('.sub-menu').slideUp().end().find('.menu-link').removeClass('active');
    });
    /* Mobile menu End */

    /* ============================================================ */
    /* Scroll Top
    /* ============================================================ */
    $('body').append(
        "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton'><i class='fal fa-chevron-up'></i></a>"
    );
    let $scrolltop = $('#scroll-top');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $scrolltop.addClass('btn-show').removeClass('btn-hide');
        } else {
            $scrolltop.addClass('btn-hide').removeClass('btn-show');
        }
    });
    $("a[href='#top']").on('click', function () {
        $('html, body').animate({
                scrollTop: 0,
            },
            'normal'
        );
        return false;
    });

    // search form hide and show activation code 
    document.addEventListener("DOMContentLoaded", () => {
        const formWrapper = document.querySelector(".form_wrapper");
        const closeForm = document.querySelector(".close-form");
        const openFormButton = document.querySelector(".serach_button");
        const openSearchBox = document.querySelector(".search_button");

        const showForm = () => {
            formWrapper.style.display = "block"; 
            document.body.style.overflow = "hidden";
        };

        const hideForm = () => {
            formWrapper.style.display = "none"; 
            document.body.style.overflow = "";
        };

        openFormButton.addEventListener("click", showForm); 
        openSearchBox.addEventListener("click", showForm); 
        closeForm.addEventListener("click", hideForm); 
    });





    // hero slider activation
    let heroSlider = new Swiper ('.hero_slider', {
        direction: 'vertical',
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            0: {
                simulateTouch: false, 
                allowTouchMove: false, 
            },
            780: {
                simulateTouch: true,  
                allowTouchMove: true, 
            },
         },
        pagination: {
            el: ".swiper-pagination",
          clickable: true,
        },
    });

    // blog slider activation
    let blogSlider = new Swiper ('.blog-list-slider', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 24,
        loop: false,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            0: {
                simulateTouch: false, 
                allowTouchMove: false, 
            },
            780: {
                simulateTouch: true,  
                allowTouchMove: true, 
            },
        },
        navigation: {
            nextEl: ".controller_buttons .swiper-button-next",
            prevEl: ".controller_buttons .swiper-button-prev",
        },
    });
    
})(jQuery);