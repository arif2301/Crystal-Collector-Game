//doctype : JavaScript - psychic game

console.log ("testing for crystal game");

//the randomly generated number that the player has to add up
var targetNumberText = document.getElementById ("target-number");

//connecting to the player stats on HTML
var playerTotalText = document.getElementById("player-total"); 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

var userTotal = 0;
var wins = 0;
var losses = 0;
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;
var gameOver = false;


var targetNumber=0;
//function to create a random target number between 19 and 120
function getTargetNumber () {
    targetNumber= 20 + Math.floor (Math.random ()*100);
    console.log (targetNumber);
    }

//function to get the random numbers for all 4 gems between 1-12
function getGemNumbers () {
    var y = 1 + Math.floor (Math.random ()*12);
    return y; 
    }

//function to reset and get new numbers
function restart () {
    getTargetNumber ();
    gemOne = getGemNumbers ();
    gemTwo = getGemNumbers ();
    gemThree = getGemNumbers ();
    gemFour = getGemNumbers ();
    userTotal = 0;
    targetNumberText.textContent = "The Target Number is : " + targetNumber;

    }

function game () {

    if (userTotal === targetNumber) {
        wins++;
        gameOver = true;
        alert ("YOU WON!! Game will restart");
        restart ();
    }
    else if (userTotal > targetNumber) {
        losses++;
        gameOver = true;
        alert ("You lost, try again! Game will restart");
        restart ();
    } 


    playerTotalText.textContent = "Your total so far is : " + userTotal;
    winsText.textContent = "Your Wins : " + wins;
    lossesText.textContent = "Your Losses : " + losses;

}   

// game starts here
restart ();

// click event for each button click. i initally tried to build this into an array so i don't the function 4 times 
// but i couldn't do it. too many challenges
$("#gem1").click ( function () {

    console.log ($(this).val());
    console.log ("gem 1 ");
    console.log (gemOne);
    userTotal += gemOne;
    console.log (userTotal);
    game ();
})
$("#gem2").click ( function () {
    console.log ("gem 2 ");
    console.log (gemTwo);
    userTotal += gemTwo;
    playerTotalText.textContent = "Your total so far end : " + userTotal;
    game ();
})
$("#gem3").click ( function () {
    console.log ("gem 3 ");
    console.log (gemThree);
    userTotal += gemThree;
    playerTotalText.textContent = "Your total so far end : " + userTotal;
    game ();
})
$("#gem4").click ( function () {
    console.log ("gem 4 ");
    console.log (gemFour);
    userTotal += gemFour;
    playerTotalText.textContent = "Your total so far end : " + userTotal;
    game ();
})