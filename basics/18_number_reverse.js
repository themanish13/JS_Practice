// find number reverse.

let num="12345";
let reversedNum="";

reversedNum = num.toString().split('').reverse().join(''); // convert number to string and then reverse or directly reverse put in string
console.log("Original Number:", num);
console.log("Reversed Number:", reversedNum);


// IF THEREWERE TWO VALUES TO BE REVERSED
let num1="12345";
let num2="67890";
let reversedNum1="";
let reversedNum2="";

reversedNum1 = num1.toString().split('').reverse().join(''); // convert number to string and then reverse or directly reverse put in string
reversedNum2 = num2.toString().split('').reverse().join(''); // convert number to string and then reverse or directly reverse put in string
console.log("Original Number 1:", num1);
console.log("Reversed Number 1:", reversedNum1);
console.log("Original Number 2:", num2);
console.log("Reversed Number 2:", reversedNum2);



// FUNCTION TO REVERSE NUMBER
function revNum(n){
    return n.toString().split('').reverse().join('');
}

let number="54321";
console.log("Original Number:", number);
console.log("Reversed Number using function:", revNum(number));

let numberA="98765";
console.log("Original Number A:", numberA);
console.log("Reversed Number A using function:", revNum(numberA));

let numberB="43210";
console.log("Original Number B:", numberB);
console.log("Reversed Number B using function:", revNum(numberB));