
<?

$loc = $_GET['loc'];

?>

<!--다음은 클래스는 _, 아이디는 대문자로 구분-->
<!--https://nykim.work/30-->
<!--https://ideveloper2.tistory.com/150-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>LEICA :: EMOTIONAL CAMERA</title>
    <link rel="shortcut icon" type="image/x-icon"  href="favicon.ico">
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/jquery-migrate-1.4.1.min.js"></script>
    <script src="js/prefixfree.min.js"></script>

   <!--    폰트-->
    
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="common/css/common.css">
<link rel="stylesheet" href="common/css/header.css">
<link rel="stylesheet" href="common/css/footer.css">
<link rel="stylesheet" href="common/css/skipnav.css">
<script src="common/js/common.js"></script>

<link rel="stylesheet" href="css/find.css">
<script src="js/find.js"></script>
<style>
    section:before{
    content:"";
    display: block;
    position: fixed;
    background: url(image/find/dp1_main_banner_<? echo ($loc); ?>.jpg) center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8f0cf92e3875d8bdf75225a996e0cef"></script>
<script>
    
    
    
$(document).ready(function() {
    
    var findArr = {
    'cd' : {'title' : 'CheongDam Store', 'address' : 'Leica Store Cheongdam, 420, Dosan-daero, Gangnam-gu', 'tel' : '070-7510-7822', 'hour' : '10:30 - 20:00 ', 'parking' : 'Two hours free parking', 'placeX' : '37.523312', 'placeY' : '127.041975'},
    'gn' : {'title' : 'GangNam Store', 'address' : 'Leica Store Gangnam, 176, Sinbanpo-ro, Seocho-gu','tel' : '02-3479-1134', 'hour' : '11:00 - 21:00', 'parking' : 'Three hours free parking', 'placeX' : '37.503820', 'placeY' : '127.004606'},
    'cmr' : {'title' : 'Chungmuro Store', 'address' : 'Leica Store Chungmuro, 16, Samil-daero 4-gil, Jung-gu','tel' : '02-2274-8003', 'hour' : '09:30 - 19:00', 'parking' : 'One hours free parking', 'placeX' : '37.562106', 'placeY' : '126.990016'},
    'bs' : {'title' : 'Busan Store', 'address' : 'Leica Store Busan, 299, Haeundaehaebyeon-ro, Haeundae-gu','tel' : '1800-5600', 'hour' : '09:00 - 20:00 ', 'parking' : 'Four hours free parking', 'placeX' : '35.161413', 'placeY' : '129.163550'}
}
    
    
    var getphp = '<? echo ($loc); ?>'
    
    $('.dp1_storename').html(findArr[getphp]['title']);
    $('.map_address').html(findArr[getphp]['address']);
    $('.hour').html(findArr[getphp]['hour']);
    $('.tel').html(findArr[getphp]['tel']);
    $('.parking').html(findArr[getphp]['parking']);
    
    $('.main_bg').css({
        background:'url(image/find/dp1_main_banner_'+getphp+'.jpg)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center'
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
    
    
});
    
</script>
</head>
<body>
<? include "common/common.html" ?>
<? include "common/header.html" ?>
<!--    섹션-->
    <section>
        <h2 class="hidden">매장 찾기</h2>
<!--        아티클 1 / 기업 비디오 -->
<!--        메인 비디오-->
        <article id="content1" class="display1">
           <h3 class="hidden">매장 정보</h3>
            <p class="dp1_storename bold">CHUNGDAM STORE</p>
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
             <p class="store_info">The Leica Store Cheongdam provides access to the full line of current Leica products, from the legendary M-System to the groundbreaking SL-System, to  a select range of innovative sport optics products.</p>
             <p class="store_info">Professionals, enthusiasts and hobbyists alike are welcome to experience German engineering at its best through hands-on demos, expert advice from our knowledgeable staff, and special programming through the Leica Akademie.</p>
             <p class="store_info">Leica Store and Gallery Cheongdam serves as a venue to explore the world of Leica photography and ignite your passion for creating perfect pictures.</p>
            <div id="map"></div>
            <p class="map_address bold">Leica Store Cheongdam, 420, Dosan-daero, Gangnam-gu</p>
        </article>
    </section>
    
<!--    푸터-->
<? include "common/footer.html" ?>

</body>
</html>