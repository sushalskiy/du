(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    squareFit();

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
      squareFit();
    });
  	

  }); // end of document ready

  var headerGap = function(){
  	if($('#navigation').length > 0){
    	$('main').css('margin-top',$('#navigation').height());
    }
  }

  var squareFit = function(){
    if($('.square-items .item').length == 0){
      return false;
    }
    var width = $('.square-items .item').width();
    $('.square-items .item').height(width);
    $('.square-items .item').each(function(){
      var content = $(this).find('.content');
      var margin = (width - content.outerHeight())/2;
      content.css('margin-top',margin);
    });
  }

})(jQuery); // end of jQuery name space