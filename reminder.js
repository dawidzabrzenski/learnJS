const funcTest = (a) => {
  let num = 10;
  a += num;
  return a;
};

let funcExe = funcTest(25);
console.log(funcExe);

const firstName = "Test";

switch (firstName) {
  case "1":
    console.log(firstName);
    break;
  case "2":
    console.log("123");
}

let result = 0;
let i = 0;

do {
  i++;
  // console.log(i);
  result = i;
} while (i < 5);

console.log(result);
