/*

    Data types in  JavaScript belongs to two main catagories:
    1. Primitive data types.
    2. Reference data types.

    Primitive data types are simple and fundamental data. This contains only a single thing whether number, string or boolean. They are:
    1. string
    2. number
    3. BigInt
    4. boolean
    5. undefined
    6. null
    7. Symbol

    Reference data types are object data types. 
*/


// Three different ways to declare and initialize a string data type:

let favoriteFruit = 'Mango';
let favoriteIceCream = "Lemon";
let favoriteProgrammingLanguage = `C++`;

// console.log(favoriteFruit);
// console.log(favoriteIceCream);
// console.log(favoriteProgrammingLanguage);


// Two kind of number data types:

let numberOfCats = 12;
let pie = 3.14;


// The BigInt data type:

let veryLargeNumber = 79209382807489278332873n;


// boolean data type:

let loveCoding = true;
let loveDogs = false;


// undefined data type:

let rafy;


// Null data type: We explicitly use null to clear the value of a variable.

loveCoding = null;


// Symbols data type: We use symbols which are used to create unique object and identifier.

const uniqueKey = Symbol();



// Object data type:

let course = {
    name: 'JavaScript for Beginners',
    hours: 3
};


// Type of the data can be found like this:

console.log(typeof loveDogs);
console.log(typeof favoriteFruit);


/* QnA

    1. What are primitive data types in JavaScript?
    ans: Primitive data types are simple and fundamental data. This contains only a single thing whether number, string or boolean.

    2. What are the seven primitive data types in JavaScript?
    ans: The seven primitive data types are:
    1. string
    2. number
    3. BigInt
    4. boolean
    5. undefined
    6. null
    7. Symbol

*/
