// VARIABLES

// In JavaScript, var, let, and const are all used to declare variables, but they behave differently.

// var (old way - mostly avoided)
// Function-scoped (not block-scoped), Can be redeclared and reassigned, Hoisted (moved to top, initialized as undefined)
var x = 10;
var x = 20; // allowed
x = 30; // allowed

if (true) {
  var y = 5;
}
console.log(y); // 5 (leaks outside the block)

// Problems: causes bugs because it ignores { } blocks.

// let (modern & recommended)
// Block-scoped, Cannot be redeclared in the same scope, Can be reassigned, Hoisted but in the Temporal Dead Zone (can’t be used before declaration)
let a = 10;
// let a = 20; error
a = 30; // allowed

if (true) {
  let b = 5;
}
console.log(b); // error (block-scoped)

// Use let when the value will change.

// const (best default choice)
// Block-scoped, Cannot be redeclared and reassigned, Must be initialized immediately
const PI = 3.14;
// PI = 3.15; error

// Important: Objects and arrays declared with const can change internally

const arr = [1, 2, 3];
arr.push(4); // allowed

const obj = { name: "Alex" };
obj.name = "Sam"; // allowed

// What should you use?
// Use const by default
// Use let if the value will change
// Avoid var
