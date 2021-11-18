const prompt = require("prompt-sync")();

const firstNum = parseInt(prompt("Please enter first number "));
const secondNum = parseInt(prompt("Please enter second number "));

const intCode = parseInt(prompt("Please enter integer code "));

let result;

switch (intCode) {
  case 1:
    result = firstNum + secondNum;
    break;
  case 2:
    result = firstNum - secondNum;
    break;
  case 3:
    result = firstNum * secondNum;
    break;
  case 4:
    if (secondNum == 0) {
      return console.log("Second number can't be 0");
    } else {
      result = firstNum / secondNum;
    }
    break;

  default:
    return console.log("Integer code must be 1, 2, 3 or 4");
    break;
}

console.log(`Answer: ${result}`);
