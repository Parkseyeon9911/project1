
     
$(document).ready(function(){

$('#wrap').scroll(function(e){
    var now_scroll = $(this).scrollTop();
    
        $('article').each(function(i,ee){
            
            if(now_scroll >  $('article').eq(i).offset().top+$('article').eq(i).height()){
            
            $('article').eq(i).children().css({
                animationPlayState:'running'
            })
                
            if($('.short_cut_box').css('animation-play-state') == 'running'){
                
                
                setTimeout(function(){
                $('.short_cut_box').children().css({
                animationPlayState:'running'
                })
                $('.short_cut_box ul').children().css({
                animationPlayState:'running'
                })
               },500)
}
        }})
})




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
    
    console.log($('.indicate > .indicate_circle').length)
    
    var indicate_wid = 30*($('.indicate > .indicate_circle').length)+10
    
    console.log(indicate_wid)

    $('.indicate').css({
        width:indicate_wid,
        marginLeft:'-'+(indicate_wid/2)+'px'
    })
     
     
     $('.indicate > .indicate_circle').on("click",function(){
        
        var cir_num = $('.indicate > .indicate_circle').index($(this))
            
        slideMove(cir_num)
    })
    
    
    
     function slideMove(delta){
        
        moving = false
        
        curr = delta
        
        if(curr < 0){
            curr = pg_nm
        }
        
        if(curr > pg_nm){
            curr = 0
        }
        
        var tt = -curr*100+"%"
        
        
        
        $('.slide_box .slides').stop().animate({
            left: tt
        },
        1000,function(){
            moving = true;
        }
        )
         
         
         
         
         
        $('.indicate > .indicate_circle').eq(curr).addClass('now')
        $('.indicate > .indicate_circle').not($(".indicate > .indicate_circle").eq(curr)).removeClass('now')
         
         
        var product_name = {
            0:'LEICA Q',
            1:'LEICA S3',
            2:'LEICA SL2',
            3:'V-LUX5',
            4:'LEICA M10',
        }
        
        var product_backgroundimg = {
            0:'dp1_background1_2x.jpg',
            1:'dp1_background2_2x.jpg',
            2:'dp1_background3_2x.jpg',
            3:'dp1_background4_2x.jpg',
            4:'dp1_background5_2x.jpg',
        }
         
        $('.display1 p').html(product_name[curr])
         
         $('.dp1_background').css({
             background:'url(image/main/'+product_backgroundimg[curr]+')',
             backgroundSize : 'cover',
             backgroundRepeat : 'no-repeat',
             backgroundPosition : 'center center'
//                         url(image/main/dp1_background1_2x.jpg) center center no-repeat;
         })
         
    }
     
     
     
        var timer = setInterval(mv_slide, 10000)
        
        function mv_slide(){
            slideMove(curr+1)
        }
    
     
     
     $('.nav_btn li').on('click',function(){
        var bt_data = $('.nav_btn li').index($(this))
        if(bt_data == 0){
            bt_data = -1
        }
        else{    
        }
        slideMove(curr+bt_data)
    })
     
     
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
    
    











var academy_nm = $('.academy_over').children('li')
    
var oldX, newX;
var academy_cnt = 0;
    

$('.academy_over').off('click').on('mousedown touchstart',function(e){
  event.stopImmediatePropagation();
 e.preventDefault();
       
 oldX=e.pageX || e.originalEvent.touches[0].pageX;
       
    
});
    
    



$('.academy_over').off('click').on('mouseup touchend',function(e){
    event.stopImmediatePropagation();
 e.preventDefault();
       
newX=e.pageX || e.originalEvent.changedTouches[0].pageX;
    

       
 if(oldX+10 < newX) {
     academy_cnt = -1
    academyMove(academy_cnt)
 }else if(oldX-10 > newX){      
     academy_cnt = 1
    academyMove(academy_cnt)
 }
else{
    oldX = 0;
    newX = 0;
    }
      
 });
    
    
    
    
    
    var cc = 0
    
    
    
    
    function academyMove(cnt){
        event.stopImmediatePropagation();
        moving = false
        
        var academy_cc = parseInt(academy_nm.length)-1
        
        cc += cnt
        
        if(cc <= 0){
            cc = 0
        }
        
        if(cc >= academy_cc){
            cc = academy_cc
        }
        
        
        var at = -cc*320
        
        $('.academy_over').stop().animate({
            left: at
        },
        1000,function(){
            moving = true
        }
        )
         
//         
        $('.academy_slide').not($('.academy_slide').eq(cc)).removeClass('scale_max')
        $('.academy_slide').eq(cc).addClass('scale_max')
    }
    
    $('.learnm_bt').off().on('click mousedown touchstart mouseup touchend',function(){
       event.stopPropagation();
    
    
    if($(this).css('color') == 'rgb(240, 240, 240)'){
        $(this).stop().css({
        transform:'rotate(90deg)',
        color:'#fff000'
        })
        $(this).next('ul').slideDown('slow');
    }
    
    else if($(this).css('color') == 'rgb(255, 240, 0)'){
        $(this).stop().css({
        transform:'rotate(0deg)',
        color:'#f0f0f0'
        })
        $(this).next('ul').hide();
    }
        
    })
    
 
    
    
   
 });