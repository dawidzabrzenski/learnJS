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

const percentageOfWorld3 = (population) => (population / 8000) * 100;
// const country7 = percentageOfWorld3(1100);
// console.log(country7);

// LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {
  const percentage = percentageOfWorld3(population);

  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

let countryChina = describePopulation("China", 1441);

console.log(countryChina);
