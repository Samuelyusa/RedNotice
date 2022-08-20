(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });

    //Owl Carousel Trending //
    // $(document).ready(function() {
    //             var owl = $('.owl-carousel');
    //             owl.owlCarousel({
    //             margin: 10,
    //             nav: true,
    //             loop: true,
    //             responsive: {
    //                 0: {
    //                 items: 1
    //                 },
    //                 600: {
    //                 items: 3
    //                 },
    //                 1000: {
    //                 items: 5
    //                 }
    //             }
    //             })
    // })

    // const $owl = $('.owl-carousel');
    // $owl.owlCarousel({
    //     margin: 10,
    //     nav: true,
    //     loop: false,
    //     rewind: true,
    //     autoplay: true,
    //     autoplayTimeout: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 5
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // });
    // $owl.trigger('refresh.owl.carousel');

    // $owl.trigger('refreshed.owl.carousel');
    // $('#listMovies').trigger('refresh.owl.carousel');

})(jQuery);

