const BASE_URL = 'https://portfolio-js.b.goit.study/api';

async function fetchReviews() {
  try {
    const { data } = await axios.get(`${BASE_URL}/reviews`);

    if (!data.length) throw new Error('No reviews');

    renderReviews(data); // наприклад, така функція
    initSwiper();
  } catch (error) {
    showError();
  }
}