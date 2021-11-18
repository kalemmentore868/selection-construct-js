const prompt = require("prompt-sync")();

const num = parseInt(prompt("Please enter a number "));

num >= 0
  ? console.log("Number entered is positive")
  : console.log("Number entered is negative");
