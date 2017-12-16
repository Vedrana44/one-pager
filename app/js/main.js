//STICKY NAVIGATION

window.onscroll = function() {stickyNavigation()};

var navigation = document.getElementById('navigation');
var sticky = navigation.offsetTop;

function stickyNavigation() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky")
    } else {
        navigation.classList.remove("sticky");
    }
}


//ANIMATED NAVIGATION
$(document).ready(function(){
    $("nav a, .hero a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
          $('html, body').animate({
          scrollTop: $(hash).offset().top - 82
        }, 600, function(){
          window.location.hash = hash - 82;
        });
      }
    });
});


//REMOVE ID FROM URL
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});


