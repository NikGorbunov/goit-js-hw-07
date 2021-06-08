const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulElem = document.querySelector('ul#ingredients');
ingredients.map(ingredient => {
  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  ulElem.append(liElem);
});
