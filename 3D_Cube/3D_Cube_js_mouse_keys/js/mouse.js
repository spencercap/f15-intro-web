var xAngle = 0, yAngle = 0;
var cubeContainer = document.querySelector('.cubeContainer');

function doMouseMadness(e) {
	// get the size of the window to do % math
    var w = window.innerWidth;
    var h = window.innerHeight;
    //console.log("width: " + w + " height: " + h); //testing

    // get mouse position
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var coor = "Coordinates: (" + mouseX + "," + mouseY + ")";
    console.log(coor); // testing

    // make mouse relative to window's size 
    var mouseVW = mouseX / w * 100 ;
    var mouseVH = mouseY / h * 100 ;
    console.log("mouseVw: " + mouseVW + " mouseVh: " + mouseVH);

    // Rotating cube math and implementation 
    if ( mouseVW < 50 ) {
    	yAngle += mouseVW ;
    }

    else if ( mouseVW >= 50 ) {
    	var mappedY = map_range( mouseVW, 50, 100, 50, 0 );
    	//console.log(mappedY);
    	yAngle += mappedY ;
    }

    if ( mouseVH < 50 ) {
    	xAngle += mouseVH ;
    }

    else if ( mouseVH >= 50 ) {
        var mappedX = map_range( mouseVH, 50, 100, 50, 0 );
        //console.log(mappedX);
        xAngle += mappedX ;
    }
   	

    cubeContainer.style.transitionDuration = '0ms' ; // get realtime mouse feedback (unlike keys)
    document.querySelector('.cubeContainer').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}