// basic concepts of objects in JavaScript

let person = {
    name: "manish",
    age: 20,
    city: "haldibari-2"
};
console.log("object person:", person);

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

// adding a new property to the object
person.country = "Nepal";
console.log("Updated object person:", person);

// modifying an existing property
person.age = 21;
console.log("Modified age:", person.age);

// deleting a property from the object
delete person.city;
console.log("Object after deleting city property:", person);
