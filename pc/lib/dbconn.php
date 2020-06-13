<?
    $connect=mysql_connect( "leicacam.cafe24.com", "leicacam", "tpdus011!") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("leicacam",$connect);
?>
