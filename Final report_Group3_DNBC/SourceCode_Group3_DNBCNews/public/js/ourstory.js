$(document).ready(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        var pos_str1 = $('.str1').offset().top;
        var pos_str2 = $('.str2').offset().top;
        var pos_str3 = $('.str3').offset().top;
        var pos_str4 = $('.str4').offset().top;
        console.log(pos_str2);
        if(pos_body>pos_str1-700){
            $('.str1').addClass('animate__backInRight animate__animated');
        }
        if(pos_body>pos_str2-700){
            $('.str2').addClass('animate__backInRight animate__animated');
        }
        if(pos_body>pos_str3-700){
            $('.str3').addClass('animate__backInRight animate__animated');
        }
        if(pos_body>pos_str4-700){
            $('.str4').addClass('animate__backInRight animate__animated');
        }
    });
});