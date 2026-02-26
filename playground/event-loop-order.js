// Event Loop Order

console.log("1. Synchronous log");

// setTimeout = Macrotask (goes to the task queue)
setTimeout(() => {
  console.log("4. setTimeout (macrotask)");
}, 0);

// Promise = Microtask (goes to the microtask queue)
Promise.resolve().then(() => {
  console.log("3. Promise.then (microtask)");
});

console.log("2. Another synchronous log");