let numButtons = document.querySelectorAll(".numbutton");
for (button of numButtons) {
  button.addEventListener("click", numClick);
}

let opButtons = document.querySelectorAll('[class*=" op-"]');
for (button of opButtons) {
  button.addEventListener("click",opClick)
}

function numClick(event) {
  addDigit(event.target.innerText);
}

function opClick(event) {
  
}

function addDigit(digit) {
  const numbar = document.querySelector("#num-display")
  if (numbar.value === "0") {
    numbar.value = "";
  }
  numbar.value = `${numbar.value}${digit}`
}