$(document).ready(function(){
    // Nav Toggle
    $('#toggleNav-icon').click(function(){
      $(this).toggleClass('open');
      $('.menu').slideToggle();
    });
  

    if($(".isSticky").length > 0){
      var header_height = $(".isSticky").height();
      $(window).on('scroll', function(){
          if($(window).scrollTop() > 300){
              $(".isSticky").addClass('fixedHeader animated slideInDown');
          }else{
              $(".isSticky").removeClass('fixedHeader animated slideInDown');
          }
      });
    }

  
  });