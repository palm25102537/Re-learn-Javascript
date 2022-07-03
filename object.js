// const palmArr =[
//     'Wasin', // name
//     'Hongnak', // lastname
//     2022-1994, // age
//     'web developer', // job
//     ['Earth','Bank','Pop','Pao'] //friends
// ];

//contain palmArr entity
//Array can't give elements name reference by index number
//We can reference name by object
//Object define key and value

// const palm = {
//     name:'Wasin',
//     lastName:'Hongnak',
//     job:'web developer',
//     age:(new Date().getFullYear())-1994,
//     friends:['Earth','Bank','Pop','Pao']
// } //Object literal syntax
//Object order value doesn't matter, but Array do
// console.log(palm);
// console.log(palm.lastName);
// console.log(palm['lastName'])// bracket notation
// const nameKey = 'Name'
// console.log(palm['last'+nameKey]) // can put any express in bracket notation
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
// console.log(
//     `${palm.name} has ${palm.friends.length} friends, and his best friend is ${palm.friends[0]}`
// )

//Object method

const palm = {
  firstName: "Wasin",
  lastName: "Hongnak",
  birthYear: 1994,
  job: "Frontend Developer",
  friends: ["Bank", "Earth"],
  hasDriversLicense: true,
  // calAge:function (birthYear){
  //     return +(new Date().getFullYear()) - birthYear
  // }
  // calAge:function(){
  //     console.log('this',this) // this point to palm object
  //     return +(new Date().getFullYear()) - this.birthYear
  // }
  calAge: function () {
    this.age = +new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} is a ${this.calAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(palm.calAge(1994))
// console.log(palm['calAge'](1994))
// console.log(palm.calAge()) //palm object call calAge function
// console.log(palm['calAge']()) //
// console.log(palm.age) // need to calAge one time
// palm.calAge()
// console.log(palm.age)

console.log(palm.summary());

// for (i = 0; i<= 10;i++){
//     console.log(i)
// }

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};

function compareBMI(obj1, obj2) {
  if (!Object.keys(obj1).length || !Object.keys(obj2).length) {
    return "Need information to compare";
  } else {
    return obj1.calBMI() > obj2.calBMI()
      ? `${obj1.fullName}'s BMI (${obj1.calBMI()}) is higher than ${
          obj2.fullName
        }'s BMI (${obj2.calBMI()})!`
      : `${obj2.fullName}'s BMI (${obj2.calBMI()}) is higher than ${
          obj1.fullName
        }'s BMI (${obj1.calBMI()})!`;
  }
}

console.log(compareBMI(mark, john));
