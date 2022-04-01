console.log('111');
$(document).ready(function () {
  setInterval(function () {
    $('.slide1 ul').animate(
      {
        left: '-1200px',
      },
      600,
      function () {
        $('.slide1 ul').append($('.slide1 ul li').eq(0));
        $('.slide1 ul').css('left', 0);
      }
    );
  }, 3000);

  setInterval(function () {
    $('.slide2 ul').animate(
      {
        top: '-300px',
      },
      600,
      function () {
        $('.slide2 ul').append($('.slide2 ul li').eq(0));
        $('.slide2 ul').css('top', 0);
      }
    );
  }, 3000);
  var nowImg, nextImg;

  setInterval(function () {
    nowImg = $('.slide3 ul li').eq(0);
    nextImg = $('.slide3 ul li').eq(1);
    nextImg
      .addClass('active')
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000, function () {
        nowImg.removeClass('active');
        $('.slide3 ul').append(nowImg);
      });
  }, 3000);
});
