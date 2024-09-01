
/*
    Object in JavaScript
    --------------------
    An object in JavaScript is a collection of properties, where each property is an association between a key (also known as a property name) and a value. The value can be of any data type, including another object, making objects versatile for storing complex data.

    Key Characteristics of Objects in JavaScript:
    ---------------------------------------------

    1. Properties: Objects consist of properties, defined as key-value pairs. The key is a string (or symbol), and the value can be any data type, including numbers, strings, arrays, functions, and other objects. For example,
    
    const person = {
        name: "John",
        age: 30,
        isStudent: false
    };

    2. Accessing Properties: You can access properties using dot notation or bracket notation. For example,

    console.log(person.name); // Dot notation
    console.log(person['age']); // Bracket notation

    3. Methods: Objects can also have functions as values for their properties. These functions are called methods. For example,
    const person = {
        name: "John",
        greet: function() {
            console.log("Hello, " + this.name);
        }
    };
    
    person.greet(); // Outputs: Hello, John

    4. Dynamic Nature: You can add, modify, or delete properties after an object has been created. For example,

    person.height = 180; // Adding a new property
    person.name = "Jane"; // Modifying an existing property
    delete person.isStudent; // Deleting a property

    
    Use Cases of Objects:
    ---------------------

    Storing related data: Objects are great for grouping related data together.
    Modular code: Objects can encapsulate data and functions, making code more modular and easier to manage.
    Working with JSON: JavaScript objects are the basis of JSON (JavaScript Object Notation), a popular data format for exchanging data between a server and a client.

*/

// property no. 1

let course = {
    name: 'JavaScript for beginners',
    hours: 3,
    fee: '$40'
};

console.log(course);
console.log(course.name);
console.log(course.hours);
console.log(course.fee);

// property no. 2

console.log(course.hours);
console.log(course['hours']);

// property no. 4

// adding property
course.student = 'rafy';

// modifying property
course.fee = '$0';

// deleting a property
delete course.student;

// property no. 3
// adding a function

course.greet = function() {
    console.log(this.name + " is the best");
};

// printing the function
course.greet();

// Another way to use property
let property = 'hours';
console.log(course[property]);


/*
    QnA
    ---

    1. What is an object in JavaScript?
    ans: An object in JavaScript is a collection of properties, where each property is an association between a key (also known as a property name) and a value. The value can be of any data type, including another object, making objects versatile for storing complex data.

    2. Is an object primitive type or a reference type? 
    ans: reference type.
*/