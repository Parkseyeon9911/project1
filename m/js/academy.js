
$(document).ready(function() {
    $('.academy_box li').addClass('objscale_ani')
    $('#wrap').scroll(function(e){
    var now_scroll = $(this).scrollTop();
//        console.log(now_scroll)
        $('.academy_box li').each(function(i,ee){
//         console.log(i)
            if(now_scroll >  $('.academy_box li').eq(i).offset().top+$('.academy_box li').eq(i).outerHeight()){
            $('.academy_box li').eq(i).css({
                animationPlayState:'running'
            })
            }
            else{
                
            }
        })
})
})