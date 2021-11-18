const prompt = require("prompt-sync")();

const num = parseInt(prompt("Please enter a number "));

num % 2 == 0
  ? console.log("Number entered is even")
  : console.log("Number entered is odd");
