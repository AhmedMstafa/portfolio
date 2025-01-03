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
  sectionHeaders.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top > 100 && rect.bottom > 0) {
      section.classList.add('move');
      console.log(rect.top);
      return;
    }
  });
}

window.addEventListener('scroll', addClassShow);
