//all types of functions type to sum numbers 
 
//no argument and no return type
function sum1(){
    let a=10, b=20;
    let sum=a+b;
    console.log("Sum is: " + sum);
}
sum1();

//with argument and no return type
function sum2(a,b){
    let sum=a+b;
    console.log("Sum is: " + sum);
}
sum2(30,40);

//no argument and with return type
function sum3(){
    let a=50, b=60;
    let sum=a+b;
    return sum;
}
let result1 = sum3();
console.log("Sum is: " + result1);

//with argument and with return type
function sum4(a,b){
    let sum=a+b;
    return sum;
}
let result2 = sum4(70,80);
console.log("Sum is: " + result2);