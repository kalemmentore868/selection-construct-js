const prompt = require("prompt-sync")();

const name = prompt("Please enter your name ");
const Studentnumber = parseInt(prompt("Please enter your number "));
const score = parseInt(prompt("Please enter your score out of 100 "));
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score > 80 && score <= 89.9:
    grade = "B";
    break;
  case score > 70 && score <= 79.9:
    grade = "C";
    break;
  case score > 60 && score <= 69.9:
    grade = "D";
  case score <= 60:
    grade = "F";
  default:
    return console.log("Please Enter valid score");
}

console.log(`Grade: ${grade}`);
