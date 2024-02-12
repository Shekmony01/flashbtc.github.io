/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]

Project: Bitsikka - Responsive HTML Template
Version: 1.0.0
Assigned to: kamleshyadav
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var bitsikka = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Bitsikka Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Search();
            this.Counter();
            this.Popup();
            this.Menu();
            this.Togglemenu();
            this.Slider();
            this.Bottom_Scroll();
            this.Testimonial();
            this.Nice_select();
            this.Marquee();
        },
        /*-------------- Bitsikka Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Search
        Search: function() {
            $(".bs_top_search i").on('click', function() {
                $(".bs_search_overlay").addClass('search_open');
            });
            $(".srch_close i").on('click', function() {
                $(".bs_search_overlay").removeClass('search_open');
            });

        },

        // Menu		
        Menu: function() {
            $('.sub-menu').parent().hover(function() {
                var menu = $(this).find("ul");
                var menupos = $(menu).offset();

                if (menupos.left + menu.width() > $(window).width()) {
                    var newpos = -$(menu).width();
                    menu.css({
                        left: newpos
                    });
                }
            });
        },
        // Toggle Menu
        Togglemenu: function() {
            $(".bs_menu_btn").on('click', function() {
                $(".bs_menu").slideToggle();
            });
            $(".menu_cross").on('click', function() {
                $(".impl_menu_wrapper").removeClass('open_menu');
            });
            $('.bs_menu ul li.dropdown').children('a').append(function() {
                return '<div class="dropdown-expander"><i class="fa fa-angle-down" aria-hidden="true"></i></div>';
            });
            $(".bs_menu ul > li:has(ul) > a").on('click', function(e) {
                var w = window.innerWidth;
                if (w <= 991) {
                    e.preventDefault();
                    $(this).parent('.bs_menu ul li').children('ul.sub-menu').slideToggle();
                }
            });
        },

        // Counter
        Counter: function() {
            if ($('.bs_count_box').length > 0) {
                $('.bs_count_box').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },

        // Popup
        Popup: function() {
            $('.impl_modal').on('click', function() {
                $('.modal-open #signin').hide();
                $('.modal-backdrop').hide();

            })

        },

        // Main Slider		
        Slider: function() {
            if ($('.bs_banner_slider').length > 0) {
                var tpj = jQuery;
                var revapi24;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_24_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_24_1");
                    } else {
                        revapi24 = tpj("#rev_slider_24_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "revolution/js/",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                bullets: {
                                    enable: true,
                                    hide_onmobile: false,
                                    style: "bullet-bar",
                                    hide_onleave: false,
                                    direction: "horizontal",
                                    h_align: "center",
                                    v_align: "bottom",
                                    h_offset: 0,
                                    v_offset: 50,
                                    space: 5,
                                    tmp: ''
                                }
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "none",
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: "",
                            fullScreenOffset: "60px",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }

                    if (revapi24) revapi24.revSliderSlicey();
                }); /*ready*/
            }
        },

        // Scroll		
        Bottom_Scroll: function() {
            $('.impl_scroll').on('click', function() {
                var height = $(window).height();
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, height);
            });
        },

        // Testimonial Slider
        Testimonial: function() {
            if ($('.bs_test_slider').length > 0) {
                $(".bs_test_slider").slick({
                    autoplay: true,
                    autoplaySpeed: 10000,
                    speed: 600,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    pauseOnHover: false,
                    dots: true,
                    arrows: false,
                    draggable: true,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false
                        }
                    }, ]
                });
            }
        },
        // Nice Select	
        Nice_select: function() {
            if ($('.custom_select').length > 0) {
                $('.custom_select select').niceSelect();
            }
        },
        // Marquee
        Marquee: function() {
            $('.closemarq').on('click', function() {
                $('.simple-marquee-container').fadeOut();
                $('.bs_btm_footer').addClass('footer-space-close');
            })

            $(".simple-marquee-container").SimpleMarquee({
                duration: 50000,
            });
        },

    };
    $(document).ready(function() {

        bitsikka.init();

    });
    // Preloader Js
    jQuery(window).on('load', function() {
        setTimeout(function() {
            $('body').addClass('loaded');

        }, 500);
    });

    // Window Scroll
    $(window).scroll(function() {
        var wh = window.innerWidth;
        //Go to top
        if ($(this).scrollTop() > 100) {
            $('.gotop').addClass('goto');
        } else {
            $('.gotop').removeClass('goto');
        }

    });
    $(".gotop").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });



})(jQuery);