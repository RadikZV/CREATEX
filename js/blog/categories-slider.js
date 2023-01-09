$(document).ready(function(){
    $('.news-slider__list').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        fade: false,
        infinite:false,
        responsive: [{
            breakpoint: 425,
            settings: {
                slidesToShow: 4,
            }
        }]
    });
  });