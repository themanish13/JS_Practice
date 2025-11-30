//Find the sum of numbers in an array [1,2,3,4,5].
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log("The sum of the array is: " + sum);

// Alternatively, using forEach
let n= [1, 2, 3, 4, 5,6,7,8,9,10];
let sumForEach = 0;
n.forEach(function(num){
    sumForEach += num;
});

console.log("The sum of the array using forEach is: " + sumForEach);