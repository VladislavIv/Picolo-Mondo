$(document).ready(function () {
    $('.slide_container').slick({
        arrows: true,
        // dots: true,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true
    });
    $('.content_galerie_slider_big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        easing: 'ease',
        autoplaySpeed: 15000,
        waitForAnimate: false,
    });
    // $('.content_galerie_slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: ".content_galerie_slider_big",
    //     centerMode: true,
    //     focusOnSelect: false
    // });

    $('.content_galerie_slider')
    .on('init', function(event, slick) {
        $('.content_galerie_slider .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        dots: false,
        focusOnSelect: false,
        infinite: false,       
    });

    $('.content_galerie_slider_big').on('afterChange', function(event, slick, currentSlide) {
        $('.content_galerie_slider').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.content_galerie_slider .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.content_galerie_slider .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.content_galerie_slider').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.content_galerie_slider_big').slick('slickGoTo', goToSingleSlide);
    });
});

