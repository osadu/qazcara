$(function() {

	$(document).ready(function(){
     $(".header-slider").owlCarousel({
     	items: 1,
     	loop: true,
     	autoplay: true,
        dots: false,
     	//autoplayHoverPause: true,
     });

     $(".descr-slider").owlCarousel({
     	items: 1,
     	loop: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
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


       var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          });
        }

        //E-mail Ajax Send
            $("form").submit(function() { //Change
                var th = $(this);
                $.ajax({
                    type: "POST",
                    url: "/mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    alert("Сообщение отправлено!");
                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;
            });


    });

});
