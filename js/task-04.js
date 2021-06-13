const counterValue = document.getElementById("value");
const decrementEl = document.querySelector("[data-action=decrement]");
const incrementEl = document.querySelector("[data-action=increment]");

decrementEl.addEventListener("click", decrement);
incrementEl.addEventListener("click", increment);

const NUM = 1;

function decrement() {
  counterValue.textContent = Number(counterValue.textContent) - NUM;
}

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + NUM;
}
