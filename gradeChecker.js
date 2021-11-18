const prompt = require("prompt-sync")();

const firstGrade = parseInt(prompt("Please enter first grade "));
const secondGrade = parseInt(prompt("Please enter second grade "));
const thirdGrade = parseInt(prompt("Please enter third grade "));
const averageGrade = (firstGrade + secondGrade + thirdGrade) / 3;

averageGrade > 50
  ? console.log(`You passed with %${averageGrade} `)
  : console.log(`You Failed with %${averageGrade} :(`);
