// Arrays

// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true, { id: 1 }];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Mixed:", mixed);

// Accessing elements (zero-based index)
console.log("First number:", numbers[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying elements
fruits[1] = "mango";
console.log("Updated fruits:", fruits);

// Common array methods

// push / pop (end)
numbers.push(6);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

// unshift / shift (start)
numbers.unshift(0);
console.log("After unshift:", numbers);

numbers.shift();
console.log("After shift:", numbers);

// Looping through arrays

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit (for loop):", fruits[i]);
}

// forEach
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}:`, fruit);
});

// map (transform array)
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// filter (select items)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce (combine into one value)
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

// Checking and searching
console.log("Includes 3?", numbers.includes(3));
console.log("Index of 4:", numbers.indexOf(4));

// copying arrays (important!)
const copy = [...numbers]; // spread operator
copy.push(99);

console.log("Original numbers:", numbers);
console.log("Copied numbers:", copy);

// Arrays of objects
const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Sam" },
  { id: 3, name: "Jordan" }
];

const userNames = users.map(user => user.name);
console.log("User names:", userNames);
