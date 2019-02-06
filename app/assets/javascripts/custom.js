/*==================================
* Author        : With Html
* Template Name : Corporate Plus | Multipurpose Business HTML Template
* Version       : 1.0
==================================== */

/*=========== TABLE OF CONTENTS ===========
1. Fact Counter
2. Team Member Slide
3. Testimonial Slide
4. Recent Update Slide
5. Partner Logo Slide
6. Scroll to Top
===========*/


(function($) {
    'use strict';

// ===== 1. Fact Counter ==== 

	 var timer = $('.counter-value');
        if(timer.length) {
            timer.appear(function () {
              timer.countTo();
          })
        }
	

    // ===== 2. Team Member Slide ==== 

    $(".team-member-slide").owlCarousel({

        loop: true,
        autoPlay: false,
        navigation: true,
        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 1200,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 2],
        itemsTabletSmall: [480, 1],
        itemsMobile: [380, 1]

    });
	
	
	
	
    // ===== 3. Testimonial Slide ==== 

    $(".testimonial-slide").owlCarousel({

        loop: true,
        autoPlay: true,
        navigation: false,
        pagination: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 800,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [767, 1],
        itemsTabletSmall: false,
        itemsMobile: [380, 1]

    });
	
	    $(".testimonial-slide-1").owlCarousel({

        loop: true,
        autoPlay: true,
        navigation: false,
        pagination: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 800,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 1],
        itemsTabletSmall: false,
        itemsMobile: [380, 1]

    });
	
	
	
    // ===== 4. Recent Update Slide ==== 

    $(".recent-update-slide").owlCarousel({

        loop: true,
        autoPlay: false,
        navigation: false,
        pagination: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 1200,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 2],
        itemsTabletSmall: [480, 1],
        itemsMobile: [380, 1]

    });


    
	
	   // ===== 5. Partner Logo Slide ==== 

    $(".partner-logo-slide").owlCarousel({

        loop: true,
        autoPlay: true,
        navigation: false,
        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 800,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 3],
        itemsTabletSmall: [480, 2],
        itemsMobile: [380, 1]

    });


    // ===== 6. Scroll to Top ==== 

    var html_body = $("html,body"),
        btn_top = $(".return-to-top");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 200) {
            btn_top.fadeIn()
        } else {
            btn_top.fadeOut()
        }
    });
    btn_top.on("click", function() {
        html_body.animate({
            scrollTop: 0
        }, 1000)
    });
})(jQuery);