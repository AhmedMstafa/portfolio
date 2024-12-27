const loading = document.querySelector('.loading');
const loadingTitle = loading.querySelector('.loading-title');
const loadingProgress = loading.querySelector('.loading-progress span');
const seconds = 3000;

console.log(loadingProgress);

function loadingProgressHandler() {
  loading.classList.remove('d-none');

  let counter = 0;
  const interval = setInterval(() => {
    loadingTitle.innerText = `${counter}%`;
    loadingProgress.style.width = `${counter}%`;
    counter += 1;
  }, 30);

  setTimeout(() => {
    clearInterval(interval);
    loading.classList.add('d-none');
  }, seconds);
}

loadingProgressHandler();
