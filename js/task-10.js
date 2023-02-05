function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("[type=number]");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const collectionRef = document.querySelector("#boxes");

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes (amount) {
  const listItems = [];

  amount = Number(inputRef.value);
  listItems.length = amount;
  listItems.fill("");

  listItems.map((value, index) => {
    listItems.forEach((el) => {
      value = document.createElement('div');
      value.style.width = 30 + index * 10 + "px";
      value.style.height = 30 + index * 10 + "px";
      value.style.backgroundColor = getRandomHexColor();
    });
    listItems.push(value);
  });
  return collectionRef.append(...listItems);
}

function destroyBoxes () {
  collectionRef.innerHTML = "";
  inputRef.value = "";
}