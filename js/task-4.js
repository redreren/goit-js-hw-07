// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementBtnRef = document.querySelector("[data-action='decrement']");
const incrementBtnRef = document.querySelector("[data-action='increment']");
const counterRef = document.querySelector("#value");
// console.dir(counterRef);
let counterValue = Number(counterRef.textContent);

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}
