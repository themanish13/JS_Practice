// this means basically shortform for an array like (1,.....numbers,4,5,6)
let numbers=[1,2,3];
let newNumbers=[...numbers,4,5,6];
console.log("Original array:", numbers);
console.log("New array using spread operator:", newNumbers);

// another example
let arr1=['a','b','c'];
let arr2=['d','e','f'];
let combinedArr=[...arr1,...arr2];
console.log("Combined array using spread operator:", combinedArr);