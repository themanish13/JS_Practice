//counting vowels in a string
let str="anuj is a proud gay and his moto is be gay proud and loud";
let count=0;
str = str.toLowerCase(); // convert the string to lowercase to handle both uppercase and lowercase vowels
let vowels = "aeiou";

for(let i=0; i<str.length; i++){
    if("aeiou".includes(str[i])){
        count++;
    }
}

console.log("Number of vowels in the string:", count);