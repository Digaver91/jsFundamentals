console.log("Gavrylov");

let numberOne = 5;
let numberTwo = 3;
console.log(numberOne, numberTwo);

numberTwo = numberOne;
console.log(numberOne, numberTwo);

let newObject = {
  "String": "Hello",
  "Number": 3,
  "Boolean": true,
  "Undefined": undefined,
  "Null": null
}
console.log(newObject);

let isAdult = confirm("Are u adult?");
console.log(isAdult);

const firstName = "Dmytro"; //string
const lastName = "Gavrylov"; // string
const group = "js-01"; // string
const birthYear = 1991; // number
const isMarried = true; // boolean

console.log(birthYear, isMarried, firstName + " " + lastName + " " + group);

const nullVariable = null;
const undefinedVariable = undefined;

console.log(typeof nullVariable, typeof undefinedVariable);

const login = prompt("Enter your login:");
const email = prompt("Enter your email:");
const password = prompt("Enter your password:");

const message = `Dear User, your email is ${email}, your password is ${password}.`;

alert(message);

const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

console.log(`Seconds in an hour: ${secondsInHour}`);
console.log(`Seconds in a day: ${secondsInDay}`);
console.log(`Seconds in a month: ${secondsInMonth}`);