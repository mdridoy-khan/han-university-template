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
    /* PRELOADER START
    /* ============================================================ */
    $(document).ready(function($) {
        $(".preloader").fadeOut();
    });
    /* Preloader End */

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
        'header .sidebar_toggler, .close-menu ',
        '.offcanvas-menu, .overlay-menu, body'
    );

    $('.offcanvas-menu .menu-item-has-children').on('click', '.menu-link', function() {
        var $this = $(this);
        $this.toggleClass('active').next('.sub-menu').slideToggle();
        $this.parent().siblings().find('.sub-menu').slideUp().end().find('.menu-link').removeClass('active');
    });
    /* Mobile menu End */


    
    /* ============================================================ */
    /* StickyHeader
    /* ============================================================ */
    var fixed_top = $("header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 30) {
            fixed_top.addClass("sticky");
        } else {
            fixed_top.removeClass("sticky");
        }
    });

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


    // product slider activation
    let heroSlider = new Swiper ('.hero_slider', {
        direction: 'vertical',
        slidesPerView: 1,
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        //     reverseDirection: true,
        //     disableOnInteraction: false,
        // },
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
        navigation: {
            nextEl: ".controller_buttons .swiper-button-next",
            prevEl: ".controller_buttons .swiper-button-prev",
        },
    });
    
})(jQuery);