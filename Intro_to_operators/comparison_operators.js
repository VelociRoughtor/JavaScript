/*

Comparison Operators
--------------------
Comparison operators in JavaScript are used to compare two values. They return a boolean value: `true` or `false`, depending on whether the comparison is true. Here’s a list of the main comparison operators:

1. Equality (`==`)
------------------
Compares two values for equality after converting both values to a common type (type coercion).

.log(5 == '5'); // Outputs: true (number 5 is equal to string '5' after type coercion)

2. Strict Equality (`===`)**
----------------------------
Compares two values for equality without converting their types. Both the value and the type must be the same.

console.log(5 === '5'); // Outputs: false (number 5 is not strictly equal to string '5')

3. Inequality (`!=`)
--------------------
Compares two values for inequality after converting both values to a common type (type coercion).

console.log(5 != '5'); // Outputs: false (number 5 is equal to string '5' after type coercion)

4. Strict Inequality (`!==`)
----------------------------
Compares two values for inequality without converting their types. The values or their types must be different.

console.log(5 !== '5'); // Outputs: true (number 5 is not strictly equal to string '5')

5. Greater Than (`>`)
---------------------
Checks if the value on the left is greater than the value on the right.

console.log(10 > 5); // Outputs: true (10 is greater than 5)

6. Greater Than or Equal (`>=`)
-------------------------------
Checks if the value on the left is greater than or equal to the value on the right.

console.log(10 >= 10); // Outputs: true (10 is equal to 10)

7. Less Than (`<`)
------------------
Checks if the value on the left is less than the value on the right.

console.log(5 < 10); // Outputs: true (5 is less than 10)

8. Less Than or Equal (`<=`)
----------------------------
Checks if the value on the left is less than or equal to the value on the right.

console.log(5 <= 5); // Outputs: true (5 is equal to 5)


Summary
-------

'==' : Equality (with type coercion)
`===`: Strict equality (no type coercion)
`!=` : Inequality (with type coercion)
`!==`: Strict inequality (no type coercion)
`>`  : Greater than
`>=` : Greater than or equal
`<`  : Less than
`<=` : Less than or equal

These comparison operators are essential in decision-making structures, such as `if` statements and loops, enabling you to control the flow of your program based on specific conditions.

*/

let a = 10;
let b = '10';
let c = 20;

console.log(a == b);  // true (type coercion makes '10' equal to 10)
console.log(a === b); // false (no type coercion, so number 10 is not strictly equal to string '10')
console.log(a != c);  // true (10 is not equal to 20)
console.log(a !== b); // true (10 is not strictly equal to '10')
console.log(a > c);   // false (10 is not greater than 20)
console.log(a < c);   // true (10 is less than 20)
console.log(a >= b);  // true (10 is equal to '10' with type coercion)
console.log(a <= c);  // true (10 is less than 20)


/*

QnA
---
1. What are the comparison operators?
ans: Comparison Operators are,
'==' : Equality (with type coercion)
`===`: Strict equality (no type coercion)
`!=` : Inequality (with type coercion)
`!==`: Strict inequality (no type coercion)
`>`  : Greater than
`>=` : Greater than or equal
`<`  : Less than
`<=` : Less than or equal 

*/
