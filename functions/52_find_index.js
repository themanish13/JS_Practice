function findIndex(arr, value){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return i;
    }
  }
  return -1;
}

let nums = [10, 20, 30, 40, 50];
console.log(findIndex(nums, 40)); // 3


//another way
let array = [10, 20, 30, 40, 50];

let index = array.indexOf(30);
console.log(index);  // 2
