'use strict'; //activate strict mode to avoid error and create visible mistake

let hasDriversLicense = false;
const passTest = true;

if(passTest){
    hasDriversLicense = true;
}

if(hasDriversLicense) console.log('I can drive XD')


function logger() {
 //function body execute when run function
 console.log('My name is Palm')
}

logger() //calling / running / invoking function

function fruitProcessor(argument,argument2){
    const juice = `Juice with ${argument} argument and ${argument2} another argument`
    return juice // result of calling function is juice
}

const juice = fruitProcessor('apple','orange') //store juice in variable juice
console.log(juice)

const anotherJuice = fruitProcessor('lemon',6)
console.log(anotherJuice)

//use keyword function to declare (function declaration)
// can call before function is defined 
function calAge1(birthYear){
    const present = new Date().getFullYear()

    return present - birthYear
}

const age = calAge1(1994)
// console.log(age)

//value store function in variable (function expression)
// expression produce value
const calAge2 = function (birthYear){
    const present = new Date().getFullYear()

    return present - birthYear
}

const age2 = calAge2(1994)
// console.log(age,age2)
// arrow function (still expression but easier and faster)

const calAge3 = birthYear => new Date().getFullYear() - birthYear;

// auto return value without to write return key word

const age3 = calAge3(1994)

console.log(age,age2,age3)

//care more than 1 line and 1 parameter

const yearUntilRetire = (birthYear,name) => {
    const present = new Date().getFullYear()
    const age = present - birthYear
    const retire = 65 - age
    return `${name} retire when`+" "+retire;
}

console.log(yearUntilRetire(1994,'Wasin'))