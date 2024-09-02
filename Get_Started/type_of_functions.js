/*

Type of Functions
-----------------

In JavaScript, functions can be defined in several ways, each serving different use cases. Here’s a rundown of the main types of functions in JavaScript:

1. Function Declarations
------------------------
A function declaration is a named function defined using the `function` keyword. For example,

function greet(name) {
    console.log("Hello, " + name);
}
greet("Alice"); // Outputs: Hello, Alice


2. Function Expressions
-----------------------
Function expressions involve creating a function and assigning it to a variable. These functions can be named or anonymous (without a name). For example,

const greet = function(name) {
    console.log("Hello, " + name);
};
greet("Bob"); // Outputs: Hello, Bob


3. Arrow Functions
------------------
Arrow functions, introduced in ES6, provide a shorter syntax for writing functions. They do not have their own `this`, `arguments`, `super`, or `new.target`, and they are not suitable for methods or constructors. For example,
const greet = (name) => {
    console.log("Hello, " + name);
};
greet("Charlie"); // Outputs: Hello, Charlie


4. Immediately Invoked Function Expressions (IIFE)
--------------------------------------------------
An IIFE is a function that runs as soon as it is defined. It is wrapped in parentheses and then immediately invoked with an additional set of parentheses. For example,

(function() {
    console.log("This function runs immediately!");
})();


5. Generator Functions
----------------------
Generator functions, introduced in ES6, are defined using `function*` syntax and can be paused and resumed using the `yield` keyword. They return an iterator object that can be used to iterate over a sequence of values. For example,

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}
const numGen = numbers();
console.log(numGen.next().value); // Outputs: 1
console.log(numGen.next().value); // Outputs: 2


6. Async Functions
------------------
Async functions, introduced in ES8, simplify working with promises and asynchronous code. They are defined using the `async` keyword and return a promise. The `await` keyword can be used inside them to pause execution until the promise is resolved. For example,

async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
}
fetchData(); // Handles asynchronous operations


7. Methods
----------
Methods are functions that are properties of objects. They are defined using function shorthand or function declarations within an object.

const person = {
    name: "David",
    greet() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Outputs: Hello, David


8. Constructor Functions
------------------------
Constructor functions are used to create objects with a specific structure. They are called with the `new` keyword.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const john = new Person("John", 30);
console.log(john.name); // Outputs: John


Summary:
--------
1. Function Declarations and Function Expressions are the most common forms.
2. Arrow Functions offer a concise syntax and are useful in certain contexts.
3. IIFEs execute immediately and are often used to create a new scope.
4. Generator Functions provide iteration control.
5. Async Functions simplify asynchronous operations.
6. Methods and Constructor Functions are specific to objects and classes.

*/


// Most Used Functions are Function Declarations and Function Expressions. So, we will work with these two.

// 1. Function declaration
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(3, 4));
/*
    1. if we don't return the result it will print 'undefine'

    2. if we return the result but don't give any argument while calling, it will print 'NaN'
*/

// 2. Function expression
// i. named
let multiply = function multi(num1, num2) {
    return num1 * num2;
};
console.log(multiply(3, 4));

// ii. anonymous
let multiply = function(num1, num2) {
    return num1 * num2;
};
console.log(multiply(3, 4));
