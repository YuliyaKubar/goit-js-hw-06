function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const div = document.querySelector(".widget");
const btn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onClickButtonHandler = () => {
  let currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;
};

btn.addEventListener("click", onClickButtonHandler);


 







