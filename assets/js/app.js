$(function() {

    const intro = $("#intro");
    const header = $("#header");
    const nav = $("#nav");


    /* Fix header */

    $(window).on("scroll load resize", function() {
        let elementHeight = $(intro).innerHeight();
        let scrollTop = $(this).scrollTop();

        if (scrollTop > elementHeight) {
            $(header).addClass("fixed");
        } else {
            $(header).removeClass("fixed");
        }
    });



    /* Nav */

    $("#burger").on("click", function() {
        $(nav).toggleClass("show");
        $(header).toggleClass("show");
    });

    $(window).on("resize", function() {
        let windowWidth = $(this).width();

        if (windowWidth > 991) {
            $(nav).removeClass("show");
            $(header).removeClass("show");
        }
    });



    /* Slick scroll */

    $("[data-scroll]").on("click", function() {
        let elementScroll = $(this).data("scroll");
        let elementHeight = $(elementScroll).offset().top;

        $("html, body").animate({
            scrollTop: elementHeight - 60
        }, 700);

        $(nav).removeClass("show");
        $(header).removeClass("show");
    });



    /* Slick slider https://kenwheeler.github.io/ */

    $('#slick__slider').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 1,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: 0,
        dots: true
      });

});