// DATATYPES
// In JavaScript, data types describe the kind of value a variable can hold. There are two main categories: Primitive and Non-primitive (Reference) data types.

// Primitive Data Types (7) - These store single values and are immutable.

// Number - Used for integers and decimals.
let age = 16;
let price = 99.5;

// String - Text data, written in quotes.
let name = "Alex";
let msg = "Hello";

// Boolean - True or false values.
let isLoggedIn = true;

// Undefined - A variable declared but not assigned a value.
let x;

// Null - Represents an intentional empty value.
let y = null;

// BigInt - For very large integers.
let bigNum = 12345678901234567890n;

// Symbol - Used to create unique identifiers.
let id = Symbol("id");

// Non-Primitive (Reference) Data Types - These store collections of values or complex objects.

// Object (Key-value pairs)
let person = {
  name: "Alex",
  age: 16,
};

// Array - Ordered list of values.
let colors = ["red", "blue", "green"];

// Function (Reusable block of code)
function greet() {
  return "Hello!";
}

// Checking Data Types - Use typeof:
typeof 10; // "number"
typeof "Hi"; // "string"
typeof true; // "boolean"
typeof null; // "object" (JS bug)
typeof undefined; // "undefined"
