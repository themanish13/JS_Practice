// average in array
let arr= [10, 20, 30, 40, 50];
let sum=0;
arr.forEach(function(num){
    sum+=num;
});
let average = sum / arr.length;
console.log("Average of array elements is: " + average);

