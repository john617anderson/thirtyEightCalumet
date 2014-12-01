<!DOCTYPE html>

<?php
	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;			
?>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Thirty-Eight Calumet</title>
		<script src="jquery.js"></script>
		<script src="isMobile.js"></script>
		<style>
			*{
				padding : 0; 
				margin : 0;
				list-style-type: none;
				list-style: none;
				font-family: Georgia; 
				outline : 0; 
			}
			#headerWrapper{
				position: fixed;
				z-index: 999;
				width: 100%;
			}

			#header{
				width: : 100%;
				padding : 1rem;
				background: rgba(256, 256, 256, .8); 
			}

			span a, span{
				text-decoration: none; 
				color : #333;
				font-size: 1.3rem;
				letter-spacing: -1px;
			}

			#socialContainer, #socialContainer a img{
				float : right;
				height : 1.5rem;
			}

			#socialContainer a img{
				margin-right : 1rem;
				opacity: .8; 
			}

			.intro{
				padding: 4rem 20%;
				line-height: 1.7rem; 
				font-size: .9rem; 
				color: #333; 
			}

			#container{
				height : 100%; 
				width: 100%; 
				position: relative;
			}
			.folderContainer{
				width: 100vw; 
				background: #eee;
			}

			.folderContainer:after { 
			   content: " ";
			   display: block; 
			   height: 0; 
			   clear: both;
			}

			.photoContainer{
				float: left; 
				width: 25vw;
    			height: 25vw;
				overflow: hidden;
				opacity: 1; 
			}

			.photoContainer:hover{
				opacity: 1;
			}

			.photoContainer img{
				height: 100%;
				margin-left: -80px;
			}

			.photoWhite{
				position: absolute;
				width: 25vw; 
				height: 25vw;
				opacity: 0; 
				background: rgba(255,255,255,.8);
				color : #333;
				
			}

			.photoText, .photoText a{
				margin : 1.2rem 0 0 1.2rem;
				color : #111;
				text-decoration: none; 
				font-size: 1.1em;
			}

			.photoText a{
				margin : 0; 
			}

			.photoWhite:hover{
				opacity: 1;
			}


			#videoContainer{
				position: fixed;
				width: 100%;
				z-index: -1;
				background: url(body.png);
				margin-top: -100px;
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

			.morePadding ul li{
				padding : .8rem 0;
			}

			.morePadding p{
				padding : .8rem 0;
				line-height: 2.4rem;
			}

			.footer{
				position: relative;
				width: 100vw; 
				padding : 2rem 0;
				background: #eee; 
			}

			#bottomImage{
				width: 100vw; 
				z-index: 0; 
			}

			.another{
				min-height: inherit;
			}

			@media only screen and (max-width : 1000px) {
				#headerWrapper{
					position: relative;
				}
				#header{
					padding : 2rem;
				}

				span a, span{
					text-decoration: none; 
					color : #333;
					font-size: 2.8rem;
					letter-spacing: -1px;
				}
				#container{
					padding-top: 0; 
				}

				.intro{
					font-size: 2rem;
					line-height: 3.4rem;
					padding: 4rem 10%;
					background: white; 
				}

				.morePadding p{
					line-height: 3.4rem;
				}

				#videoContainer{
					position: relative;
					margin-top: 0;
				}

				.folderContainer{
					min-height: 0vw; 
				}

				.photoContainer{
					float: none; 
					width: 100vw;
					opacity: .7;
					height: 60vw;
				}

				.photoContainer img{
					margin: -3rem 0 0 0;
					width : 100vw;
					height: 100vw;
				}

				.photoWhite{
					opacity: 1;
					position: absolute;
					width: 100vw; 
					height: 60vw;
					background: -moz-linear-gradient(top, rgba(255,255,255,0.7) 0%, rgba(203,227,246,0) 40%, rgba(125,185,232,0) 100%); /* FF3.6+ */
					background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0.7)), color-stop(40%,rgba(203,227,246,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
					background: -webkit-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(203,227,246,0) 40%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
					background: -o-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(203,227,246,0) 40%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
					background: -ms-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(203,227,246,0) 40%,rgba(125,185,232,0) 100%); /* IE10+ */
					background: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(203,227,246,0) 40%,rgba(125,185,232,0) 100%); /* W3C */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b3ffffff', endColorstr='#007db9e8',GradientType=0 ); /* IE6-9 */
				}

				.photoWhite:hover{
					opacity: 1;
					width: 100vw; 
					height: 60vw;
				}

				.photoText{
					margin : 2rem 0 0 2rem;
				}

				.photoText a{
					color : #111;
					text-decoration: none; 
					font-size: 2.1rem;
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
				
				if(!detectmob())
				$('#container').css({paddingTop : $(window).height() - 170}); 

				initLab();

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

				function detectmob() { 
					 if( navigator.userAgent.match(/Android/i)
					 || navigator.userAgent.match(/webOS/i)
					 || navigator.userAgent.match(/iPhone/i)
					 || navigator.userAgent.match(/iPad/i)
					 || navigator.userAgent.match(/iPod/i)
					 || navigator.userAgent.match(/BlackBerry/i)
					 || navigator.userAgent.match(/Windows Phone/i)
					 ){
					    return true;
					  }
					 else {
					    return false;
					  }
}
			}); 
		</script>
	</head>
	<body>
		<div id="headerWrapper">
			<div id="header">
				<span id="socialContainer"><a target="_blank" href="http://instagram.com/fox_mulder"><img class="social" src="pics/instagram.png" /></a><a target="_blank" href="https://www.linkedin.com/profile/public-profile-settings?trk=prof-edit-edit-public_profile"><img class="social" src="pics/linkedIn.png" /><a/></span>
				<span id="title">Thirty-Eight Calumet</span>
			</div>
		</div>	
		<div id="videoContainer">			
				<canvas id='canvas'></canvas>
				<?php
					if ( $detect->isMobile() ) {
 						echo '<img id="backVideo" src="vid/thirtyeightcalumetLarger.gif" />';
					}else{
						echo '<img id="gifEffect" src="tumblr_m9qrir9yjM1ruxnlh.gif" />';
						echo '<video muted="muted" loop="loop" preload="auto" id="backVideo" autoplay="autoPlay" src="vid/thirtyeightcalumetvid.mp4"></video>';
					}
				?>
			</div>
		<div id="container">
		<div class="folderContainer">
			<div class="intro">
				My name is John Anderson. I was born and raised in Cape Cod but now reside in Brooklyn, New York. I am a product designer, 
				software engineer, entrepreneur, basketball fan and vegan. My hobby is film photograpy; I am by no means a professsional. 

				Thirty Eight Calumet is an address in Boston where I became a man. 
				<br />
				<br />
				If you want to get a hold of me, you can reach me <a href="mailto:john617anderson@gmail.com">here</a>.
				<br />
			</div>
			<?php
				$dirs = array_filter(glob('*'), 'is_dir');

				foreach ($dirs as &$link){
					if($link != "lib" && $link != "source" && $link != "vid" && $link != "plesk-stat" && $link != "picture_library"  && $link != "pics" && $link != "js" && $link != "css"){
						echo '<div class="photoContainer">';
						echo '<a href="photos.php?dir=' . $link .'">';
						echo '<div class="photoWhite">';
						echo '<div class="photoText">';
						echo '<li>' . $link . '</li>';
						echo '</div></div></a>';
						echo '<img class="photos" src="' . $link . '/gopro_00' . rand(10, 20) . '.jpg" />';
						echo '</div>';
						//echo '<a href="photos.php?dir=' . $link .'"><li>' . $link . '</li></a>';
					}
					

					
				}
			?>
		</div>
			<div class="folderContainer another">
			<div class="intro morePadding">
				<p>
					<i>"You can hold yourself back from the sufferings of the world, that is something you are free to do and it accords with your nature, but perhaps this very holding back is the one suffering you could avoid."</i>
					<br />
					-Franz Kafka
				</p>
				<br />
				<b>Things I like:</b>&nbsp;&nbsp;Ilford XP2. Florence, Italy. HappyFunCorp. Soul 45s. Pot Pies. Boston Celtics. Espresso
			</div>
			<img id="bottomImage" src="bridge.png" />
		</div>

		<div class="footer">
				<center>
					- thirtyeightcalumet - 
				</center>
			</div>
	</div>
		
	</body>	
</html>

