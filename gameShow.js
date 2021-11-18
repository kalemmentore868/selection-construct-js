const prompt = require("prompt-sync")();

const name = prompt("Hi, what's your name? ");
console.log(`Welcome to our show, ${name}`);

const age = parseInt(prompt("How old are you? "));

if (age < 22) {
  return console.log("Sorry you cannot play this game :(");
}

console.log(`Hmmmm, you don’t look a day over ${age}`);

const numOfCars = parseInt(
  prompt(`Tell me, ${name}, how many cars do you own? `)
);

if (numOfCars == 0) {
  return console.log(
    `Wow, come on now ${name}, you are ${age} and do not own a car!`
  );
}

const carModel = prompt(`${name}, what is the brand and model of your car? `);
console.log(
  `The ${carModel} is a great choice for a car. ${name}, have a great day. Good Bye!!`
);
