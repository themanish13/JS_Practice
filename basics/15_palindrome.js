// palindrome means the string which reads same forwards and backwards
let str ="madam";   // this is for word
let reversed="";

reversed =str.split('').reverse().join('');
if(str===reversed){
    console.log(str + " is a palindrome");
}else{
    console.log(str + " is not a palindrome");
}


//palindrome checker for number
let num=121;
let reversedNum="";

reversedNum = num.toString().split('').reverse().join(''); // convert number to string and then reverse or directly reverse put in string
if(num.toString()===reversedNum){
    console.log(num + " is a palindrome");
}else{
    console.log(num + " is not a palindrome");
}