import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      enabled: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      swiper.slidePrev();
    });

    nextButton.addEventListener('click', () => {
      swiper.slideNext();
    });
  }
});
