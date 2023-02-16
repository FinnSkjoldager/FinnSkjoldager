<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <title>Finn Skjoldager WebUdvikler og Ingeniør</title>
    <!--ase href="/" /-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Access-Control-Allow-Headers" content="X-Requested-With" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
</head>
<style>
/*
    width: 50%;
    border: 3px solid green;
    padding: 10px;
*/
.container{
    margin: auto;
    width: 500px;
}
table {
  border-collapse: collapse;
  border: solid 2px #f2f2f2;
  width:100%;
}
thead {
    background-color: #bbbbbb;
}
th, td {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {background-color: #f2f2f2;}
.textHeader{
    /*
    font-family: Verdana;
    */
    font-family: Verdana;
    font-weight: bold;
    font-size:12pt;
    color: blue;
    text-align: center;
    padding: 5px;
    display: inline;
}
.textPeriode{
    color:green;
    display: inline;
}
a{
color: black;
text-decoration:none;
}
button{
    height:20px;
    width:80px;
    display: block;
    margin:5px;
    font-size:10pt;
    font-weight: bold;
}
#tilbage{
    height:20px;
    width:80px;
    margin:2px;
    font-size:10pt;
    font-weight: bold;
     border-radius:50px;
}
button:hover{
    background-color:gray;
}
/* medium size viewport */
@media screen and (max-width: 959px) {
.container{
    width: 100%;
}
}
/* small size viewport */
@media screen and (max-width: 599px) {
.container{
    width: 100%;
}
}
</style>
<body>
<!--?php dd($resList); ?-->
<div class="container">
<button id="tilbage" onclick="history.back()"><- Tilbage</button>
        <div class="textHeader">Elforbrug 
            <div class="textPeriode"><?php echo e($resList[0]); ?></div> 
        på Visbjerg Hegn 226</div><br>
          Prisen pr. kWh ligger på ca. 3,57 kr.
        <table class="table table-inverse table-striped">
            <thead class="thead-dark1">
                <tr>
                    <th>Start</th>
                    <th>End</th>
                    <th>Forbrug</th>
                    <th>Ved 3,6 kr/kwh</th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = array_reverse($resList[1]); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $res): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($res->timefrom); ?></td>
                    <td><?php echo e($res->timeto); ?></td>
                    <td><?php echo e($res->price); ?> kWh</td>
                    <td><?php echo e(number_format(($res->price * 3.6),2 )); ?> Kr</td>
                </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
</body>
</html><?php /**PATH C:\xampp1\htdocs\resources\views/components/opslag-voreselforbrug-result.blade.php ENDPATH**/ ?>