'use strict'; 

function createGreeting(name, age) {
  let yearOfBirth;
  try {
    checkNameEntered(name);
  } catch(e){ 
    console.error(e.message); 
  }
  try { 
    checkAgeEntered(age); 
    yearOfBirth = getYearOfBirth(age);
  } catch(err){ 
    console.error(err.message); 
  }

  return `Hi, my name is ${name} and I\'m ${age} years old. 
  So inevitably I was born in ${yearOfBirth} `;
}

function checkNameEntered(name){ 
  if (typeof name === 'undefined'){ 
    throw new Error('Name is not defined'); 
  }
  if (typeof name !== 'string'){
      throw new TypeError('Name is a not a string');
  }
}

function checkAgeEntered(age){ 
  if (typeof age === 'undefined'){ 
    throw new Error('Age is not defined'); 
  }
  if (typeof age !== 'number'){
      throw new TypeError('Age is not a number');
  }
}

function getYearOfBirth(age){
  if (age < 0) { 
    throw new Error('Age can not be negative');
  } 
  return 2018 - age;
  
}

let name = 'john'; 
let age = 'twenty five'; 

const greeting1 = createGreeting(name, age);
console.log(greeting1);
