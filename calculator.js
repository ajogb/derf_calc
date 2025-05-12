const numbar = document.querySelector("#num-display");
const numButtons = document.querySelectorAll(".numbutton");
const opButtons = document.querySelectorAll('[class*=" op-"]');

import { Derf, DerfInt } from "./derf.js";

let num1 = "0";
let num2 = "";
let op = "";

for (const button of numButtons) {
  button.addEventListener("click", numClick);
}
for (const button of opButtons) {
  button.addEventListener("click", opClick);
}

function numClick(event) {
  addDigit(event.target.innerText);
}

function opClick(event) {
  let opClasses = event.target.classList;
  let opClass = null;
  for (const item of opClasses) {
    if (item.startsWith("op-")) {
      opClass = item;
    }
  }
  execOp(opClass);
}

function execOp(opClass) {
  switch (opClass) {
    case "op-sub":
      handleOp("-");
      break;
    case "op-add":
      handleOp("+");
      break;
    case "op-mul":
      handleOp("*");
      break;
    case "op-div":
      handleOp("/");
      break;
    case "op-eq":
      evalStatement();
      break;
    case "op-bs":
      if (op === "") {
        if (num1 !== "0") num1 = num1.slice(0, -1);
      } else {
        if (num2 === "0" | '') { op = ''; num2 = ''}
        else num2 = num2.slice(0,-1);
      }
      if (num1 === '') num1 = '0';
      updateDisplay();
      break;
    case "op-clr":
      num1 = "0";
      num2 = "";
      op = "";
      updateDisplay();
      break;
    default:
      break;
  }
}

function addDigit(digit) {
  if (op === "") {
    if (num1 === "0") num1 = digit;
    else num1 = `${num1}${digit}`;
  } else {
    if ((num2 === "0") | (num2 === "")) num2 = digit;
    else num2 = `${num2}${digit}`;
  }
  updateDisplay();
}

function updateDisplay() {
  numbar.value = `${num1}${op}${num2}`;
}

function handleOp(newOp) {
  if ((op === "") | ((op !== "") & (num2 === ""))) {
    op = newOp;
  } else {
    evalStatement();
  }
  updateDisplay();
}

function evalStatement() {
  let derf1 = new DerfInt(Derf.derfToB10(num1));
  let derf2 = new DerfInt(Derf.derfToB10(num2));
  let result;
  switch (op) {
    case "+":
      result = Derf.derfAdd(derf1, derf2);
      break;
    case "-":
      result = Derf.derfSub(derf1, derf2);
      break;
    case "*":
      result = Derf.derfMul(derf1, derf2);
      break;
    case "/":
      result = Derf.derfDiv(derf1, derf2);
      break;
    default:
      throw new Error("Invalid evaluation!");
  }
  console.log(result);
  num1 = result.derfInt;
  num2 = "";
  op = "";
  updateDisplay();
}
