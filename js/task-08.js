const form = document.querySelector('.login-form');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    
    const email = formEl.email.value;
   

    const password = formEl.password.value.trim();
    

    const formData = {
        email,
        password,
    }

    if (!email || !password) {
        alert("Заполните все поля!") 
        return;
    } 
    console.log(formData);
    event.target.reset();
};

