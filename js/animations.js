window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var height = window.innerHeight;

    // console.log(slider_mob[0].offsetTop);

    if (scrolled > 50) {
        $(".second header").css("top", '-50px');
    } else {
        $(".second header").css("top", '0px');
    }

    var slides = $(".slider_mob ul li");
    var points = $(".points div");

    var slider = $(".slider_mob");

    slides.each(function (index, element) {
        if ((slider[0].offsetTop + (index+1)*80) < scrolled + height/1.3 ) {
            $(element).addClass("active");
        } else {
            $(element).removeClass("active");
        }
    });

    points.each(function (index, element) {
        if ((slider[0].offsetTop + (index+1)*80) < scrolled + height/1.3 ) {
            $(element).addClass("active");
        } else {
            $(element).removeClass("active");
        }
    });


};
$(document).ready(function () {
    if (window.innerWidth > 1024) {
        $(".slider li").each(function (index, element) {
            $(element).css("opacity", "1");
        })
    }
});