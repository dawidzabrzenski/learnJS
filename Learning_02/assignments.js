// LECTURE: Functions

/*

function describeCountry(country, population, capitalCity) {
  const countryDesc = `${country} has ${population} people and its
    capital city is ${capitalCity}`;
  return countryDesc;
}

let country1 = describeCountry("Poland", 37750000, "Warsaw");
let country2 = describeCountry("Germany", 67750000, "Berlin");
let country3 = describeCountry("France", 83200000, "Paris");

console.log(country1, "\n", country2, "\n", country3);

*/

// LECTURE: Function Declarations vs. Expressions

// Declaration

/*

function percentageOfWorld1(population) {
  let percentage = (population / 800000000) * 100;
  return percentage;
}

let country1 = percentageOfWorld1(110000000);
let country2 = percentageOfWorld1(37750000);
let country3 = percentageOfWorld1(67750000);

console.log(country1, country2, country3);

// Expression

const percentageOfWorld2 = function (population) {
  let percentage = (population / 800000000) * 100;
  return percentage;
};

let country4 = percentageOfWorld2(110000000);
let country5 = percentageOfWorld2(37750000);
let country6 = percentageOfWorld2(67750000);

console.log(country4, country5, country6);

*/

// LECTURE: Arrow Functions

// const percentageOfWorld3 = (population) => (population / 8000) * 100;
// const country7 = percentageOfWorld3(1100);
// console.log(country7);

// LECTURE: Functions Calling Other Functions

/*

function describePopulation(country, population) {
  const percentage = percentageOfWorld3(population);

  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

let countryChina = describePopulation("China", 1441);

console.log(countryChina);

*/

// LECTURE: Introduction to Arrays

/*

const populations = [110000000, 37750000, 67750000, 11590000];

if (populations.length === 4) {
  console.log(`Array contains 4 elements`);
} else {
  console.log(`Array do not contains 4 elements`);
}

function percentageOfWorld1(population) {
  let percentage = (population / 800000000) * 100;
  return percentage;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// populations.forEach((item) => {
//   const arr = [];
//   const arr2 = item.push(arr);
//   return console.log(arr);
// });

*/

// LECTURE: Basic Array Operations (Methods)
/*

const neighbours = ["Germany", "Russia", "Czech Republic", "Ukraine"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("It is an central European country!");
} else {
  console.log("Probably not a central European country :D");
}

console.log(neighbours.indexOf("Russia"));
neighbours[1] = "Shit";
console.log(neighbours);

*/

// LECTURE: Introduction to Objects
// LECTURE: Object Methods

/*

const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  language: "Polish",
  population: 37750000,
  neighbours: ["Germany", "Russia", "Czech Republic", "Ukraine"],

  describe: function () {
    return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
    and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    return (this.isIsland =
      this.neighbours.length === 0
        ? (this.isIsland = true)
        : (this.isIsland = false));
  },
};

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital}`);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

myCountry.population = myCountry.population + 2000000;
console.log(myCountry.population);

myCountry["population"] = myCountry["population"] - 2000000;
console.log(myCountry.population);

*/

// LECTURE: Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// LECTURE: Looping Arrays, Breaking and Continuing
/*

const populations = [10, 1441, 332, 83];
const percentages2 = [];

function percentageOfWorld1(population) {
  let percentage = (population / 800000000) * 100;
  return percentage;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

*/

//LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}

// console.log(listOfNeighbours[0][0]);
