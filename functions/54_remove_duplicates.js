const removeDuplicates = arr => [...new Set(arr)];

let numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 6]
//this is the fastest way to use functions 



//original way to remove duplicates
function removeDu(array){
    return [...new Set(array)];
}
let n=[2,22,2,3,4,44,555,555,66,6,66,66,7,7,7];
console.log(removeDu(n));

//for example;
const midpoint= (a,b) => (a+b)/2; 
console.log(midpoint(4,6));