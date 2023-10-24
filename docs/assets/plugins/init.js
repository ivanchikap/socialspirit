$(function() {

    $('.worksSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 200,
        arrows: false,
        dots: true,
    });

    $('.modal-work__btn--prev').on('click', function(e) {
        e.preventDefault();
        const currentSlider = $(this).parents('.modal').find('.worksSlider');
        currentSlider.slick("slickPrev");
    });

    $('.modal-work__btn--next').on('click', function(e) {
        e.preventDefault();
        const currentSlider = $(this).parents('.modal').find('.worksSlider');
        currentSlider.slick("slickNext");
    });


    $('.testimonial__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});