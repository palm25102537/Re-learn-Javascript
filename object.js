const palmArr =[
    'Wasin', // name
    'Hongnak', // lastname
    2022-1994, // age
    'web developer', // job
    ['Earth','Bank','Pop','Pao'] //friends
];

//contain palmArr entity
//Array can't give elements name reference by index number
//We can reference name by object
//Object define key and value

const palm = {
    name:'Wasin',
    lastName:'Hongnak',
    job:'web developer',
    age:(new Date().getFullYear())-1994,
    friends:['Earth','Bank','Pop','Pao']
} //Object literal syntax
//Object order value doesn't matter, but Array do
console.log(palm);
console.log(palm.lastName);
console.log(palm['lastName'])// bracket notation
const nameKey = 'Name'
console.log(palm['last'+nameKey]) // can put any express in bracket notation
//Dot notation can't
// const interest = prompt('What do you want to know about Palm? Choose between Name, lastName, age, Job, and friends')
// console.log(palm.interest) // return undefined because in palm there isn't interest key

// if(palm[interest]){
//     console.log(palm[interest])
// }else{
//     console.log('Bad Request!')
// }

// palm.location = 'Bangkok'
// palm['twitter'] = '@palmpalm'

// console.log(palm)

//Challenge
console.log(
    `${palm.name} has ${palm.friends.length} friends, and his best friend is ${palm.friends[0]}`
)