const inputEl = document.getElementById('font-size-control');

inputEl.addEventListener('input', changeStyleText);

function changeStyleText(rangeValue) {
  const textInSpan = document.getElementById('text');
  textInSpan.style.fontSize = rangeValue.currentTarget.value + 'px';
}
