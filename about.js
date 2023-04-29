const features = [
  {
    id: 1,
    img: './images/Home/speaker-01.svg',
    featuredetail: {
      name: 'Yochai Benkler',
      positon: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
  },
  {
    id: 2,
    img: './images/Home/speaker-02.svg',
    featuredetail: {
      name: 'SohYeong Noh',
      positon: 'Director of Art Centre Nabi and a board member of CC Korea',
      description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    },
  },
  {
    id: 3,
    img: './images/Home/speaker-03.svg',
    featuredetail: {
      name: 'Lila tretikov',
      positon: 'Executive Director of the Wikimedia Foundation',
      description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    },
  },
  {
    id: 4,
    img: './images/Home/speaker-04.svg',
    featuredetail: {
      name: 'Kilnam Chon',
      positon: '',
      description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    },
  },
  {
    id: 5,
    img: './images/Home/speaker-05.svg',
    featuredetail: {
      name: 'Julia Leda',
      positon: 'President of Young Pirates of Europe',
      description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    },
  },
  {
    id: 6,
    img: './images/Home/speaker-06.svg',
    featuredetail: {
      name: 'Ryan Merkley',
      positon: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
      description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    },
  },
];

let displayedFeatures = features.slice(0, 2);

window.showFeatures = function () {
  const projectFeatures = document.querySelector('.featured-speakers');
  projectFeatures.innerHTML = '<h2>Featured Speakers<br> <img src="./images/Home/feature-title-underline.svg" alt="feature underline"></h2>';
  let wholeFeatures = '';
  const screenSize = window.matchMedia('(min-width: 768px)');
  if (screenSize.matches) {
    displayedFeatures = features.slice();
  }
  for (let i = 0; i < displayedFeatures.length; i += 1) {
    wholeFeatures += `
      <div class="featured-speaker spike">          
      <ul class="spkr">
          <li class="spkr1"> <img src="${displayedFeatures[i].img}" alt="${displayedFeatures[i].alt}">
          <ul class = "spkrdetails">
              <li class="spkr2"><h3>${displayedFeatures[i].featuredetail.name}</h3></li>
              <li class="spkr2"><h4>${displayedFeatures[i].featuredetail.positon}</h4></li>
              <li class="spkr2"><hr></li>
              <li class="spkr2"><p>${displayedFeatures[i].featuredetail.description}</p></li>
          </ul>
      </ul>
  </div>
  `;
  }

  projectFeatures.innerHTML += `<div class ="tworows">${wholeFeatures}</div>`;
  if (displayedFeatures.length === features.length) {
    projectFeatures.innerHTML += '<div class="loadMore" onclick="showMore()" style=""><button>Less<img  src = "./images/Home/arrow_up_icon.svg"></button></div>';
  } else {
    projectFeatures.innerHTML += '<div class="loadMore" onclick="showMore()" style=""><button>More<img  src = "./images/Home/arrow_down_icon.svg"></button></div>';
  }

  projectFeatures.appendChild();
};

window.popmenu = function () {
  const mobileMenu = document.querySelector('.show');
  if (mobileMenu.id === 'hidden') {
    mobileMenu.id = 'visible';
  } else {
    mobileMenu.id = 'hidden';
  }
};
// window.showFeatures();

window.showMore = function () {
  if (displayedFeatures.length === features.length) {
    displayedFeatures = features.slice(0, 2);
  } else {
    displayedFeatures = features.slice();
  }window.showFeatures();
};