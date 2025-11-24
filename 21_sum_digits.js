// sum digits of a number
let number = 12345;
let sum = 0;
let strNum = number.toString();
//you can find sum by treating number as string
for (let i = 0; i < strNum.length; i++) {
    sum += parseInt(strNum[i]); // convert each character back to number and add to sum
}  
console.log("Sum of digits in", number, "is:", sum);



// by using while loop in traditional way
let a=6789;
let total=0;

while(a>0){
    let digit = a % 10; // get last digit
    total += digit;     // add digit to total sum
    a = Math.floor(a / 10); // use of math.floor to remove last digit from number for eg(if 6.7 then it will be 6 and if -5.9 then it will be -6)
}

console.log("Sum of digits in 6789 is:", total);

