<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset("css/app.css")}}">
        <!-- Fonts -->
       <link href="https://fonts.googleapis.com/css?family=Hammersmith+One" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400|Oxygen|Roboto:100,300,400,500" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600|Muli:300,400,600,700" rel="stylesheet">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script src="http://malsup.github.com/jquery.cycle2.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=css&amp;skin=desert"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="http://cdn.tinymce.com/4/tinymce.min.js"></script>
        <!-- <script src="{{asset("js/tinymce.js")}}"></script> -->
        <title></title>
    </head>
    <body onload="PR.prettyPrint()">
      <div id="app"></div>
      <script src="{{asset("js/app.js")}}"></script>
      <!-- <script src="{{asset("js/app.js")}}"></script> -->
    </body>
</html>
