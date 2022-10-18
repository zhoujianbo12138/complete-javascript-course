//Data1
/*
const massofMark = 79;
const heightofMark = 1.69;
const massofJohn = 92;
const heightofJohn = 1.95;
*/

//Date2

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