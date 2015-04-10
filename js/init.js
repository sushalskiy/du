(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    //header gap
    if($('#navigation').length > 0){
    	$('main').css('margin-top',$('#navigation').height());
    }
    
    //on scroll
    $(window).scroll(function(){
    	if($(window).scrollTop() > 150){
    		$('#navigation-home').removeClass('transparent');
    	}else{
    		$('#navigation-home').addClass('transparent');
    	}
    });

    //on windo resize
    $(window).resize(function(){
    	headerGap();
    });
  	

  }); // end of document ready

  var headerGap = function(){
  	if($('#navigation').length > 0){
    	$('main').css('margin-top',$('#navigation').height());
    }
  }

})(jQuery); // end of jQuery name space