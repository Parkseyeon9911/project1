
$(document).ready(function(){
    
    $('#wrap').on('scroll',function(){
        var now_scroll = $('#wrap').scrollTop();
        if(now_scroll > $('.infomation_box li').eq(1).offset().top){
            var black_acc = (now_scroll-$('.infomation_box li').eq(1).offset().top)/50/5
            console.log(black_acc)

            $('article').css({
                backgroundColor:'rgba(0,0,0,'+(1-(black_acc/2))+')'
            })
            }
        else{
            $('article').css({
                backgroundColor:'rgba(0,0,0,1)'
            })
        }
        })
    
    
    
})
    