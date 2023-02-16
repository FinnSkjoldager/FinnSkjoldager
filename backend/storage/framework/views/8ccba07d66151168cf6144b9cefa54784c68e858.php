<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <title>Laravel Traits Example</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<style>
    .grid-container {
  display: grid;
  grid-template-columns: 50px auto;
}
    .bar1{
        height:50px;
        margin:5px;
        border: solid 1px red;
         position: relative;

    }
    .bar2{
        height:50px;
        margin:5px;
        border: solid 1px black;
        position: relative;
    }
</style>
<body>
<div class="container mt-5">
        <div class="grid-container">
        <?php $__currentLoopData = $resList; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $res): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="bar1"><?php echo e($res->time); ?></div><div class="bar2" style="width:<?php echo e($res->price); ?>0px;"><?php echo e($res->price); ?></div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
</div>
</body>
</html><?php /**PATH C:\xampp1\htdocs\resources\views/components/cron-job-component.blade.php ENDPATH**/ ?>