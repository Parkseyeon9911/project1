
$(document).ready(function(){
    
    $(window).on('scroll',function(){
        var now_scroll = $(window).scrollTop();
        if(now_scroll > $('.infomation_box li').eq(1).offset().top){
            var black_acc = (now_scroll-$('.infomation_box li').eq(1).offset().top)/50/5
            console.log(black_acc)

            $('article').css({
                backgroundColor:'rgba(0,0,0,'+(1-black_acc)+')'
            })
            }
        else{
            $('article').css({
                backgroundColor:'rgba(0,0,0,1)'
            })
        }
        })
    
    
    
})
//var bottom_rd = $('.bottom_nav ul li').height()
//console.log(bottom_rd)
//    
//$('.bottom_nav ul li').css({
//    borderRadius:bottom_rd/2,
//    lineHeight:bottom_rd+'px'
//})
//    
//    
//    
//
//$('.circle_outline').on('click',function(){
//    console.log('ccc')
//})    
    
    
    
    
    
    



    