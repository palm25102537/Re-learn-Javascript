"use strict";
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");

//high-order function

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split("");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// function transformer(str, fn) {
//   console.log("original", str);
//   console.log("transform", fn(str));
//   console.log("by", fn.name);
// }

// transformer("Javascript is the best!", upperFirstWord);

// const high5 = function () {
//   console.log("←");
// };

// [1, 2, 3].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(greeting, name);
  };
};

const greeter = greet("HEY");

greeter("Jonas");

greet("Hello")("Wasin");

const greetInw = (greeting) => (name) => console.log(greeting, name);

greetInw("Hi")("Palm");
