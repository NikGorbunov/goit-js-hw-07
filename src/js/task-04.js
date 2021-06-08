const counterValue = document.getElementById('value');
const decrementEl = document.querySelector('[data-action=decrement]');
const incrementEl = document.querySelector('[data-action=increment]');

decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);

function decrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
