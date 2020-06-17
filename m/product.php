


<?

$pd = $_GET['pd'];

?>


<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">


<title>LEICA :: Emotional Camera</title>

<link rel="apple-touch-icon-precomposed" href="app_icon.png">
<link rel="apple-touch-startup-image" href="startup.png">

<!--css-->

<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/skipnav.css">
<link rel="stylesheet" href="css/product.css">

<!--font-->

<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">






<!--script-->
<script src="js/jquery-1.12.4.min.js"></script>
<script src="js/jquery-migrate-1.4.1.min.js"></script>
<script src="js/prefixfree.min.js"></script>
<script src="js/header.js"></script>
<script src="js/product.js"></script>

<script>
  // <![CDATA[
  try {
   window.addEventListener('load', function(){
    setTimeout(scrollTo, 0, 0, 1); 
   }, false);
  } 
  catch(e) {}
  // ]]>
 </script>



 <!--[if lt IE 9]> 
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->

<script>
    $(document).ready(function(){
     
    var productArr = {
    'm10' : {'title':'LEICA M10','price':'10,700,000 W','subj':'Closer to the decisive moment', 'tt' : 'Why LEICA M-SYSTEM?', 'dd' : 'When you take a photograph with a Leica M-System camera, <br>you experience a different kind of photography.'},
    'sl2' : {'title':'LEICA SL2','price':'8,450,000 W','subj':'Fast, Intuitive mirrorless camera', 'tt' : 'Why LEICA SL-SYSTEM?', 'dd' : 'The quality of the SL2 is unparalleled. <br>I’ve always depended on the best of equipment, and in my view, it doesn’t get any better than this.'},
    's3' : {'title':'LEICA S3','price':'13,500,000 W','subj':'A Class of Its Own', 'tt' : 'Why LEICA S-SYSTEM?', 'dd' : 'The Leica S-System was conceived from the ground up as <br>a purely digital camera system and was built with the precise needs of professional photographers in mind.'},
    'q' : {'title':'LEICA Q','price':'7,230,000 W','subj':'Immaculate Perfection', 'tt' : 'Why LEICA Q?', 'dd' : 'The Leica Q has well-established itself as a full-frame compact camera <br>for all occasions and types of photography.'},
    'vlux' : {'title':'V-LUX5','price':'1,740,000 W','subj':'THE SUPERZOOM FOR EXPLORERS', 'tt' : 'Why LEICA V-LUX?', 'dd' : 'The extensive range of its zoom lens covers nearly <br>all distances and subject matter – simplifying your travels <br> by avoiding the need for changing lenses and packing additional equipment.'}
}
    
    var getphp = '<? echo ($pd); ?>'
    
    $('.dp1_title, .nav_title').html(productArr[getphp]['title']);
    $('.dp1_subj, .nav_subj, .dp3_title').html(productArr[getphp]['subj']);
    $('.dp1_price, .nav_price').html(productArr[getphp]['price']);
//       제품상세
//    $('.dp3_title').html(productArr[getphp]['subj']);
    $('.info_title').html(productArr[getphp]['tt']);
    $('.info_subj').html(productArr[getphp]['dd']);
        
    $('.display3').css({
        background:'url(image/product/'+getphp+'/dp3_mainimg.jpg)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center'
    })
    })
</script>    
</head>

<body>
<div id="wrap">
<? include "html/common.html" ?>
<? include "html/header.html" ?>

<section>
 <h2 class="hidden">카메라 제품 소개</h2>
<!--     메인 디스플레이1-->
      <article class="display1" id="content1">
        <h3 class="hidden">카메라 제품 이미지</h3>
<div class="slide_box">
<ul class="slides">
    <li>
        <img src="image/product/<? echo $pd; ?>/slide_img1_2x.png" alt="카메라 제품 정면">
    </li>
    <li>
        <img src="image/product/<? echo $pd; ?>/slide_img2_2x.png" alt="카메라 제품 측면"></li>
    <li>
        <img src="image/product/<? echo $pd; ?>/slide_img3_2x.png" alt="카메라 제품 후면">
    </li>
</ul>
</div>

<div class="indicate">
    
</div>
<div class="product_info_box">
<p class="dp1_title bold"><? echo $pd; ?></p>
<p class="dp1_subj">Closer to the decisive moment</p>
<p class="dp1_price bold">10,700,000 W</p>
</div>
<button class="buy_bt">Buy Now</button>
</article>



<!--디스플레이2-->
<article class="display2" id="content2">
        <h3 class="hidden">카메라 설명</h3>
        
        <img src="image/product/<? echo $pd; ?>/dp2_mainimg.jpg" width="100%" alt="카메라 메인 이미지">
        
        <div class="info_box">
        <p class="info_title">Why LEICA M-SYSTEM?</p>
        <p class="info_subj">When you take a photograph with a Leica M-System camera, <br>you experience a different kind of photography.</p>
        </div>
        
        <p class="sub_title">A UNIQUE APPROACH TO PHOTOGRAPHY</p>
        <img src="image/product/<? echo $pd; ?>/dp2_subimg.png" width="100%" alt="카메라 결과물 사진">
</article>



<article class="display3" id="content3">
        <h3 class="hidden">카메라로 찍을 수 있는 사진 예시</h3>
        <p class="dp3_title bold">Closer to the moment.</p>
</article>



<article class="display4" id="content4">
        <h3 class="hidden">제품 소개 마지막부</h3>
        <div class="background_circle"></div>
        <img src="image/product/<? echo $pd; ?>/dp4_productimg.png" alt="카메라 제품 이미지">
        <p class="dp4_sbj bold">It’s your choice.</p>
</article>

<? include "html/footer.html" ?>
</section>



<!--하단 구매 네비게이션-->
<div class="buy_nav">
   <a href="#" class="nav_bt"><span class="hidden">Buy Navigation Open</span></a>
   <div class="img_container">
       <img src="image/product/<? echo $pd; ?>/nav_img_2x.png" alt="카메라 제품 이미지">
   </div>
   <div class="product_info_box">
    <p class="nav_title bold">M10</p>
    <p class="nav_subj">Closer to the decisive moment</p>
    <p class="nav_price bold">10,700,000 W</p>
   </div>
    <button class="nav_buy_bt">Buy Now</button>
</div>
</div>
</body>


</html>