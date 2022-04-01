$(document).ready(function () {
  $('nav> ul').mouseleave(function () {
    $('nav ul li ul').stop().slideUp();
  });
  $('nav >ul').mouseenter(function () {
    $('nav ul li ul').stop().slideDown();
  });
  setInterval(function () {
    $('main ul').animate(
      {
        left: '-1200px',
      },
      600,
      function () {
        $('main ul').append($('main ul li').eq(0));
        $('main ul').css('left', 0);
      }
    );
  }, 3000);
});
$('div.middle dl').click(function () {
  $('div.middle dl').addClass('no');
  $('div.middle dl').removeClass('on');
  $(this).removeClass('no');
  $(this).addClass('on');
});
