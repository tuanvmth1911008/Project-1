$(document).ready(function(){
    //FullPgae
    if($(window).width() > 992){
        var myFullpage = new fullpage('#fullpage', {
            verticalCentered: true,
            anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec7', 'sec8', 'sec9', 'sec10', 'sec11', 'sec12', 'sec13'],
            menu: '#menu',
            scrollingSpeed: 1000 ,
            sectionsColor: ['#fff', '#11d0f8', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            onLeave: function(origin, destination, direction){
                var leavingSection = this;

                //sec2
                if(origin.index == 0 && direction =='down'){
                    $('.sec2 .gr-element .element').addClass('active')
                }
                //sec3
                if(origin.index == 1){
                    $('.pr-section .sec-tt').addClass('active');
                    $('.pr-section .sec-content').addClass('active');
                }
                //sec4
                if(origin.index == 2 && direction =='down'){
                    $('.banner-section .sec-tt').addClass('active');
                    $('.banner-section .sec-content').addClass('active');
                }
                //sec5
                if(origin.index == 3 && direction =='down'){
                    $('.cpm-section .gr-element .element').addClass('active');
                }
                //sec6
                if(origin.index == 4 && direction =='down'){
                    $('.fanpage-section .sec-tt').addClass('active');
                    $('.fanpage-section .sec-content').addClass('active');
                }
                //sec7
                if(origin.index == 5 && direction =='down'){
                    $('.game-section .sec-tt').addClass('active');
                    $('.game-section .sec-content').addClass('active');
                }
                //sec8
                if(origin.index == 6 && direction =='down'){
                    $('.mobile-section .sec-tt').addClass('active');
                    $('.mobile-section .sec-content').addClass('active');
                }
                //sec9
                if(origin.index == 7 && direction =='down'){
                    $('.event-section .sec-tt').addClass('active');
                    $('.event-section .sec-content').addClass('active');
                }
            }
        });
    }
     //Add ID section 2
    if($(window).width() <= 992){
        $('.sec1').attr('id','sec1');
        $('.sec2').attr('id','sec2');
        $('.pr-section').attr('id','sec3');
        $('.banner-section').attr('id','sec4');
        $('.cpm-section').attr('id','sec5');
        $('.fanpage-section').attr('id','sec6');
        $('.game-section').attr('id','sec7');
        $('.mobile-section').attr('id','sec8');
        $('.event-section').attr('id','sec9');
    }
    $(window).resize(function() {
        if($(window).width() <= 992){
            $('.sec1').attr('id','sec1');
            $('.sec2').attr('id','sec2');
            $('.pr-section').attr('id','sec3');
            $('.banner-section').attr('id','sec4');
            $('.cpm-section').attr('id','sec5');
            $('.fanpage-section').attr('id','sec6');
            $('.game-section').attr('id','sec7');
            $('.mobile-section').attr('id','sec8');
            $('.event-section').attr('id','sec9');
        }
    });

    //Slide PR
    var current = 1;
    var current_bn = 1;
    var current_km = 1;
    var current_mb = 1;
    var current_ev = 1;
    var num = 4;
    var num_bn = 4;
    var num_mb = 4;
    var num_km = 2;
    var num_ev = 9;

    //Set Slide auto
    var myVar = setInterval(slideAuto, 5000);

    function slideAuto() {
        //PR
        $('.pr-section .slide-sec3 .slide-element').removeClass('active');
        current = current + 1;
        if(current > num){
            current = 1;
        }
        $('.pr-section .slide-sec3 .slide-element:nth-child(' + current + ')').addClass('active');

        //Banner
        $('.banner-section .slide-sec3 .slide-element').removeClass('active');
        current_bn = current_bn + 1;
        if(current_bn > num_bn){
            current_bn = 1;
        }
        $('.banner-section .slide-sec3 .slide-element:nth-child(' + current_bn + ')').addClass('active');

        //Thong tin khuyen mai
        $('.km-section .slide-sec3 .slide-element').removeClass('active');
        current_km = current_km + 1;
        if(current_km > num_km){
            current_km = 1;
        }
        $('.km-section .slide-sec3 .slide-element:nth-child(' + current_km + ')').addClass('active');

        //Mobile
        $('.mobile-section .slide-sec3 .slide-element').removeClass('active');
        current_mb = current_mb + 1;
        if(current_mb > num_mb){
            current_mb = 1;
        }
        $('.mobile-section .slide-sec3 .slide-element:nth-child(' + current_mb + ')').addClass('active');


        //Event
        $('.event-section .slide-sec3 .slide-element').removeClass('active');
        current_ev = current_ev + 1;
        if(current_ev > num_ev){
            current_ev = 1;
        }
        $('.event-section .slide-sec3 .slide-element:nth-child(' + current_ev + ')').addClass('active');
    }

    $('.control-right').click(function(){
        var name = $(this).parents('.control').attr('name');
        // PR
        if(name === "pr"){
            $('.pr-section .slide-sec3 .slide-element').removeClass('active');
            current = current + 1;
            if(current > num){
                current = 1;
            }
            $('.pr-section .slide-sec3 .slide-element:nth-child(' + current + ')').addClass('active');
        }
        //Banner
        if(name === "banner"){
            $('.banner-section .slide-sec3 .slide-element').removeClass('active');
            current_bn = current_bn + 1;
            if(current_bn > num_bn){
                current_bn = 1;
            }
            $('.banner-section .slide-sec3 .slide-element:nth-child(' + current_bn + ')').addClass('active');
        }

        //Thong tin khuyen mai
        if(name === "km"){
            $('.km-section .slide-sec3 .slide-element').removeClass('active');
            current_km = current_km + 1;
            if(current_km > num_km){
                current_km = 1;
            }
            $('.km-section .slide-sec3 .slide-element:nth-child(' + current_km + ')').addClass('active');
        }

        //Mobile
        if(name === "mobile"){
            $('.mobile-section .slide-sec3 .slide-element').removeClass('active');
            current_mb = current_mb + 1;
            if(current_mb > num_mb){
                current_mb = 1;
            }
            $('.mobile-section .slide-sec3 .slide-element:nth-child(' + current_mb + ')').addClass('active');
        }

        //Event
        if(name === "event"){
            $('.event-section .slide-sec3 .slide-element').removeClass('active');
            current_ev = current_ev + 1;
            if(current_ev > num_ev){
                current_ev = 1;
            }
            $('.event-section .slide-sec3 .slide-element:nth-child(' + current_ev + ')').addClass('active');
        }

        //Set Interval
        clearInterval(myVar);
    });
    $('.control-left').click(function(){
        var name = $(this).parents('.control').attr('name');
        // PR
        if(name === "pr"){
            $('.pr-section .slide-sec3 .slide-element').removeClass('active');
            current = current - 1;
            if(current < 1){
                current = num;
            }
            $('.pr-section .slide-sec3 .slide-element:nth-child(' + current + ')').addClass('active');
        }
        //Banner
        if(name === "banner"){
            $('.banner-section .slide-sec3 .slide-element').removeClass('active');
            current_bn = current_bn - 1;
            if(current_bn < 1){
                current_bn = num_bn;
            }
            $('.banner-section .slide-sec3 .slide-element:nth-child(' + current_bn + ')').addClass('active');
        }
        //Thong tin khuyen mai
        if(name === "km"){
            $('.km-section .slide-sec3 .slide-element').removeClass('active');
            current_km = current_km - 1;
            if(current_km < 1){
                current_km = num_km;
            }
            $('.km-section .slide-sec3 .slide-element:nth-child(' + current_km + ')').addClass('active');
        }
        //Mobile
        if(name === "mobile"){
            $('.mobile-section .slide-sec3 .slide-element').removeClass('active');
            current_mb = current_mb - 1;
            if(current_mb < 1){
                current_mb = num_mb;
            }
            $('.mobile-section .slide-sec3 .slide-element:nth-child(' + current_mb + ')').addClass('active');
        }
        //Event
        if(name === "event"){
            $('.event-section .slide-sec3 .slide-element').removeClass('active');
            current_ev = current_ev - 1;
            if(current_ev < 1){
                current_ev = num_ev;
            }
            $('.event-section .slide-sec3 .slide-element:nth-child(' + current_ev + ')').addClass('active');
        }

        //Set Interval
        clearInterval(myVar);
    });

    //Popup
    $('.btn-popup').click(function(){

        if($(window).width() > 1024){
            myFullpage.setAllowScrolling(false);
        }
        // Option 2
        var index = $(this).attr('id');
        $('#' + index + '_popup').addClass('active');
        $('body').css('overflow-y','hidden');
    });

    //Btn Close
    $('.btn-close-main').click(function(){
        if($(window).width() > 1024){
            myFullpage.setAllowScrolling(true);
        }
        $(this).parents('.popup').removeClass('active');

        if($(window).width() <= 1024){
            $('body').css('overflow-y','scroll');
        }

    });
    $('.btn-close-sub').click(function(){
        $(this).parents('.popup-sub').removeClass('active');
        $('.popup').css('overflow-y','scroll');
    });

    //Btn Demo
    $('.btn-demo').click(function(){
        $(this).find('+ .popup-sub').addClass('active');
        $('.popup').css('overflow-y','hidden');
    });

    //Menu
    $('.btn-menu').click(function(){
        $('.menu').toggleClass('active');
    });
    var click = 0;
    $('.main-menu li span').click(function(){
        $('.main-menu li ul').slideUp('300');
        if(click != $(this).parents('li').index()){
            $(this).parents('li').find('ul').slideDown('300');
            click = $(this).parents('li').index();
        }
    });
    $('.main-menu li a').click(function(){
        $('.menu').removeClass('active');
        $('.popup').removeClass('active');
        click = $(this).parents('li').index();
    });

    // Type it
    new TypeIt('#sub_text_1', {
        speed: 25,
        strings: [''],
        cursor: false
    });
    new TypeIt('#sub_text_2', {
        speed: 75,
        strings: [''],
        cursor: false
    });

    //Star
    setInterval(function () {
        $('.star-1').fadeOut(1500).delay(2000).fadeIn(3000).fadeOut(1500).delay(1254);
        $('.star-2').fadeOut(3000).fadeIn(1200).fadeOut(1200).delay(1920);
        $('.star-3').fadeOut(1500).delay(1200).fadeIn(3000).fadeOut(150).delay(800);
        $('.star-4').fadeOut(1800).fadeIn(1500).fadeOut(1600).delay(1350);
        $('.star-5').fadeOut(2550).delay(1200).fadeIn(3000).fadeOut(1800).delay(1500);
        $('.star-6').fadeOut(2600).fadeIn(1500).fadeOut(2200).delay(2200);
        $('.star-7').fadeOut(1500).delay(1200).fadeIn(4000).fadeOut(3500).delay(2850);
        $('.star-8').fadeOut(2000).fadeIn(3200).fadeOut(2800).delay(1080);
        $('.star-9').fadeOut(3500).delay(1200).fadeIn(2600).fadeOut(190).delay(1500);
        $('.star-10').fadeOut(4200).fadeIn(1700).fadeOut(2100).delay(1440);
        $('.star-11').fadeOut(3800).delay(1200).fadeIn(3600).fadeOut(3700).delay(2870);
        $('.star-12').fadeOut(2100).fadeIn(4200).fadeOut(2900).delay(1860);
    }, 1);
});