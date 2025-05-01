const projects = [
  {
    image: 'img/projects/wallet-webservice.jpg',
    img2x: 'img/projects/wallet-webservice@2x.jpg',
    title: 'Wallet webservice',
  },
  {
    image: 'img/projects/green-harvest.jpg',
    img2x: 'img/projects/green-harvest@2x.jpg',
    title: 'Green harvest webservice',
  },
  {
    image: 'img/projects/english-excellence.jpg',
    img2x: 'img/projects/english-excellence@2x.jpg',
    title: 'English Exellence website',
  },
  {
    image: 'img/projects/power-pulse-webservice.jpg',
    img2x: 'img/projects/power-pulse-webservice@2x.jpg',
    title: 'power pulse webservice',
  },

  {
    image: 'img/projects/mimino-website.jpg',
    img2x: 'img/projects/mimino-website@2x.jpg',
    title: 'mimino website',
  },
  {
    image: 'img/projects/vyshyvanka-vibes.jpg',
    img2x: 'img/projects/vyshyvanka-vibes@2x.jpg',
    title: 'vyshyvanka vibes Landing Page',
  },
  {
    image: 'img/projects/chego-jewelry.jpg',
    img2x: 'img/projects/chego-jewelry@2x.jpg',
    title: 'chego jewelry website',
  },
  {
    image: 'img/projects/energy-flow.jpg',
    img2x: 'img/projects/energy-flow@2x.jpg',
    title: 'energy flow webservice',
  },
  {
    image: 'img/projects/fruitbox-online-store.jpg',
    img2x: 'img/projects/fruitbox-online-store@2x.jpg',
    title: 'fruitbox online store',
  },
  {
    image: 'img/projects/starlight-studio.jpg',
    img2x: 'img/projects/starlight-studio@2x.jpg',
    title: 'starlight studio landing page',
  },
];

const projectsList = document.querySelector('.js-projects-list');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentIndex = 0;
const cardsPerPage = 3;

function getMarkup(projects) {
  return projects.map(({ image, img2x, title }) => {
    return `<li>
            <div class="pj-item-cont">
              <div class="image-cont">
                <img
                  src="${image}"
                  alt="${title}"
                  srcset="${img2x}"
                />
              </div>
              <div>
                <p class="body-text-light tech-text">
                  React, JavaScript, Node JS, Git
                </p>
                <div class="site-cont">
                  <h3 class="header-third">${title}</h3>
                    <a
                      href="https://github.com/Kost-prog/masakryczne-slimaki"
                      target="_blank"
                      class="body-text-medium"
                    >
                    VISIT
                    <div class="visit-arrow">
                      <svg width="18" height="18">
                        <use href="img/icon/icons.svg#icon-visit-icon"></use>
                      </svg>
                    </div>
                    </a>
                </div>
              </div>
            </div>
          </li>`;
  });
}

function renderNextCards() {
  const nextProjects = projects.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );
  const markup = getMarkup(nextProjects).join('');
  projectsList.insertAdjacentHTML('beforeend', markup);
  currentIndex += cardsPerPage;

  if (currentIndex >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
}

renderNextCards();

loadMoreBtn.addEventListener('click', renderNextCards);
