// Strings
const name = "tony";
const age = 45;
// console.log(name + " " + age); // outdated syntax

// String interpolation
// String interpolation in JavaScript is a way to embed variables or expressions directly inside a string using template literals (`) and ${}.

console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`);

const fullName = new String("Tony Stark");
console.log(fullName);
console.log(typeof fullName);
console.log(fullName.length);
console.log(fullName[0]);
console.log(fullName.__proto__);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(5));
console.log(fullName);
console.log(fullName.toLowerCase());
console.log(fullName.indexOf("y"));

const newString = fullName.substring(3, 8); // start number, end number (not included) - no negative so only from 0
console.log(newString);

const newSliceString = fullName.slice(-8, 4); // negative - from back
console.log(newSliceString);

console.log(fullName.trim());
