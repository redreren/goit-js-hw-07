// // Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-action='render']");
const destroyBtnRef = document.querySelector("[data-action='destroy']");
const boxesRef = document.getElementById('boxes');
// console.dir(inputRef);
// console.log(createBtnRef);
// console.log(destroyBtnRef);
// console.log(boxesRef);

let amountOfBoxes;

function createBoxes() {
    const boxesArray = [];
    for (let i = 0; i < amountOfBoxes; i++) {
        const element = document.createElement("div");
        element.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        const size = 30 + i * 10;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        boxesArray.push(element);
    }
    boxesRef.prepend(...boxesArray);
}
function destroyBoxes() {
    boxesRef.innerHTML = "";
    inputRef.value = "";
}



inputRef.addEventListener("change", function (event) {
    // console.dir(event);
    // console.log(event.target.value);
    amountOfBoxes = event.target.value;
});
createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);
















// let divAmount = 0;
// const createBoxes = function () {
//   const divsArr = [];
//   for (let i = 0; i < divAmount; i++) {
//     const element = document.createElement("div");
//     element.style.background = `rgb(${Math.floor(
//       Math.random() * 256
//     )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
//       Math.random() * 256
//     )})`;
//     const size = 30 + i * 10;
//     element.style.width = `${size}px`;
//     element.style.height = `${size}px`;
//     divsArr.push(element);
//   }
//   boxesRef.append(...divsArr);
// };
// const destroyBoxes = () => {
//   window.boxes.innerHTML = "";
// };

// const renderBtn = document.querySelector(
//   '#controls button[data-action="render"]'
// );
// const destroyBtn = document.querySelector(
//   '#controls button[data-action="destroy"]'
// );
// const boxesRef = document.getElementById("boxes");
// const numberRef = document.querySelector("#controls input");
// numberRef.addEventListener("change", function (event) {
//   divAmount = event.target.value;
// });
// renderBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);