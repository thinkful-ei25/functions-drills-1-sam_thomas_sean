'use strict'; 

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I\'m ${age} years old. 
  So inevitably I was born in ${yearOfBirth} `;
}

function getYearOfBirth(age){
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2018 - age;
}

try {
const greeting1 = createGreeting('Thomas', -1);
console.log(greeting1);
} catch(e) {
  console.error(e.message);
}
