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



	/* --=-- options menu --=-- */
	$(".container-options").on('click', function () {
		$(this).toggleClass("options-opened");
		var $icon = $(this).children();
		var $containerLogin = $(".container-login");

		if ( $(this).hasClass("options-opened") ) {
			$icon.removeClass("fa-navicon");
			$icon.addClass("fa-close");

			$containerLogin[0].style.display = "block" ;
		}
		else {
			$icon.removeClass("fa-close");
			$icon.addClass("fa-navicon");

			$containerLogin[0].style.display = "none" ;
		}

	});



	/* --=-- Facebook Login --=-- */
	/* developers.facebook.com/apps */
	$(".login.facebook").on('click', function() {
		console.log("facebook login pressed");
		FB.login(function(response) {
			// handle the response
			console.log(response);
			testAPI("connected");
		}, {scope: 'public_profile,email,user_friends'});
		
	});

	/* --=-- Logout --=-- */
	$(".logout").on('click', function() {
		console.log("logout pressed");
		
		// Facebook logout
		FB.logout(function(response) {
			testAPI("logout");
        	// Person is now logged out
   		});

   		// Google logout 
   		signOutGoogle();

	});







	
	/* --=-- color thief palette --=-- */
	/* doesnt work unless you use localhost or serve on web */
	// var image = document.querySelector('#still-1');	
	// image.onload = function(){  /* use onload to make sure picture is in DOM */

	//     var colorThief = new ColorThief();
	//     var color = colorThief.getColor(image); 
	//     // console.log("color: " + color);
	// 	var colors = colorThief.getPalette(image, 8); // array of RGB (3) arrays
	// 	// console.log(palette);
	// 	var palette_arr = [] ;

	// 	for (i = 0; i < colors.length; i++) { 
	// 		var lum = -~( 0.2126*colors[i][0] + 0.7152*colors[i][1] + 0.0722*colors[i][2] ) ; /* use ~ for about  */
	// 		// console.log(lum);
	// 		var rgb_obj = { r:colors[i][0] , g:colors[i][1] , b:colors[i][2] , l:lum };
	// 		// console.log(rgb_obj);
	// 		palette_arr.push(rgb_obj);
	// 	}
	
	// 	palette_arr.sort( function(a, b) {
	// 	    return parseFloat(b.l) - parseFloat(a.l); /* sort by 'l' , lumines (0 - 255) */
	// 	}).reverse();

	// 	console.log( palette_arr ) ;		

	// };
	

	



















	// use invert RGB ? 
	function invert(rgb) {
	    rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');
	    for (var i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
	    return rgb.join(", ");
	}
	// var w = invert(230, 0, 40);
	// console.log(w);

	
});


document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");
});

window.addEventListener('load', function () {
	console.log("Page loaded");

		// --=-- Color Thief Initialization --=--

	// FUNCTIONS
	function genPalette(project) {
		var $image = $(".video-still", project)[0];
		// console.log($image);
		var colorThief = new ColorThief();
	    var domColor = colorThief.getColor( $image ); // use this? 
	    // console.log("color: " + color);
		var colors = colorThief.getPalette( $image , 8); // array of RGB (3) arrays // GET 8 swatches (second parameter)
		colors.push(domColor);
		// console.log(colors);
		var palette_arr = [] ;

		for (i = 0; i < colors.length; i++) { 
			var lum = ( (-~( 0.2126*colors[i][0] + 0.7152*colors[i][1] + 0.0722*colors[i][2] )) / 255) * 100 ; /* use ~ for about  */
			// console.log(lum);
			var rgb_obj = { r:colors[i][0] , g:colors[i][1] , b:colors[i][2] , l:lum };
			// console.log(rgb_obj);
			palette_arr.push(rgb_obj);
		}
		// sort from most BRIGHT to least bright 
		palette_arr.sort( function(a, b) {
		    return parseFloat(b.l) - parseFloat(a.l); /* sort by 'l' , lumines (0 - 255) */
		});
		// console.log( palette_arr ) ; // check 
		return palette_arr ;
	}

	function setPalette( project, palette) { // primary, secondary, tertiary, 
		// console.log(back);
		// console.log(palette);

		// back
		var back = $(".container-buttons", project)[0];
		back.style.backgroundColor = "rgb("+ palette[0].r +", "+ palette[0].g +", "+ palette[0].b +")" ;

		// dividers 
		var borders = $(".container-buttons .box", project);
		$.each( borders, function( key, value ) {
			value.style.borderColor = "rgb("+ palette[6].r +", "+ palette[6].g +", "+ palette[6].b +")" ;
		});

		// priary 
		var primary = $(".container-buttons .primary", project);
		$.each( primary, function( key, value ) {
			value.style.color = "rgb("+ palette[5].r +", "+ palette[5].g +", "+ palette[5].b +")" ;
		});

		// secondary
		var secondary = $(".container-buttons .secondary", project);
		$.each( secondary, function( key, value ) {
			value.style.color = "rgb("+ palette[6].r +", "+ palette[6].g +", "+ palette[6].b +")" ;
		});

		// tertiary
		
	}


	// OPERATIONS
	var $project = $( ".container.projects .row .project" );
	// console.log( $project );
	var $stills = $( ".container.projects .row .project .video-still" );
	// console.log($stills);
	var $infoBacks = $( ".container.projects .row .project .container-buttons" );
	// console.log($infoBacks);

	// Color Thiefer
	$.each( $project , function( index, value ) {
		var imgPalette = genPalette( $project[index] );
		console.log(imgPalette);
		setPalette( $project[index] , imgPalette );
	});


}, false);
