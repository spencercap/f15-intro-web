// initialize var and elements
var xAngle = 0, yAngle = 0;
var cubeContainer = document.querySelector('.cubeContainer');
var winningBanner = document.querySelector('.winningBanner');

// button handler
document.addEventListener('keydown', function(e) {
	winningBanner.style.display='none' ;
	switch(e.keyCode) {

	 	case 37: // left
	    	yAngle -= 90;
	    	break;

	    case 38: // up
	      	xAngle += 90;
	      	break;

	    case 39: // right
	      	yAngle += 90;
	      	break;

	    case 40: // down
	      	xAngle -= 90;
	      	break;
  	};

  	cubeContainer.style.transitionDuration = '500ms' ;
	document.querySelector('.cubeContainer').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);