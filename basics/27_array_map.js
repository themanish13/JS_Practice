// map is used to change the values of an array based on a function

let a=[1,2,3,4,5];
console.log("Original array:", a);

// create a new array with each element squared
let squaredArray = a.map(function(num){
    return num * num;
});

console.log("Array with squared values:", squaredArray);

// create a new array with each element doubled
let doubledArray = a.map(function(num){
    return num * 2;
});

console.log("Array with doubled values:", doubledArray);