// function to check if a number is even or odd
function checkevenorodd(number) {
    if (number % 2 === 0) {
        return "it is even when number is "+ number;
    } else {
        return "it is odd when number is "+ number;
    }
}


console.log(checkevenorodd(4)); // Output: Even
console.log(checkevenorodd(7)); // Output: Odd
console.log(checkevenorodd(0)); 


//
function check(){
    let num=842785021;
    if(num%2==0){
        console.log("it is even when number is "+ num);
    }else{
        console.log("it is odd when number is "+ num);
    }
}
check();

// another way
function checkeo(){
    let num=13;
    if(num%2==0){
        return "it is even when number is "+ num;
    }else{
        return "it is odd when number is "+ num;
    }
}
let result=checkeo();
console.log(result);


// another way
function checkeo1(num){
    if(num%2==0){
        return "it is even when number is "+ num;
    }else{
        return "it is odd when number is "+ num;
    }
}
let result1=checkeo1(56);
console.log(result1);
let result2=checkeo1(77);
console.log(result2);