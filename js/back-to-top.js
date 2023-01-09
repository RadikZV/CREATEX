//  BACK TO TOP   ======================================

function backToTop() {
    let btn = $('.copyrights-footer__gototop-btn');

    btn.on("click", (e) => {
        e.preventDefault;
        $('html').animate({scrollTop: 0}, 800);
    })
}
backToTop();