// images.forEach((elem, index) => {
//     const listGallery = document.getElementById("gallery");
//     const itemGallery = `<li id="${index += 1}"><img src="${elem.url}" alt="${elem.alt}" width="200"></li>`;
//     listGallery.insertAdjacentHTML("beforeend", itemGallery);
//     console.log(listGallery);
// });

// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");
console.log(galleryRef);

images.forEach((image) => {
  console.log(image);
  galleryRef.insertAdjacentHTML(
    "afterbegin",
    `<li><img src='${image.url}' alt='${image.alt}' width=400></li>`,
  );
});
