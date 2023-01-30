const listOfCategories = document.querySelector("#categories");

const listOfClassItem = listOfCategories.querySelectorAll(".item");

console.log(`Number of categories: ${listOfClassItem.length}`);

listOfClassItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})