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


	/* VARS */
	var $header = $("header")[0];
	var $searchBar = $(".container-search-page")[0];
	var $cloudButton = $(".container-clouds-button");
	var $bodySite = $(".body-site")[0];
	var $navIcon = $($(".icon-nav")[0]).children();

	var $createPage = $(".create-page")[0];
	var $playPage = $(".play-page")[0];
	// tabs 
	var $tabInfo = $(".tab-info")[0];
	var $tabProjects = $(".tab-projects")[0];
	var $tabPhotos = $(".tab-photos")[0];
	var $tabCollabs = $(".tab-collabs")[0];
	// tab pages
	var $pageInfo = $(".page-info")[0];
	var $pageProjects = $(".page-projects")[0];
	var $pagePhotos = $(".page-photos")[0];
	var $pageCollabs = $(".page-collabs")[0];

	// option pages
	var $pageLogin = $(".container-login-page")[0];
	var $pageSlate = $(".slate-page")[0];
	var $pageBolts = $(".bolts-page")[0];
	var $pageChats = $(".chats-page")[0];
	var $pageSettings = $(".settings-page")[0];


	/* --=-- options menu --=-- */
	$(".icon-nav").on('click', function() {
		$(this).toggleClass("options-opened");
		
		if ( $(this).hasClass("options-opened") ) {
			openNavMenu();
		}
		else {
			closeNavMenu();
		}
	});
	function openNavMenu() {
		$($bodySite).addClass("move-site-left");
		$($header).addClass("nav-move-gradient-blue");
		$navIcon.removeClass("fa-navicon");
		$navIcon.addClass("fa-close");
		$searchBar.style.left = "100%" ;
	}
	function closeNavMenu() {
		$($bodySite).removeClass("move-site-left");
		$($header).removeClass("nav-move-gradient-blue");
		$navIcon.removeClass("fa-close");
		$navIcon.addClass("fa-navicon");
	}



	/* --=-- search-OPEN (nav) --=-- */
	$(".icon-search").on('click', function () {
		$searchBar.style.left = "0" ;
		closeNavMenu();
	});
	/* --=-- search-CLOSE (nav) --=-- */
	$(".icon-search-close").on('click', function () {
		$searchBar.style.left = "100%" ;
	});



	/* --=-- cloud click (nav) --=-- */
	$(".icon-clouds-wide").on('click', function () {
		$cloudButton.toggleClass("no-display");
	});


	/* --=-- create page click --=-- */
	$(".button-create").on('click', function () {
		$($createPage).addClass("scale-1");
		$($playPage).removeClass("scale-1");

		$($pageBolts).addClass("no-display");
		$($pageChats).addClass("no-display");
		$($pageSettings).addClass("no-display");

		$cloudButton.addClass("no-display");
	});

	/* --=-- play page click --=-- */
	$(".button-play").on('click', function () {
		$($playPage).addClass("scale-1");
		$($createPage).removeClass("scale-1");

		$($pageBolts).addClass("no-display");
		$($pageChats).addClass("no-display");
		$($pageSettings).addClass("no-display");

		$($pageSlate).addClass("no-display");
		$cloudButton.addClass("no-display");
	});

	

	// slate page
	$(".button-slate").on('click', function () {

		closeNavMenu();
		$($playPage).removeClass("scale-1");
		$($createPage).removeClass("scale-1");
		$($pageBolts).addClass("no-display");
		$($pageChats).addClass("no-display");
		$($pageSettings).addClass("no-display");

		$($pageSlate).removeClass("no-display");
		$($pageLogin).removeClass("no-display");
	});

	// bolts page
	$(".button-bolts").on('click', function () {
		closeNavMenu();
		$($playPage).removeClass("scale-1");
		$($createPage).removeClass("scale-1");
		$($pageSlate).addClass("no-display");
		$($pageChats).addClass("no-display");
		$($pageSettings).addClass("no-display");

		$($pageBolts).removeClass("no-display");
	});

	// chats page
	$(".button-chats").on('click', function () {
		closeNavMenu();
		$($playPage).removeClass("scale-1");
		$($createPage).removeClass("scale-1");
		$($pageSlate).addClass("no-display");
		$($pageBolts).addClass("no-display");
		$($pageSettings).addClass("no-display");

		$($pageChats).removeClass("no-display");
	});

	// stream/play page
	$(".button-stream").on('click', function () {
		closeNavMenu();
		$($playPage).addClass("scale-1");
		$($createPage).removeClass("scale-1");
		$($pageSlate).addClass("no-display");
		$($pageBolts).addClass("no-display");
		$($pageChats).addClass("no-display");
		$($pageSettings).addClass("no-display");
	});

	// setting page
	$(".button-settings").on('click', function () {
		closeNavMenu();
		$($playPage).removeClass("scale-1");
		$($createPage).removeClass("scale-1");
		$($pageSlate).addClass("no-display");
		$($pageBolts).addClass("no-display");
		$($pageChats).addClass("no-display");

		$($pageSettings).removeClass("no-display");
	});


	/* --=-- tab info click --=-- */
	$(".tab-info").on('click', function () {
		$($pageProjects).addClass("no-display");
		$($pagePhotos).addClass("no-display");
		$($pageCollabs).addClass("no-display");

		$($tabProjects).removeClass("tab-selected");
		$($tabPhotos).removeClass("tab-selected");
		$($tabCollabs).removeClass("tab-selected");

		$($pageInfo).removeClass("no-display");
		$(this).addClass("tab-selected");		
	});

	/* --=-- tab projects click --=-- */
	$(".tab-projects").on('click', function () {
		$($pageInfo).addClass("no-display");
		$($pagePhotos).addClass("no-display");
		$($pageCollabs).addClass("no-display");

		$($tabInfo).removeClass("tab-selected");
		$($tabPhotos).removeClass("tab-selected");
		$($tabCollabs).removeClass("tab-selected");

		$($pageProjects).removeClass("no-display");
		$(this).addClass("tab-selected");
	});

	/* --=-- tab photos click --=-- */
	$(".tab-photos").on('click', function () {
		$($pageInfo).addClass("no-display");
		$($pageProjects).addClass("no-display");
		$($pageCollabs).addClass("no-display");

		$($tabInfo).removeClass("tab-selected");
		$($tabProjects).removeClass("tab-selected");
		$($tabCollabs).removeClass("tab-selected");

		$($pagePhotos).removeClass("no-display");
		$(this).addClass("tab-selected");
	});

	/* --=-- tab collabs click --=-- */
	$(".tab-collabs").on('click', function () {
		$($pageInfo).addClass("no-display");
		$($pageProjects).addClass("no-display");
		$($pagePhotos).addClass("no-display");

		$($tabInfo).removeClass("tab-selected");
		$($tabProjects).removeClass("tab-selected");
		$($tabPhotos).removeClass("tab-selected");

		$($pageCollabs).removeClass("no-display");
		$(this).addClass("tab-selected");
	});

	// close login popup
	$(".login-header").on('click', function () {
		$($pageLogin).addClass("no-display");
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
		// console.log(imgPalette);
		setPalette( $project[index] , imgPalette );
	});


}, false);
