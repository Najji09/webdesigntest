$(document).ready(function () {
  $('nav ul li').mouseenter(function () {
    $(this).children('ul').stop().slideDown();
  });
  $('nav ul li').mouseleave(function () {
    $(this).children('ul').stop().slideUp();
  });
  // setInterval(function () {
  //   $('main ul').animate(
  //     {
  //       top: '-300px',
  //     },
  //     600,
  //     function () {
  //       $('main ul').append($('main ul li').eq(0));
  //       $('main ul').css('top', 0);
  //     }
  //   );
  // }, 3000);

  setInterval(() => {
    let [nowImg, nextImg] = [$('main ul li').eq(0), $('main ul li').eq(1)];
    nextImg
      .addClass('active')
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000, function () {
        $('main ul').append(nowImg);
        nowImg.removeClass('active');
      });
  }, 3000);
  $('dl').click(function () {
    $('dl').removeClass('on');
    $('dl').addClass('hidden');
    $(this).removeClass('hidden');
    $(this).addClass('on');
  });
  $('.show_popup').click(() => {
    $('div#popup_wrap').fadeIn();
  });
  $('.p_close').click(() => {
    $('div#popup_wrap').fadeOut();
  });
});
