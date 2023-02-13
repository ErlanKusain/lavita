window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})


$(document).ready(function(){
  $('.promo__slider').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src= "../img/icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src= "../img/icons/right.svg"></button>'
  });

  $('ul.price__tabs').on('click', 'li:not(.price__tab_active)', function() {
    $(this)
      .addClass('price__tab_active').siblings().removeClass('price__tab_active')
      .closest('div.container').find('div.price__content').removeClass('price__content_active').eq($(this).index()).addClass('price__content_active');
  });

  
});


