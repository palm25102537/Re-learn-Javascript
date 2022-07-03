const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"]; //literal syntax
// console.log(friends)

// const years = new Array(1991,1984,2008,2020)

// console.log(friends[0]) // array are zero base

// console.log(friends.length) // actual amount elements in array

// friends[2] = 'Jay'

// console.log(friends)

/*Array Method*/

const newFriends = friends.push("Jay");

//method function add new element to last index of array and return new length

//mutate original array

console.log(friends);
console.log(newFriends);

friends.unshift("John");

//method function add new element to first index of array

console.log(friends);

friends.pop();

//remove and return the last element of array

console.log(friends);

friends.shift();

// remove and return the first element of array

console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

//code challenge

function calcTip(bill) {
  let total = [];
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * (1 + 15 / 100);
    total.push({ bill, tip, total: bill + tip });
  } else {
    tip = bill * (1 + 25 / 100);

    total.push({ bill, tip, total: bill + tip });
  }

  return total;
}

console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));
