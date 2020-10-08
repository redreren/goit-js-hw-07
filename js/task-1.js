// console.log(document);
// let list = document.getElementById('categories');
// let list_1 = document.getElementsByClassName('categories-list'); //HTML collection array-like object
// console.log(list_1);
// Array.from(list_1);
// console.log(Array.from(list_1));
// console.log([...list_1]);
// list_1.push('Vova');
// console.log(list_1.length);
// let list_2 = document.querySelector('#categories'); //node list
// console.log(list_2);
// let categoriesCount = document.querySelectorAll('#categories li.item');
// console.log(`В списке ${categoriesCount.length} категории.`);
// categoriesCount.forEach((elem, index) => {
//   // console.log(elem);
//   let h2 = document.querySelectorAll('h2');
//   console.log(`Категория: ${h2[index].textContent}`);
//   let li = document.querySelectorAll('li.item ul');
//   console.log(`Количество элементов: ${li[index].children.length}`);
// })
// const list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');
// console.log(`В списке ${items.length} категории`);
// items.forEach(list => {
//     const h2 = list.querySelector('h2');
//     const nodeItems = list.querySelectorAll('li');
//     console.log(`Rатегория: ${h2.textContent}. Количество элементов: ${nodeItems.length})`);
// });

// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// console.log(document);
const listRef = document.querySelector("#categories");
// console.dir(list);
const amountOfCategories = listRef.children.length;
console.log(`В списке ${amountOfCategories} категории.`);

const itemsRef = document.querySelectorAll(".item");
// console.log(itemsRef);
itemsRef.forEach((item, index) => {
  //   console.dir(item);
  const titleRef = document.querySelectorAll("h2");
  const categoryTitle = titleRef[index].textContent;
  console.log(`Категория: ${categoryTitle}`);
  const innerListRef = document.querySelectorAll(".item ul");
  const itemsQuantity = innerListRef[index].children.length;
  console.log(`Количество элементов: ${itemsQuantity}`);
});
