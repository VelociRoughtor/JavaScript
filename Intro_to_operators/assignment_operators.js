/*
Assignment operators
--------------------
In JavaScript. They combine an arithmetic operation with assignment. The assignment operators perform an operation on a variable and assign the result back to that variable. Here’s a breakdown of each:

1. Addition Assignment (`+=`)
-----------------------------
Adds the right operand to the left operand and assigns the result to the left operand.

let a = 5;
a += 3; // Equivalent to a = a + 3
console.log(a); // Outputs: 8


2. Subtraction Assignment (`-=`)
--------------------------------
Subtracts the right operand from the left operand and assigns the result to the left operand.

let a = 5;
a -= 2; // Equivalent to a = a - 2
console.log(a); // Outputs: 3


3. Multiplication Assignment (`*=`)
-----------------------------------
Multiplies the left operand by the right operand and assigns the result to the left operand.

let a = 4;
a *= 3; // Equivalent to a = a * 3
console.log(a); // Outputs: 12


4. Division Assignment (`/=`)
-----------------------------
Divides the left operand by the right operand and assigns the result to the left operand.

let a = 12;
a /= 4; // Equivalent to a = a / 4
console.log(a); // Outputs: 3


5. Remainder Assignment (`%=`)
------------------------------
Computes the remainder of the division of the left operand by the right operand and assigns the result to the left operand.

let a = 10;
a %= 3; // Equivalent to a = a % 3
console.log(a); // Outputs: 1


6. Exponentiation Assignment (`**=`)
------------------------------------
Raises the left operand to the power of the right operand and assigns the result to the left operand.

let a = 2;
a **= 3; // Equivalent to a = a ** 3
console.log(a); // Outputs: 8

*/

let a = 10;
let b = 3;

// 1. Addition Assignment
a += b;
console.log(a);

// Subtraction Assignment
a -= b;
console.log(a);

// 3. Multiplication Assignment
a *= b;
console.log(a);

// 4. Division Assignment
a /= b;
console.log(a);

// 5. Remainder Assignment
a %= b;
console.log(a);

// 6. Exponentiation Assignment
a **= b;
console.log(a);