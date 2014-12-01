<?php 

$dir = $_GET['dir']; 
$i = 0; 
if ($handle = opendir($dir)) {
    while (($file = readdir($handle)) !== false){
        if (!in_array($file, array('.', '..')) && !is_dir($dir.$file)) 
            $i++;
    }
}
// prints out how many were in the directory


echo '<script> var dir ="' . $dir . '"</script>';
echo '<script> var total ="' . $i . '"</script>';

?>

<html>
<head>
	<meta charset="utf-8" />
	<script src="jquery.js"></script>
    <link rel="stylesheet" href="source/jquery.fancybox.css" type="text/css" media="screen" />
    <script type="text/javascript" src="source/jquery.fancybox.pack.js"></script>
	<style>
		*{
			padding : 0;
			margin : 0; 
			text-decoration: none;
		}

		#container{
			height : 100%;
			width : 100%;
		}
		.images, a{
			width : 24.5%;
			padding : 0; 
			margin : 0; 
		}
		
		@media only screen and (max-width : 420px) {
			.images, a{
				width : 32%;
				padding : 0; 
				margin : 0; 
			}
		}
	</style>
<script>
	$(document).ready(function() {
		var url = document.URL; 

		$('.fancybox').fancybox({
			padding : 0,
			openEffect  : 'fade'
		});
	
		var _w; 
	
		$('images').each(function(){
			if($(this).height() > $(this).width()){
				$(this).height = _w; 
			}else{
				_w = $(this).height();
			}
		}); 
		for(i = 0; i < total - 1; i++){
			console.log(i.toString().length); 

			var it; 
			if(i.toString().length == 1)
			it = "000"; 
			else if(i.toString().length == 2)
			it = "00"; 
			else if(i.toString().length == 3)
			it = "0"; 
			else
			it = ""; 

			var mg = dir + "/gopro_" + it + i.toString() + ".jpg"; 
			var img = "<a href='" + mg + "' class='fancybox' rel='gallery'> <img class='images' src='"  + mg + "' /></a>";

			$('#container').append(img); 
		}
		
		$('.fancybox').click(function(){
			var _img = $(this).attr('href').substr($(this).attr('href').indexOf('/') + 1, $(this).attr('href').length);

			location.hash = _img;
		});

		$('.fancybox-item fancybox-close').click(function(){
			alert('s');
		});

		if(url.search('#') !== -1){
			var goTo = url.substr(url.indexOf("#") + 1, url.length);
			var _dir = dir + '/' + goTo; 

			$('a').each(function(){
				if(_dir === $(this).attr('href'))
				$(this).click(); 	
			});
		}
		
	})
</script>
</head>
<body>
	<div id="container">

	</div>
</body>
</html>
