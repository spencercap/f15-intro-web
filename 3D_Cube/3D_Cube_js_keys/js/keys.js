var xAngle = 0, yAngle = 0;
var cubeContainer = document.querySelector('.cubeContainer');
document.addEventListener('keydown', function(e) {
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