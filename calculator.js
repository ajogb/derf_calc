const numbar = document.querySelector("#num-display");
const numButtons = document.querySelectorAll(".numbutton");
const opButtons = document.querySelectorAll('[class*=" op-"]');

let num1 = "0";
let num2 = "";
let op = "";

for (button of numButtons) {
  button.addEventListener("click", numClick);
}
for (button of opButtons) {
  button.addEventListener("click", opClick);
}

function numClick(event) {
  addDigit(event.target.innerText);
}

function opClick(event) {
  let opClasses = event.target.classList;
  let opClass = null;
  for (item of opClasses) {
    if (item.startsWith("op-")) {
      opClass = item;
    }
  }
  execOp(opClass)
}

function execOp(opClass) {
  switch (opClass) {
    case "op-sub":
      break;
    case "op-add":
      break;
    case "op-mul":
      break;
    case "op-div":
      break;
    case "op-eq":
      break;
    case "op-bs":
      if (numbar.value.length !== 1) numbar.value = numbar.value.slice(0, -1);
      else numbar.value = 0;
      break;
    case "op-clr":
      numbar.value = 0;
      break;
    default:
      break;
  }
}

function addDigit(digit) {
  if (numbar.value === "0") {
    numbar.value = "";
  }
  numbar.value = `${numbar.value}${digit}`;
}

function numbarDisplay() {

}
