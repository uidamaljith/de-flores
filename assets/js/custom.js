$(function () {
  $("#brand").load("./shared/aside.html");
  $("#footer").load("./shared/footer.html");
  $("#footer-mob").load("./shared/footer.html");

  if ($(window).width() < 992) {
    setTimeout(function () {
      var bodyHgt = $("body").outerHeight();
      var aSideHgt = $("#aside").outerHeight();
      var sideBarHgt = $(".scroll-sidebar").outerHeight();
      var footerHgt = $("#footer-mob").outerHeight();
      var setHgt =  aSideHgt + sideBarHgt + footerHgt;
      console.log(footerHgt);
      $(".main-content.home").height(bodyHgt - setHgt);
    }, 500);
  }
  $(document).on('click','.handberg',function(event){
    event.preventDefault()
    $('#menu').fadeIn();
  })
  $(document).on('click','.close-btn',function(event){
    event.preventDefault()
    $('#menu').fadeOut();
  })
});
