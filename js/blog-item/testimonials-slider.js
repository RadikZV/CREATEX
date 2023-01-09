window.onload = function() {
    $(document).ready(function(){
        $('.check-news__slider').slick({
            slidesToShow: 3,
            arrows: true,
            dots: false,
            fade: false,
            prevArrow: '<button type="button" class="slick-prev slider-check-courses-prev-btn icon-prev-btn"></button>',
			nextArrow: '<button type="button" class="slick-next slider-check-courses-next-btn icon-next-btn"></button>',
            responsive: [{
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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

}


