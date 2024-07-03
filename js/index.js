// Functions For Calculations.

function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function multi(first, second) {
  return first * second;
}

function expon(first, second) {
  return Math.pow(first, second);
}


// Make Operation Variables.

let operationArr = [];
let first, second, operator;


// Make Operate Function

function operate(operator, first, second) {
  // based on the operator , call one of the above functions.
} 


// Make Buttons Show On Calc Screen

const calcScreen = document.querySelector(".calc-screen");

let screenPara = document.createElement("p");

calcScreen.appendChild(screenPara);

const buttons = document.querySelectorAll("button");

let calcScreenValue = screenPara.textContent;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;
    if (target.hasAttribute("class")) {
      const classArr = target.getAttribute("class");
      if (classArr.includes("clear-recent")) {
        let para = screenPara.textContent;
        const paraArr = para.split("");
        paraArr.pop();
        screenPara.textContent = paraArr.join("");
      }
      else if (classArr.includes("clear-all")) {
        screenPara.textContent = "";
      }  
      else {
        screenPara.textContent += target.textContent;
      }
    }
    else {
      screenPara.textContent += target.textContent;
    }
  calcScreenValue += screenPara.textContent;
  })
})

console.log(calcScreenValue);