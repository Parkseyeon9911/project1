    
    $(document).ready(function(){
        
            $('.img_layout li').hover(function(){
                $(this).css({
                    filter:'grayscale(0%)'
                })
            },function(){
                $(this).css({
                    filter:'grayscale(100%)'
                })
            })
    
    
            $('#search_bar').focus(function(){
            $('label[for="search_bar"]').animate({
            top :160,
            height : 30,
            fontSize : 20,
            lineHeight : 40
        },300,function(){
             $('label[for="search_bar"]').css({
                 color:'#fff'
             })
            
        });
        });
        
        
        $('#search_bar').blur(function(){
            
            if(!$('#search_bar').val()){
                
                
                $('label[for="search_bar"]').animate({
                    top : 200,
                    height : 70,
                    fontSize : 25,
                    lineHeight : 70
                },300,function(){
                    $('label[for="search_bar"]').css({
                 color:'#fff'
             })
        })                
        }
        })
    
    
    
    $('.faq_list li').on('click',function(e){
        e.preventDefault()
        
        if($(this).css('height')== '100px'){
        
        $(this).css({
            height:'auto'
        })
        $(this).find('.faq_title').css({
            color:'#e1262a'
        })
        }
        
        else{
        $(this).css({
            height:'100px'
        })
            
        $(this).find('.faq_title').css({
            color:'#fff'
        })
        }
        
    })
    
    })