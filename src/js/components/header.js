$(".header__burger").click(function() {
    $(this).toggleClass("header__burger--active")
    $(".header").toggleClass("header--active")
})


fixHeader()
$(window).scroll(function() {
    fixHeader()
})
$(window).resize(function() {
    fixHeader()
})

function fixHeader() {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("header--fix")
    } else {
        $(".header").removeClass("header--fix")
    }
}
