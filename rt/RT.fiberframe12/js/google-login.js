
var googleUser = {};
var startGapp = function() {
    gapi.load('auth2', function(){
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
        client_id: '1014117077182-hvkutnepq1vu7m30mot6285d3qnq9bg7.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
    });
    attachSignin($(".google")[0]);
    
    });
  };

function attachSignin(element) {
    // console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            document.getElementById('status').innerHTML = 'Thanks for logging in, ' + googleUser.getBasicProfile().getName() + ' (Google)!';
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
}

startGapp();


function signOutGoogle() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.getElementById('status').innerHTML = 'You are logged out.';
    });
  }
