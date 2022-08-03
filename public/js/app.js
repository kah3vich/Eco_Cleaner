"use strict";

var divs = $('.accordion__block');
var length = divs.length;
var btnShow = $('.accordion__p');

function showVisible(visible) {
  var toShow = Math.min(visible, length);

  for (var i = 0; i < length; i++) {
    divs[i].style.display = i < toShow ? 'block' : 'none';
  }
}

var visible = 5;
showVisible(visible);
btnShow.on('click', function () {
  visible = Math.min(visible + 2, length);
  showVisible(visible);
});
$('.accordion__block').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});