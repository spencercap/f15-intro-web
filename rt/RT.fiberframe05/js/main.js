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







	/* --=-- Color Thief Palette --=-- */
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

	

	// var qwe = document.querySelector(".row");
	// console.log(qwe);

	var $projects = $( ".container.projects .row" ).find( ".project" ).css( "background-color", "red" ); // space in $selector means, CHILD
	console.log($projects);
	console.log($projects.length);

	for (i = 0; i < $projects.length; i++) {
		console.log( $projects[i] );

	}
	// console.log($projects[0]);
	// console.log($projects[1]);
	// console.log($projects[2]);
	// console.log($projects[3]);






});