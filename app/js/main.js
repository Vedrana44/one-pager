//STICKY NAVIGATION

$(document).ready(function() {
    
    var stickyNavTop = $('#navigation').offset().top;
        
    var stickyNavigation = function(){
        var scrollTop = $(window).scrollTop();    
        if (scrollTop > stickyNavTop) { 
            $('#navigation').addClass('sticky');
        } else {
            $('#navigation').removeClass('sticky'); 
        }
    };

    stickyNavigation();

    $(window).scroll(function() {
        stickyNavigation();
    });

});


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


//REMOVING ID FROM URL

$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});


//POSTING FORM DATA WITH AJAX

function submit() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name && email && message){
      $.ajax
      ({
        type: 'post',
        url: 'post.php',
        data: 
        {
           name: name,
           email: email,
           message: message
        },
        success: function (response) {
          document.getElementById("feedback").innerHTML = response;
          document.getElementById("form").reset();
        },
        error: function () {
            document.getElementById("feedback").innerHTML = "Sorry, error has occurred.";
        }
      });
    }
    else {
        document.getElementById("feedback").innerHTML = "Please fill all data!";
    }

}
