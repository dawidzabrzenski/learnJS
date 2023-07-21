// Lecture: Values and Variables

/* let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jason";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
*/

/* // Lecture: Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

*/

// Lecture: let, const, var
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);
*/

// Lecture: Basic Operators

/*

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// typeof - type of value

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x - x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

// Lecture: Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Lecture: Strings and Template Literals
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
*/

// 19 Lecture: Taking Decisions: if / else Statements
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// if() {
//
// } else {
//
// }

let century;

const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// 20 Lecture: Type Conversion and Coercion

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log(typeof "I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// 21 Lecture: Truthy and Falsy Values

// 5 falsy value: 0,'', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height;

// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// 22 Lecture: Equality Operators: == vs. ===

// const age = "18";

// if (age === 18) console.log("You just became an adult (strict)");

// if (age == 18) console.log("You just became an adult (loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("23 is amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) {
//   console.log("Why not 23?");
// }

// 23 and 24 Lecture: Boolean logic and Logical operators

// const hasDrivingLicense = true; // A
// const hasGoodVision = true; // B

// && - AND
// || - OR

/* console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision; */

// if (hasDrivingLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true;
// console.log(hasDrivingLicense && hasGoodVision && isTired);

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// 26 Lecture: The switch Statement
/*

const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}



if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day!");
}

*/

// 28 Lecture: The Conditional (Ternary) Operator

const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
