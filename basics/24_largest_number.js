let arr=[10,20,5,40,15];
let max=arr[0]; // assume first element is largest

arr.forEach(function(num){
    if(num>max){
        max=num;
    }
});
console.log("Largest number in the array is:", max);