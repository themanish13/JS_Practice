// arithmetic operations:
let a=10;
let b=5;

let sum= a+b;
document.writeln("Sum: " + sum + "<br>");

let difference= a-b;
document.writeln("Difference: " + difference + "<br>");

let product= a*b;
document.writeln("Product: " + product + "<br>");

let quotient= a/b;
document.writeln("Quotient: " + quotient + "<br>");

let modulus= a%b;
document.writeln("Modulus: " + modulus + "<br>");

// Increment and Decrement
a++;
document.writeln("Incremented a: " + a + "<br>");
b--;
document.writeln("Decremented b: " + b + "<br>");

// Exponentiation
let power= a**b;
document.writeln("a raised to the power b: " + power + "<br>");

// Combined assignment
a += 5;
document.writeln("a after a += 5: " + a + "<br>");
b *= 2;
document.writeln("b after b *= 2: " + b + "<br>");

// Comparison
document.writeln("Is a equal to b? " + (a == b) + "<br>");
document.writeln("Is a not equal to b? " + (a != b) + "<br>");
document.writeln("Is a greater than b? " + (a > b) + "<br>");
document.writeln("Is a less than or equal to b? " + (a <= b) + "<br>");

// Logical operations
let isAdult = true;
let hasID = false;

document.writeln("Can enter club (AND): " + (isAdult && hasID) + "<br>");
document.writeln("Can enter club (OR): " + (isAdult || hasID) + "<br>");
document.writeln("Not an adult: " + (!isAdult) + "<br>");   