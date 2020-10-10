$(document).ready(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        if(pos_body>5000){
            $('.trendingsl').addClass('stop-slide');
        }
        else {
            $('.trendingsl').removeClass('stop-slide');
        }
    });
    $('.back-to-top').click(function(event) {
        $('html,body').animate({scrollTop: 0},1400);
    });
});