$(document).mousemove(function( event ) {
    if (window.innerWidth < 768){
        return
    }
    if ($('.modal').hasClass("modal--active")){
        return;
    }
    let x = event.pageX/window.innerWidth
    let y = event.pageY/window.innerHeight
    animateMainBg(x,y)
});

function animateMainBg(x,y) {
    let coordinate1 = -10 * x -5
    let coordinate2 = -10 * y -5
    // let coordinate3 = -50 * x -25
    // let coordinate4 = -12.5 * y -6.25
    // let coordinate5 = -150 * x -75
    // let coordinate6 = -38 * y -18

    $(".main__img2").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
    $(".main__img3").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
    $(".e-signature__img1").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
    $(".e-signature__img2").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
    $(".e-signature__img3").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
    $(".e-signature__img4").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
    $(".e-signature__img5").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
    $(".e-signature__img6").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 30px)`)
}


changeLearnColor()
$(window).scroll(function() {
    changeLearnColor()
});


function changeLearnColor() {
    $(".animate-cards").each(function(index, el) {

        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(el).offset().top;
        let eh = $(el).outerHeight();
        let dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("animate-cards--active")
        }

    });
}
