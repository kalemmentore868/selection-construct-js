const prompt = require("prompt-sync")();

let trianglePrompt = () => {
  const side1 = parseInt(prompt("Please enter side 1 length "));
  const side2 = parseInt(prompt("Please enter side 2 length "));
  const side3 = parseInt(prompt("Please enter side 3 length "));

  return (side1 == side2) == side3
    ? "Equilateral"
    : side1 == side2 || side2 == side3 || side1 == side3
    ? "Isosceles"
    : "Scalene";
};

const firstTriangle = trianglePrompt();
const secondTriangle = trianglePrompt();
const thirdTriangle = trianglePrompt();
const fourthTriangle = trianglePrompt();
const fifthTriangle = trianglePrompt();

console.log(
  firstTriangle,
  secondTriangle,
  thirdTriangle,
  fourthTriangle,
  fifthTriangle
);
