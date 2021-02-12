! function($) {
    "use strict";

    $(window).on('load', function() {
        $('#preloader').addClass("loaded");
    });

    $('.navbar-links a').on('click', function() {
        setTimeout(function() {
            $(".navbar-collapse").removeClass('open');
            $(".ham").removeClass('active');
            $(".navbar-toggler").addClass('collapsed');
            $("body, html").toggleClass('overflow-hidden');
            $("body").toggleClass('aside-open');
        }, 300);
        
    });

    $('.navbar-toggler').on('click', function(){
        $(this).toggleClass('collapsed');
        $(".navbar-collapse").toggleClass('open');
        $(".ham").toggleClass('active');
        $("body, html").toggleClass('overflow-hidden');
        $("body").toggleClass('aside-open');
    });

    $("#navbarCollapse").scrollspy({
        offset:20
    });

    var wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true,
        callback:     function(box) { },
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();

    var windowWidth = $(window).width();

    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //     $(".mobileView").hide();
    // }

    if(windowWidth >= 769) {
        $('#pagepiling').pagepiling({
            menu: null,
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: [],
            anchors: [
                'HOME', 
                'ABOUT', 
                'SERVICES', 
                'RESUME', 
            ],
            scrollingSpeed: 500,
            easing: 'swing',
            loopBottom: true,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#fff',
                'position': 'right',
                'tooltips': [
                    'HOME', 
                    'ABOUT', 
                    'SERVICES', 
                    'RESUME'
                ]
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 1,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: false,
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
        });
    }

    $('#autoplay').textition({
        speed: 1.5,
        animation: 'ease-out',
        map: {x: 200, y: 100, z: 0},
        autoplay: true,
        interval: 3
    });

}(window.jQuery);

