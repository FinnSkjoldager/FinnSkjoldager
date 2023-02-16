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
#tilbage{
    height:20px;
    width:80px;
    margin:2px;
    font-size:10pt;
    font-weight: bold;
     border-radius:50px;
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
button:hover{
    background-color:gray;
}
select, label{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14pt;
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
<div class="container mt-5">
    <button id="tilbage" onclick="history.back()"><- Tilbage</button>
    <label for="region-select">Vælg område:</label>
    <select name="region" id="region-select" onChange="clickFunk(this)">
        <option value="dk1" <?php if($region == "dk1"): ?> selected <?php endif; ?>>Jylland og Fyn</option>
        <option value="dk2" <?php if($region == "dk2"): ?> selected <?php endif; ?>>Sjælland</option>
    </select>
        <table class="table table-inverse table-striped">
            <thead class="thead-dark1">
                <tr>
                    <th>PriceArea</th>
                    <th>HourDK</th>
                    <th>Dkr./KWh</th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $p; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($data['PriceArea']); ?></td>
                    <td><?php echo e($data['HourDK']); ?></td>
                    <td><?php echo e(number_format(($data['SpotPriceDKK'] / 1000),2 )); ?></td>
                </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
<script>
    function clickFunk(e){
        //console.log(e.value);
        //console.log(e.options[e.selectedIndex].text);
        window.location.href= '/opslag/elspotprices/'+e.value;
    }
</script>
</body>
</html><?php /**PATH /var/www/finnskjold.dk/public_html/resources/views/components/opslag-elspotprices.blade.php ENDPATH**/ ?>