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
