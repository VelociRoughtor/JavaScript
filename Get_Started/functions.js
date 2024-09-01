/*
    Functions
    ---------

    Functions in JavaScript are blocks of code designed to perform specific tasks. They allow you to encapsulate reusable code, making your programs more modular, readable, and maintainable. Functions can take input in the form of parameters, process the data, and return an output.

    Key Characteristics of Functions in JavaScript:
    -----------------------------------------------

    1. Function Declaration: This is the most common way to define a function. A function declaration starts with the function keyword, followed by the function name, parentheses () (which can include parameters), and a block of code {}. For example,

    function greet() {
        console.log("Hello, world!");
    }

    greet(); // Calling the function. Outputs: Hello, world!

    2. Function Expression: Functions can also be defined as expressions. In this case, the function is assigned to a variable. These are known as anonymous functions if they don’t have a name. For example,

    const greet = function() {
        console.log("Hello, world!");
    };

    greet(); // Outputs: Hello, world!

    3. Arrow Functions: Introduced in ES6, arrow functions provide a shorter syntax for writing functions. They are especially useful for inline functions and callbacks.
    const greet = () => {
        console.log("Hello, world!");
    };

    greet(); // Outputs: Hello, world!

    4. Parameters and Arguments: Functions can accept parameters, which are placeholders for the values passed into the function. When you call the function, you provide arguments that replace these parameters.
    function add(a, b) {
        return a + b;
    }

    let sum = add(5, 3); // Outputs: 8

    5. Return Statement: Functions can return a value using the return statement. If no return is specified, the function returns undefined by default.

    function multiply(a, b) {
        return a * b;
    }

    let result = multiply(4, 5); // Outputs: 20

    6. Default Parameters: You can specify default values for parameters, which will be used if no arguments are provided when the function is called.

    function greet(name = "Guest") {
        console.log("Hello, " + name);
    }

    greet(); // Outputs: Hello, Guest
    greet("John"); // Outputs: Hello, John

    7. Rest Parameters: Rest parameters allow you to handle an indefinite number of arguments as an array. This is useful when the number of arguments isn't fixed.

    function sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    console.log(sum(1, 2, 3)); // Outputs: 6
    console.log(sum(4, 5, 6, 7)); // Outputs: 22

    8. Callback Functions: Functions can be passed as arguments to other functions. These are called callback functions, and they are commonly used in asynchronous programming.
    function processUserInput(callback) {
        let name = prompt("Please enter your name.");
        callback(name);
    }

    processUserInput(function(name) {
        console.log("Hello, " + name);
    });


    Example of a Function in JavaScript:
    ------------------------------------

    function calculateArea(width, height) {
        return width * height;
    }

    let area = calculateArea(5, 10); // Outputs: 50
    console.log(area);


    Key Points About Functions:
    ---------------------------

    1. Reusable: Functions allow you to reuse code blocks multiple times throughout your program.
    2. Modular: Breaking down code into functions makes it easier to debug, test, and maintain.
    3. Scope: Functions can access variables defined outside them (global scope) and variables defined inside them are not accessible outside (local scope).
    4. Closures: Functions in JavaScript have access to variables from the parent scope even after the parent function has closed, enabling powerful patterns like data privacy and currying.

*/

// property no. 1
function hi(name){
    console.log("Hi! " + name);
}
hi('Munni');

//property no. 2
let hi = function(name){
    console.log("hi! " + name);
}
hi('Munni');

//property no. 3
let hi = (name) => {
    console.log("Hi! " + name);
};
hi('Munni');

//property no. 4 & 5
function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}
console.log(add(3, 5));

//property no. 6
function add(num1 = 0, num2 = 0){
    sum = num1 + num2;
    console.log(sum);
}   
add();
add(2,9);

/*
    QnA
    ---

    What is a function?
    ans: Functions in JavaScript are blocks of code designed to perform specific tasks. They allow you to encapsulate reusable code, making your programs more modular, readable, and maintainable. Functions can take input in the form of parameters, process the data, and return an output.
*/