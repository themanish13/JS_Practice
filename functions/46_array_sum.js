function sum(){
    let arr = [10, 20, 30, 40, 50];
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;   

}
let ans = sum();
console.log("The sum of the array elements is: " + ans);


// another way using argument and return type
function arraySum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;   
}
let array = [5, 15, 25, 35, 45];
let answer = arraySum(array);
console.log("The sum of the array elements is: " + answer);
