// array destructuring allows you to unpack values from arrays into distinct variables

let abc=[10, 20, 30];
let [x, y, z]=abc; // destructuring assignment
console.log("Original array:", abc);
console.log("Destructured values x:", x, ", y:", y, ", z:", z);

// you can also skip elements during destructuring
let arr=[1, 2, 3, 4, 5];
let [first, , third, , fifth]=arr; // skipping second and fourth elements
console.log("Original array:", arr);
console.log("Destructured values first:", first, ", third:", third, ", fifth:", fifth);