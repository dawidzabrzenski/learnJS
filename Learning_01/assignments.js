// Lecture: Values and Variables

/*
// let country = "Poland";
const country = "Poland";
// let continent = "Europe";
const continent = "Europe";
let population = 37750000;

console.log(country, continent, population);

// Lecture: Data Types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Lecture: let, const, var

language = "Polish";
console.log(language);
*/

// Lecture: Basic Operators
/*

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population > 33000000);

/*
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description);
*/

// Lecture: Strings and Template Literals
/*
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

// Lecture: Taking Decisions: if / else Statements

if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  const averagePopulation = 33000000;
  console.log(
    `${country}'s population is ${averagePopulation - population} below average`
  );
}

// Lecture: Type Conversion and Coercion

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Lecture: Equality Operators: == vs. ===

// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No border");
// }

*/

// Lecture: Logical Operators

/*

const isCountryEnglish = true;
const countryPopulation = 37000000;
const isCountryIsland = false;

if (isCountryEnglish && countryPopulation < 50000000 && !isCountryIsland) {
  console.log("You should live in Portugal :)");
} else {
  console.log("Portugal does not meet your criteria :(");
}

*/

// Lecture: The switch Statement

/*

let language = "arabic";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

*/

// Lecture: The Conditional (Ternary) Operator

/*

let country = `Poland`;
let population = `20000000`;

console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);

*/
