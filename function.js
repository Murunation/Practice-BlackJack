
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let player = {
    name: "Per",
    chips: 1000,
    sayHello: function(){
        console.log("Hey bro");
    }
}
//Example
player.sayHello();
//If...else conditionals //Rule of Black Jack: <21 Good 21 Congrats >21 Bad

let message = "";

//store the message-El paragraph
let messageEl = document.getElementById("message-El");

//store the sum-el paragraph
let sumEl = document.getElementById("sum-el");

//store the cards-el paragraph
let cardsEl =  document.getElementById("cards-el");
/// Test section



//Chips
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips

//
let sentence = ["Hello", "my", "name", "is", "Javascript"];
let greetingEl =  document.getElementById("greeting-el");
console.log(greetingEl);

for (i=0; i<sentence.length; i++){
    greetingEl.textContent += sentence[i] + " ";
}



//Test section


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum =  firstCard + secondCard;
    renderGame();
}

//Render
function renderGame(){
    //render out firstCard and second card
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    //render out All the cards we have
    for (i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack 🥳";
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    //Display message 
    messageEl.textContent  = message;
    //Display Sum
}

//Random number generator function usign Math.floor and Math.Random
function getRandomCard() { 
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber;
    }
    
}

//New card function //Exercise Check Isalive or Not
function newCard(){

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        //Rename start game function cause why is startgame function game already started
        renderGame();
    }
    
}
