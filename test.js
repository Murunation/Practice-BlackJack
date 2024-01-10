let player = 102;
let player2 = 101;

function getF(){
    if (player < player2) {
        return player
    } else  if (player2 < player){
        return player2
    } else {
        return player
    }
}
// ctrl + d
let fastestRace = getF();

console.log(fastestRace);

function raceTimeTotal(){
    return player + player2
}

let totalTime = raceTimeTotal();

console.log("Total Time: " + totalTime);

//Math Random (Random number generator)
// let randomNumber =Math.round(Math.random() + 1) 

// console.log("Random Number: " + randomNumber);

//Math floor

let flooredNumber = Math.floor(3.4444);

console.log("Floored Number: " + flooredNumber);

//Math Random (Random number generator)
// let randomNumber =Math.floor((Math.random() * 6) + 1) 

// console.log("Random Number + Floored: " + randomNumber);

function rollDice(){
    let randomNumber =Math.floor((Math.random() * 6) + 1);
    return randomNumber;
}

console.log("Roll Dice: " + rollDice());

//Logical operator && ||

let compCourse = true;
let getCertificate = true;

if (compCourse && getCertificate == true) {
    generateCertificate();
} else {
    console.log("Please Complete Course!!!");
}

function generateCertificate () {
    console.log("Generating Certificate...");
}

let test1 = false;
let test2  = true;

if (test1 || test2 == true){
    console.log("True");
} else {
    console.log("False");
}

// Exercise
let likesDoc = false;
let likesStartups = false;

if (likesDoc || likesStartups === true){
    recommendMovie();
} else {
    console.log( "U may not like it. Skip it");
}


function recommendMovie( ){
    console.log("Hey! U will like it");
}