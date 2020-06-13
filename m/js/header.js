
     
$(document).ready(function(){

$('.closemap').addClass('hiddenmap')    
    
$('.sitemap').on('click',function(){
    
    console.log($('.learnm_bt').css('color'))
    $('.blackscreen').removeClass('rollbackani')
    $('.blackscreen').addClass('playani')
    
    $('.sitemap').addClass('hiddenmap')
    $('.sitemap').css({zIndex:-1})
    $('.logo a').addClass('hiddenmap')
    
    setTimeout(function(){
    $("#gnb").stop().animate({right:0},1000);
    $('.closemap').removeClass('hiddenmap')
    $('.closemap').css({zIndex:100})
    },1000)
    
    
})
    
    
$('.closemap, .blackscreen').on('click',function(){
    
    
    
    $("#gnb").animate({right:'-100%'},1000);
    
    $('#gnb .depth1>a').css({color:'#fff'});
    $('#gnb .depth1 ul').hide();
    
    setTimeout(function(){
    
    $('.blackscreen').removeClass('playani')
    $('.blackscreen').addClass('rollbackani')
    
    $('.sitemap').removeClass('hiddenmap')
    $('.sitemap').css({zIndex:100})
    $('.closemap').addClass('hiddenmap')
    $('.closemap').css({zIndex:-1})
    $('.logo a').removeClass('hiddenmap')
    },1000)
})
    
    $('#gnb .depth1>a').click(function(){
    
        if($(this).css('color') == 'rgb(225, 38, 42)'){
            $(this).css({color:'#fff'});
            $('#gnb .depth1 ul').hide();
        }
        
        else{
        $(this).css({color:'#e1262a'})
        $('#gnb .depth1>a').not(this).css({color:'#fff'})
        $('#gnb .depth1 ul').hide();
        $(this).next('ul').slideDown('slow');
        }
        
    }); 
    
    
    
    
})