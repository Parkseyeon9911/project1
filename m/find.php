


<?

$loc = $_GET['loc'];

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
<link rel="stylesheet" href="css/find.css">

<!--font-->

<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">






<!--script-->
<script src="js/jquery-1.12.4.min.js"></script>
<script src="js/jquery-migrate-1.4.1.min.js"></script>
<script src="js/prefixfree.min.js"></script>
<script src="js/header.js"></script>
<script src="js/find.js"></script>

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


   <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8f0cf92e3875d8bdf75225a996e0cef"></script>
<script>
    
    
    
    
$(document).ready(function() {
    
    var findArr = {
    'cd' : {'title' : 'Leica Store CheongDam', 'address' : '420, Dosan-daero, Gangnam-gu', 'tel' : '070-7510-7822', 'hour' : '10:30 ~ 20:00 ', 'parking' : 'Two hours free parking', 'placeX' : '37.523312', 'placeY' : '127.041975'},
    'gn' : {'title' : 'Leica Store GangNam', 'address' : '176, Sinbanpo-ro, Seocho-gu','tel' : '02-3479-1134', 'hour' : '11:00 ~ 21:00', 'parking' : 'Three hours free parking', 'placeX' : '37.503820', 'placeY' : '127.004606'},
    'cmr' : {'title' : 'Leica Store Chungmuro', 'address' : '16, Samil-daero 4-gil, Jung-gu','tel' : '02-2274-8003', 'hour' : '09:30 - 19:00', 'parking' : 'One hours free parking', 'placeX' : '37.562106', 'placeY' : '126.990016'},
    'bs' : {'title' : 'Leica Store Busan', 'address' : '299, Haeundaehaebyeon-ro, Haeundae-gu','tel' : '1800-5600', 'hour' : '09:00 - 20:00 ', 'parking' : 'Four hours free parking', 'placeX' : '35.161413', 'placeY' : '129.163550'}
}
    
    
    var getphp = '<? echo ($loc); ?>'
    
    $('.dp1_title').html(findArr[getphp]['title']);
    $('.dp1_subj, .map_address').html(findArr[getphp]['address']);
    $('.hour').html(findArr[getphp]['hour']);
    $('.tel').html(findArr[getphp]['tel']);
    $('.parking').html(findArr[getphp]['parking']);
    
    $('.main_bg').css({
        background:'url(image/find/dp1_main_banner_'+getphp+'.jpg)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center'
    })
    
    
    
        $('#wrap').on('scroll',function(){
        var now_scroll = $('#wrap').scrollTop();
        if(now_scroll > $('.dp1_subj').offset().top){
            var black_acc = now_scroll/50/10
            console.log(black_acc)
            $('#wrap').css({
                backgroundColor:'rgba(0,0,0,'+black_acc+')'
            })
            }
        else{
            $('#wrap').css({
                backgroundColor:'rgba(0,0,0,0)'
            })
            
        }
        })
    
    

    
    
    
    
    
    var screenSize = $(window).width();
    var screenHeight = $(window).height();
    $('#map').css({
            width:screenSize,
            height:screenSize
        })
    
    $(window).resize(function(){
        screenSize = $(window).width(); 
        screenHeight = $(window).height();
        
        $('#map').css({
            width:screenSize,
            height:screenSize
        })
    })
    

$('.focus').on('click',function(){
    event.stopImmediatePropagation();
    console.log('ccc')
    console.log('ccc')
       $('.focus_circle').css({
        animationPlayState:'running'
    })
    
    
    setTimeout(function(){
    $('.focus, .focus_txt, .focus_circle, .dp3_title').css({
        display:'none'
    })
    },500)
})

    
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(findArr[getphp]['placeX'], findArr[getphp]['placeY']), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = 'image/icon/gps_2x.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(70, 70), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(35, 70)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(findArr[getphp]['placeX'], findArr[getphp]['placeY']); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);   
    
    
})
</script>
</head>

<body>
<div id="wrap">
<? include "html/common.html" ?>
<? include "html/header.html" ?>

<section>
 <h2 class="hidden">Section Area</h2>
    <article class="display1" id="content1">
    <div class="dp1_bg">
       <div class="clip_bg">
            <div class="cover_bg main_bg"></div>
       </div>
        <p class="bold">Learn Fantastic Photography Skills</p>
    </div>
    <p class="dp1_title bold">Leica Store Cheongdam</p>
    <p class="dp1_subj">420, Dosan-daero, Gangnam-gu</p>
    <p class="about_us">
        
    </p>
    <ul class="info_ui_box">
        <li>
           <p>TEL</p>
            <p class="tel">070-7510-7822</p>
        </li>
        <li>
           <p>OPENING HOURS</p>
            <p class="hour">10:30 - 20:00</p>
        </li>
        <li>
           <p>PARKING</p>
            <p class="parking">Two hours free parking</p>
        </li>
    </ul>
</article>
<article class="display2" id="content2">
<div class="aboutus_box">
<p class="dp2_title bold">About Us</p>
<p class="dp2_subj">The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to  a select range of innovative sport optics products.</p>  
<p class="dp2_subj">Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie. </p>
<p class="dp2_subj">
Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.</p>
</div>
</article>

<article class="display3" id="content3">
    <div class="focus"></div>
<div class="focus_circle"></div>
<p class="dp3_title bold">LOCATION</p>
<p class="focus_txt bold">Touch Map</p>
            <div id="map"></div>
            <p class="map_address bold">420, Dosan-daero, Gangnam-gu</p>
</article>
<? include "html/footer.html" ?>
</section>

</div>
    
</body>            
</html>