const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        return inputRef.classList.add('valid');
     }
     inputRef.classList.remove('valid');
     return inputRef.classList.add('invalid');
})