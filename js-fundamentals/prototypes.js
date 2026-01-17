// Prototypes in JS
// Every JavaScript object has a prototype from which it can inherit properties and methods
// The prototype chain is used to look up properties that do not exist on the object itself

// Example 1: Basic prototype usage
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};

const alice = new Person("Alice", 25);
alice.greet(); // Hello, my name is Alice and I am 25 years old

// Example 2: Checking prototype chain
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true

// Example 3: Prototype inheritance
function Employee(name, age, role) {
    Person.call(this, name, age); // inherit properties
    this.role = role;
}

// Set up inheritance from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add method specific to Employee
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.role}`);
};

const bob = new Employee("Bob", 30, "Developer");
bob.greet(); // inherited from Person: Hello, my name is Bob and I am 30 years old
bob.work();  // Bob is working as a Developer

// Example 4: Extending built-in prototypes (use with caution)
Array.prototype.first = function() {
    return this[0];
};

const arr = [10, 20, 30];
console.log(arr.first()); // 10

// Example 5: Accessing prototype methods from object literals
const obj = {
    a: 1
};

// Object literals inherit from Object.prototype
console.log(obj.toString()); // "[object Object]"

// Example 6: Using Object.create for pure prototype inheritance
const proto = {
    greet: function() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

const charlie = Object.create(proto);
charlie.name = "Charlie";
charlie.greet(); // Hi, I'm Charlie

// Example 7: Prototype vs own properties
console.log(charlie.hasOwnProperty("name")); // true
console.log(charlie.hasOwnProperty("greet")); // false (inherited from proto)

// Example 8: Modifying prototypes affects all instances
Person.prototype.sayBye = function() {
    console.log(`${this.name} says goodbye`);
};

alice.sayBye(); // Alice says goodbye
bob.sayBye();   // Bob says goodbye

// Example 9: Prototype chain lookup
console.log(bob.__proto__ === Employee.prototype);      // true
console.log(bob.__proto__.__proto__ === Person.prototype); // true
console.log(bob.__proto__.__proto__.__proto__ === Object.prototype); // true
console.log(bob.__proto__.__proto__.__proto__.__proto__ === null);   // true

// Notes on prototypes:
// 1. Prototypes enable shared methods across instances, saving memory.
// 2. The prototype chain is traversed when a property is not found on the object.
// 3. Use Object.create for clean prototype-based inheritance without constructors.
// 4. Modifying a prototype affects all objects linked to it, so do it carefully.
// 5. Built-in objects like Array, Function, Date also have prototypes you can extend.

