$(function () {
  $("#brand").load("./shared/aside.html");
  $("#footer").load("./shared/footer.html");
  $("#footer-mob").load("./shared/footer.html");
  var bodyHgt = $("body").outerHeight();
  var signatureHgt = $(".signature-content").outerHeight();
  
 
  if ($(window).width() < 992) {
    setTimeout(function () {
      var aSideHgt = $("#aside").outerHeight();
  var sideBarHgt = $(".scroll-sidebar").outerHeight();
  var footerHgt = $("#footer-mob").outerHeight();
  var setHgt =  aSideHgt + sideBarHgt + footerHgt;
  console.log(footerHgt);
      $(".main-content.home").height(bodyHgt - setHgt);
    }, 500);
  }
  else{
    $(".inner-content-de-flores").height(bodyHgt - signatureHgt);
  }
 
});
