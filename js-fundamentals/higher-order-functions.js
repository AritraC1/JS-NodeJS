// Higher Order Functions

// Higher-order functions are functions that either:
//   1) Accept other functions as arguments (callbacks)
//   2) Return a function
//   They are the backbone of functional programming in JavaScript.

// Example: Passing a function as an argument (callback)
function greet(name, formatter) {
  console.log(formatter(name));
}

// Formatter function
function toUpperCase(name) {
  return name.toUpperCase();
}

greet("Alice", toUpperCase); // ALICE

// Arrow function as callback
greet("Bob", (name) => `Hello, ${name}!`); // Hello, Bob!

// Array higher-order functions
const numbers = [1, 2, 3, 4, 5];

// map: transforms each element and returns a new array
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: returns elements that satisfy a condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: accumulates a single value from array elements
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// forEach: executes a function for each element (no return value)
numbers.forEach((num) => console.log(`Number: ${num}`));

// find: returns the first element that satisfies a condition
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2

// some: returns true if at least one element satisfies a condition
const hasLargeNumber = numbers.some((num) => num > 4);
console.log(hasLargeNumber); // true

// every: returns true if all elements satisfy a condition
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true

// Returning a function (function factory)
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

const triple = multiplyBy(3);
console.log(triple(5)); // 15

// Arrow function returning a function (currying)
const add = (a) => (b) => a + b;

const addFive = add(5);
console.log(addFive(10)); // 15

// Higher-order function with multiple callbacks
function performOperation(a, b, operation) {
  return operation(a, b);
}

const sumResult = performOperation(4, 7, (x, y) => x + y);
console.log(sumResult); // 11

const multiplyResult = performOperation(4, 7, (x, y) => x * y);
console.log(multiplyResult); // 28

// Custom higher-order function for logging
function withLogging(fn) {
  return function (...args) {
    console.log(`Calling function ${fn.name} with arguments:`, args);
    const result = fn(...args);
    console.log(`Result:`, result);
    return result;
  };
}

function subtract(a, b) {
  return a - b;
}

const loggedSubtract = withLogging(subtract);
loggedSubtract(10, 4);

// Using HOFs with objects
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

// Filter adults and map names
const adultNames = users
  .filter((user) => user.age >= 21)
  .map((user) => user.name);

console.log(adultNames); // ["John", "Jane"]

// HOFs with asynchronous code
function fetchData(url, callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Sample" }; // Simulated data
    callback(data);
  }, 1000);
}

fetchData("api/data", (data) => {
  console.log("Fetched data:", data);
});

// Composing functions using HOFs
const compose = (f, g) => (x) => f(g(x));

const addOne = (x) => x + 1;
const square = (x) => x * x;

const addOneThenSquare = compose(square, addOne);
console.log(addOneThenSquare(4)); // 25

// Using HOFs in real-world array transformations
const orders = [
  { item: "Book", price: 10, quantity: 2 },
  { item: "Pen", price: 2, quantity: 5 },
  { item: "Notebook", price: 5, quantity: 3 },
];

const totalRevenue = orders
  .map((order) => order.price * order.quantity)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalRevenue); // 41
