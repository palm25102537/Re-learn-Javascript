// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"]; //literal syntax
// // console.log(friends)

// // const years = new Array(1991,1984,2008,2020)

// // console.log(friends[0]) // array are zero base

// // console.log(friends.length) // actual amount elements in array

// // friends[2] = 'Jay'

// // console.log(friends)

// /*Array Method*/

// const newFriends = friends.push("Jay");

// //method function add new element to last index of array and return new length

// //mutate original array

// console.log(friends);
// console.log(newFriends);

// friends.unshift("John");

// //method function add new element to first index of array

// console.log(friends);

// friends.pop();

// //remove and return the last element of array

// console.log(friends);

// friends.shift();

// // remove and return the first element of array

// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// //code challenge

// function calcTip(bill) {
//   let total = [];
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * (1 + 15 / 100);
//     total.push({ bill, tip, total: bill + tip });
//   } else {
//     tip = bill * (1 + 25 / 100);

//     total.push({ bill, tip, total: bill + tip });
//   }

//   return total;
// }

// console.log(calcTip(125));
// console.log(calcTip(555));
// console.log(calcTip(44));

// const test = "abc";

// function testWord() {
//   const first = test.charAt(0);
//   console.log(first);
// }

// testWord();

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const { scored, odds } = game;

for ([idx, playerName] of scored.entries()) {
  console.log(`Goal ${idx + 1}: ${playerName}`);
}

let sum = 0;
for ([key, value] of Object.entries(odds)) {
  sum += value;
  console.log(`Odd of ${game[key] ? "victory" + " " + game[key] : "draw"}`);
}
const avg = sum / Object.entries(odds).length;
console.log(avg);
// const [player1, player2] = game.players;

// console.log(player1, player2);

// const [gk, ...fieldPlayer] = player1;

// console.log(gk, fieldPlayer);

// const allPlayers = [...player1, ...player2];

// console.log(allPlayers);

// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;

// console.log(team1, draw, team2);

// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// }

// printGoals(...game.scored);

// team1 < team2 && console.log("Team1 is more likely to win");
// team1 > team2 && console.log("Team2 is more likely to win");
