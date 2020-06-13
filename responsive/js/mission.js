$(document).ready(function(){
        
                
        
        
        var screenSize = $(window).width();
		var screenHeight = $(window).height();
  	    var current=false;
        
       
    
    
    
    
        $('.play_bt').mouseenter(function(e){
            e.stopPropagation();
            e.preventDefault();
            $(this).next('.bt_outline').show('slow');
        })
        $('.play_bt').mouseleave(function(e){
            e.stopPropagation();
            e.preventDefault();
            $(this).next('.bt_outline').hide('slow');
        })
    
        
        $('.play_bt').click(function(e){
            var video_src = $(this).parents('a').attr('link_data')
            e.stopPropagation();
            e.preventDefault();
            drag_cnt = 0;
            $('.video_box iframe').attr('src',video_src)
            $(this).hide();
            $('.bt_outline').hide();
            $(this).parents('a').transition({
                'scaleY':'0'
            },500)
//            $('.slides a').transition({
//                'scaleY':'0'
//            },500)
            setTimeout(function(){
            $('.video_box,.video_container iframe,.video_container object,.video_container embed').show(500)
            $('.video_closebt').show()
            $('.black_screen').show()
            $('.video_box').transition({
                'scaleY':'1'
            },500)
            })
            
        })
        
        
        
        
        $('.video_closebt').click(function(){
            $('.play_bt').show()
            $('.video_closebt').hide()
            $('.video_box').transition({
                'scaleY':'0'
            },500)
            $('.video_box,.video_container iframe,.video_container object,.video_container embed').hide(500)
            
            setTimeout(function(){
            $('.video_box iframe').attr('src','')
                $('.black_screen').hide()
                $('.slides a').transition({
                'scaleY':'1'
            },500)
            },500)
        })
        
        
        
    var curr = 0
    var moving = true
    
    var pg = $('.display1 .slides').children("a")
    
    var pg_nm = parseInt(pg.length)-1
    
    
    for(var i = 0; i<= pg_nm; i++){
        var indicate_circle = $('<div>')
        indicate_circle.addClass('indicate_circle')
        $('.indicate').append(indicate_circle)
    }
        
    $('.indicate > .indicate_circle:nth-of-type(1)').addClass('now')
    
    var indicate_wid = 30*($('.indicate > .indicate_circle').length)+10
        

     
     $('.indicate > .indicate_circle').on("click",function(){
        
        var cir_num = $('.indicate > .indicate_circle').index($(this))
            
        slideMove(cir_num)
    })
    
    
    
     function slideMove(delta){
        
        moving = false
        
        curr = delta
        
        if(curr < 0){
            curr = 0
        }
        
        if(curr > pg_nm){
            curr = pg_nm
        }
        
        var tt = -curr*85+"%"
        
        
        
        $('.slide_box .slides').stop().animate({
            left: tt
        },
        1000,function(){
            moving = true;
        }
        )
         
         
         
         
         
        $('.indicate > .indicate_circle').eq(curr).addClass('now')
        $('.indicate > .indicate_circle').not($(".indicate > .indicate_circle").eq(curr)).removeClass('now')
         
         
        var mission_title = {
            0:'[ MISSION : APOLLO 11 ]',
            1:'[ MISSION : CURIOSITY MARS ROVER]',
            2:'[ MISSION : VOYAGER I AND II]',
            3:'[ MISSION : THE ISS]',
            4:'[ MISSION : STS-1]',
        }
        
        var mission_subj = {
            0:'The craft came in two parts: Columbia, the command module that would stay in orbit around the Moon and ferry the men back home to Earth, and Eagle, the lunar module that would land on the Moon. The descent to the Moon’s surface occurred on July 20.',
            1:'The goal of the rover is to follow up on the Viking missions and determine if Mars ever had the proper conditions for microbial life to exist. Curiosity has found some evidence that Mars may have once harbored microscopic life, but the experiment is ongoing.',
            2:'Both probes were outfitted with a phonograph record that carries a message from Earth to any alien civilization that may intercept the spacecraft, as they will likely survive for billions of years traveling through interstellar space. The probes are still transmitting data all these years later. But they will likely soon cease to do so as they go farther and farther from Earth.',
            3:'The International Space Station (ISS) is a major symbol of international cooperation. The ISS is currently orbiting at an altitude of over 350 kilometers (220 mi) and is traveling at over 8 kilometers per second (5 mps). As of the writing of this article, two Americans and one Russian are aboard the station.',
            4:'After the success of the Apollo program, NASA was looking for its next big thing. That thing was the space shuttle, a reusable spacecraft that landed like a glider and took off like a rocket. This vehicle would carry experiments and satellites into orbit and could remain in space for weeks. Several shuttles were to be constructed, with Columbia the first to be flight-tested.'
        }
        
        $('.dp1_title').html(mission_title[curr])
        $('.dp1_subj').html(mission_subj[curr])
         
    }
        
        
        
//        var timer = setInterval(mv_slide, 10000)
        
        function mv_slide(){
            slideMove(curr+1)
        }
        
        
        
//        
//        var startX, endX;
//        var drag_cnt = 0;
//
//
//    $('.slides a').on('mousedown',function(e){
//
//    e.preventDefault();e.stopPropagation()
//     startX=e.pageX || e.originalEvent.touches[0].pageX;
//
//
//    });
//
//
//
//
//
//    $('.slides a').on('mouseup',function(e){
//
//    e.preventDefault();e.stopPropagation()
//     endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
//
//
//
//     if(startX+10 < endX) {
//
//         drag_cnt = -1
//     }else if(startX-10 > endX){      
//         drag_cnt = 1
//     }
//
//         slideMove(curr+drag_cnt)
//     });
        
        
        
//        모바일사이즈 이벤트(비디오 감추기)
		
  	if(screenSize > 640){
        
        
      }
    if(screenSize <= 640){
        
        
    }
        
    if(screenSize > 768){
//        timer = setInterval(mv_slide, 10000)
        $('.popup_youtube').click(function(e){
            e.stopPropagation();
            var a_num = $('.slides > .popup_youtube').index($(this))
            
            slideMove(a_num)
        })
      }
    if(screenSize <= 768){
//        clearInterval(timer)
        
        $('.slide_box .slides').css({
            left:0
        })
    }
        
//      태블릿 사이즈 이벤트 메인타이틀 감추기
        
      if(screenSize > 1024){
            var indi_line_lf = $('.indicate_circle:nth-of-type(1)').offset().left-65;
            var indi_line_wid = $('.indicate_circle:nth-last-of-type(1)').offset().left-$('.indicate > .indicate_circle:nth-of-type(1)').offset().left-5

            $('.indicate_line').css({
                    width: indi_line_wid,
                    left: indi_line_lf
            })
           
      }
       if(screenSize <= 1024){
           var indi_line_lf = $('.indicate_circle:nth-of-type(1)').offset().left+5;
            var indi_line_wid = $('.indicate_circle:nth-last-of-type(1)').offset().left-$('.indicate > .indicate_circle:nth-of-type(1)').offset().left-5

            $('.indicate_line').css({
                    width: indi_line_wid,
                    left: indi_line_lf
            })
      }
        
        
             
                
                $('.popup_youtube').click(function(e){
            e.stopPropagation();
            var a_num = $('.slides > .popup_youtube').index($(this))
            
            slideMove(a_num)
        })
                  
                  
        
        
        $(window).resize(function(){
       
       
       
        screenSize = $(window).width();
		screenHeight = $(window).height();
        
           
       if(screenSize <=768){
//           clearInterval(timer)
        $('.slide_box .slides').css({
            left:0
        })
       }
       
         if(screenSize > 1024){
            var indi_line_lf = $('.indicate_circle:nth-of-type(1)').offset().left-65;
            var indi_line_wid = $('.indicate_circle:nth-last-of-type(1)').offset().left-$('.indicate > .indicate_circle:nth-of-type(1)').offset().left-5

            $('.indicate_line').css({
                    width: indi_line_wid,
                    left: indi_line_lf
            })
           
      }
       if(screenSize <= 1024){
           var indi_line_lf = $('.indicate_circle:nth-of-type(1)').offset().left+5;
            var indi_line_wid = $('.indicate_circle:nth-last-of-type(1)').offset().left-$('.indicate > .indicate_circle:nth-of-type(1)').offset().left-5

            $('.indicate_line').css({
                    width: indi_line_wid,
                    left: indi_line_lf
            })
      }
    
})})