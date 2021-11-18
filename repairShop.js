const prompt = require("prompt-sync")();

const hours = parseInt(prompt("Please enter number of hours repair took "));
const partsCost = parseInt(prompt("Please enter the cost of parts "));

if (hours > 1.5) {
  jobCharge = hours * 100 + partsCost;
} else {
  jobCharge = 150 + partsCost;
}

console.log(`Cost of job is $${jobCharge}`);
