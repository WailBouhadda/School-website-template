/*******nav-scroll-animation*********/ 

$(function(){

    var scroll = $(document).scrollTop();
    var navHeight = $('.menu').outerHeight();

    $(window).scroll(function(){
        var scrolled = $(document).scrollTop();
        if (scrolled > navHeight) {
            $('.menu').addClass('animate');
            $('.top_menu').addClass('animate');
            $('.header').addClass('animate');

        }else{
            $('.menu').removeClass('animate');
            $('.top_menu').removeClass('animate');
            $('.header').removeClass('animate');

        }
        scroll = $(document).scrollTop();
    
    });
                    });

/************nav-responsive********/
                    
$(document).ready(function(){
         $('.burger').click(function(){
         $('.nav_menu').toggleClass('animation');
           })
         })