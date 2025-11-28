// data basics in js
let currentDate = new Date();
console.log(currentDate); 

let specificDate = new Date('2022-01-01');
console.log(specificDate); 

console.log(currentDate.getFullYear()); 
console.log(currentDate.getMonth() + 1); // returns the current month (0-11, so add 1)
console.log(currentDate.getDate());

console.log(currentDate.getHours()); 
console.log(currentDate.getMinutes()); 
console.log(currentDate.getSeconds());

let timestamp = Date.now();
console.log(timestamp); // returns the number of milliseconds since January 1, 1970

let pastDate = new Date(2020, 0, 1); // January 1, 2020
let diff = currentDate - pastDate; // difference in milliseconds
let diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(diffDays + " days have passed since January 1, 2020.");