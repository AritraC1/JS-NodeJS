# Undefined Vs Not-Defined

## 1. `undefined`

### What it means
A variable is **`undefined`** when it has been **declared** but **has not been assigned a value**. It works like a placeholder until the variable is assigned some value.

```js
let x;
console.log(x); // undefined
```

### Common cases where undefined appears
#### 1. Declared but not initialized
```js
let a;
console.log(a); // undefined
```

#### 2. Function parameters not passed
```js
function greet(name) {
  console.log(name);
}

greet(); // undefined
```

#### 3. Missing object properties
```js
const user = { age: 25 };
console.log(user.name); // undefined
```

#### 4. Function without a return statement
```js
function doNothing() {}
console.log(doNothing()); // undefined
```

---

## 2. Not Defined (ReferenceError)

### What it means
A variable is not-defined when it has never been declared in the current scope.

```js
console.log(y); // ReferenceError: y is not defined
```

> "Not-defined" is NOT a JavaScript value. It is a runtime error thrown by JavaScript.

---

## 3. Key differences

| Feature            | `undefined` | Not-Defined           |
| ------------------ | ----------- | --------------------- |
| Variable declared? | ✅ Yes       | ❌ No                  |
| Is it a value?     | ✅ Yes       | ❌ No                  |
| Causes an error?   | ❌ No        | ✅ ReferenceError      |
| `typeof` safe?     | ✅ Yes       | ❌ No (unless wrapped) |

---

## 4. `typeof` Behavior

```js
let a;
console.log(typeof a); // "undefined"

console.log(typeof b); // "undefined" (no error!)
```

---

## 5. Quick Example

```js
let foo;

console.log(foo);      // undefined
console.log(typeof foo); // "undefined"

console.log(bar);      // ReferenceError
console.log(typeof bar); // "undefined"
```

---

## 6. Summary

### undefined
- Variable exists but has no value
- Safe, predictable, and common

### Not-Defined
- Variable does not exist
- Causes a ReferenceError

> 💡 **Rule of thumb**
Declared but empty → undefined
Never declared → Not-Defined

---