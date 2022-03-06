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