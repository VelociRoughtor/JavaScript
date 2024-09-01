/*
    Array
    -----

    An array in JavaScript is a data structure that allows you to store multiple values in a single variable. 
    
    These values can be of any data type, including numbers, strings, objects, and even other arrays. 
    
    Arrays are ordered, meaning each value (called an element) has a specific position (called an index) within the array.


    Key Characteristics of Arrays in JavaScript:
    --------------------------------------------

    1. Indexed Collection: Each element in an array has an index, starting from 0 for the first element. For example, in the array [10, 20, 30], 10 is at index 0, 20 is at index 1, and 30 is at index 2.

    let numbers = [10, 20, 30];
    console.log(numbers[0]); // Outputs: 10

    2. Dynamic Size: Arrays in JavaScript can grow or shrink in size. You can add new elements, remove existing ones, and modify elements without needing to define a fixed size for the array. For example,
    
    let fruits = ['Apple', 'Banana'];
    fruits.push('Orange'); // Adds 'Orange' to the end of the array
    console.log(fruits); // Outputs: ['Apple', 'Banana', 'Orange']

    3. Mixed Data Types: Arrays can hold elements of different data types, including numbers, strings, booleans, objects, and even other arrays. For example,
    let mixedArray = [42, 'Hello', true, {name: 'John'}, [1, 2, 3]];


    Common Array Methods:
    ---------------------

    1. push(): Adds one or more elements to the end of an array.
    2. pop(): Removes the last element from an array.
    3. shift(): Removes the first element from an array.
    4. unshift(): Adds one or more elements to the beginning of an array.
    5. splice(): Adds/removes elements at a specific index.
    6. slice(): Returns a shallow copy of a portion of an array.
    7. forEach(): Iterates over each element in an array.

    let animals = ['Cat', 'Dog', 'Elephant'];
    animals.push('Lion'); // ['Cat', 'Dog', 'Elephant', 'Lion']
    animals.pop(); // ['Cat', 'Dog', 'Elephant']
    animals.shift(); // ['Dog', 'Elephant']
    animals.unshift('Monkey'); // ['Monkey', 'Dog', 'Elephant']


    Example of an Array:
    --------------------
    let colors = ['Red', 'Green', 'Blue'];

    console.log(colors[0]); // Outputs: Red
    console.log(colors.length); // Outputs: 3

    colors.push('Yellow'); // Adds 'Yellow' to the end of the array
    console.log(colors); // Outputs: ['Red', 'Green', 'Blue', 'Yellow']

    colors.splice(1, 1); // Removes 'Green' from the array
    console.log(colors); // Outputs: ['Red', 'Blue', 'Yellow']


    Use Cases of Arrays:
    --------------------

    1. Storing lists of items: Arrays are perfect for keeping a list of related items, like user names, scores, or objects.
    2. Iteration: Arrays are often used with loops to perform actions on each element.
    3. Data manipulation: Arrays provide a wide range of methods to add, remove, and modify elements, making them versatile for handling collections of data.

*/

let colors = ['Red', 'Green', 'Blue'];
//console.log(colors);

// property no 1
// console.log(colors[1]);

// property no 2
// colors.push('Yellow');
// console.log(colors);

// property no 3
// colors.push(34);
// console.log(colors);


// Methods

// 1. push()
colors.push('Yellow');

// 2. pop()
colors.pop();

// 3. shift()
colors.shift();

// 4. unshift()
colors.unshift('Pink');

// 5. splice()
//colors.splice(1,2);

console.log(colors);

// length of an array
console.log(colors.length);


/*
    QnA
    ---

    1. What is an Array?
    ans: An array in JavaScript is a data structure that allows you to store multiple values in a single variable. 
    
    These values can be of any data type, including numbers, strings, objects, and even other arrays. 
    
    Arrays are ordered, meaning each value (called an element) has a specific position (called an index) within the array.

    2. How would you determine the length of an array?
    ans: using length() method.

    3. How would you access the first element of an array?
    ans: using index, for example, colors[0];

*/