/*

Unary Operators
---------------
Unary operators in JavaScript are operators that operate on a single operand. They perform various operations such as negating a value, incrementing or decrementing a number, and more. Here’s a detailed overview of the main unary operators in JavaScript:

1. Unary Plus (`+`)
-------------------
Converts its operand to a number (if it isn’t already).

let x = "5";
x = +x; // Converts the string "5" to the number 5
console.log(x); // Outputs: 5

2. Unary Negation (`-`)
-----------------------
Converts its operand to a number and then negates it (makes it negative).

let y = 5;
y = -y; // Negates the value, making it -5
console.log(y); // Outputs: -5

3. Increment (`++`)
-------------------
Increases its operand by 1. It can be used as a prefix or postfix operator:

(i) Prefix (`++x`): Increments the value before returning it.

let a = 5;
let b = ++a; // a is incremented to 6, and then b is assigned the value 6
console.log(a); // Outputs: 6
console.log(b); // Outputs: 6

(ii) Postfix (`x++`): Returns the value before incrementing it.

let c = 5;
let d = c++; // c is assigned to d as 5, and then c is incremented to 6
console.log(c); // Outputs: 6
console.log(d); // Outputs: 5

4. Decrement (`--`)
-------------------
Decreases its operand by 1. It can also be used as a prefix or postfix operator:

(i) Prefix (`--x`): Decrements the value before returning it.

let e = 5;
let f = --e; // e is decremented to 4, and then f is assigned the value 4
console.log(e); // Outputs: 4
console.log(f); // Outputs: 4

(ii) Postfix (`x--`): Returns the value before decrementing it.

let g = 5;
let h = g--; // g is assigned to h as 5, and then g is decremented to 4
console.log(g); // Outputs: 4
console.log(h); // Outputs: 5


5. Logical NOT (`!`)
--------------------
Converts its operand to a boolean value and negates it. If the operand is truthy, it becomes `false`; if it is falsy, it becomes `true`.

let i = true;
let j = !i; // Negates the boolean value, so j becomes false
console.log(j); // Outputs: false

let k = 0;
let l = !k; // 0 is falsy, so !0 becomes true
console.log(l); // Outputs: true

6. Bitwise NOT (`~`)
--------------------
Inverts all the bits of its operand (a number). It flips each bit from 0 to 1 and from 1 to 0.

let m = 5; // Binary: 00000000000000000000000000000101
let n = ~m; // Bitwise NOT: 11111111111111111111111111111010
console.log(n); // Outputs: -6

7. `typeof` Operator
--------------------
Returns a string indicating the type of the operand.

let o = 42;
console.log(typeof o); // Outputs: "number"

let p = "Hello";
console.log(typeof p); // Outputs: "string"

8. `delete` Operator
--------------------
Removes a property from an object.

let obj = { name: "John", age: 30 };
delete obj.age; // Removes the 'age' property
console.log(obj); // Outputs: { name: "John" }

9. `void` Operator
------------------
Evaluates an expression but returns `undefined`.

let q = 10;
console.log(void q); // Outputs: undefined


Summary
-------

`+`     : Converts to a number.
`-`     : Negates the value.
`++`    : Increments the value by 1.
`--`    : Decrements the value by 1.
`!`     : Logical NOT, inverts the boolean value.
`~`     : Bitwise NOT, inverts the bits.
`typeof`: Returns the type of the operand.
`delete`: Removes a property from an object.
`void`  : Evaluates an expression and returns `undefined`.

Unary operators are essential in JavaScript as they provide a way to perform operations on individual values efficiently and concisely.

*/