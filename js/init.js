(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    //header gap
    if($('#navigation').length > 0){
    	$('main').css('margin-top',$('#navigation').height());
    }

    //$('.materialboxed').materialbox();
    
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

    $('.drop-button').click(function(){
      var visible_class = 'mdi-navigation-expand-less'
      var hidden_class = 'mdi-navigation-expand-more'
      var container = $($(this).data('drop'));
      var icon = $(this).find('i');
      if(container.is(':visible')){
        container.slideUp(250);
        icon.attr('class',hidden_class);
      }else{
        container.slideDown(250);
        icon.attr('class',visible_class);
      }
    });
  	

  }); // end of document ready

  var headerGap = function(){
  	if($('#navigation').length > 0){
    	$('main').css('margin-top',$('#navigation').height());
    }
  }


})(jQuery); // end of jQuery name space