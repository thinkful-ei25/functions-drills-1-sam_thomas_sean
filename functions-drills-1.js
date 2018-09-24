'use strict'; 

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I\'m ${age} years old. 
  So inevitably I was born in ${yearOfBirth} `;
}

function getYearOfBirth(age){
    return 2018 - age;
}

const greeting1 = createGreeting('Thomas', 30);
console.log(greeting1);
