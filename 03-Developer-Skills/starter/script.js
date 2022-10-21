// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    if (typeof temps[i] !== "number") continue;

    if (max < temps[i]) max = temps[i];
    if (min > temps[i]) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const TempAmplitude = calcTempAmplitude(temperatures);
console.log(TempAmplitude);
*/
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
/*
const calcTempAmplitude = function (temps, temps2) {
  const L = temps2.length;
  for (let i = 0; i < L; i++) {
    temps.push(temps2.pop());
  }

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    if (typeof temps[i] !== "number") continue;

    if (max < temps[i]) max = temps[i];
    if (min > temps[i]) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const TempAmplitude1 = calcTempAmplitude(
  [3, -2, -6, -1, "error"],
  [9, 13, 17, 15, 14, 9, 5]
);
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}℃ in ${i + 1} day`;
  }
  return str + "...";
}

const data1 = printForecast([17, 21, 23]);
console.log(data1);
*/
