const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const result = document.querySelector('#value');

let counterValue = 0;

const onIncrementBtnClick = () => {
    result.textContent = counterValue += 1
}
const onDecrementBtnClick = () => {
    result.textContent = counterValue -= 1
}

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick)