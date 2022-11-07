$(function () {
  // PC gnb
  $('#header .gnb').on('mouseenter', function () {
    $('#header').addClass('on');
  });

  $('#header .gnb_wrap').on('mouseleave', function () {
    $('#header').removeClass('on');
  });

  // 모바일 gnb
  $('#header .btn_open').on('click', function () {
    $('#header .gnb_area').addClass('on');
    $('#header .dimmed').fadeIn();
  });

  $('#header .btn_close, #header .dimmed').on('click', function () {
    $('#header .gnb_area').removeClass('on');
    $('#header .dimmed').fadeOut();
  });

  // 아코디언 메뉴
  $('header .m_gnb>li>a').on('click', function (e) {
    e.preventDefault();
    if (!$(this).next().is(':visible')) {
      $(this).addClass('on').parent().siblings().find('>a').removeClass('on');
      $(this).next().slideDown().parent().siblings().find('.depth02').slideUp();
    } else {
      // 서브메뉴 열려있을때
      $(this).removeClass('on');
      $(this).next().slideUp();
    }
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider .swiper-container', {
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
      },
    },
  });

  var mainOffice = new Swiper('.main_office', {
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    breakpoints: {
      // 창크기 1200이하
      1200: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 20,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // family site
  $('.family_wrap').on('click', function () {
    $(this).find('.family').slideToggle();
  });

  //탑버튼
  $('#footer .top_wrap .btn_top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 });
  });
});
