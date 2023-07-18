// Lecture: Values and Variables

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

// Lecture: Basic Operators

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
