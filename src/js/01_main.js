$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999 99 99', { autoclear: false }, { placeholder: '+7            ' });


    $(".nav__link").click(function(event) {
        event.preventDefault();
        var idc = $(this).attr('href'),
            top = $(idc).offset().top;
        $('body,html').animate({ scrollTop: top - 55 }, 0);
        $(".header").removeClass("header--active")
    });


    $(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 135;

            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var idn = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.nav__link.nav__link--active').removeClass('nav__link--active');
                $('.nav__link[href="#' + idn + '"]').addClass('nav__link--active');
            }
        });
    });

});

$(".scroll-up").click(function() {
    $("body,html").scrollTop(0);
})
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $(".scroll-up").addClass("scroll-up--active")
    } else {
        $(".scroll-up").removeClass("scroll-up--active")
    }
})
