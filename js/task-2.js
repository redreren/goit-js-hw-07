// const ingridientsList = document.querySelector('#ingredients');
// ingridientsList.style.listStyle = "none";
// // // console.log(ingridientsList);
// // // CREATING ELEMENTS
// // const ingridientsItem = document.createElement('li');
// // // console.dir(ingridientsItem);
// // ingridientsItem.textContent = "you are really pretty today";
// // console.log(ingridientsItem);
// // ingridientsList.append(ingridientsItem);
// ingredients.forEach(elem => {
//   // CREATING ELEMENTS
//   const ingridientsItem = document.createElement('li');
//   // console.dir(ingridientsItem);
//   ingridientsItem.textContent = elem;
//   console.log(ingridientsItem);
//   ingridientsList.append(ingridientsItem);
//   // console.log(elem);
// })

// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  //   console.log(ingredient);
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  //   console.log(ingredientsItem);
  ingredientsList.append(ingredientsItem);
});
