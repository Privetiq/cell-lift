var percents_block_1 = document.getElementsByClassName('col_1');
var percents_block_3 = document.getElementsByClassName('col_3');

window.onscroll = function() {
    var scrolled = window.pageYOffset;
    var height = window.innerHeight;
    
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

    var video = document.getElementById('video_file');
    
    var play_video = function () {
        $('.video_clip').show();
        video.play();
    };
    var pause_video = function () {
        video.pause();
        $('.video_clip').hide();
    };

    video.onpause = pause_video; 
    video.onplaying = play_video; 
    $('.play_block').click(play_video);

    $('.right_col').click(play_video);
    if (video.paused) {
        pause_video;
    }
    $('.video_clip').click(pause_video);


    if (window.innerWidth > 1024) {
        $(".slider li").each(function (index, element) {
            $(element).css("opacity", "1");
        })
    }

});