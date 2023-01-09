$(document).ready(function(){
    $('.slider-testimonials').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        fade: false,
        prevArrow: '<button type="button" class="slick-prev slider-testimonials-prev-btn icon-prev-btn"></button>',
        nextArrow: '<button type="button" class="slick-next slider-testimonials-next-btn icon-next-btn"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }, 
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay:true,
                autoplaySpeed: 4000,
            }}]
    });
});


