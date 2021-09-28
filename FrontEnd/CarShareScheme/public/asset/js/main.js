
$(document).ready(function($){
	"use strict"

	//Sticky Nav
      $(".menu").sticky({ topSpacing: 0 });


 	//Search On Click
        $(".search_btn").on("click", function(event) {
            event.preventDefault();
            $("#search").addClass("open");
            $("#search > form > input[type='search']").focus();
        });

        $("#search, #search button.close").on("click keyup", function(event) {
            if (event.target == this || event.target.className == "close" || event.keyCode == 27) {
                $(this).removeClass("open");
            }
        });

	
	//Header Slider
		$('.header-slider').owlCarousel({
		    loop:true,
		    margin:100,
		    nav:true,
			dots: false,
			 navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
			animateIn: "fadeIn",
			animateOut: "fadeOut",
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		})





		 //Video Background
		jQuery(".redefining-video").YTPlayer({
			containment:'self',
			autoPlay:true,
			mute:true,
			startAt:0,
			stopAt:55,
			opacity:0.8,
			showYTLogo: false,
			showControls: false 
		}); 


		//video popup
		$('.save-box a').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'http://www.youtube.com/embed/%id%?autoplay=1'
					}
				},
				srcAction: 'iframe_src'
			}
		});
		
		

	
		 $(document).on('click', '.dropdown-menu', function (e) {
	      e.stopPropagation();
	    });
		
  });
// Main JS Function End

$('#accept').click(function(){
	$('#cooking-hidden-area').addClass('hide').slideUp();
	$('#cooking-setting').show();
});
$('#cooking-setting').hide();
$('#cooking-setting').click(function(){
	$('#cooking-hidden-area').removeClass('hide').slideDown();
	$('#cooking-setting').hide();
})

		 $('.award-slider-one').owlCarousel({
		    loop:true,
		     margin:10,
		     nav:false,
		 	dots:false,
		 	autoplay:true,
		     responsive:{
		         0:{
		             items:1
		        },
		         600:{
		             items:1
		         },
		         1000:{
		            items:2
		         }
		     }
		 })






