const prompt = require("prompt-sync")();

const firstWeightInKgs = parseInt(
  prompt("Please enter first weight in kilos ")
);
const firstWeightInGrams = parseInt(
  prompt("Please enter first weight in grams ")
);

const secondWeightInKgs = parseInt(
  prompt("Please enter second weight in kilos ")
);
const secondWeightInGrams = parseInt(
  prompt("Please enter second weight in grams ")
);

let addedWeightInKgs = firstWeightInKgs + secondWeightInKgs;

let addedWeightInGrams = firstWeightInGrams + secondWeightInGrams;

if (addedWeightInGrams >= 1000) {
  addedWeightInKgs++;
  addedWeightInGrams = addedWeightInGrams - 1000;
}

console.log(`Answer: ${addedWeightInKgs}kg ${addedWeightInGrams}g`);
