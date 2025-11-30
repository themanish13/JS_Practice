//conditions in js
let age = prompt("Enter your age:");

if (age < 18) {
    document.writeln("You are a minor.<br>");
} else if (age >= 18 && age < 65) {
    document.writeln("You are an adult.<br>");
} else {
    document.writeln("You are a senior citizen.<br>");
}

// check if even or odd
let number= prompt("Enter a number to check if it's even or odd:");
if (number % 2 === 0) {
    document.writeln(number + " is an even number.<br>");
} else {
    document.writeln(number + " is an odd number.<br>");
}

// check if a number is positive, negative or zero
let num= prompt("Enter a number to check if it's positive, negative or zero:");
if (num > 0) {
    document.writeln(num + " is a positive number.<br>");
} else if (num < 0) {
    document.writeln(num + " is a negative number.<br>");
} else {
    document.writeln("The number is zero.<br>");
}

// check if a year is a leap year
let year= prompt("Enter a year to check if it's a leap year:");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.writeln(year + " is a leap year.<br>");
} else {
    document.writeln(year + " is not a leap year.<br>");
}

// check if a character is a vowel or consonant
let char= prompt("Enter a single character to check if it's a vowel or consonant:");
char= char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    document.writeln(char + " is a vowel.<br>");
} else if ((char >= 'a' && char <= 'z')) {
    document.writeln(char + " is a consonant.<br>");
} else {
    document.writeln("Please enter a valid alphabet character.<br>");
}