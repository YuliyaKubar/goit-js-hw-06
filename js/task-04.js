const counterEl = document.querySelector('#counter');
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const spanEl = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

