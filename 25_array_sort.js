// sorting array in ascending and descending order
let a=[3,7,6,5,111,9];
console.log("Original array:", a);
 // ascending order
a.sort(function(x,y){
    return x-y;
});
console.log("Array in ascending order:", a);
// descending order
a.sort(function(x,y){
    return y-x;
});
console.log("Array in descending order:", a);