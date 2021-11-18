const prompt = require("prompt-sync")();

const firstNumerator = parseInt(prompt("Please enter first numerator "));
const firstDenom = parseInt(prompt("Please enter first denominator "));

const secondNumerator = parseInt(prompt("Please enter second numerator "));
const secondDenom = parseInt(prompt("Please enter second denominator "));

let commonMultiple = firstDenom * secondDenom;
let integer;

let addedNumerators =
  firstNumerator * secondDenom + secondNumerator * firstDenom;

if (addedNumerators > commonMultiple && addedNumerators % commonMultiple != 0) {
  integer = Math.floor(addedNumerators / commonMultiple);
  addedNumerators = addedNumerators % commonMultiple;
} else if (addedNumerators % commonMultiple == 0) {
  integer = addedNumerators / commonMultiple;
  return console.log(`Answer: ${commonMultiple}`);
}

integer
  ? console.log(`Answer: ${integer} ${addedNumerators}/${commonMultiple}`)
  : console.log(`Answer: ${addedNumerators}/${commonMultiple}`);
