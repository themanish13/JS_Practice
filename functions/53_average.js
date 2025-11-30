function avg(arr){
    let sum=0;
   for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
    avg=sum/arr.length;
    return avg;
    
}
let a=[2,2];
console.log(avg(a));


//another way

const avga = arra => arra.reduce((a, b) => a + b, 0) / arra.length;// here reduce combines all values into one and (a, b) => a + b does sum
//of all and o is the first element of a

let numbers = [3, 4, 5, 6, 7, 8];
console.log(avga(numbers));          // 5.5
