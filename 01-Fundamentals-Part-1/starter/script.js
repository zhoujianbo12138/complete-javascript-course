//Data1
/*
const massofMark = 79;
const heightofMark = 1.69;
const massofJohn = 92;
const heightofJohn = 1.95;
*/

//Date2
/*
const massofMark = 95;
const heightofMark = 1.88;
const massofJohn = 85;
const heightofJohn = 1.76;


//caculate BMI(BMI = MASS / (height ** 2))
const bmiofMark = massofMark / (heightofMark ** 2);
const bmiofJohn = massofJohn / (heightofJohn ** 2);

const markHightBMI = bmiofMark - bmiofJohn > 0;

//console.log(bmiofMark, bmiofJohn, markHightBMI);

if (markHightBMI){
    console.log("Mark's BMI is higher then John's.");
}else{
    console.log("John's BMI is higher then Mark's.")
}

// a perty version

if (markHightBMI){
    console.log(`Mark's BMI (${bmiofMark}) is higher then John's (${bmiofJohn}).`);
}else{
    console.log(`John's BMI (${bmiofJohn}) is higher then Mark's (${bmiofMark}).`);
}
*/

// Codeing chanllenge 3

//Test Date
/*

const aveScoreDoplphins = (96 + 108 + 89) / 3;
const aveScoreKoalas = (88 + 91 + 110) / 3;

if (aveScoreDoplphins === aveScoreKoalas){
    console.log(`Doplphins and Koalas hava same score ${aveScoreDoplphins}.`);
}else if (aveScoreDoplphins > aveScoreKoalas){
    console.log(`Doplphins's score ${aveScoreDoplphins} is higher then Koalas' ${aveScoreKoalas}.`)
}else {
    console.log(`Koalas' score ${aveScoreKoalas} is higher then Doplphins' ${aveScoreDoplphins}.`)
}
*/

//Test Bonus 1
/*
const aveScoreDoplphins = (97 + 112 + 101) / 3;
const aveScoreKoalas = (109 + 95 + 123) / 3;

if (aveScoreDoplphins === aveScoreKoalas && aveScoreDoplphins >= 100) {
  console.log(`Doplphins and Koalas hava same score ${aveScoreDoplphins}.`);
} else if (aveScoreDoplphins > aveScoreKoalas && aveScoreDoplphins >= 100) {
  console.log(
    `Doplphins's score ${aveScoreDoplphins} is higher then Koalas' ${aveScoreKoalas}.`
  );
} else if (aveScoreKoalas > aveScoreDoplphins && aveScoreKoalas >= 100) {
  console.log(
    `Koalas' score ${aveScoreKoalas} is higher then Doplphins' ${aveScoreDoplphins}.`
  );
} else {
  console.log(
    `No team can win, because they both less than 100 (Doplphins ${aveScoreDoplphins}, Koalas' ${aveScoreKoalas})`
  );
}
*/
//Test Bonus 2
/*
const aveScoreDoplphins = (97 + 112 + 101) / 3;
const aveScoreKoalas = (109 + 95 + 106) / 3;

if (aveScoreDoplphins > aveScoreKoalas && aveScoreDoplphins >= 100) {
  console.log(
    `Doplphins's score ${aveScoreDoplphins} is higher then Koalas' ${aveScoreKoalas}.`
  );
} else if (aveScoreKoalas > aveScoreDoplphins && aveScoreKoalas >= 100) {
  console.log(
    `Koalas' score ${aveScoreKoalas} is higher then Doplphins' ${aveScoreDoplphins}.`
  );
} else if (aveScoreDoplphins === aveScoreKoalas ) {
    if (aveScoreDoplphins >= 100){
        console.log(`Doplphins and Koalas hava same score ${aveScoreDoplphins}.`);
    }else {
        console.log("no team win.")
    }
  } 
else {
  console.log(
    `No team can win, because they both less than 100 (Doplphins ${aveScoreDoplphins}, Koalas' ${aveScoreKoalas})`
  );
}
*/

// The switch statement





// The conditional operater
/*
 const age = 18;

 age >= 18 ? console.log("you can drink.") : console.log("you can't drink.");

 const drink = age >= 18 ? 'wine' : 'water';
 console.log(drink);

 console.log(`I'd like to have some ${age >= 18 ? 'wine' : 'water'}`);
 */

 //Coding challenge #4
/*
const bill = 275;

const billPercenge = bill >= 50 && bill <= 300;

console.log(`You bill is ${bill}, and your tip is ${billPercenge ? bill * 0.15 : bill * 0.2 }, and the final bill is ${billPercenge ? bill * 1.15 : bill * 1.2}`);
*/

