/**
 * Created by boy on 2016/10/23.
 */

$("ul.heyo").on('click','li', function(){
    $(this).addClass('selected').siblings('.selected').removeClass('selected');
    $(".beijing>span").text($(this).text());
});

$(function(){
    $(".Carousel").slidesjs({
        width:730,
        height:454,
        navigation: {
            active: true,
            // [boolean] Generates next and previous buttons.
            // You can set to false and use your own buttons.
            // User defined buttons must have the following:
            // previous button: class="slidesjs-previous slidesjs-navigation"
            // next button: class="slidesjs-next slidesjs-navigation"
            effect: "slide"
            // [string] Can be either "slide" or "fade".
        },
        play: {
            active: true,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
            effect: "slide",
            // [string] Can be either "slide" or "fade".
            interval:3000,
            // [number] Time spent on each slide in milliseconds.
            auto: true,
            // [boolean] Start playing the slideshow on load.
            swap: true,
            // [boolean] show/hide stop and play buttons
            pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
            restartDelay: 2500
            // [number] restart delay on inactive slideshow
        }
    });
    $('.slidesjs-previous').text("<");
    $('.slidesjs-next').text(">");
});

$(function(){
    $("ul.s-1").ready(function(){
        $(".s-2").hide();
        $(".s-3").hide();
    })
    $("ul.s-1>li>a>i").on('mouseover',function(){
        var index = $(this).attr('data-index');
        var indexNumber = +index;
        if(indexNumber<=3){
            $(".s-2").show("slow");
            $(".s-3").show(1000);
        }
        $('ul.s-2').children('li.active').removeClass('active');
        $('ul.s-2').children('li').eq(indexNumber).addClass('active');
    });
    $(".s-3").on('click',function(){
        $(".s-2").hide();
        $(".s-3").hide();
    });
    $("ul.s-2 > li").on('mouseenter',function(){
        $(this)
            .addClass('active')
            .siblings('.active')
            .removeClass('active')
    });
});


$.fn.slides = function(options){
    var $mc = this;
    $mc.each(function(){
        var $mc = $(this);
        var current = 0;
        var $pics = $mc.children().wrapAll('<div class=lists></div>').css({
            float: 'left'
        });
        var $list = $mc.children().wrapAll('<div class=viewpoint></div>');
        $list.css({
            width:options.width*4,
            overflow: 'hidden',
            position: 'relative',
            left: 0
        });
        var $viewpoint = $list.parent();
        $viewpoint.css({
            width:options.width,
            overflow: 'hidden'
        });
        var hover = false;
    var $prev = $('<button class="prev"><</button>').appendTo($viewpoint);
        var go = function(index){
            if(index<0){
                index = $pics.length/4 - 1;
            }
            if(index>$pics.length/4-1) {
                index = 0;
            }
            var left = index * (-options.width);
            $list.stop(true,true).animate({
                left: left
            },function(){
                current = index;
            })
        };
        var prev = function(){
            go(current-1);
        };
        $prev.on('click', function(){
            prev();
        });
        var $next = $('<button class="next">></button>').appendTo($viewpoint);
        var next = function(){
            go(current+1);
        };
        $next.on('click', function(){
            next();
        });
        $viewpoint.on('mouseenter', function(){
            hover = true
        }).on('mouseleave', function(){
            hover = false
        })


    })
}
$('.mc').slides({
    width:1000,
    height: 164,
    auto: true
})
