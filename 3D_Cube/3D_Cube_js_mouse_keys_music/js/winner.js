// get elements 
var winningSide = document.querySelector('#winner');
var footer = document.querySelector('.footer');
var winningBanner = document.querySelector('.winningBanner');

// click handler
winningSide.onclick = function() {
    winningSide.style.background='black' ; // target specific elements 

    // stop all audio! 
    var allAudios = document.querySelectorAll('audio');
    for ( i = 0; i < allAudios.length; i++ ) {
    	allAudios[i].remove();
    }

    // alert the user!
    alert('Good Job, YOU WON! \nkeep an eye out for the next alert box')

    // change winning side back to blue
    winningSide.style.background='rgba(0, 15, 230, 0.3)' ;
    
    // display anothing winning banner / alert AND close how-to
    winningBanner.style.display='block' ;
	footer.style.display='none' ;
}