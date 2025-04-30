const projects = [
  {
    image: '../img/projects/power-pulse-webservice.jpg',
    img2x: '../img/projects/power-pulse-webservice@2x.jpg',
    title: 'power pulse webservice',
  },

  {
    image: '../img/projects/mimino-website.jpg',
    img2x: '../img/projects/mimino-website@2x.jpg',
    title: 'mimino website',
  },
  {
    image: '../img/projects/vyshyvanka-vibes.jpg',
    img2x: '../img/projects/vyshyvanka-vibes@2x.jpg',
    title: 'vyshyvanka vibes Landing Page',
  },
  {
    image: '../img/projects/chego-jewelry.jpg',
    img2x: '../img/projects/chego-jewelry@2x.jpg',
    title: 'chego jewelry website',
  },
  {
    image: '../img/projects/energy-flow.jpg',
    img2x: '../img/projects/energy-flow@2x.jpg',
    title: 'energy flow webservice',
  },
  {
    image: '../img/projects/fruitbox-online-store.jpg',
    img2x: '../img/projects/fruitbox-online-store@2x.jpg',
    title: 'fruitbox online store',
  },
  {
    image: '../img/projects/starlight-studio.jpg',
    img2x: '../img/projects/starlight-studio@2x.jpg',
    title: 'starlight studio landing page',
  },
];

// написати перебір масиву мапом
// функція що ріже масив розміток + джоінить + додає в дом
// слухач по якому виконується попередня функція
/* розмітка: <li>
            <div class="pj-item-cont">
              <div class="image-cont">
                <img
                  src="../img/projects/wallet-webservice.jpg"
                  alt="Wallet webservice"
                  srcset="../img/projects/wallet-webservice@2x.jpg 2x"
                />
              </div>
              <div>
                <p class="body-text-light tech-text">
                  React, JavaScript, Node JS, Git
                </p>
                <div class="site-cont">
                  <h3 class="header-third">Wallet webservice</h3>
                  <button class="body-text-medium" type="button">
                    VISIT
                    <div class="visit-arrow">
                      <svg width="18" height="18">
                        <use href="../img/icon/icons.svg#icon-visit-icon"></use>
                      </svg>
                    </div>
                    <a
                      href="https://github.com/Kost-prog/masakryczne-slimaki"
                      target="_blank"
                    ></a>
                  </button>
                </div>
              </div>
            </div>
          </li> */
const projectsList = document.querySelector('.js-projects-list');
// 1. написати перебір масиву мапом
function getMarcup(projects) {
  const cardsArr = projects
    .map(({ image, img2x, title }) => {
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
                  <button class="body-text-medium" type="button">
                    VISIT
                    <div class="visit-arrow">
                      <svg width="18" height="18">
                        <use href="../img/icon/icons.svg#icon-visit-icon"></use>
                      </svg>
                    </div>
                    <a
                      href="https://github.com/Kost-prog/masakryczne-slimaki"
                      target="_blank"
                    ></a>
                  </button>
                </div>
              </div>
            </div>
          </li>`;
    })
    .join('');

  projectsList.insertAdjacentHTML('beforeend', cardsArr);
}
console.log(getMarcup(projects));
