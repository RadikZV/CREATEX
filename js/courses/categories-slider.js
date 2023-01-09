$(document).ready(function(){
    $('.categories-slider__list').slick({
        slidesToShow: 5,
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