const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    const calculateTip = bill * 0.15;
    return calculateTip;
  } else {
    const calculateTip = bill * 0.2;
    return calculateTip;
  }
};

const bills = [125, 555, 44];

/*
const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [tip1, tip2, tip3];

*/

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`The total bills (bill + tip) are: ${total}`);
