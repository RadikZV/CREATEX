//  SPOILER  ====================================

$(document).ready(function(){

    //  S P O I L E R  ===================================
        $('.spoiler__icon-and-title-box').click(function(e){
            if($(".spoiler").hasClass('one-spoiler-opened')) {
                $('.spoiler__icon-and-title-box, .spoiler__item').not($(this)).removeClass("active");
                $('.spoiler__content').not($(this).next()).slideUp(300);
            } 
            // $('.spoiler__item').not($(this).next($('.spoiler__item'))).addClass('active');
            $(this).closest(".spoiler__item").toggleClass("active");
            $(this).toggleClass('active').next().slideToggle(300);
        });
        
    });