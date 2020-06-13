
    
    $(document).ready(function(){
      
        
        $('#pi_id').focus(function(){
            $('label[for="pi_id"]').animate({
            top :-30,
            left : 0,
            height : 30,
            fontSize : 15,
            lineHeight : 40
        },300,function(){
             $('label[for="pi_id"]').css({
                 color:'#fff'
             })
            
        });
        })
        
        
        $('#pi_pw').focus(function(){
            $('label[for="pi_pw"]').animate({
            top :-30,
            left : 0,
            height : 30,
            fontSize : 15,
            lineHeight : 40
        },300,function(){
             $('label[for="pi_pw"]').css({
                 color:'#fff'
             })
            
        });
        });
        
        $('#pi_id').blur(function(){
            
            if(!$('#pi_id').val()){
                
                
                $('label[for="pi_id"]').animate({
                    top : 0,
                    left : 0,
                    height : 50,
                    fontSize : 20,
                    lineHeight : 50
                },300,function(){
                    $('label[for="pi_id"]').css({
                 color:'#fff'
             })
        })                
        }
        })
        
        $('#pi_pw').blur(function(){
            
            if(!$('#pi_pw').val()){
                
                
                $('label[for="pi_pw"]').animate({
                    top : 0,
                    left : 0,
                    height : 50,
                    fontSize : 20,
                    lineHeight : 50
                },300,function(){
                    $('label[for="pi_pw"]').css({
                 color:'#fff'
             })
        })                
        }
        })
        
    })
    
    
    