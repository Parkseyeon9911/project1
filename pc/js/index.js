    
    $(document).ready(function(){
        
        
        var agent = navigator.userAgent.toLowerCase();

        if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

            $('.scroll_focus').remove()

        }
        
    $('article').children().addClass('focus_blur')
//        스크롤 액션
        
    var curr = 0
    var moving = true
    var pg = $('section').children("article")
    var pg_nm = parseInt(pg.length)-1
        
    $('article:nth-of-type(1)').children().removeClass('focus_blur')
        
        
//    인디케이트 액션
    
//    인디케이트 안 아티클 index 수량으로 인한 div 추가
    for(var i = 0; i<= pg_nm; i++){
        var indicate_circle = $('<div>')
        indicate_circle.addClass('indicate_circle')
        $('.indicate').append(indicate_circle)
    }    
    
//      인디케이트 첫번째 값 클래스 추가
    $('.indicate > .indicate_circle:nth-of-type(1)').addClass('now')
    
//      인디케이트 버튼 클릭시 액션 추가
    $('.indicate > .indicate_circle').on("click",function(){
            
        $('article').children().addClass('focus_blur')
        
        var cir_num = $('.indicate > .indicate_circle').index($(this))
            
        sectionScr(cir_num)
    })
        
        
        
        

//        스크롤 액션
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
            top: tt
        },
        1000,function(){
            moving = true
        }
        )
        
                
        var blur_mv = $('article:nth-of-type('+(curr+1)+')')
                
        $('.scroll_focus').css({
        display:'block',
        animationPlayState: 'running'})
            
        $('.scroll_focus div').css({
        display:'block',
        borderColor:'#f00',
        animationPlayState:'running'})
        
        
        
        
        if(tt == '-200%'){
            $('.indicate > .indicate_circle').css({
                borderColor:'#000'
            })
        }
        else{
            
            $('.indicate > .indicate_circle').css({
                borderColor:'#fff'
            })
        }
        
        
        
        setTimeout(function(){
            blur_mv.children().removeClass('focus_blur')         
        },1000)
        $('article:nth-of-type('+(curr+2)+')').children().addClass('focus_blur')
        
        $('article').eq(curr).children().css({
                animationPlayState:'running'
            })
        
        
        $('.indicate > .indicate_circle').eq(curr).addClass('now')
        $('.indicate > .indicate_circle').not($(".indicate > .indicate_circle").eq(curr)).removeClass('now')
        
        
    }
        
        
    $('html,body').on('mousewheel DOMMouseScroll',function(e){
        
        if(moving){
            
          var delta = 0
        
        if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0){
            
           delta = 1
            
           }
            
        else if(e.originalEvent.wheelDelta >0 || e.originalEvent.detail < 0){
            
            delta = -1
            
        }
            
        $('.scroll_focus').css({
        display:'none',
        animationPlayState: 'paused'})
            
        $('.scroll_focus > div').css({
        display:'none'})
            
            
        $('article').children().addClass('focus_blur')
        
        sectionScr(delta+curr)
        }
    })
        
        
        
        
        
        
        
        
        
        
        
        
    
    $('.slide_shortcut img').on('click',function(){
        var imgsrc = $(this).attr('src')
        var backimg = {
            'image/dp3_slide_s3.png':'image/dp3_background1.jpg',
            'image/dp3_slide_sl2.png':'image/dp3_background2.jpg',
            'image/dp3_slide_m10.png':'image/dp3_background3.jpg',
            'image/dp3_slide_q.png':'image/dp3_background4.jpg',
            'image/dp3_slide_vlux5.png':'image/dp3_background5.jpg'
        }
        $('.camera_img').attr('src',imgsrc)
        $('.dp3_background').attr('src',backimg[imgsrc])
    })
     
        
        
    });
