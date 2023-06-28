; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

  

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-arrow-left"></i>';
        var leftAngle = '<i class="fa fa-angle-left"></i>';
        var rightArrow = '<i class="fa fa-arrow-right"></i>';
        var rightAngle = '<i class="fa fa-angle-right"></i>';

        

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
 

        /*------------------------------------------------
            banner-slider
        ------------------------------------------------*/
        /**banner-slider**/
        $('.banner-slider').slick({
          infinite: true,
          slidesToShow: 1,
          arrows: true, 
          speed: 1500,
          dots: false,
          centerMode: true,
          centerPadding: '0%', 
          nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-arrow-right"></i></div>',
          prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-arrow-left"></i></div>',
        });

        /*------------------------------------------------
            service-slider
        ------------------------------------------------*/
        /**service-slider**/
        $('.service-slider').slick({
          infinite: true,
          slidesToShow: 3,
          arrows: false, 
          speed: 1500,
          dots: true,
          centerMode: true,
          centerPadding: '0%', 
          responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
               breakpoint: 500,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            }] 
        });
        

        /*------------------------------------------------
            service-slider
        ------------------------------------------------*/
        /**service-slider**/
        $('.service-slider-2').slick({
          infinite: true,
          slidesToShow: 3,
          arrows: false, 
          speed: 1500,
          dots: true,
          centerMode: true,
          centerPadding: '0%', 
          responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
               breakpoint: 500,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            }] 
        });

        /*------------------------------------------------
            footer-slider
        ------------------------------------------------*/
     

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        new WOW().init();

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/

        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        }
        else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


})(jQuery);