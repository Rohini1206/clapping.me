(function($) {
    'use strict';
    //Shop Grid/List view
    /* ===== Grid list active  =====   */
    var gridListActive = function () {
        $('.btn-list-grid button').on('click', function () {
            if ($(this).hasClass('grid-view')) {
                $('.btn-list-grid button').addClass('active');
                $('.btn-list-grid button.list-view').removeClass('active');
            }
            else if ($(this).hasClass('list-view')) {
                $('.btn-list-grid button').addClass('active');
                $('.btn-list-grid button.grid-view').removeClass('active');
            }
        });
    };
    /* Grid list View */
    var gridListView = function () {
        // Product List
        $('#list-view').on('click', function () {
            $('.product-layout > .clearfix').remove();
            $('.product-layout').attr('class', 'product-layout product-list col-md-12');
            $('#column-left .product-layout').attr('class', 'product-layout mb_20');
            $('#column-right .product-layout').attr('class', 'product-layout mb_20');

        });
        // Product Grid
        $('#grid-view').on('click', function () {
            $('.product-layout').attr('class', 'product-layout product-grid col-md-4 col-xs-6');           
        });
    };

    // Slider Range JS
    var sliderRange = function () {
        if ( $("#slider-range").length ) {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [120, 250],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
        }
    };

    /*Product Details*/
    var productDetails = function () {
        if ( $(".product-image-slider").length ) {
            $('.product-image-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                asNavFor: '.slider-nav-thumbnails',
            });

            $('.slider-nav-thumbnails').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.product-image-slider',
                dots: false,
                focusOnSelect: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>'
            });

            // Remove active class from all thumbnail slides
            $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

            // Set active class to first thumbnail slides
            $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

            // On before slide change match active thumbnail to current slide
            $('.product-image-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var mySlideNumber = nextSlide;
                $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
                $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
            });

            $('.product-image-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var img = $(slick.$slides[nextSlide]).find("img");
                $('.zoomWindowContainer,.zoomContainer').remove();
                $(img).elevateZoom({
                    zoomType: "inner",
                    cursor: "crosshair",
                    zoomWindowFadeIn: 500,
                    zoomWindowFadeOut: 750
                });
            });
        }
        //Elevate Zoom
        if ( $(".product-image-slider").length ) {
            $('.product-image-slider .slick-active img').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750
            });
        }
        //Filter color/Size
        $('.list-filter').each(function () {
            $(this).find('a').on('click', function (event) {
                event.preventDefault();
                $(this).parent().siblings().removeClass('active');
                $(this).parent().toggleClass('active');
                $(this).parents('.attr-detail').find('.current-size').text($(this).text());
                $(this).parents('.attr-detail').find('.current-color').text($(this).attr('data-color'));
            });
        });
        //Qty Up-Down
        $('.detail-qty').each(function () {
            var qtyval = parseInt($(this).find('.qty-val').text(), 10);
            $('.qty-up').on('click', function (event) {
                event.preventDefault();
                qtyval = qtyval + 1;
                $(this).prev().text(qtyval);
            });
            $('.qty-down').on('click', function (event) {
                event.preventDefault();
                qtyval = qtyval - 1;
                if (qtyval > 1) {
                    $(this).next().text(qtyval);
                } else {
                    qtyval = 1;
                    $(this).next().text(qtyval);
                }
            });
        });

        $('.dropdown-menu .cart_list').click(function(e) {
            e.stopPropagation();
        });
    };

    //Load functions
    $(document).ready(function() {
        gridListActive();
        gridListView();      
        sliderRange();      
        productDetails();      
    });
   
})(jQuery);