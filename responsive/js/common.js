
    $(window).load(function() {    
        setTimeout(function(){
          
        $('.pg_loading').hide();    
        })
    });



$(document).ready(function(){
    
    
    
        var earth_top = '-'+(parseInt($('.pg_loading_earth').css('padding-top'))/2)+'px'
        var outline_top = '-'+(parseInt($('.loading_outline').css('padding-top'))/2)+'px'
        var galaxy_top = '-'+(parseInt($('.loading_galaxy').css('padding-top'))/2)+'px'
        
        
        $('.pg_loading_earth').css({
            marginTop:earth_top,
            marginLeft:earth_top
        })
    
        $('.loading_outline').css({
            marginTop:outline_top,
            marginLeft:outline_top
        })
    
        $('.loading_galaxy').css({
            marginTop:galaxy_top,
            marginLeft:galaxy_top
        })
        
    
        var screenSize = $(window).width();
		var screenHeight = $(window).height();

        if(screenSize > 768){
           $('.sitemap').hide()
      }
       if(screenSize <= 768){
           $('.sitemap').show()
      }


//        사이트맵 클릭 이벤트
        
        $('.sitemap').on('click',function(){
            
            
            
            
            if(screenSize <= 768){
            if($('.close_map').css('display') == 'none'){
//                사이트맵 활성화가 안되었을 때
                
            $('.site_map').removeClass('paused')
            $('.site_map').addClass('running')
            var nav_hg = $(window).height();
            setTimeout(function(){
                
                $('.nav_background').css({
                    height:nav_hg
                })
                
                
                $('.site_map').hide()
                $('.close_map').show()
                $('.close_map div').removeClass('paused')
                $('.close_map div').addClass('running');
                $('#gnb ul').show('slow');
                $('.nav_background').show('slow');
            },1000)
        }
            
            
            if($('.close_map').css('display') == 'block'){
//                사이트맵 활성화가 되었을 때
                
                $('.close_map').hide()
                $('.site_map').removeClass('running')
                $('.site_map').addClass('paused')
                $('.site_map').show()
                $('.nav_background').hide('slow');
                $('#gnb ul').hide('slow');
            }
            }
        })


 var nav_current=0;
   $(window).resize(function(){
       
        var earth_top = '-'+(parseInt($('.pg_loading_earth').css('padding-top'))/2)+'px'
        var outline_top = '-'+(parseInt($('.loading_outline').css('padding-top'))/2)+'px'
        var galaxy_top = '-'+(parseInt($('.loading_galaxy').css('padding-top'))/2)+'px'
        
        
        $('.pg_loading_earth').css({
            marginTop:earth_top,
            marginLeft:earth_top
        })
    
        $('.loading_outline').css({
            marginTop:outline_top,
            marginLeft:outline_top
        })
    
        $('.loading_galaxy').css({
            marginTop:galaxy_top,
            marginLeft:galaxy_top
        })
       
       
        screenSize = $(window).width();
		screenHeight = $(window).height();
       
       
       if(screenSize > 768){
        nav_current=1;
           $('.nav_background').hide();
           $('.sitemap').hide()
           $('.site_map').removeClass('running')
           $('.site_map').addClass('paused')
           $('.site_map').show();
           $('.close_map').hide();
            $('#gnb ul').show();
      }
      if(nav_current==1 && screenSize <= 768){
           $('.nav_background').hide();
            $('.site_map').removeClass('running')
            $('.site_map').addClass('paused')
           $('.site_map').show();
           $('.close_map').hide();
            $('#gnb ul').hide();
         nav_current=0;
      }
       if(screenSize <= 768){
           $('.sitemap').show()
      }
       
       
        
    })
    
    
    
    
})

