    
    
    
    $(document).ready(function(){
    var curr = 0
    var moving = true
    
    var pg = $('section .slides').children("li")
    
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
         
         
         $('.instructor_img').css({
             background:'url(image/academy/instructor_'+(curr+1)+'.jpg)',
             backgroundSize : 'cover',
             backgroundRepeat : 'no-repeat',
             backgroundPosition : 'center center'
         })
         
         
         var instructor_name = {
            0:'PHIL PENMAN Pro.',
            1:'Emily Pro',
            2:'MARK MANN Pro',
            3:'Crystal Pro',
            4:'MARK DE PAOLA Pro'
        }
         
         
         var academy_schedule = {
            0:'AUGUST 7-9',
            1:'OCTOBER 17-24',
            2:'JANUARY 22-24',
            3:'OCTOBER 22-28',
            4:'AUGUST 9-11'
         }
         
         var academy_place = {
            0:'Seoul',
            1:'Gyeonggi',
            2:'Busan',
            3:'Seoul',
            4:'Busan'
         }
         
         
         var academy_tools = {
            0:'LEICA S3.',
            1:'LEICA SL2',
            2:'LEICA V-LUX',
            3:'LEICA M10 MONOCHROM',
            4:'LEICA Q'
         }
         
         
         
         
         $('.instructor_name').html(instructor_name[curr])
         
         $('.dd_schedule').html(academy_schedule[curr])
         
         $('.dd_place').html(academy_place[curr])
         
         $('.dd_tools').html(academy_tools[curr])
         
        $('.indicate > .indicate_circle').eq(curr).addClass('now')
        $('.indicate > .indicate_circle').not($(".indicate > .indicate_circle").eq(curr)).removeClass('now')

    }
     
     
     
        var timer = setInterval(mv_slide, 20000)
        
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
    
    
    $('.instructor_info a').on('click',function(e){
        e.preventDefault()
        
        if($('.academy_subj').css('height')== '0px'){
        
        $('.academy_subj').css({
            height:'auto',
            marginBottom:'30px'
        })
        }
        
        else{
        $('.academy_subj').css({
            height:'0px',
            marginBottom:'0px'
        })
            
        }
    })
        
    })