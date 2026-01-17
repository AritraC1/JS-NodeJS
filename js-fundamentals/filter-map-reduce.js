// FIlter, Map, & Reduce
// These methods are higher-order functions that help process arrays in a functional way.

// Sample array for examples
const numbers = [1, 2, 3, 4, 5];

// ------------------- FILTER -------------------
// filter returns a new array containing only elements that satisfy a condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4]

// Filtering objects based on a property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 30 },
];

const adults = users.filter((user) => user.age >= 21);
console.log("Adults:", adults);
// [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

// Using filter with strings
const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length > 5);
console.log("Long words:", longWords); // ["banana", "cherry"]

// ------------------- MAP -------------------
// map returns a new array by applying a function to each element
const squares = numbers.map((num) => num * num);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]

// Mapping objects to extract properties
const names = users.map((user) => user.name);
console.log("Names:", names); // ["Alice", "Bob", "Charlie"]

// Combining filter and map
const adultNames = users
  .filter((user) => user.age >= 21)
  .map((user) => user.name);
console.log("Adult names:", adultNames); // ["Alice", "Charlie"]

// Map with index
const indexedSquares = numbers.map((num, index) => `${index}: ${num * num}`);
console.log("Indexed squares:", indexedSquares);
// ["0: 1", "1: 4", "2: 9", "3: 16", "4: 25"]

// ------------------- REDUCE -------------------
// reduce reduces an array to a single value using a callback
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers:", sum); // 15

// Reduce to find maximum value
const max = numbers.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbers[0],
);
console.log("Maximum number:", max); // 5

// Reduce to count occurrences
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Fruit count:", fruitCount);
// { apple: 3, banana: 2, cherry: 1 }

// Reduce to flatten arrays
const nestedArrays = [[1, 2], [3, 4], [5]];
const flatArray = nestedArrays.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened array:", flatArray); // [1,2,3,4,5]

// Using reduce for complex operations
// Calculating total revenue from orders
const orders = [
  { item: "Book", price: 10, quantity: 2 },
  { item: "Pen", price: 2, quantity: 5 },
  { item: "Notebook", price: 5, quantity: 3 },
];

const totalRevenue = orders.reduce(
  (acc, order) => acc + order.price * order.quantity,
  0,
);
console.log("Total revenue:", totalRevenue); // 41

// Combining filter, map, and reduce
// Total age of adults
const totalAdultAge = users
  .filter((user) => user.age >= 21) // Only adults
  .map((user) => user.age) // Extract ages
  .reduce((sum, age) => sum + age, 0); // Sum of ages

console.log("Total adult age:", totalAdultAge); // 55

// Reduce to create a lookup object
const usersByName = users.reduce((acc, user) => {
  acc[user.name] = user.age;
  return acc;
}, {});
console.log("Users by name:", usersByName);
// { Alice: 25, Bob: 18, Charlie: 30 }

// Map to create messages
const messages = users.map((user) => `${user.name} is ${user.age} years old`);
console.log("Messages:", messages);
// ["Alice is 25 years old", "Bob is 18 years old", "Charlie is 30 years old"]

// Filter, map, reduce together for a real-world scenario
// Average price of items costing more than 3
const averagePrice = orders
  .filter((order) => order.price > 3)
  .map((order) => order.price)
  .reduce((acc, price, _, arr) => acc + price / arr.length, 0);

console.log("Average price of items >3:", averagePrice); // 7.5
