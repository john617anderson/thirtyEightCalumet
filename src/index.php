<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<script src="jquery.js"></script>

		<style>
			*{
				padding : 0; 
				margin : 0;
			}
			body{
				background: url(body.png);
			}
			#container{
				padding : 1.2em 2.3em;
				height : 100%; 
			}

			.photoContainer{
				float: left; 
				width : 25%;
				overflow: hidden;
				opacity: .5; 
			}

			.photoContainer:hover{
				opacity: 1;
			}

			.photoContainer img{
				position: absolute;
				height: 100%; 
			}

		h1{
			font-size: 130px;
			font-weight: bold; 
			font-family: helvetica, arial, sans-serif;
			color : black;
			letter-spacing: -6px;
		}

		ul{
			margin-right: 2em; 
		}

		li, a{
			text-decoration: none; 
			color : #ad4545;
			font-weight: bold; 
			font-family: helvetica, arial, sans-serif;
			font-size: 20px;
			margin: .3em .3em;
			text-transform: uppercase;
			list-style-type: none; 
			list-style: none;
			letter-spacing: -1px;
		}

			#nav{
				position: fixed;
				width : 100%;
				z-index: 200;
			}

			#videoContainer{
				position: fixed;
				width: 100%;
				z-index: -1;
				background: url(body.png);
			}

			#backVideo{
				width: 100%;
				height : 100%;
				background: url(body.png);
			}

			#canvas{
				width : 100%;
				height: 100%;
				z-index: 99;
				position: absolute;
			}

			#gifEffect{
				width: 100%; 
				opacity: .2;
				position: absolute;
				z-index: 100;
				height: 100%;
			}


			

			@media only screen and (max-width : 460px) {
				#container{
					background : url(spring2014/gopro_0065.jpg);
					background-size: 210% 100%;
					background-position: top right;
					padding : 1.1em 1.3em;  
				}

				h1{
					font-size: 70px;
					font-weight: bold; 
					font-family: helvetica, arial, sans-serif;
					color : black;
					letter-spacing: -5px;
				}
				
				
				li, a{
					color : #ad4545;
					font-weight: bold; 
					font-family: helvetica, arial, sans-serif;
					font-size: 1rem;
					margin: .3em .3em;
					text-transform: uppercase;
				}
			}
		</style>
		<script>
			$(function(){
				canvas = document.getElementById("canvas");
				var TWO_PI = Math.PI *2; 
				var clicked = false; 
				var _top = true; 
				var c = canvas.getContext("2d"); 
				initLab();
				initVideo(); 

				
				function initVideo(){
					var _arr = ['MVI_1036.mov', 'MVI_1039.mov','MVI_1312.mov', 'MVI_1313.mov', 'MVI_1316.mov'];
					var i = 0; 
					var _setTime = setInterval(function(){
						var _ran = Math.random()*6; 

						$('#backVideo').attr('src', _arr[i]);

						(i == _arr.length - 1) ? i = 0 : i++; 
					}, 10000); 
				}

				function initLab(){
					var WIDTH = canvas.width; 
						var HEIGHT = canvas.height;
					detroyLab = setInterval(function(){
    							c.clearRect(0, 0, WIDTH, HEIGHT);
							}, 300);

					goLab = setInterval(function(){
						
						var b = Math.random()*255;  
						var q = Math.random()*255;
						var x = Math.random()*255;

						var s = Math.random()*255;  
						var t = Math.random()*255;
						var r = Math.random()*255;
						var ra = Math.random()*10 + 3;
						c.fillStyle = "rgba("+ parseInt(b) +","+parseInt(q)+","+parseInt(x)+","+".2)"; 
						circle(t*2, s*2, r/ra, c); 
						c.fill(); 

					}, 50);
				}

				 function circle(ranX, ranY, ranR, c){
				        c.beginPath(); 
				        c.arc(ranX, ranY, ranR, 0, TWO_PI, false); 
				        c.closePath();  
				}
			}); 
		</script>
	</head>
	<body>
		<img id="nav" src="nav.png" />
		<div id="videoContainer">
				<img id="gifEffect" src="tumblr_m9qrir9yjM1ruxnlh.gif" />
				<canvas id='canvas'></canvas>
				<video muted="muted" loop="loop" preload="auto" id="backVideo" autoplay="autoPlay" src="vid/thirtyeightcalumet.mp4" />
        			
			</div>
		<div id="container">
		<h1>Thirty Eight Calumet</h1>
		<ul>
			<?php
				$dirs = array_filter(glob('*'), 'is_dir');

				foreach ($dirs as &$link){
					if($link != "lib" && $link != "source"  && $link != "vid"){
						echo '<div class="photoContainer">';
						echo '<img class="photos" src="' . $link . '/gopro_00' . rand(10, 25) . '.jpg" />';
						echo '</div>';
						//echo '<a href="photos.php?dir=' . $link .'"><li>' . $link . '</li></a>';
					}
					

					
				}
			?>
		</ul>
	</div>
		
	</body>	
</html>

