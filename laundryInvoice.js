const prompt = require("prompt-sync")();

const firstName = prompt("Please enter your first name ");
const lastName = prompt("Please enter your second name ");

const cottonLbs = parseInt(
  prompt(
    "Please enter The Number of lbs of Cotton fabric clothing that was washed "
  )
);
const denimLbs = parseInt(
  prompt(
    "Please enter The Number of lbs of denim fabric clothing that was washed "
  )
);
const otherFabricLbs = parseInt(
  prompt(
    "Please enter The Number of lbs of other fabric clothing that was washed "
  )
);

const totalWashCost = Number.parseFloat(
  cottonLbs + denimLbs * 2.75 + otherFabricLbs * 0.65
).toFixed(2);

const totalLbs = cottonLbs + denimLbs + otherFabricLbs;

let dryCost;

0 < totalLbs && totalLbs <= 7
  ? (dryCost = Number.parseFloat(totalLbs * 2.5).toFixed(2))
  : 7 < totalLbs && totalLbs <= 12
  ? (dryCost = Number.parseFloat(totalLbs * 1.5).toFixed(2))
  : (dryCost = Number.parseFloat(totalLbs * 0.55).toFixed(2));

const balance = parseFloat(dryCost) + parseFloat(totalWashCost);

const vat = Number.parseFloat(balance * 0.15).toFixed(2);

const extendedBalance = balance + parseFloat(vat);

console.log(`Name: ${firstName} ${lastName}
                lbs of Cotton: ${cottonLbs} charge:$${cottonLbs}
                lbs of Denim: ${denimLbs} charge:$${denimLbs * 2.75}
                lbs of Other Fabric: ${otherFabricLbs} charge: $${
  otherFabricLbs * 0.65
}
                Dryer Charge: $${dryCost}
                balance: $${balance}
                VAT Amount: $${vat}
                Extended Balance: $${extendedBalance}`);
