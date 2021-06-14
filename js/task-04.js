const counterValueEl = document.getElementById("value");
const incrementButtonEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementButtonEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

decrementButtonEl.addEventListener("click", onDecrementBtnClick);
incrementButtonEl.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValueEl.textContent--;
}

function onIncrementBtnClick() {
  counterValueEl.textContent++;
}
// В задании 4 пользователь может сломать логику счетчика,
//   если зайдет через инструменты разработчика и поменяет вручную значение спана с id = "value".
// Такой возможности быть не должно.Заведите отдельную переменную(число),
//   значение которой увеличивается / уменьшается на 1(при клике на соответсвующую кнопку),
//   и записывайте это значение в textContent спана с id = "value".
