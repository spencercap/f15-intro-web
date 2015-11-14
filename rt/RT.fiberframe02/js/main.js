$( document ).ready(function() {
	console.log("HTML ready");


	/* --=-- jQuery --=-- */
	$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
	});

	$("#inpt_search").on('blur', function () {
		if($(this).val().length == 0)
			$(this).parent('label').removeClass('active');
	});


	/* --=-- image color palette --=-- */
	/* doesnt work unless you use localhost or serve on web */
	var image = document.querySelector('#still-1');	
	image.onload = function(){  /* use onload to make sure picture is in DOM */

	    var colorThief = new ColorThief();
	    var color = colorThief.getColor(image); 
	    // console.log("color: " + color);
		var colors = colorThief.getPalette(image, 8); // array of RGB (3) arrays
		// console.log(palette);
		var palette_arr = [] ;

		for (i = 0; i < colors.length; i++) { 
			var lum = -~( 0.2126*colors[i][0] + 0.7152*colors[i][1] + 0.0722*colors[i][2] ) ; /* use ~ for about  */
			// console.log(lum);
			var rgb_obj = { r:colors[i][0] , g:colors[i][1] , b:colors[i][2] , l:lum };
			// console.log(rgb_obj);
			palette_arr.push(rgb_obj);
		}
	
		palette_arr.sort( function(a, b) {
		    return parseFloat(b.l) - parseFloat(a.l); /* sort by 'l' , lumines (0 - 255) */
		}).reverse();

		console.log( palette_arr ) ;		

	};
});