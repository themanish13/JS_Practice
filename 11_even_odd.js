// just for printing even and odd numbers 
let n= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers:");
    n.forEach(function(num){
        if(num % 2 === 0){
            console.log(num);
        }
    });
console.log("Odd numbers:");
    n.forEach(function(num){
        if(num % 2 !== 0){
            console.log(num);
        }
    });
