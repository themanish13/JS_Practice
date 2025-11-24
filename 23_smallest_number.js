// smallest number . lets keep an array and find smallest number in it
let array = [3, 5, 7, 2, 8, -1];
let min = array[0]; // assume first element is the smallest
 array.forEach(function(num){
    if(num < min){
        min = num;
    }
});
console.log("Minimum number in the array is:", min);