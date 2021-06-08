const textInInputEl = document.querySelector('input#name-input');

textInInputEl.addEventListener('input', callback);

function callback(textInInput) {
  const textInSpan = document.getElementById('name-output');

  textInInput.currentTarget.value.length < 1
    ? (textInSpan.textContent = 'незнакомец')
    : (textInSpan.textContent = textInInput.currentTarget.value);
}
