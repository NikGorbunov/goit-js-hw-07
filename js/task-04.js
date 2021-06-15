const counterValueEl = document.getElementById("value");
const incrementButtonEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementButtonEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

let counterValue = 0;
const onIncrementBtnClick = () => {
  counterValue += 1;

  counterValueEl.textContent = counterValue;
};

const onDecrementBtnClick = () => {
  counterValue -= 1;

  counterValueEl.textContent = counterValue;
};

decrementButtonEl.addEventListener("click", onDecrementBtnClick);
incrementButtonEl.addEventListener("click", onIncrementBtnClick);

// "Заведите отдельную переменную (число),
// значение которой увеличивается / уменьшается на 1(при клике на соответсвующую кнопку),
//   и записывайте это значение в textContent спана с id = "value"."
