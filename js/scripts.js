window.onload=function(){
	
	$(".single_service").click(function(){
		$("#slider_top, #services, #sercices_holder").fadeOut(500);
		$(".sinlge_servise_viwer").delay(500);
		$(".sinlge_servise_viwer").fadeIn(500);
		return false;
	});
	$(".sinlge_servise_viwer aside ul li").click(function(){
		$(".sinlge_servise_viwer").fadeOut(500)
		$(".m_specialist_wrap").delay(500);
		$(".m_specialist_wrap").fadeIn(500);
	});

	$("#m_header-carousel").owlCarousel({
  	items: 1,
  	loop:true,
  	dotsEach: true,
  	autoplay: true,
  	autoplayTimeout: 3000,
  	autoplaySpeed: 1000,
  	autoplayHoverPause:true
  });

	var owlSpec=$("#m_specialist-carousel"),
	spec_control=$("#spec_control"),
	spec_oldValue=spec_control[0].value,
	speed=1000;

  owlSpec.owlCarousel({
  	autoplay: false,
  	autoplayTimeout: 3000,
  	autoplaySpeed: speed,
  	navSpeed:speed,
  	autoplayHoverPause:true,
  	responsive: {
  		993:{
  			items: 3
  		},
  		769: {
  			items: 2
  		},
  		481: {
  			items: 3
  		},
  		321: {
  			items: 2
  		}
  	},
  	loop:true
  });

   function letsSlide(){
   		if(+spec_oldValue+3<spec_control[0].value){
   	    	owlSpec.trigger('next.owl.carousel');
   	    	spec_oldValue=spec_control[0].value;
   	    	return;
  		} 
  		if(+spec_oldValue-3>spec_control[0].value){
  			owlSpec.trigger('prev.owl.carousel');
  			spec_oldValue=spec_control[0].value;
  			return;
  		}
	}

  spec_control.on('input', function() {
	  letsSlide();  	
  });

  spec_control.on('change', function() {
  	if(spec_control[0].value!==spec_oldValue) letsSlide();
  });

};