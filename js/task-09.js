const btnRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnRef.addEventListener('click', event => {
  document.body.style.backgroundColor = getRandomHexColor();
  textRef.textContent = document.body.style.backgroundColor;
})