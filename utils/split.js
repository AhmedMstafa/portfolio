export function split(selector) {
  let paragraphs = [...document.querySelectorAll(selector)];
  paragraphs.forEach((paragraph) => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for (let i = 0; i < pArray.length; i++) {
      htmlString += `<span class="c">${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
  });
}
