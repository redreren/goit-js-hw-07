// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.getElementById("validation-input");
// console.dir(inputRef);
const length = inputRef.dataset.length;
// console.log(length);

inputRef.addEventListener("blur", () => {
  let inputLength = inputRef.value.length;
  //   console.log(inputLength);
  if (inputLength === Number(length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
