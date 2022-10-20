//
/*
function caculate(n){
    return n * n;
}

// lambada function

const calcAge = birthYear => 2037 - birthYear;

const age = calcAge(1997);

console.log(`My age is ${age}.`);
*/
//Coding challenge #5

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (first, second ,third) => (first + second + third) / 3;

function checkWinner(scoreDolphins, scoreKoalas){
    if (scoreDolphins > scoreKoalas * 2){
        console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas}).`);
    }else if (scoreKoalas > scoreDolphins * 2){
        console.log(`Koalas win (${scoreDolphins} vs ${scoreKoalas}).`);
    }else{
        console.log("No team win.")
    }
}

//Data 1
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

//Data 2
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

*/

//Array
/*
const friends = ['michael', 'Steven', 'Peter'];

const years = new Array(1991, 1992, 2018, 2022);

console.log(friends[0]);
console.log(years[3]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

const twoDArray = [[1, 2], 
                    [3, 4]];

console.log(twoDArray[0][1]);
*/

//Array operation
/*
const friends = new Array('Michael', 'Sreven', 'Peter');

const newLength = friends.push('Joy');
console.log(friends);
console.log(newLength);
*/
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
function calcTip(bill){
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else{
        return bill * 0.2;
    }
}

const bills = new Array(125, 555, 44);

const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

console.log(bills, tips, total);
*/

//Object
/*
const jonasArray = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');

console.log(jonas[interestedIn]);
*/

// Object 

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 79,
    calcBMI: function(){
        this.BMI = this.weight / (this.height ** 2);
        return this.BMI;
    }
};

const John = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function(){
        this.BMI = this.weight / (this.height ** 2);
        return this.BMI;
    }
};

if (Mark.calcBMI() > John.calcBMI()){
    console.log(`${Mark.firstName + ' ' + Mark.lastName}'s BMI (${Mark.BMI} ) is higher then ${John.firstName + ' ' +  John.lastName}'s BMI (${John.BMI}).`);
}else{
    console.log(`${John.firstName +  ' ' + John.lastName}'s BMI (${John.BMI} ) is higher then ${Mark.firstName +  ' ' + Mark.lastName}'s BMI (${Mark.BMI}).`);
};
*/


// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

const tips = new Array(bills.length);
const totals = new Array(bills.length);

function calcTip(bill){
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else{
        return bill * 0.2;
    }
};

for (let i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
};

console.log(bills);
console.log(tips);
console.log(totals);
//
function calcAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
};

const ave = calcAverage(totals);
console.log(ave);