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
<link rel="stylesheet" href="common/css/login.css">

<script src="common/js/common.js"></script>
<script src="js/login.js"></script>
</head>


<body>
    <? include "common/common.html" ?>
    <? include "common/header.html" ?>
    <div class="header_bottom"></div>
     <section>
        
           <h2 class="hidden">로그인</h2>
         <article class="display1" id="content1">
           <h3 class="hidden">아이디 비밀번호 입력</h3>
         </article>
         <form name="member_form" method="post" action="login/login.php" class="pi_info">
             <div class="title">
                 <img src="common/image/logo/footer_logo.png" alt="">
                 <p class="login_title">LEICA FAMILY LOGIN</p>
             </div>
<!--             아이디 입력-->
             <fieldset>
               <label for="pi_id">E-mail</label>
               <input type="text" id="pi_id" name="id">
            </fieldset>
               
               
<!--               비밀번호 입력-->
            <fieldset>
               <input type="password" id="pi_pw" name="pass">
               <label for="pi_pw">PassWord</label>
            </fieldset>
<!--                로그인 버튼-->

               <fieldset>
                   <input type="submit" value="Log-In">
               </fieldset>
             
                                       
         </form>
    </section>
    
    

    </body>
</html>