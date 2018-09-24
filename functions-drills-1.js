'use strict'; 

function createGreeting(name, age) {
  const yearOfBirth = 2018 - age; 
  return `Hi, my name is ${name} and I\'m ${age} years old. \n So inevitably I was born in ${yearOfBirth} `;
}


const greeting1 = createGreeting('Thomas', 30);
console.log(greeting1);
