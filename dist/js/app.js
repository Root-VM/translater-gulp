var $jq = jQuery.noConflict();
$jq(document).ready(function () {
  // slick img
  var sliderImgList = ["url('../img/laptop.png')", "url('../img/mockups.png')", "url('../img/laptop.png')", "url('../img/mockups.png')", "url('../img/laptop.png')"];
  $('.slider-wrap').on('init', function (event, slick) {
    $('#slider-img').css('background-image', sliderImgList[0]);
  });
  $('.slider-wrap').on('afterChange', function (event, slick, direction) {
    $('#slider-img').css('background-image', sliderImgList[direction]);
  });
  $('.slider-wrap').slick({
    dots: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
    nextArrow: '<button type="button" class="slick-next">&#8250;</button>'
  }); // circle spin animation active

  $('.top-info .images .img').addClass('spin');
  var searchParams = new URLSearchParams(window.location.search);
  var lng = searchParams.get('lang');

  if (lng) {
    $('.dropdown-wrap > a').html(lng);
  } else {
    $('.dropdown-wrap > a').html('en');
    lng = 'en';
  }

  $('.dropdownMenu >a').each(function (index) {
    var condition = $(this).text() === lng;
    condition ? $(this).addClass('active') : $(this).removeClass('active');
  });
}); // lng dropdown

function toggle() {
  $('.dropdown-wrap').toggleClass('opened');
}

function toggleMobile() {
  $('.mobileDrop').toggleClass('opened');
} //menu


function toggleMenu() {
  $('.mobile-menu').toggleClass('active');
}