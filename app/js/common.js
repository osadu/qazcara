$(function() {

	$(document).ready(function(){
     $(".owl-carousel").owlCarousel({
     	items: 1,
     	loop: true,
     	autoplay: true,
     	//autoplayHoverPause: true,
     });

     $( "#tabs" ).tabs();
    
     $('#video-gallery').lightGallery(); 

    });

});
