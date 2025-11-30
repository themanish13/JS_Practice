// functions to check palindrome
function isPalindrome(num){
    let str=num.toString();
    let reversed= str.split('').reverse().join('');
    return str===reversed;
}
let n=121;
console.log(isPalindrome(n));