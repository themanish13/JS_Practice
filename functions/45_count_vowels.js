





function countVowels(str) {
    let count=0;
    str = str.toLowerCase(); // convert the string to lowercase to handle both uppercase and lowercase vowels
    let vowels = "aeiou";
for(let i=0; i<str.length; i++){
    if("aeiou".includes(str[i])){
        count++;
    }
}
return count;
}
let str="anuj is a proud gay and his moto is be gay proud and loud";
console.log("the number of vowels in the string is: " + countVowels(str));


// another way without using argument and return
function countVowels1(){
    let str="i am a gay ";
    let count=0;
    str = str.toLowerCase();
    let vowels = "aeiou";
for(let i=0; i<str.length; i++){
    if("aeiou".includes(str[i])){
        count++;
    }
}
console.log("the number of vowels in the string is: " + count);
}
countVowels1();