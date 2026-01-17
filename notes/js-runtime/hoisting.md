# Hoisting

## What is Hoisting?
Hoisting in JS is a phenomenon where the user can access functions and variables even before the user have initialised it.

> Note: Only the declarations are hoisted, not the initializations.

---

## Function Hoisting
Function declarations are fully hoisted, meaning the entire function definition is moved to the top of the scope.  

```javascript
sayHello();

function sayHello() {
    console.log("Hello, world!");
}

Output:
Hello, world!
```

Note: Functions declared using arrow function expressions are not hoisted in the same way.

```javascript
sayHello();

var sayHello = () => {
    console.log("Hello, world!");
}

Output:
Cannot access 'sayHello' before initialization
```

---

## Variable Hoisting

Variable declarations are hoisted, but initializations are not.

```javascript
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

Note: Variables declared with let and const are not hoisted in the same way. Accessing them before declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).

```javascript
console.log(b); // ReferenceError
let b = 10;

console.log(c); // ReferenceError
const c = 15;
```

---

## Key Points
- Function declarations are hoisted with their definition.
- var variables are hoisted but initialized with undefined.
- let and const variables are hoisted but cannot be accessed before declaration (TDZ).
- Function expressions and arrow functions behave like variables and are subject to variable hoisting rules.

---