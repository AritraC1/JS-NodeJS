// Promise vs setTimeout

console.log("Start");

// Macrotask
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// Microtask
Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");