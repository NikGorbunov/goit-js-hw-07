const inputEl = document.querySelector("input");

inputEl.addEventListener("focus", contentCheck);

function contentCheck(textInInput) {
  if (textInInput.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
