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