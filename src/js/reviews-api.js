import Swiper from 'swiper';
import 'swiper/css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const list = document.querySelector('.swiper-wrapper');

fetchReviews();

async function fetchReviews() {
  try {
    const { data } = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!data.length) throw new Error('Empty list');

    const markup = data
      .map(
        ({ avatar_url, author, review }) => `
        <li class="swiper-slide">
          <p class="body-text-light">${review}</p>
          <div class="reviewer">
            <img
              class="reviewer-avatar"
              src="${avatar_url}"
              alt="${author}"
            />
            <p class="reviewer-name">${author}</p>
          </div>
        </li>
      `
      )
      .join('');

    list.innerHTML = markup;
    const swiper = initSwiper();

    prevButton.addEventListener('click', () => swiper.slidePrev());
    nextButton.addEventListener('click', () => swiper.slideNext());
  } catch (error) {
    list.innerHTML = '<p class="body-text-light">Not found</p>';
    iziToast.error({
      title: 'Error',
      message: 'Failed to load reviews',
      position: 'topRight',
    });
  }
}

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    simulateTouch: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: false,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1280: {
        slidesPerView: 2,
      },
    },
  });
  swiper.on('init', () => updateButtons(swiper));
  swiper.on('slideChange', () => updateButtons(swiper));

  swiper.init();

  return swiper;
}

function updateButtons(swiper) {
  const isBeginning = swiper.isBeginning;
  const isEnd = swiper.isEnd;

  prevButton.classList.toggle('disabled', isBeginning);
  nextButton.classList.toggle('disabled', isEnd);

  prevButton.setAttribute('aria-disabled', isBeginning);
  nextButton.setAttribute('aria-disabled', isEnd);
}
