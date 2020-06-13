


<?

$pd = $_GET['pd'];

?>
<!--다음은 클래스는 _, 아이디는 대문자로 구분-->
<!--https://nykim.work/30-->
<!--https://ideveloper2.tistory.com/150-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>LEICA :: EMOTIONAL CAMERA</title>
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

<link rel="stylesheet" href="css/product_d.css">
<script src="js/product_d.js"></script>
</head>
<body>
<? include "common/common.html" ?>
<? include "common/header.html" ?>
<!--    섹션-->
    <section>
<!--        아티클 1 / 기업 비디오 -->
<!--        메인 비디오-->
        <article id="content1" class="display1">
            <div class="slide_box">
                <ul class="slides">
                    <li>
                        <img src="image/product/<? echo $pd; ?>/slide_img1_2x.png" alt="">
                    </li>
                    <li>
                        <img src="" alt="">
                    </li>
                    <li>
                        <img src="" alt="">
                    </li>
                </ul>
            </div>
            <div class="option_box">
                <ul class="option_detail">
                   <li class="product_info_box">
                    <p class="dp1_title">LEICA Q</p>
                    <p class="dp1_subj">Closer to the decisive moment</p>
                    </li>
                    <li class="buy_box">
                    <p class="dp1_price">10,700,000 W</p>
                    <button class="buy_bt">Buy Now</button>
                    </li>
                </ul>
<!--
                <p class="dp1_title bold"><? echo $pd; ?></p>
                <p class="dp1_subj">Closer to the decisive moment</p>
                <p class="dp1_price bold">10,700,000 W</p>
-->
<!--                <button class="buy_bt">Buy Now</button>-->
            </div>
        </article>
        <article>
            
        </article>
    </section>
<!--
    <aside>
        
    </aside>
-->
    
<!--    푸터-->
<? include "common/footer.html" ?>

</body>
</html>