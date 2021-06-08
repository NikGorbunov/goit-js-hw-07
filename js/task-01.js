const categoriesEl = document.querySelectorAll('ul#categories li.item');
const countCategoriesEl = categoriesEl.length;
console.log(`В списке ${countCategoriesEl} категории`);

categoriesEl.forEach(category => {
  return (
    console.log('Категория: ', category.querySelector('h2').textContent),
    console.log(
      'Количество элементов: ',
      category.querySelectorAll('li').length
    )
  );
});
