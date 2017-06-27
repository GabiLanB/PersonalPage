
$(document).ready(function(){
	//animation LOGO
	$(function(){
		var animationName = "animated hinge";
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		var element = "a.navbar-brand.animated.hinge";
		$(element).on("mouseover",function() {
			$(element).addClass(animationName).one(animationEnd, function(){
				$(element).removeClass(animationName);
			});
		});
	});

	/*Toggle NAV mobile*/
	if ($(window).width() < 768){
			$('.navbar-collapse li a').click(function(){
	    	$( ".menu-toggle.navbar-toggle" ).trigger( "click" );
		});
	}
	
	
	// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

	/*===== On Window Scroll ======*/
	$(window).scroll(function(){
	// Sticky header
		if ($(window).scrollTop() > 50) {
			$('#top-nav').removeClass('sticky');
	    } else {
	        $('#top-nav').addClass('sticky');
	    }

	});
});