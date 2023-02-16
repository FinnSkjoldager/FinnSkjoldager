<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
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
        @foreach($resList as $res)
            <div class="bar1">{{$res->time}}</div><div class="bar2" style="width:{{$res->price}}0px;">{{$res->price}}</div>
        @endforeach
        </div>
</div>
</body>
</html>