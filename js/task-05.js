const textName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

spanName.addEventListener('input', (event) =>
    textName.textContent = event.currentTarget.value);

spanName.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        textName.textContent = "Anonymous";
        return;
    }
    textName.textContent = event.currentTarget.value
});

