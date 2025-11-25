// for each in array
let fruits = ["apple", "banana", "cherry", "date"];

console.log("List of fruits:");
fruits.forEach(function(fruit, index){
    console.log(index + ": " + fruit);
});



// calculating sum of numbers in an array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

numbers.forEach(function(num){
    sum += num;
});

console.log("Sum of numbers in the array is:", sum);