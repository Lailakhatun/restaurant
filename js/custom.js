$(function(){

'use strict';

// venobox
$('.venobox').venobox({   
    spinner:'three-bounce', 
    border:'red' ,
    closeBackground:'red',
    spinColor:'#FEA116',
}); 

// service slider
$('.service_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    dots:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
  
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

   // Testimony slider
$('.testi_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    dots:false,
  });


  // Blog slider
$('.blog_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay:true,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//   counter up
$('.counter').counterUp({
    time: 2000
});

// sticky menu
var navOff = $('.menu_top').offset().top;
$(window).on('scroll', function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > navOff) {
    $('.menu_top').addClass('menu-fix');
  }else{
    $('.menu_top').removeClass('menu-fix');
  }
});

// Back to top button
$('.back_to_top').on('click', function () {
  $('html,body').animate({
      scrollTop: 0,
  }, 1000);
});
$(window).on('scroll', function () {
  var scrolling2 = $(this).scrollTop();

  if (scrolling2 > 200) {
      $('.back_to_top').fadeIn();

  } else {
      $('.back_to_top').fadeOut()
  }

});

 // scroll smooth
 $("a").on('click', function (event) {

  if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
          scrollTop: $(hash).offset().top
      }, 800, function () {
          window.location.hash = hash;
      });
  }   
});

// pre-loader

$(window).on('load', function(){
  $('.pre_loader').delay(1000).fadeOut();

});

});

