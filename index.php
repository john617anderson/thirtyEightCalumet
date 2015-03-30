<!DOCTYPE html>

<?php
	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;			
?>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Thirty-Eight Calumet</title>
		<link href="css/main.css" rel="stylesheet" media="screen">
		<script src="js/jquery.js"></script>
		<script src="js/isMobile.js"></script>
		<script src="js/main.min.js"></script>
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

				Thirty-eight Calumet is an address in Boston where I became a man. 
				<br />
				<br />
				If you want to get a hold of me, you can reach me <a class="emailLink" href="mailto:john617anderson@gmail.com">here</a>.
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

