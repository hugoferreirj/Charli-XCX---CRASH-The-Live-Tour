$.fn.isOnScreen = function () {

  var win = $(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if ($(".tour-sessions p").isOnScreen() && $(window).width() > 990) {
    $("#tour-dates").css({
      transform: 'translate3d(0%, -' + (scroll / 60) + '%, 0) scale(' + (100 + scroll / 4.5) / 100 + ')'
    });
    $("#cover").css({
      transform: 'translate3d(0%, -' + (scroll / 100) + '%, 0) scale(' + (100 + scroll / 5) / 100 + ')'
    });
  } else if ($(".tour-sessions p").isOnScreen() && $(window).width() <= 990) {
    $("#tour-dates").css({
      transform: 'scale(' + (100 + scroll / 4.5) / 250 + ')'
    });
    $("#cover").css({
      transform: 'scale(' + (100 + scroll / 5) / 200 + ')'
    });
  }
});


$(document).ready(function () {
  for (let i = 1; i < 6; i++) {
    $(".svg-icon" + i).mouseenter(function () {
      $(".social-wrapper" + i).collapse('show');
    });

    $(".social-wrapper" + i).mouseleave(function () {
      $(".social-wrapper" + i).collapse('hide');
    });

  }
});