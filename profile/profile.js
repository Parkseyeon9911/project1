
    window.onload=function(){	
        
        
                    setTimeout(function(){
                        $('.noise').css({
                            display:'none'
                        })
                        
                        
                        $('.logo').css({
                            display:'none'
                        })
                        
                        $('.black_screen').css({
                               display:'block'
                           })
                    },500)
        
                    setTimeout(function(){
                           $('.booting').css({
                               animationPlayState:'running'
                           })
                    },600)
        
                    setTimeout(function(){
                            $('.black_screen').css({
                               display:'none'
                           })
                    },1100)
                    
        
                    setTimeout(function(){
						var el       = document.querySelector('.main-text')
						var options  = {
							text: '<PORTFOLIO>',
					  textSpeed: 200,
					  blinkSpeed: 0.06
						}

						var instance = new tinytyper(el, options);

                    },1100)
        
						
					}
    
    $(document).ready(function(){
       
    var curr = 0
    var moving = true
    var pg = $('section').children("article")
    var pg_nm = parseInt(pg.length)-1
    
    
    $('.indicate a').on("click",function(e){
        console.log('동작')
        e.preventDefault();
        var indi_num = $('.indicate a').index($(this))+1
            
        sectionScr(indi_num)
    })
        

        
        
    $('html,body').on('mousewheel DOMMouseScroll',function(e){
        
        
        if($('.noise').css('display') == 'none'){
        
        if(curr == 6){
            moving = false
            if(e.originalEvent.wheelDelta > 0 && $('#content7').scrollTop() == 0 || e.originalEvent.detail < 0 && $('#content7').scrollTop() == 0){
            moving = true
            delta = -1
            
        sectionScr(delta+curr)
           }
            
            else if(e.originalEvent.wheelDelta < 0 && $('#content7').scrollTop() + $(window).height() >= $('.gallery_box').height() || e.originalEvent.detail > 0 && $('#content7').scrollTop() + $(window).height() >= $('.gallery_box').height()){
            moving = true
            delta = 1
                
            sectionScr(delta+curr)
            }
        
        }
        
        
        
        
        if(moving){
            
          var delta = 0
        
        if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0){
            
           delta = 1
            
           }
            
        else if(e.originalEvent.wheelDelta >0 || e.originalEvent.detail < 0){
            
            delta = -1
            
        }
            
        sectionScr(delta+curr)
        }
        }
    })
        
        
        
        
        function sectionScr(delta){
        
        moving = false
        
        curr = delta
        
        if(curr < 0){
            curr = 0
        }
        
        if(curr > pg_nm){
            curr = pg_nm
        }
        
        var tt = -curr*100+"%"
        
        
        $('section').stop().animate({
            left: tt
        },
        1000,function(){
            moving = true
        })

            
            
        if(curr == 7){
            var el       = document.querySelector('.end-text')
						var options  = {
							text: '</PORTFOLIO>',
					  textSpeed: 200,
					  blinkSpeed: 0.06
						}

						var instance = new tinytyper(el, options);
        }    
//            
            
            
        
        $('.indicate > a').eq(curr).addClass('now')
        $('.indicate > a').not($(".indicate > .indicate_circle").eq(curr)).removeClass('now')
            
            
    }
        
        
        
        $('.design').on('click',function(){
            $('.black_screen').css({
                display:'block'
            })
        })
        
        
        
    
    
     
    })
    