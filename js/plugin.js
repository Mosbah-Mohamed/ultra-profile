$(document).ready(function () {

  "use strict";

  // scroll to sections

  $('.nav li a').on('click', function () {

    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000)
  })

  //up button

  $(window).scroll(function () {

    if ($(this).scrollTop() >= 1000) {
      $('.up').fadeIn(1000);
    } else {
      $('.up').fadeOut(1000);
    }

  })


  $('.up').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 700)
  })
});
