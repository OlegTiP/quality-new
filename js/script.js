// burger
$(document).ready(function() {
   $('.js-burger').click(function() {
      $(this).toggleClass('active');
      $('.burger__container').toggleClass('active');
   });
 });
// swiper cards
const swiperCards = new Swiper('.js-slider', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   autoHeight: true,
   spaceBetween: 20,
   // autoplay: {
   //    delay: 5000, // Задержка между переключениями в миллисекундах (5 секунд)
   //  },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      390: {
         slidesPerView: 1
      },
      // 600: {
      //    slidesPerView: 2
      // },
      768: {
         slidesPerView: 1
      },
      1024: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      1440: {
         slidesPerView: 1,
         spaceBetween: 20
      },
   },

});

