$(document).ready(function(){
   

$('.quick_area').hover(
            function () {
                $('.quick_area .quick_menu ul').fadeIn('normal', function () {
                    $(this).stop();
                });
                $('.sub_menu').slideDown('fast', function () {
                    $(this).stop();
                });
            },
            function () {
                $('.quick_area .quick_menu ul').fadeOut('fast');
                $('.sub_menu').slideUp('normal');
            });
    
    
    
     
})