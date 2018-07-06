$(document).ready(function() {

  //Navbar Size
  $(window).scroll(function() {
    if($(document).scrollTop() > 100)
    {
      $('.navbar').addClass("shrink")
    } else {
      $('.navbar').removeClass("shrink")
    }
  })


  //Content Scroll Click
  $('.scroll-next').click(function(e){
    e.preventDefault()
    $('html, body').animate({
    scrollTop: $("#content").offset().top
    }, 1000);
  })













})
