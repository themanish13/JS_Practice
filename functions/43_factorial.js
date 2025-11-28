
// function factorial(){

//     let x=5;
//     function helper(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     else{
//         return n* helper(n-1);
//     }
//     }

//     return helper(x);

// }
// let result=factorial();
// console.log("Factorial of "+ 5 + " is "+ result);



//real way
function fac(n){
    if(n===0 || n===1){
        return 1;
    }
    else{
        return n* fac(n-1);
    }   
}   
let result=fac(6);
console.log("Factorial of "+ 6 + " is "+ result);