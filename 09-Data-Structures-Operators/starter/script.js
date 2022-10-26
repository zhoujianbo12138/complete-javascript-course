'use strict';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [[this.starterMenu[starterIndex]], [this.mainMenu[mainIndex]]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilived to ${adress} at ${time}`
    );
  },
};

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
///////////////////////////////////////
// const getCode = str => str.slice(0, 3).toUpperCase();
// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
// */
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.trim().toLowerCase().split('_');
//     const newSecond = [second[0].toUpperCase(), second.slice(1)].join('');
//     const newRow = [first, newSecond].join('').padEnd(20, ' ');

//     console.log(`${newRow}${'✅'.repeat(i + 1)}`);
//   }
// });
///////////////////////////////////////
// // Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.indexOf('portugal'));
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
 The values are the events themselves, and the keys are the minutes in which each event happened
  (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// //1. Create an array 'events' of the different game events that happened (no duplicates)
// const eventArray = [...gameEvents.values()];
// const eventSet = new Set(eventArray);
// const events = Array.from(eventSet);
// //2. After the game has finished, is was found that the yellow card from minute 64 was unfair.
// //So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);
// //3. Print the following string to the console: "An event happened, on average,
// //every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game,
// //like this:
// //       [FIRST HALF] 17: ⚽️ GOAL
// for (const [time, event] of gameEvents) {
//   const str = time < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`     ${str} ${time}: ${event}`);
// }
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console,
 along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1. Loop over the game.scored array and print each player name to the console,
// //  along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [i, name] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${name}`);
// }
// // 2. Use a loop to calculate the average odd and log it to the console
// // (We already studied how to calculate averages, you can go check if you don't remember)
// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }
// console.log(sum / Object.values(game.odds).length);
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object,
// //don't hardcode them (except for "draw"). HINT: Note how the odds
// //and the game objects have the same property names 😉
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
// // BONUS: Create an object called 'scorers' which contains the names of the players
// //who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
// GOOD LUCK 😀
// const arr = [7, 8, 9];
// const NewArr = [1, 2, ...arr];
// console.log(NewArr);
// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 1,
//   adress: '123E, 456W',
//   time: '12:30',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// const arr = [1, 2, 3, 4];
// const [x, y, z, w] = arr;
// console.log(x, y, z, w);

// let [first, second] = restaurant.categories;
// console.log(first, second);
// const tem = first;
// first = second;
// second = tem;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// //
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const str = 'jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We open on ${properties.length} day:`;
// for (const day of properties) {
//   openStr += ` ${day} `;
// }
// console.log(openStr);
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

//1 Create one player array for each team (variables 'players1' and 'players2')

// const [goalkeeper1, ...fieldPlayers1] = [...game.players[0]];
// const player1 = [goalkeeper1, fieldPlayers1];
// console.log(player1);
// const [goalkeeper2, ...fieldPlayers2] = [...game.players[1]];
// const player2 = [goalkeeper2, fieldPlayers2];
// console.log(player2);
// //2. The first player in any player array is the goalkeeper and the others are field players.
// //For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
// // and one array ('fieldPlayers') with all the remaining 10 field players
// const teams1 = {
//   gk: goalkeeper1,
//   fieldPlayers: fieldPlayers1,
// };
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
// //4. During the game, Bayern Munich (team 1) used 3 substitute players.
// //So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// //5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log(team1, draw, team2);
// //6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// //and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const occrCount = function (element, arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (element === arr[i]) {
//       count += 1;
//     }
//   }
//   return count;
// };

// let goal = [];
// const scored = [...game.scored];
// for (let i = 0; i < allPlayers.length; i++) {
//   goal[i] = occrCount(allPlayers[i], scored);
// }

// const printGoals = function (...names) {
//   let str = '';
//   for (let i = 0; i < names.length; i++) {
//     let index = allPlayers.indexOf(names[i]);
//     str += `${names[i]}: ${goal[index]}`;
//   }
//   return str;
// };
// console.log(printGoals('Lewandowski'));
// //7. The team with the lower odd is more likely to win.
// // Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// let winer = (team1 < team2 && 'team1') || 'team2';
// console.log(winer);
