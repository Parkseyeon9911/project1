

$(document).ready(function(){
     
    var curr = 0
    var moving = true
    
    var pg = $('.display1 .slides').children("li")
    
    var pg_nm = parseInt(pg.length)-1
    
    
    for(var i = 0; i<= pg_nm; i++){
        var indicate_circle = $('<div>')
        indicate_circle.addClass('indicate_circle')
        $('.indicate').append(indicate_circle)
    }    
    $('.indicate > .indicate_circle:nth-of-type(1)').addClass('now')

     
     
     
     
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
        
        if(curr >= pg_nm){
            curr = pg_nm
        }
        
        var tt = -curr*100+"%"
        
        
        
        $('.slide_box .slides').stop().animate({
            left: tt
        },
        500,function(){
            moving = true
        }
        )
         
         
        $('.indicate > .indicate_circle').eq(curr).addClass('now')
        $('.indicate > .indicate_circle').not($(".indicate > .indicate_circle").eq(curr)).removeClass('now')
         
    }
    
    
     
     
    var startX, endX;
    var drag_cnt = 0;
    

$('.slides li').on('touchstart mousedown',function(e){
  
 e.preventDefault();
       
 startX=e.pageX || e.originalEvent.touches[0].pageX;
       
    
});
    
    



$('.slides li').on('touchend mouseup',function(e){
    
 e.preventDefault();
       
 endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
    
     
       
 if(startX+10 < endX) {
           
     drag_cnt = -1
 }else if(startX-10 > endX){      
     drag_cnt = 1
 }
      
     slideMove(curr+drag_cnt)
 });
    
    
    
                    $('.buy_nav').children().css({
                        display:'none'
                    })
                    $('.nav_bt').css({
                        display:'block'
                    })
    
    
//    메인 함수
    function NavMove(pos,mgin,buy,nav){
        
        $('.buy_nav').css({
            right : pos+'%',
            marginRight : mgin+'px'
        },500)
        
        
        $('.buy_nav').children().css({
            display:buy
        })
        
        $('.nav_bt').css({
            display:nav
        })
     }
    
    
    
    
    
//    스크롤 이벤트 설정
            var rg = 0;
            var mg = 0;
            var nav_disp = '';
            var nav_bt = '';
            var bttf = '';
    
            $('#wrap').on('scroll',function(e){
            event.stopImmediatePropagation();
            if($(window).scrollTop() > $('article').eq(1).offset().top){
                rg = -85
                mg = 50
                nav_disp = 'none';
                nav_bt = 'block';
//                네비게이션버튼만 보임
            }
                    
                
            else{
                rg = -85
                mg = 0
                nav_disp = 'none';
                nav_bt = 'block';
//                아예 안보임
            }

                
            if($(window).scrollTop() > $('article').eq(3).offset().top){
                $('.background_circle').css({
                    animationPlayState : 'running'
                })
            }
            
            NavMove(rg,mg,nav_disp,nav_bt)
            $('.nav_bt').css({
                    transform:'rotate(180deg)'
                })
                
            $('.buy_nav .hidden').html('Buy Navigation Open')
    })
                
            $(".nav_bt").on('click',function(){
                event.stopImmediatePropagation();
                
                if($('.buy_nav .hidden').html() == 'Buy Navigation Open'){
                    rg = 0
                    mg = 0
                    bttf = 'none'
                    nav_disp = 'block';
                    nav_bt = 'block';
                    NavMove(rg,mg,nav_disp,nav_bt)
                    $('.buy_nav .hidden').html('Buy Navigation Close')
            }
                
                else{
                    rg = -70
                    mg = 0
                    bttf = 'rotate(180deg)'
                    nav_disp = 'none';
                    nav_bt = 'block';
                    $('.buy_nav .hidden').html('Buy Navigation Open')

                }
                
                
                    NavMove(rg,mg,nav_disp,nav_bt)
                
                $('.nav_bt').css({
                    transform:bttf
                })
                
            })
    

    
    
    
    
});