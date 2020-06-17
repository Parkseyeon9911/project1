
    $(document).ready(function(){
        
                
        
        
        var screenSize = $(window).width();
		var screenHeight = $(window).height();
  	    var current=false;
        
        var dp1_titleHg = $('.dp1_title').height();
        
        
        var circle_top = '-'+(parseInt($('.galaxy_circle').css('padding-top'))/2)+'px'
        var circle_back_top = '-'+(parseInt($('.galaxy_circle_background').css('padding-top'))/2)+'px'
        
        
        $('.galaxy_circle').css({
            marginTop:circle_top
        })
        
        $('.galaxy_circle_background').css({
            marginTop:circle_back_top
        })
        
        
//        첫번째 메인 타이틀 여백 만들어두는 이벤트
            $('.dp2_subj').css({
                marginTop:dp1_titleHg
            })
        
        
        
//        모바일사이즈 이벤트(비디오 감추기)
		
  	if(screenSize > 640){
        $(".video_over video").show();
        $(".vdimg_background").hide();        
        $('.dp3_lf_depth, .dp3_rg_depth').children().addClass('objscale_ani')

      }
    if(screenSize <= 640){        
        $(".vdimg_background").hide();
        $(".video_over video").attr('src','');
        $(".video_over video").hide();
        $(".vdimg_background").show();
        $('.dp3_lf_depth, .dp3_rg_depth').children().removeClass('objscale_ani')
      }
        
        
//      태블릿 사이즈 이벤트 메인타이틀 감추기
        
      if(screenSize > 1024){
           $('.resize_title').hide()
           
      }
       if(screenSize <= 1024){
           $('.resize_title').show()
      }
        
    
        
  	
//        리사이즈 메소드
        
        
   var nav_current=0;
   $(window).resize(function(){
       
       
       
        screenSize = $(window).width();
		screenHeight = $(window).height();
       
       
        var circle_top = '-'+(parseInt($('.galaxy_circle').css('padding-top'))/2)+'px'
        var circle_back_top = '-'+(parseInt($('.galaxy_circle_background').css('padding-top'))/2)+'px'
        
        
        $('.galaxy_circle').css({
            marginTop:circle_top
        })
        
        $('.galaxy_circle_background').css({
            marginTop:circle_back_top
        })
       
        dp1_titleHg = $('.dp1_title').height()
            
            $('.dp2_subj').css({
                marginTop:dp1_titleHg
            })
    
       
       
      if( screenSize > 640 && current==false){
      	
        $(".vdimg_background").show();
        $(".video_over video").attr('src','video/main_video.mp4');
        $(".video_over video").show();
        $(".vdimg_background").hide();
        current=true;
        $('.dp3_lf_depth, .dp3_rg_depth').children().addClass('objscale_ani')
      } 
      if(screenSize <= 640){
        $(".vdimg_background").hide();
        $(".video").hide();
        $(".video_over video").attr('src','');
        $(".vdimg_background").show();
        current=false;
        $('.dp3_lf_depth, .dp3_rg_depth').children().removeClass('objscale_ani')
      }
//       
       
       if(screenSize > 1024){
           $('.resize_title').hide()
           
      }
       if(screenSize <= 1024){
           $('.resize_title').show()
      }
        
        
        
    })

        
        
        
        
        
        
        
        
        
        
        
        
        
//        스크롤 이벤트
        
        
        $(window).scroll(function(){
            var now_scroll = $(window).scrollTop()
            
            
            
            
            
//            스크롤 내리면 메인타이틀의 글자 색상 가독성 있게 변경
            
            if(now_scroll > $('article:nth-of-type(1)').height()/2){
                
                $('.dp1_title').css({
                    color:'#aafff0',
                    textShadow:'0px 0px 10px #aafff0'
                })
            }
            
            else{
                $('.dp1_title').css({
                    color:'#fff',
                    textShadow:'0px 0px 2px rgba(0,0,0,1), 0px 0px 2px rgba(0,0,0,1), 0px 0px 2px rgba(0,0,0,1), 0px 0px 2px rgba(0,0,0,1)'
                })
            }
            
            
            
//             스크롤 내리면 메인 타이틀이 2번째 디스플레이에 고정            
            
            if(now_scroll > $('article:nth-of-type(2)').offset().top-($('.dp1_title').outerHeight()/2)){
                var dp2_titleHg = $('.dp2_title').offset().top+$('.dp2_title').height()
                $('.dp1_title').css({
                    position:'absolute',
                    top:dp2_titleHg,
                    marginTop:0
                })
            }
            else{
                $('.dp1_title').css({
                    position:'fixed',
                    top:'auto',
                    marginTop:'-1.5em'
                })
            }
            
            
            
            
            
            
            
            
            
            
            
            
            
//            스크롤이 일정영역을 넘어가면 배경색이 어두워지는 이벤트
            
            
            
            
            
            
//            스크롤이 일정영역을 넘어가면 마지막레이아웃 우주인을 움직이는 이벤트
            
            if(now_scroll > $('article:nth-of-type(4)').offset().top-($('article:nth-of-type(4)').height())){
                var movepos = (now_scroll-$('article:nth-of-type(4)').offset().top)/10
                
                $('.dp5_moveman').css({
                    marginLeft:movepos,
                    marginBottom:movepos
                })
            }
            else{
                $('.dp5_moveman').css({
                    left:'-30%',
                    bottom:'-30%'
                })
            }
            
            
       
        screenSize = $(window).width();
		screenHeight = $(window).height();
            
            
//            레이아웃3 각각 스케일이 작동하는 이벤트
            if(screenSize > 640){
                
//        $('.dp3_lf_depth, .dp3_rg_depth').children().addClass('objscale_ani')
        $('.dp3_lf_depth li').each(function(i,ee){
            if(now_scroll > $('.dp3_lf_depth li').eq(i).offset().top-parseInt($('.dp3_lf_depth li').eq(i).outerHeight())){
            $('.dp3_lf_depth li').eq(i).addClass('running')
        }
        })
            
            
        $('.dp3_rg_depth li').each(function(i,ee){
            if(now_scroll > $('.dp3_rg_depth li').eq(i).offset().top-parseInt($('.dp3_rg_depth li').eq(i).outerHeight())){
            $('.dp3_rg_depth li').eq(i).addClass('running')
        }
        })
        }
            
        })
        
        $('.down').click(function(){
			  screenHeight = $(window).height();
			  $('html,body').animate({'scrollTop':screenHeight}, 1000);
		});
    })