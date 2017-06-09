window.onload=function(){
	
	$(".single_service, .Bread_crumbs .root").click(function(){
		$("#slider_top, #services, #sercices_holder, .chose_hospital, .m_specialist_wrap, .Bread_crumbs .root + span, .Bread_crumbs .root + span + span,  .Bread_crumbs .root + span + span +span, .Bread_crumbs .root + span + span + span + span").fadeOut(500);
		$(".sinlge_servise_viwer").delay(500);
		$(".sinlge_servise_viwer, .Bread_crumbs, .Bread_crumbs .root").fadeIn(500);
		return false;
	});

  $(".sinlge_servise_viwer aside ul li, .Bread_crumbs .root1").click(function(){
		$("#slider_top, .sinlge_servise_viwer, .m_specialist_wrap, .Bread_crumbs .root1 + span, .Bread_crumbs .root2, #services, #sercices_holder, .Bread_crumbs .root + span, .Bread_crumbs .root + span + span").fadeOut(500);
		$(".chose_hospital").delay(500);
		$(".chose_hospital, .Bread_crumbs .root + span, .Bread_crumbs .root + span + span").fadeIn(500);
        setTimeout(OneLineImg, 500, '.hospital img');
        return false;
	});

  $(".single_hospital").click(function(){
        $("#slider_top, .sinlge_servise_viwer, #services, #sercices_holder, .chose_hospital, .Bread_crumbs .root + span, .Bread_crumbs .root + span + span").fadeOut(500);
        $(".m_specialist_wrap").delay(500);
        $(".m_specialist_wrap, .Bread_crumbs .root + span, .Bread_crumbs .root + span + span, .Bread_crumbs .root + span + span +span, .Bread_crumbs .root + span + span + span + span").fadeIn(500);
       return false;
  });

  function OneLineImg(stringSelectorImgColection){
    var colection=$(stringSelectorImgColection), MaxH=0;
    colection.css('height', 'auto');
    for (var i = 0; i < colection.length; i++) {
      if (MaxH<colection[i].clientHeight) {
          MaxH=colection[i].clientHeight;
      }   
    }
    colection.css('height', MaxH);
  }

  $('#cont').click(function(){
    $("#slider_top, .sinlge_servise_viwer, #services, #sercices_holder, .chose_hospital, .m_specialist_wrap, .Bread_crumbs").fadeOut(500);
    $('.contacts_page').delay(500);
    $('.contacts_page').fadeIn(500);
    return false;
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
  		769:{
  			items: 3
  		},
      1:{
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