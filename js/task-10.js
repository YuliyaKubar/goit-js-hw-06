function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', onBtnCreateClick);
btnDestroyRef.addEventListener("click", onBtnDestroyClick);

function onBtnCreateClick(event) {
  const amount = Number(inputRef.value)
  createBoxes(amount)
  
}

function onBtnDestroyClick(event) {
  destroyBoxes() 
  inputRef.value = 0;
}

function destroyBoxes() {
  boxRef.innerHTML = "";
}
function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    boxes.push(`<div style = "width: ${30 + i*10}px; height: ${30 + i*10}px; background-color: ${getRandomHexColor()};"></div>`)
  }
  boxRef.innerHTML = boxes.join("");
}