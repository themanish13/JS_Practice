function findLargest(arr) {
    let max = arr[0]; // assume first element is largest
    arr.forEach(function(num) {
        if (num > max) {
            max = num;
        }
    });
   return max; // return the largest number
}
const numbers = [10, 20, 5, 40, 15];
const largest = findLargest(numbers);

console.log("Largest number in the array is:", largest);
