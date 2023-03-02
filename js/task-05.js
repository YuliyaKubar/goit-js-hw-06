const textName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

// spanName.addEventListener('input', (event) =>
//     textName.textContent = event.currentTarget.value);

// spanName.addEventListener('input', (event) => {
//     if (event.currentTarget.value === "") {
//         textName.textContent = "";
//         return;
//     }
//     textName.textContent = event.currentTarget.value
// });

textName.addEventListener('input', onInputChange);

function onInputChange(event) {
    const value = event.currentTarget.value.trim();
    spanName.textContent = value ? value : 'Anonymous';

}