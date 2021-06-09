const inputEl = document.querySelector("input");

inputEl.addEventListener("focus", contentCheck);

function contentCheck(textInInput) {
  if (textInInput.currentTarget.value.length >= 6) {
    console.log(inputEl.classList.add("invalid"));
  } else {
    inputEl.classList.add("valid");
  }

  // textInInput.currentTarget.value.length >= 6
  //   ? inputEl.classList.add('invalid')
  //   : inputEl.classList.add('valid');
}
