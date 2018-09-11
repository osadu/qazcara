$(function() {

	$(document).ready(function(){
     $(".header-slider").owlCarousel({
     	items: 1,
     	loop: true,
     	autoplay: true,
     	//autoplayHoverPause: true,
     });

     $(".descr-slider").owlCarousel({
     	items: 1,
     	loop: true,
     	//autoplayHoverPause: true,
     });

     $( "#tabs" ).tabs();
    
     $('#video-gallery').lightGallery(); 

     $('.menu-btn').on('click', function(e) {
		  e.preventDefault();
		  $(this).toggleClass('menu-btn_active');
		  $('.menu-qazcara').toggleClass('open-menu');
		  $(this).toggleClass('open-btn-menu');
	  });

      $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        
        $('.menu-qazcara>ul').on('click', 'li', function() {
    		$('.menu-qazcara>ul li.active').removeClass('active');
    		$(this).addClass('active');
        });

        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
       });

       //$(".product-item").equalHeights();
       $(".product-header").equalHeights();


       $('.product-item').magnificPopup({
		  type:'inline',
		  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});
    });

});
