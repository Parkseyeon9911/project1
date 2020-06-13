   $(document).ready(function() {
   

    $('ul.dropdownmenu').hover(
        function() { 
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();});
	        $('.menu_box').slideDown('fast',function(){$(this).stop();});
                 },
        function() {
	    
	      $('ul.dropdownmenu li.menu ul').fadeOut('fast');
        $('.menu_box').slideUp('normal');
    });
               
            $('ul.dropdownmenu li.menu').hover(
            function() { 
	         $('a.depth1', this).animate({top:-22},'fast').clearQueue();
                 },
            function() {
	        $('a.depth1', this).animate({top:0},'fast').clearQueue();
        });
       //tab키처
         $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
                    $('ul.dropdownmenu li.menu ul').slideDown('fast');
                    $('.menu_box').slideDown('fast');
          });

         $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
                  $('ul.dropdownmenu li.menu ul').slideUp('fast');
                  $('.menu_box').slideUp('fast');
         });
       
});
