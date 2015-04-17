(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    //header gap
    if($('#navigation').length > 0){
    	headerGap();
    }

    //$('.materialboxed').materialbox();

    $('.toogle-btn').click(function(){
      var box = $(this).next();
      if(box.hasClass('active')){
        box.removeClass('active');
      }else{
        box.addClass('active');
      }
    })
    
    //on scroll
    window.onscroll = function(){
      fixHeader();
    };

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
    	$('main').css('margin-top',$('#navigation').outerHeight());
    }
  };

  var header_fixed = 0;
  var header_fixed_pre = 0;
  var fixHeader = function(){
      header_fixed = window.pageYOffset > 400 ? 1 : 0;
      if(header_fixed_pre !== header_fixed){
          //параметр изменился
          if(header_fixed){
            $('#navigation-home').removeClass('transparent');
          }else{
            $('#navigation-home').addClass('transparent');
          }
      }
      header_fixed_pre = header_fixed;
  };


})(jQuery); // end of jQuery name space