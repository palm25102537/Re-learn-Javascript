"use strict";
//constructor function
//arrow function can't use as constructor function because there isn't own this keyword
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
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
