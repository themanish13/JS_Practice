// using filter to remove falsy values from an array

let a=[0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN];
console.log("Original array:", a);

// filter out falsy values
let filteredArray = a.filter(function(value){
    return Boolean(value); // keep only truthy values
});

console.log("Array after filtering out falsy values:", filteredArray);