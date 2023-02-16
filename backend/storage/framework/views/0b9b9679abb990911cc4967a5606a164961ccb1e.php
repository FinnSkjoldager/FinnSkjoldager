<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <title>Finn Skjoldager WebUdvikler og Ingeniør</title>
    <!--base href="/" /-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Access-Control-Allow-Headers" content="X-Requested-With" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
<style>
.container{
    margin: auto;
    margin-top:50px;
    width: 250px;
}
button{
    height:30px;
    width:180px;
    border-radius:50px;
    display: block;
    margin:15px;
    font-size:12pt;
    font-weight: bold;
}
#tilbage{
    height:20px;
    width:80px;
    margin:2px;
    font-size:10pt;
    font-weight: bold;
}
a{
    color: black;
    text-decoration:none;
}
button:hover{
    background-color:gray;
}
.textHeader{
    font-family: Verdana;
    display: inline;
    font-family: Verdana;
    font-weight: bold;
    font-size:15pt;
    color: blue;
    text-align: center;
    margin:20px;
}
.button{
  position: relative;
  border-radius: 4em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
/* medium size viewport */
@media screen and (max-width: 959px) {
 .container{
    width: 300px;
}
button{
    height:60px;
    width:300px;
    display: block;
    margin:20px;
    font-size:20pt;
    font-weight: bold;
}
a{
    color: black;
    text-decoration:none;
}
button:hover{
    background-color:gray;
}
.textHeader{
    font-family: Verdana;
    display: inline;
    font-family: Verdana;
    font-weight: bold;
    font-size:20pt;
    color: blue;
    text-align: center;
    margin:20px;
}
}
/* small size viewport */
@media screen and (max-width: 599px) {
.container{
    width: 300px;
}
button{
    height:60px;
    width:300px;
    display: block;
    margin:20px;
    font-size:20pt;
    font-weight: bold;
}
button:hover{
    background-color:gray;
}
.textHeader{
    font-family: Verdana;
    display: inline;
    float:center;
    font-family: Verdana;
    font-weight: bold;
    font-size:20pt;
    color: blue;
    text-align: center;
    margin:20px;
}
}
</style>
</head>    
<body>
<div class="container">
<div class="textHeader">Vores Elforbrug</div>
<!--button id="tilbage"><a href="http://localhost"><- Tilbage</a></button-->
<button id="b1"
    onclick="clickFunk('b1','voreselforbrug/lastday/7');">
    De sidste dage</button>
<button id="b2"
    onclick="clickFunk('b2','voreselforbrug/lastmonth');">
    Den sidste måned</button>
<button id="b3"
    onclick="clickFunk('b3','voreselforbrug/lastyear');">
    Det sidste år</button>
<button id="b4"
    onclick="clickFunk('b4','elspotprices/dk1');">
    Elprise i dag</button>

</div>
</div>
<script>
    function clickFunk(id, url){
      e = document.getElementById(id);
      e.style.backgroundColor="green";
      window.location.href=url;  
    }
</script> 
</body>
</html><?php /**PATH /var/www/finnskjold.dk/public_html/resources/views/components/opslag-voreselforbrug.blade.php ENDPATH**/ ?>