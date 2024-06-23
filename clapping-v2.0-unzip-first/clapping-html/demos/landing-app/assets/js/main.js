(function($) {
    'use strict';
    // Smart menu
    var headerSticky = function() {
        var lastScrollTop = 0;
        $(window).on('scroll', function() {
            var wScroll = $(this).scrollTop();
            var contentHeight = $('body').height();
            if (contentHeight > 500) {
                if (wScroll > 300) {
                    if (wScroll < lastScrollTop) {
                        $('.header-sticky').removeClass('slide-up').addClass('slide-down');
                    } else {
                        $('.header-sticky').removeClass('slide-down').addClass('slide-up');
                    }
                } else {
                    $('.header-sticky').removeClass('slide-down');
                }
                if (wScroll > $('.main-header').height() + 600) {
                    $('.header-sticky').addClass('sticky-bar');
                } else {
                    $('.header-sticky').removeClass('sticky-bar');
                    $('.header-sticky').removeClass('slide-down');
                }
                lastScrollTop = wScroll;
            }
        });
    }

    // Scroll up to top
    var scrollToTop = function () {        
        var o = $("body").width();
            $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn();
            } else {
            $(".back-to-top").fadeOut();
            }       
        }), $(".back-to-top").on('click', function() {
            return $("html, body").animate({
                scrollTop: 0
            }, 700), !1
        })
        if (o > 450) {
            $(".back-to-top").addClass('animation-shadow-pulse');
        }       
    };

    //Counter Up
    var numberCounter = function () {
        if ($('.counter-number').length) {
            $('.counter-number').counterUp({
                delay: 10,
                time: 2000
            });
        }
    };
    
    var slickSlider = function () {
        $('.slick-4-columns').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            appendArrows: '.arrow-cover',
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            loop: true,
            adaptiveHeight: true,
            cssEase: 'linear',
            centerPadding: 50,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });
    }
    //smoothscroll
    $(function() {
        $('a[href*="#"]').smoothscroll();
    });

    //Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /* WOW active */
    if ($('.wow').length) {
        new WOW().init();
    }

    //Load functions
    $(document).ready(function() {
        headerSticky();
        scrollToTop();
        numberCounter();   
        slickSlider();   
    });
   
})(jQuery);