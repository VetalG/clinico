window.onload=function(){
	
	$(".single_service, .Bread_crumbs .root").click(function(){
		$("#slider_top, #services, #sercices_holder, .chose_hospital, .m_specialist_wrap").fadeOut(500);
		$(".sinlge_servise_viwer").delay(500);
		$(".sinlge_servise_viwer, .Bread_crumbs, .Bread_crumbs .root").fadeIn(500);
        setTimeout(function(){ $('.service_info').equalHeights()}, 500);
		return false;
	});

  $(".specific_service, .Bread_crumbs .root1").click(function(){
		$("#slider_top, .sinlge_servise_viwer, .m_specialist_wrap, .Bread_crumbs .root2, #services, #sercices_holder").fadeOut(500);
		$(".chose_hospital").delay(500);
		$(".chose_hospital, .root1").fadeIn(500);
        setTimeout(OneLineImg, 500, '.hospital img');
        return false;
	});

  $(".single_hospital, .Bread_crumbs .root2").click(function(){
        $("#slider_top, .sinlge_servise_viwer, #services, #sercices_holder, .chose_hospital, .Bread_crumbs .root3, .calendar_holder").fadeOut(500);
        $(".m_specialist_wrap").delay(500);
        $(".m_specialist_wrap, .root2").fadeIn(500);
       return false;
  });

  $(".m_single_specialist, .i_dont_care button").click(function(){
        $(".m_specialist_wrap").fadeOut(500);
        $(".calendar_holder").delay(500);
        $(".calendar_holder, .root3").fadeIn(500);
  });

   $('.moreDates').click(function(){
        printCalendar();
        $(".date").click(function(){
        $(".m_specialist_wrap, .calendar_holder").fadeOut(500);
        $(".Make_an_Appointment").delay(500);
        $(".Make_an_Appointment, .Bread_crumbs .root4").fadeIn(500);
        });
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
    $("#slider_top, .sinlge_servise_viwer, #services, #sercices_holder, .chose_hospital, .m_specialist_wrap, .Make_an_Appointment, .Bread_crumbs").fadeOut(500);
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
    nav: true,
    navText: ['<img src="img/back.png" alt="prev">','<img src="img/next.png" alt="next">'],
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

  //calendar
  var calendar=document.querySelector('.calendar'), date=document.querySelector('.date'), now = new Date();

  date.style.width=calendar.clientWidth/5+'px';
  document.querySelector('.calendar_holder').style.display='none';
  
  date.querySelector('ul li:first-child').innerHTML=now.toLocaleString("ua", {day: 'numeric', month: 'long'});
  date.querySelector('ul li:last-child').innerHTML=now.toLocaleString("ua", {weekday: 'long'});
  now.setDate(now.getDate()+1);
  if(now.getDate()>20) printCalendar();
  $('.moreDates').trigger('click');

  function printCalendar(){
    var temp;
    do{
        if (now.getDay()!=0 && now.getDay()!=6) {
            temp=date.cloneNode(true);
            temp.querySelector('ul li:first-child').innerHTML=now.toLocaleString("ua", {day: 'numeric', month: 'long'});
            temp.querySelector('ul li:last-child').innerHTML=now.toLocaleString("ua", {weekday: 'long'});
            calendar.appendChild(temp);
        }
        now.setDate(now.getDate()+1);
    }while(now.getDate()!=1);
  }

   //time
   $('.appointment ul li.available').click(function(){
      $(this).toggleClass( "chosen" );
   });

   $('div.chosen').mouseover(function(){
        $('li.chosen').css({'background-color':'Lime'});
   }); 
   $('div.chosen').mouseleave(function(){
        $('li.chosen').removeAttr('style');
   });

   var div_not_available=$('div.not_available'),
       li_not_available=$('li.not_available');
   div_not_available.mouseover(function(){
        li_not_available.css('color','red');
   });
   div_not_available.mouseleave(function(){
       if(li_not_available[0].offsetHeight>0) li_not_available.removeAttr('style');
   });
   div_not_available.click(function(){
        if(li_not_available[0].offsetHeight>0) li_not_available.slideUp(400);
        else li_not_available.slideDown(400);
   });

   $('div.available').mouseover(function(){
        $('li.available:not(.chosen)').css('background-color','lightBlue');
   }); 
   $('div.available').mouseleave(function(){
        $('li.available').removeAttr('style');
   });

};