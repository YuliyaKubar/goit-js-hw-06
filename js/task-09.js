function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.
/* <div class="widget">
      <p>Background color: <span class="color">-</span></p>
      <button type="button" class="change-color">Change color</button>
    </div> */

const div = document.querySelector(".widget");
const btn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
});

const onClickButtonHandler = () => {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;
};



 







