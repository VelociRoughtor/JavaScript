/*

Arithmetic operators in JavaScript are used to perform mathematical operations on numbers. Here’s a list of the primary arithmetic operators and their uses:

1. Addition (`+`)
Adds two numbers. Can also be used to concatenate strings.

let sum = 5 + 3; // Outputs: 8
let greeting = "Hello, " + "world!"; // Outputs: "Hello, world!"


2. Subtraction (`-`)
Subtracts one number from another.

let difference = 10 - 4; // Outputs: 6


3. Multiplication (`*`)
Multiplies two numbers.

let product = 6 * 7; // Outputs: 42


4. Division (`/`)
Divides one number by another.

let quotient = 20 / 4; // Outputs: 5


5. Remainder (`%`)
Returns the remainder of the division of one number by another. Also known as the modulus operator.

let remainder = 11 % 3; // Outputs: 2


6. Exponentiation (`**`)
Raises the first number to the power of the second number.

let power = 2 ** 3; // Outputs: 8 (2 to the power of 3)


7. Unary Plus (`+`)
Converts a value to a number (if it's not already a number).

let num = +"42"; // Outputs: 42 (number)


8. Unary Minus (`-`)
Negates a number.

let negative = -7; // Outputs: -7

*/

let a = 10;
let b = 3;

// 1. addition
let addition = a + b; 
let greeting = "hello" + " " + "world!";
console.log(addition); 
console.log(greeting); 

// 2. subtraction
let subtraction = a - b; 
console.log(subtraction); 

//3. multiplication
let multiplication = a * b;  
console.log(multiplication);

// 4. division
let division = a / b;        
console.log(division);

// 5. remainder
let remainder = a % b;  
console.log(remainder); 

// 6. exponentiation
let power = a ** b;          
console.log(power);  

// 7. unary plus
let c = +"43";
console.log(c);
a = a+c;
console.log(a);

// 8. unary minus
b = -b;
console.log(b);