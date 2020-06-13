<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>LEICA :: EMOTIONAL CAMERA</title>
    <link rel="shortcut icon" type="image/x-icon"  href="favicon.ico">
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/jquery-migrate-1.4.1.min.js"></script>

   
   
   <!--    폰트-->
    
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

<link rel="stylesheet" href="common/css/common.css">
<link rel="stylesheet" href="common/css/header.css">
<link rel="stylesheet" href="common/css/footer.css">
<link rel="stylesheet" href="common/css/skipnav.css">
<link rel="stylesheet" href="common/css/join.css">

<script src="common/js/common.js"></script>



	<script>
	 $(document).ready(function() {
  
   
 
 //id 중복검사
 $("#id").keyup(function() {    // id입력 상자에 id값 입력시
    var id = $('#id').val(); //a

    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
//        data값을 캐시에 저장하는 지 안하는지에 대한 선택, true or false만 가능
        success: function(data)
//        위의 데이터값이 해당 url로 전달이 성공하면
        {
            //data => echo "문자열" 이 저장된
             $("#loadtext").html(data);
        }
    });
});
		 
//nick 중복검사		 
$("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});		 


         
         
         

    
    
                    $('#pp_agr_all').on('click',function(){
        
                        var chk = $(this).is(':checked')
                        
                        $('#pp_agr_1').attr('checked',chk)
                        $('#pp_agr_2').attr('checked',chk)
        
                    })
    
    
    
                    $('#agr_nxt').on('click',function(){
                        
                        var agval_1 = $('#pp_agr_1').is(':checked')
                        var agval_2 = $('#pp_agr_2').is(':checked')
                       if(agval_1 && agval_2){
                        
                           $('article').animate({
                               height:1500
                           },1000)
                           
                           $('section').animate({
                               height:1650
                           },1000)
                           
//                           $('footer').animate({
//                               top:1650
//                           },1000)
                       }
                       else{
                           
                       }
                   })
    
    
    
    
    
    
    
    
                var lbmove = ['id','pass','pass_confirm','name']
    
    
                    $.each(lbmove,function(i,ee){
                       
                       
                    $('#'+ee).focus(function(){
                    $('label[for="'+ee+'"]').animate({
                    top :-30,
                    left : 0,
                    height : 30,
                    fontSize : 15,
                    lineHeight : 40
                    },300,function(){
                     $('label[for="pi_id"]').css({
                         color:'#fff'
                     })

                    })
                    })
                        
                        
                    $('#'+ee).blur(function(){
                        
                        
                        if(!$('#'+ee).val()){
                            
                    $('label[for="'+ee+'"]').animate({
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
                        
                        
                        
                   })
    
    
    
    
    
                var month = ['January','February','March','April','May','June','July','August','September','October','November','December']
                    
                   $('.sub_msg_id > .sub_lb').html('')
                   
                   $('.pi_id_chk').on('click',function(){
                       
                       var idVal = $('#pi_id').val()
                       if(idVal.indexOf('@') < 0){
                           $('.sub_msg_id > .sub_lb').html('Please use the correct ID form. The ID contains @.')
                           $('.sub_msg_id').stop().animate({
                               height : 30
                           },500)
                       }
                   })
                   
                   
                   $('.gd').on('click',function(){
                       
                   })
                   
                   
                    $.each(month,function(i,ee){
                        var newOptionM = $('<option>')
                        newOptionM.attr('value',(i+1))
                        newOptionM.html(month[i])
                        $('#bd_mon').append(newOptionM)
                    })
           
                    for(y = 1950; y <= 2020; y++){
                        var newOptionY = $('<option>')
                        newOptionY.attr('value',y)
                        newOptionY.html(y)
                        $('#bd_year').append(newOptionY)
                    }
           
                    $('#bd_mon').on('click',function(){
                        var monVal = $('#bd_mon').val()
                        var MaxD = 0
                        $('#bd_day > option').remove()
                        
                        var BasicOption = $('<option>')
                        BasicOption.attr('value','Day')
                        BasicOption.html('Day')
                        $('#bd_day').append(BasicOption)
                        
                        if(monVal == 2){
                            MaxD = 29 
                        }
                        else if(monVal == 4 || monVal == 6 || monVal == 9 || monVal == 11){
                            MaxD = 30
                        }
                        else{
                            MaxD = 31
                        }
                        
                        for(d=0; d< MaxD; d++){
                        var newOptionD = $('<option>')
                        newOptionD.attr('value',(d+1))
                        newOptionD.html(d+1)
                        $('#bd_day').append(newOptionD)
                    }
                    })
    
    
         
         
         
});
	
	
	
	</script>
	<script>
   

  
   function check_input()
   {
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");    
          document.member_form.id.focus();
          return;
      }

      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
		   // insert.php 로 변수 전송
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>

<script>
    
    
    
    
    
</script>
</head>
<body>
    <? include "common/common.html" ?>
    <? include "common/header.html" ?>
    <section>
           <h2 class="hidden">회원 가입</h2>
        <article>
           <h3 class="hidden">양식 입력</h3>
               <input type="checkbox" name="pp_agrall" id="pp_agr_all">
               <input type="checkbox" name="pp_agr1" id="pp_agr_1">
               <input type="checkbox" name="pp_agr2" id="pp_agr_2">
               <div class="title">
                 <img src="common/image/logo/footer_logo.png" alt="">
                 <p class="join_title">CREATE ACCOUNT</p>
                </div>
                <fieldset class="pp_all">
                   <label for="pp_agr_all">
                       <div class="pp_agr_icon"></div>
                       <p class="pp_agr_txt">I agree to the all terms and conditions.</p>
                   </label>
                   <p class="scr_pp_all">Welcome to LEICACAM!<br><br>
                        These terms and conditions outline the rules and regulations for the use of LEICACAM's Website, located at EE.com.<br><br>By accessing this website we assume you accept these terms and conditions. Do not continue to use LEICACAM if you do not agree to take all of the terms and conditions stated on this page.<br><br>
                        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    </p>
                </fieldset>
                
                
                <fieldset class="pp_all">
                   <label for="pp_agr_1">
                       <div class="pp_agr_icon"></div>
                       <p class="pp_agr_txt">I agree to terms and conditions.</p>
                   </label>
                   <p class="scr_pp_all">Welcome to LEICACAM!<br><br>
                        These terms and conditions outline the rules and regulations for the use of LEICACAM's Website, located at EE.com.<br><br>By accessing this website we assume you accept these terms and conditions. Do not continue to use LEICACAM if you do not agree to take all of the terms and conditions stated on this page.<br><br>
                        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    </p>
                </fieldset>
                
                
                
                <fieldset class="pp_all">
                   <label for="pp_agr_2">
                       <div class="pp_agr_icon"></div>
                       <p class="pp_agr_txt">I agree to terms and conditions.</p>
                   </label>
                   <p class="scr_pp_all">Welcome to LEICACAM!<br><br>
                        These terms and conditions outline the rules and regulations for the use of LEICACAM's Website, located at EE.com.<br><br>By accessing this website we assume you accept these terms and conditions. Do not continue to use LEICACAM if you do not agree to take all of the terms and conditions stated on this page.<br><br>
                        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    </p>
                </fieldset>
                
                
                
                
               <fieldset class="bt_fieldset">
                  <button id="agr_nxt">Next</button>
               </fieldset>
            
            
            <form  name="member_form" method="post" action="member/insert.php"> 
<!--                <caption class="hidden">Join Us</caption>-->
           
<!--           아이디-->
            <?
                if(!$userid){
             ?>
                    <fieldset>
                       <label for="id">E-mail</label>
                       <input type="text" id="id" name="id">
                    </fieldset>
              <?
                }else{
              ?>
                            <?= $row[id] ?>    
              <?
                }
              ?>
<!--                   비밀번호-->
                    <fieldset>
                       <label for="pass">Password</label>
                       <input type="password" id="pass" name="pass">
                    </fieldset>
                    
<!--                    비밀번호 확인-->
                    <fieldset>
                       <label for="pass_confirm">Password Confirm</label>
                       <input type="password" id="pass_confirm" name="pass_confirm">
                    </fieldset>
                    
<!--                    이름   -->
                     <fieldset class="info_name_gd">
                       <label for="name">Name</label>
                       <input type="text" id="name" name="name">
                       
                       <label for="gender">Gender</label>
                       <select name="gender" id="gender">
                           <option value="">Male</option>
                           <option value="">FeMale</option>
                       </select>
                    </fieldset>
                    
<!--                    성별 -->
                   
<!--                   연락처-->
                    <fieldset class="phonecall">
                    <label for="phone_0">Phone</label>
                    <select name="phone_0" id="phone_0">
                        <option value="8210">+82 10</option>
                        <option value="8211">+82 11</option>
                        <option value="8212">+82 12</option>
                        <option value="8213">+82 13</option>
                        <option value="8214">+82 14</option>
                        <option value="8217">+82 15</option>
                        <option value="8219">+82 16</option>
                    </select>
                    <input type="text" maxlength="4" id="phone_1" name="phone_1">
                    <input type="text" maxlength="4" id="phone_2" name="phone_2">
                </fieldset>
                
<!--                생일-->
                <fieldset class="birthd">
                    <label for="bd_year">Birth Day</label>
                    <select name="bd_year" id="bd_year">
                     <option value="Year">Year</option>
                     </select>
                    <select name="bd_mon" id="bd_mon">
                         <option value="Month">Month</option>
                     </select>
                    <select name="bd_day" id="bd_day">
                         <option value="Day">Day</option>
                     </select>
                </fieldset>
                <fieldset>
                    <button id="create" onclick="check_input()">Create Account</button>
                </fieldset>
            </form>
            
            
        </article>
    </section>
    <? include "common/footer.html" ?>

</body>
</html>


