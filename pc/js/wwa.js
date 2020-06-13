

    $(document).ready(function(){
        
        
        
        var foottop = $('article').height()
        console.log(foottop)
        
        $('footer').css({
            top:foottop
        })
        
        
    $('html,body').on('mousewheel',function(e){
        
        var now_scroll = $(window).scrollTop();
        var article_offtop = $('article').offset().top/100;
        var graypercent = Math.floor(now_scroll/article_offtop);
        var scaleperscent = graypercent/100;
//        console.log(article_offtop)
        if(scaleperscent > 1){
            scaleperscent = 1
        }
        console.log(scaleperscent);
        
        $('.dp1_background').css({
            filter:'grayscale('+graypercent+'%)',
//            filter:'blur('+graypercent+'px)'
        })
        
        $('.dp1_title').css({
            transform:'scale('+(1-scaleperscent)+','+(1-scaleperscent)+')',
            opacity:(1-(scaleperscent*2))
        })
        
        
        $('article').children().each(function(i,ee){
            console.log(ee)
            
            if(now_scroll > $('article').children().eq(i).offset().top/3){
                
                $('article').children().eq(i).addClass('running');
            }
        })
        
    })
})