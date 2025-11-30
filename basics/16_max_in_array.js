// find maximum number in an array
let array = [3, 5, 7, 2, 8, -1];
let max = array[0]; // assume first element is the largest
 array.forEach(function(num){
    if(num > max){
        max = num;
    }
});
console.log("Maximum number in the array is:", max);


// find minimum number in an array
let min=array[0]; // assume first element is the smallest
 array.forEach(function(num){
    if(num < min){
        min = num;
    }
});
console.log("Minimum number in the array is:", min);