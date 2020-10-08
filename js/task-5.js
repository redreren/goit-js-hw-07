// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", changeName);

function changeName(event) {
  //   console.log(event.target.value);
  nameRef.textContent = event.target.value;
  if (nameRef.textContent === "") {
    nameRef.textContent = "незнакомец";
  }
}
