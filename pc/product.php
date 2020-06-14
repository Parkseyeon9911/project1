


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
    <link rel="shortcut icon" type="image/x-icon"  href="favicon.ico">
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/jquery-migrate-1.4.1.min.js"></script>
    <script src="js/prefixfree.min.js"></script>

   <!--    폰트-->
    
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="common/css/common.css">
<link rel="stylesheet" href="common/css/header.css">
<link rel="stylesheet" href="common/css/footer.css">
<link rel="stylesheet" href="common/css/skipnav.css">
<script src="common/js/common.js"></script>

<link rel="stylesheet" href="css/product.css">
<script src="js/product.js"></script>

<script>
    
    
    
$(document).ready(function(){
    
    
    
    
    
    
    var productArr = {
    'm10' : {'title':'LEICA M10','price':'10,700,000 W','subj':'Closer to the decisive moment', 'tt' : 'Why LEICA M-SYSTEM?', 'dd' : 'When you take a photograph with a Leica M-System camera, <br>you experience a different kind of photography.','url':'383713868', 'newtt' : 'DISCOVER MORE IN BLACK & WHITE', 'newdd' : 'The Leica M10 Monochrom with 40MP'},
        
    'sl2' : {'title':'LEICA SL2','price':'8,450,000 W','subj':'Fast, Intuitive mirrorless camera', 'tt' : 'Why LEICA SL-SYSTEM?', 'dd' : 'The quality of the SL2 is unparalleled. <br>I’ve always depended on the best of equipment, and in my view, it doesn’t get any better than this.','url':'368004670','newtt' : 'Photography is about choices.', 'newdd' : 'The quality of the SL2 is unparalleled.'},
        
    's3' : {'title':'LEICA S3','price':'13,500,000 W','subj':'A Class of Its Own', 'tt' : 'Why LEICA S-SYSTEM?', 'dd' : 'The Leica S-System was conceived from the ground up as <br>a purely digital camera system and was built with the precise needs of professional photographers in mind.','url':'395411918' ,'newtt' : 'Leica ProFormat Medium format – redefined', 'newdd' : 'Fast mobility Built to last'},
        
    'q' : {'title':'LEICA Q','price':'7,230,000 W','subj':'Immaculate Perfection', 'tt' : 'Why LEICA Q?', 'dd' : 'The Leica Q has well-established itself as a full-frame compact camera <br>for all occasions and types of photography.','url':'321248116','newtt' : 'Accept nothing but perfection', 'newdd' : 'An artful statement of understatement'},
        
    'vlux' : {'title':'V-LUX5','price':'1,740,000 W','subj':'THE SUPERZOOM FOR EXPLORERS', 'tt' : 'Why LEICA V-LUX?', 'dd' : 'The extensive range of its zoom lens covers nearly <br>all distances and subject matter – simplifying your travels <br> by avoiding the need for changing lenses and packing additional equipment.','url':'301598044','newtt' : 'THE SUPERZOOM CAMERA FOR EXPLORERS', 'newdd' : 'high-end compact camera'}
}
    
    var getphp = '<? echo ($pd); ?>'
    
    $('.buy_title, .nav_title').html(productArr[getphp]['title']);
    $('.buy_subj, .nav_subj, .dp3_title').html(productArr[getphp]['subj']);
    $('.buy_price, .nav_price').html(productArr[getphp]['price']);
    $('.display3 iframe').attr('src','https://player.vimeo.com/video/'+productArr[getphp]['url']+'?title=0&byline=0&portrait=0')
//       제품상세
//    $('.nav_title').html(productArr[getphp]['title']);
//    $('.nav_subj').html(productArr[getphp]['subj']);
//    $('.nav_price').html(productArr[getphp]['price']);
    
//    $('.dp3_title').html(productArr[getphp]['subj']);
    $('.info_title').html(productArr[getphp]['tt']);
    $('.info_subj').html(productArr[getphp]['dd']);
    
    $('.dp1_title').html(productArr[getphp]['newtt']);
    $('.dp1_subj').html(productArr[getphp]['newdd']);
        
    $('.display3').css({
        background:'url(image/product/'+getphp+'/dp3_mainimg.jpg)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center'
    })
    
    
    $('.display1').css({
        background:'url(image/product/'+getphp+'/dp2_mainimg.jpg)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center'
        
    })
    
    
    
    
    
     
    var curr = 0
    var moving = true
    
    var pg = $('.buy_nav .slides').children("li")
    
    var pg_nm = parseInt(pg.length)-1
    
    
    for(var i = 0; i<= pg_nm; i++){
        var indicate_circle = $('<div>')
        indicate_circle.addClass('indicate_circle')
        
        var main_img = $('.slides li').eq(i).find('img').attr('src')
//        console.log(main_img)
        var indicate_img = $('<img>')
        indicate_img.attr('src',main_img)
        indicate_circle.append(indicate_img)
        $('.indicate').append(indicate_circle)
    }
    $('.indicate > .indicate_circle:nth-of-type(1)').addClass('now')
    
    
    
     
     $('.indicate > .indicate_circle').on("click",function(){
        
        var cir_num = $('.indicate > .indicate_circle').index($(this))
            
        slideMove(cir_num)
    })
    
    
    
     function slideMove(delta){
        
        moving = false
        
        curr = delta
        
        if(curr < 0){
            curr = 0
        }
        
        if(curr >= pg_nm){
            curr = pg_nm
        }
        
        var tt = -curr*100+"%"
        
        
        
        $('.slide_box .slides').stop().animate({
            left: tt
        },
        500,function(){
            moving = true
        }
        )
         
         
        $('.indicate > .indicate_circle').eq(curr).addClass('now')
        $('.indicate > .indicate_circle').not($(".indicate > .indicate_circle").eq(curr)).removeClass('now')
         
    }
})
    
    
</script>
</head>
<body>
<? include "common/common.html" ?>
<? include "common/header.html" ?>
<!--    섹션-->
        <div class="buy_nav">
           <div class="slide_box">
                <ul class="slides">
                    <li>
                        <img src="image/product/<? echo $pd; ?>/slide_img1_2x.png" alt="">
                    </li>
                    <li>
                        <img src="image/product/<? echo $pd; ?>/slide_img2_2x.png" alt=""></li>
                    <li>
                        <img src="image/product/<? echo $pd; ?>/slide_img3_2x.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="indicate">

            </div>
            <div class="product_info_box">
                <p class="buy_title bold">LEICA M10</p>
                <p class="buy_subj">Closer to the decisive moment</p>
                <p class="buy_price bold">10,700,000 W</p>
            </div>
            <div class="blocking"></div>
            <button class="buy_bt">Buy Now</button>
        </div>
    <section>
    
           <h2 class="hidden">라이카 제품</h2>
        <article id="content1" class="display1">
        <h3 class="hidden">라이카 카메라로 찍은 사진</h3>
           <div class="dp1_info_box">
            <p class="dp1_title bold">DISCOVER MORE IN BLACK & WHITE</p>
            <p class="dp1_subj">The Leica M10 Monochrom with 40MP</p>
            </div>
        </article>
        <article id="content2" class="display2">
        <h3 class="hidden">제품 소개</h3>
            <div class="info_box">
               
               <div class="dp1_info_box">
                <p class="info_title bold">Why LEICA M-SYSTEM?</p>
                <p class="info_subj">When you take a photograph with a Leica M-System camera, 
                <br>you experience a different kind of photography.</p>
            </div>
            </div>
        </article>
        <article id="content3" class="display3">
        <h3 class="hidden">제품 비디오</h3>
          <iframe src="https://player.vimeo.com/video/368004670?title=0&byline=0&portrait=0" width="800" height="450" allow="autoplay; fullscreen" style="position:relative; float: right; display: block; margin: 20px 0px" allowfullscreen></iframe>
            <p class="sub_title bold">A UNIQUE APPROACH TO PHOTOGRAPHY</p>
           <div class="size_wrap">
                <img src="image/product/<? echo $pd; ?>/dp2_subimg.png" alt="" class="dp2_mainimg">
           </div>
        </article>
    </section>

</body>
</html>