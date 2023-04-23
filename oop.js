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
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.name} is going to at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.name} is going to at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();
