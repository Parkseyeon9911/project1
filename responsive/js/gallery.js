

    $(document).ready(function(){
        
                
        
        
        var screenSize = $(window).width();
		var screenHeight = $(window).height();
  	    var current=false;
        
        
        $('.img_content').hover(function(e){
//            console.log('동작')
            $(this).css({
                 filter: 'none'
            })
            
            $(this).find('.p_box').stop().slideDown('slow')
            
        },
                                
            function(){
            $(this).css({
            filter: 'grayscale(100%)'
            })
            
            $(this).find('.p_box').stop().slideUp('slow')
        })
        
        
        
        
        
        
        
        
  	
//        리사이즈 메소드
        
        
   var nav_current=0;
    })