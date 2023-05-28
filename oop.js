"use strict";
//constructor function
//arrow function can't use as constructor function because there isn't own this keyword
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never create function in constructor because when create new obj, it created function
  //   console.log("this", this);
  //   console.log("firstName", this.firstName);
  //   console.log("birthYear", this.birthYear);
};

const palm = new Person("Jonas", 1991);
console.log(palm);
console.log(palm instanceof Person);
// 1. New {} is created
// 2. function is called, this = new {}
// 3. new {} linked to prototype
// 4. function automatically return {}
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

palm.calcAge();

console.log(palm.__proto__);
console.log(palm.__proto__.__proto__);

const arr = [3, 6, 4, 5, 6, 9, 3]; // [] === short hand new Array

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

//challenge 1
// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.name} is going to at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.name} is going to at ${this.speed} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.accelerate();

// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],
//   get lastest() {
//     return this.movements.slice(-1).pop();
//   },
// };

// const PersonProto = {
//   calAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calAge();

// const sarah = Object.create(PersonProto);

//Code Challenge 2

const Car = {
  init(name, speed) {
    this.name = name;
    this.speed = speed;
  },

  get speedUs() {
    return this.speed / 1.6;
  },

  set speedUs(speed) {
    this.speed = speed * 1.6;
  },

  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  },

  break() {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  },
};

const ford = Object.create(Car);

ford.init("Ford", 120);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUs = 50;
console.log(ford);
console.log(ford.speedUs);
