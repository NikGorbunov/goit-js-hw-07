const inputEl = document.getElementById("font-size-control");
const textInSpan = document.getElementById("text");

inputEl.addEventListener("input", changeStyleText);

function changeStyleText(rangeValue) {
  textInSpan.style.fontSize = rangeValue.currentTarget.value + "px";
}
