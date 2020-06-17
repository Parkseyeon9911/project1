
    $(document).ready(function(){
        
                
        
        
        var screenSize = $(window).width();
		var screenHeight = $(window).height();
  	    var current=false;
        
        
        
        
        
        
//        모바일사이즈 이벤트(비디오 감추기)
		
  	if(screenSize > 640){
        
        
      }
    if(screenSize <= 640){
        
        
    }
        
    if(screenSize > 768){
      }
    if(screenSize <= 768){
        
    }
        
//      태블릿 사이즈 이벤트 메인타이틀 감추기
        
      if(screenSize > 1024){
           
      }
       if(screenSize <= 1024){
      }
        
        
        
  	
//        리사이즈 메소드
        
        
   var nav_current=0;
   $(window).resize(function(){
       
       
       
        screenSize = $(window).width();
		screenHeight = $(window).height();
       
       
//       사이트맵 이벤트
       
       if(screenSize > 768){
           
      }
       
       if(screenSize <=768){
           
       }
       
       
       
       
       
       
      if( screenSize > 640 && current==false){
      	
          
      } 
       
      if(screenSize <= 640){
          
          
      }
//       
      if(screenSize > 1024){
           
      }
       if(screenSize <= 1024){
        
        
        
    }

        
        
        
        
        
        
        
        
      
    })  
        
        
        
        
//        스크롤 이벤트
        
        
        $(window).scroll(function(){
            var now_scroll = $(window).scrollTop()
            
            console.log(now_scroll)
            $('article').each(function(i,ee){
            if(now_scroll > $('article').eq(i).offset().top){
            $('article').eq(i).find('li').css({
                animationPlayState:'running'
            })
            $('article').eq(i).find('.title_box').animate({
                opacity:0
            },500)
                
                setTimeout(function(){
                    $('article').eq(i).find('.title_box').hide()
                    
                },500)
            }

//        
            })
            
            
            
    })
    })