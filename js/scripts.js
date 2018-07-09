$(document).ready(function() {

  //Navbar Size
  $(window).scroll(function() {
    if($(document).scrollTop() > 100)
    {
      $('.navbar').addClass("navbar-toggled")
    } else {
      $('.navbar').removeClass("navbar-toggled")
    }
  })

  //Navbar toggle
  $('.navbar-toggle').click(function(e){
    e.preventDefault()
    $('.navbar-collapse').toggleClass("navbar-show")
  })


  //Content Scroll Click
  $('#header-scroll').click(function(e){
    e.preventDefault()
    $('html, body').animate({
    scrollTop: $("#content").offset().top
    }, 1000);
  })

})
