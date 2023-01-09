$(document).ready(function(){

    //  S P O I L E R  ===================================
    $('.spoiler-program__title').click(function(e){
        if($(".spoiler-program").hasClass('one-spoiler-opened')) {
            $('.spoiler-program__title').not($(this)).removeClass('active');
            $('.spoiler-program__text').not($(this).next()).slideUp(300);

        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});