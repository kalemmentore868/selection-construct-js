const prompt = require("prompt-sync")();

const loanAmount = parseInt(prompt("Please enter the loan amount "));
let deposit;

switch (true) {
  case loanAmount < 25000:
    deposit = loanAmount / 20;
    break;
  case 25000 <= loanAmount && loanAmount < 49000:
    deposit = 1250 + loanAmount / 10;
    break;
  case 50000 <= loanAmount && loanAmount < 100000:
    deposit = 5000 + loanAmount / 4;
    break;
  case loanAmount > 100000:
    return console.log("Loans in excess of $100 000 are not allowed");

  default:
    return console.log("Please Enter valid number");
}

console.log(`Deposit: ${deposit}`);
