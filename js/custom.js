
(function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-0;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
  
  })(window.jQuery);


  function openLoginForm() {
    window.open("formulario_de_login.html", "loginForm", "width=400,height=500");
}

  function transfer_item(element) {
    if(element.innerText == 1){
      console.log("It is 1");
      $(document.getElementsByClassName('page-item active')[0]).removeClass('active');
      $(element).toggleClass('active');
      console.log(element);
    }
    else if(element.innerText == 2){
      console.log("It is 2");
      $(document.getElementsByClassName('page-item active')[0]).removeClass('active');
      $(element).toggleClass('active');
      console.log(element);
    }
    else if(element.innerText == 3){
      console.log("It is 3");
      $(document.getElementsByClassName('page-item active')[0]).removeClass('active');
      $(element).toggleClass('active');
      console.log(element);
    }
  }