// const loading = document.querySelector('.loading');
// const loadingTitle = loading.querySelector('.loading-title');
// const loadingProgress = loading.querySelector('.loading-progress span');
// const seconds = 3000;

// console.log(loadingProgress);

// function loadingProgressHandler() {
//   loading.classList.remove('d-none');

//   let counter = 0;
//   const interval = setInterval(() => {
//     loadingTitle.innerText = `${counter}%`;
//     loadingProgress.style.width = `${counter}%`;
//     counter += 1;
//   }, 30);

//   setTimeout(() => {
//     clearInterval(interval);
//     loading.classList.add('d-none');
//   }, seconds);
// }

// loadingProgressHandler();

// project list
const worksBtns = document.querySelectorAll('.works .nav-btn');
const indicator = document.querySelector('.nav-indicator-glow');
const projectTemplate = document.getElementById('single-project');
const projectsContainer = document.querySelector('.wrapper');

const projectsList = [
  {
    title: 'omnifood',
    img: 'img/works/omnifood.jpg',
    github: 'https://github.com/AhmedMstafa/Omnifood',
    link: 'https://omnifood-ahmed-m.netlify.app/',
    place: 'html&css',
  },
  {
    title: 'dashboard',
    img: 'img/works/dashboard.jpg',
    github: 'https://github.com/AhmedMstafa/Dashboard',
    link: 'https://dashboard-psi-azure.vercel.app/',
    place: 'html&css',
  },
  {
    title: 'appie',
    img: 'img/works/appie.jpg',
    github: 'https://github.com/AhmedMstafa/appie',
    link: 'https://appie-ahmed.netlify.app/',
    place: 'html&css',
  },
  {
    title: 'bondi',
    img: 'img/works/bondi.jpg',
    github: 'https://github.com/AhmedMstafa/Bondi',
    link: 'https://bondi-phi.vercel.app/',
    place: 'html&css',
  },
  {
    title: 'elzero',
    img: 'img/works/elzero.jpg',
    github: 'https://github.com/AhmedMstafa/elzero',
    link: 'https://elzero-three.vercel.app/',
    place: 'html&css',
  },
  {
    title: 'kasper',
    img: 'img/works/kasper.jpg',
    github: 'https://github.com/AhmedMstafa/kasper',
    link: 'https://kasper-black.vercel.app/',
    place: 'html&css',
  },
  {
    title: 'leon',
    img: 'img/works/leon.jpg',
    github: 'https://github.com/AhmedMstafa/leon',
    link: 'https://ahmedmstafa.github.io/Leon/',
    place: 'html&css',
  },
  {
    title: 'breakout game',
    img: 'img/works/breakout-game.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/breakout-game',
    link: 'https://breakout-game-a.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'custom video player',
    img: 'img/works/custom-video-player.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/custom-video-player',
    link: 'https://custom-video-player-ahmed.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'music player',
    img: 'img/works/music-player.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/music-player',
    link: 'https://a-h-music-player.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'new year countdown',
    img: 'img/works/new-year-countdown.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/new-year-countdown',
    link: 'https://a-new-year-countdown.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'product filtering ui',
    img: 'img/works/product-filtering-ui.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/product-filtering-ui',
    link: 'https://a-product-filtering-ui.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'relaxer app',
    img: 'img/works/relaxer-app.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/relaxer-app',
    link: 'https://a-relaxer-app.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'speak number guess',
    img: 'img/works/speak-number-guess.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/speak-number-guess',
    link: 'https://a-speak-number-guess.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'speech text reader',
    img: 'img/works/speech-text-reader.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/speech-text-reader',
    link: 'https://a-speech-text-reader.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'typing game',
    img: 'img/works/typing-game.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/typing-game',
    link: 'https://a-speech-text-reader.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'dom array methods',
    img: 'img/works/dom-array-methods.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/dom-array-methods',
    link: 'https://dom-array-methods-ahmed.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'exchange rate',
    img: 'img/works/exchange-rate.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/exchange-rate',
    link: 'https://exchange-rate-ahmed.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'expense tracker',
    img: 'img/works/expense-tracker.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/expense-tracker',
    link: 'https://a-n-expense-tracker.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'form validator',
    img: 'img/works/form-validator.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/form-validator',
    link: 'https://form-validator-ahmed.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'hangman',
    img: 'img/works/hangman.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/hangman',
    link: 'https://hangman-game-11.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'infinite scroll blog',
    img: 'img/works/infinite-scroll-blog.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/infinite-scroll-blog',
    link: 'https://a-infinite-scroll-blog.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'meal finder',
    img: 'img/works/meal-finder.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/meal-finder',
    link: 'https://a-meal-finder.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'memory cards',
    img: 'img/works/memory-cards.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/memory-cards',
    link: 'https://a-meal-finder.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'modal menu slider',
    img: 'img/works/modal-menu-slider.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/modal-menu-slider',
    link: 'https://a-modal-menu-slider.netlify.app/',
    place: 'javascript',
  },
  {
    title: 'movie seat booking',
    img: 'img/works/movie-seat-booking.jpg',
    github:
      'https://github.com/AhmedMstafa/Vanilla_JavaScript/tree/main/movie-seat-booking',
    link: 'https://a-modal-menu-slider.netlify.app/',
    place: 'javascript',
  },
];

let currentProjects = [];

/*
Text Reveal Effect On Scroll
*/

let paragraphs = [...document.querySelectorAll('.about p')];
let spans = [];

paragraphs.forEach((paragraph) => {
  let htmlString = '';
  let pArray = paragraph.textContent.split('');
  for (let i = 0; i < pArray.length; i++) {
    htmlString += `<span>${pArray[i]}</span>`;
  }
  paragraph.innerHTML = htmlString;
});

spans = [...document.querySelectorAll('.about p span')];

function revealSpans() {
  for (let i = 0; i < spans.length; i++) {
    if (
      spans[i].closest('.about').getBoundingClientRect().top <
      window.innerHeight / 2
    ) {
      let { left, top } = spans[i].getBoundingClientRect();
      top = top - window.innerHeight * 0.5;
      let opacityValue =
        1 - (top * 0.01 + left * 0.001) < 0.1
          ? 0.1
          : 1 - (top * 0.01 + left * 0.001).toFixed(3);
      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans[i].style.opacity = opacityValue;
    }
  }
}

window.addEventListener('scroll', () => {
  revealSpans();
});

revealSpans();

/* Add Calss move To  Section header */

const sectionHeaders = document.querySelectorAll('.section-header');

function addClassShow() {
  for (let i = 0; i < sectionHeaders.length; i++) {
    const rect = sectionHeaders[i].getBoundingClientRect();
    if (0 <= rect.top || 0 === rect.bottom) {
      sectionHeaders[i].classList.add('move');
      break;
    }
  }
}

window.addEventListener('scroll', addClassShow);

// mange works section

function filterProjects(palce) {
  currentProjects = projectsList.filter((project) => project.place === palce);
}

filterProjects('html&css');

worksBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    worksBtns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');
    if (e.target.classList.contains('html&css')) {
      filterProjects('html&css');
      addAllProjects();
    }
    if (e.target.classList.contains('javascript')) {
      filterProjects('javascript');
      addAllProjects();
    }
    if (e.target.classList.contains('react')) {
      filterProjects('react');
      addAllProjects();
    }
  });
});

function createNewProject(projectDitails) {
  const { title, img, github, link } = projectDitails;
  const projectEl = document.importNode(projectTemplate.content, true);
  projectEl.querySelector('.title').textContent = title;
  projectEl.querySelector('img').src = img;
  projectEl.querySelector('a:first-child').href = github;
  projectEl.querySelector('a:last-child').href = link;
  return projectEl;
}

function addAllProjects() {
  projectsContainer.innerHTML = '';
  currentProjects.forEach((project) => {
    projectsContainer.appendChild(createNewProject(project));
  });
}

addAllProjects();
