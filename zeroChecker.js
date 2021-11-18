const prompt = require("prompt-sync")();

const firstNum = parseInt(prompt("Please enter first number "));
const secondNum = parseInt(prompt("Please enter second number "));

secondNum === 0
  ? console.log("Second number cannot be zero")
  : console.log(`${firstNum / secondNum}`);
