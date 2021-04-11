/*jQuery(function() {
    var winW = winH = imgW = imgH = imgT = imgL = 0;
  
    resizeFn();
  
    function resizeFn() {
  
      winW = $(window).innerWidth();
      winH = $(window).innerHeight();
  
      imgH = $(".imgWrap > img").innerHeight();
      imgW = $(".imgWrap > img").innerWidth();
      imgT = (winH - imgH) / 2
      imgL = (winW - imgW) / 2
  
      $(".imgWrap > img").css({
        top: imgT
      });
      $(".imgWrap > img").css({
        left: imgL
      });
    }
  
    $(window).resize(function() {
      resizeFn();
    });
  });
*/