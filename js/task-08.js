const form = document.querySelector('.login-form');

const loginFormSubmitHandler = (event) => {
    event.preventDefault();

const email = event.currentTarget.elements.email.value; 
const password = event.currentTarget.elements.password.value;
const formData = {
    email,
    password,
};
email === "" || password === "" 
? alert("Заповни форму!") : console.log(formData);
event.currentTarget.reset();
}

form.addEventListener("submit", loginFormSubmitHandler)

