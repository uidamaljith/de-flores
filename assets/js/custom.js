$(function () {
  $("#brand").load("./shared/aside.html");
  $("#main-menu").load("./shared/menu.html");
  $("#side-gallery").load("./shared/side-gallery.html");
  $("#footer").load("./shared/footer.html");
  $("#footer-mob").load("./shared/footer.html");

  $(window).resize(function(){location.reload();});

  var bodyHgt = $("body").outerHeight();
  if ($(window).width() < 992) {
    setTimeout(function () {
      var aSideHgt = $("#aside").outerHeight();
      var sideBarHgt = $(".scroll-sidebar").outerHeight();
      var footerHgt = $("#footer-mob").outerHeight();
      var setHgt = aSideHgt + footerHgt;
      $(".main-content.home").innerHeight(bodyHgt - setHgt);
      // $(".shocase-gallery").css('max-height', bodyHgt - (aSideHgt + footerHgt));
      
    }, 500);
  } else {
    setTimeout(function () {
      var mainContentHgt = $(".main-content").height();
      var signatureHgt = $(".signature-content").outerHeight();
      $(".inner-content-de-flores").css('max-height', mainContentHgt - signatureHgt - 200);
      $(".shocase-gallery").css('max-height', bodyHgt);
      $(".inner-content-de-flores").css('max-height', bodyHgt - 500);
    }, 500);
  }

  $(document).on("click", ".handberg", function (event) {
    event.preventDefault();
    $("#main-menu").toggleClass('open');
    console.log('dsndln');
  });
  $(document).on("click", ".close-btn", function (event) {
    event.preventDefault();
    $("#main-menu").toggleClass('open');
  });
});
