// print even numbers from an array
let n= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("even numbers from array:");
 n.forEach(function(num){
    if(num % 2 === 0){
        console.log(num);
    }
});   // this is easy version as foreach doesnt need index like for loop

// Alternatively, using a for loop
console.log("even numbers from array using for loop:");
for(let i = 0; i < n.length; i++){
    if(n[i] % 2 === 0){
        console.log(n[i]);
    }
}