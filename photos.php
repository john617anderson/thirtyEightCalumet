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
	<meta name="viewport" content="width=device-width;minimum-scale=0.5,maximum-scale=1.0; user-scalable=1;" />
	<script src="jquery.js"></script>
    <link rel="stylesheet" href="source/jquery.fancybox.css" type="text/css" media="screen" />
    <script type="text/javascript" src="source/jquery.fancybox.pack.js"></script>
	<style>
		*{
			padding : 0;
			margin : 0; 
			text-decoration: none;
			list-style: none;
			list-style-type: none;
		}

		#container{
			height : 100vw;
			width : 100vw;
			position: absolute;
		}

		.images{
			float: left; 
			width: 25vw;
			height: 25vw;
			overflow: hidden;
		}

		#headerWrapper{
			position: fixed;
			z-index: 999;
			width: 100%;
		}

		#hero{
			width : 100vw;
			height : 40vw;
			overflow: hidden;
			position: relative;
		}

		.heroPhoto{
			width : 100vw;
			position: absolute;
			z-index: -1;
		}

		.heroText{
			position: absolute;
			bottom: 1.1rem;
			left : 1rem;
			font-size: 2rem;
			letter-spacing: 1;
			color: white;
		}

		.black{
			position: absolute;
			width: inherit; 
			height: inherit;
			background: -moz-linear-gradient(top, rgba(0,0,0,0) 27%, rgba(0,0,0,.7) 100%); /* FF3.6+ */
			background: -webkit-gradient(linear, left top, left bottom, color-stop(27%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,.7))); /* Chrome,Safari4+ */
			background: -webkit-linear-gradient(top, rgba(0,0,0,0) 27%,rgba(0,0,0,7) 100%); /* Chrome10+,Safari5.1+ */
			background: -o-linear-gradient(top, rgba(0,0,0,0) 27%,rgba(0,0,0,.7) 100%); /* Opera 11.10+ */
			background: -ms-linear-gradient(top, rgba(0,0,0,0) 27%,rgba(0,0,0,.7) 100%); /* IE10+ */
			background: linear-gradient(to bottom, rgba(0,0,0,0) 27%,rgba(0,0,0,.7) 100%); /* W3C */
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#ba000000',GradientType=0 ); /* IE6-9 */
		}

		#header{
				width: : 100%;
				padding : 1.2rem;
				background: rgba(256, 256, 256, .8); 
			}

			span a, span{
				text-decoration: none; 
				color : #333;
				font-size: 20px;
				letter-spacing: -1px;
			}

		#title{
			float: right;
		}
		
		@media only screen and (max-width : 420px) {
			#wrapper{
				width : 100vw;
			}
			#headerWrapper{
				position: relative;
			}
			#hero{
				display: none;
			}

			.images, a{
				width : 100vw;
				padding : 0; 
				margin : 0; 
				height : initial;
			}

			#container{
				padding: 0;
			}

			#header{
					padding : 1rem;
				}

				span a, span{
					text-decoration: none; 
					color : #333;
					font-size: 1rem;
					letter-spacing: 0px;
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
	<div id="headerWrapper">
		<div id="header">
			<span id="title"><a href="/">back</a></span>
			<span>Thirty-Eight Calumet</span>
		</div>
	</div>	
	<div id="wrapper">
		<div id="hero">
			<div class="black"></div>
			<?php 
				//$string = preg_replace(‘/(?<=\\w)(?=[A-Z])/’,” $1″, $dir);
				//$string = trim($string);

				echo '<div class="heroText">'. $dir . '</div>';
				echo '<img class="heroPhoto" src="' . $dir . '/gopro_00' . rand(10, 20) . '.jpg" />';
			?>
		</div>
		<div id="container">

		</div>
	</div>
	
</body>
</html>
