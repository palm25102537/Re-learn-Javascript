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

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const { scored, odds } = game;

// for ([idx, playerName] of scored.entries()) {
//   console.log(`Goal ${idx + 1}: ${playerName}`);
// }

// let sum = 0;
// for ([key, value] of Object.entries(odds)) {
//   sum += value;
//   console.log(`Odd of ${game[key] ? "victory" + " " + game[key] : "draw"}`);
// }
// const avg = sum / Object.entries(odds).length;
// console.log(avg);
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

// const rest = new Map();

// rest.set("name", "TEST");
// rest.set(1, "TEST");
// rest.set(true, "TEST");
// rest
//   .set("testChain", "TEST")
//   .set("chain", "test")
//   .set(true, "Open")
//   .set(false, "Close")
//   .set("Open", 11)
//   .set("Close", 23);

// console.log(rest);

// console.log(rest.get(true));

// const time = 21;

// console.log(rest.get(time > rest.get("Open") && time < rest.get("Close")));

// const question = new Map([
//   ["question", "What is the answer"],
//   [1, "false"],
//   [2, "false"],
//   [3, "true"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again"],
// ]);

// console.log(question.get("question"));

// for ([key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// const answer = +prompt("Your Answer");
// console.log(typeof answer, answer);
// console.log(question.get(answer === question.get("correct")));

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const uniqueEvents = new Set(gameEvents.values());
const events = [...uniqueEvents];
console.log(events);
gameEvents.delete(64);
const avgEventHappened = 90 / gameEvents.size;
const realAvgEventHappened = [...gameEvents.keys()].pop() / gameEvents.size;
console.log(
  `An event happened, on average , every ${avgEventHappened} minutes`
);
console.log(
  `An event happened, on average , every ${realAvgEventHappened} minutes`
);

for (let [key, value] of gameEvents.entries()) {
  console.log(`[${key <= 45 ? "FIRST" : "SECOND"} HALF] ${key} : ${value}`);
}
