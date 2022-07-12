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
let coordinate1 = 0
let coordinate2 = 0

function animateMainBg(x,y) {

    x = x - 1
    y = y - 1

    coordinate1 = x * 10
    coordinate2 = y * 10


    $(".main__img2").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
    $(".main__img3").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
    $(".e-signature__img1").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
    $(".e-signature__img2").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
    $(".e-signature__img3").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
    $(".e-signature__img4").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
    $(".e-signature__img5").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
    $(".e-signature__img6").css('transform',`translate3d(${coordinate1}px, ${coordinate2}px, 0)`)
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
