// reducing an array to a single value by applying a function to each element

let a=[1,2,3,4,5];
console.log("Original array:", a);

// sum of all elements in the array
let sum = a.reduce(function(b, currentValue){
    return b + currentValue;
}, 0); // initial value is 0
console.log("Sum of all elements in the array:", sum);