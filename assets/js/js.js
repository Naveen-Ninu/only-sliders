$('.my_slider').slick({
    centerMode: false,
    // centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: ".next",
    prevArrow: ".prev",
    speed: 450,
    infinity: true,
    variableWidth: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1000,
    // fade: true,
    // cssEase: 'linear',
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});