// let js='amazing'
// if(js === 'amazing') alert('JS is Fun!!!')
// console.log(40+8+23-10)

// let firstName = "Jonas";
// firstName = "Matilda"
//let firstName declaring by Camel Case
//let first_name declaring by ...
//declaring variable (variable calls firstName)
//variable's name can't start with number
//Can't name variable with reserve words in JS (function,new)
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let country = 'Thailand'
// let continent = 'Asia'
// let populations = '63 millions'

// console.log(`${country},${continent},${populations}`)
 // Coding challenge 1

let markHeight;
let markWeight;
let johnHeight;
let johnWeight;

// let markBMI = markWeight/(markHeight**2)
// let johnBMI = johnWeight/(johnWeight**2)
// let markHigherBMI = markBMI > johnBMI

markHeight = 1.69
markWeight = 78
johnHeight = 1.95
johnWeight = 92

const markBMI = markWeight/markHeight**2
const johnBMI = johnWeight/johnHeight**2
const markHigherBMI = markBMI > johnBMI

if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}
// console.log(`${markBMI}>${johnBMI}`,markHigherBMI)

markHeight = 1.88
markWeight = 95
johnHeight = 1.76
johnWeight = 85

const markBMI2 = markWeight/markHeight**2
const johnBMI2 = johnWeight/johnHeight**2
const markHigherBMI2 = markBMI2 > johnBMI2

// console.log(`${markBMI2}>${johnBMI2}`,markHigherBMI2)

if(markHigherBMI2){
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})`)
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI2}) `)
}


// function checkAge(age,name = 'this person'){
//     const isOldEnough = age >= 18;
//     if(isNaN(age)){
//         console.log('Age must be integer')
//         return;
//     }else{
//         if(isOldEnough){
//             console.log(`${name} can start driving license 🚗`)
//         }else{
//             const yearsLeft = 18 - age
//             console.log(`${name} is too young. Wait another ${yearsLeft} years :)`)
//         }
//     }
// }

// checkAge(19,'Tye')
// checkAge(15,'Nune')

// const birthYear = 2012;
// let century;
// if(birthYear <= 2000){
//     century = 20
// }else{
//     century = 21
// }

// console.log(century)

// if(true) do {}

// variables that we declare in the block {} can't access from out side of the block {}