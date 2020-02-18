var inquier = require("inquirer");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var setLetter = [];
var guessedLetter = [];
var guesses = 7;
var letter;
function start() {
    var ranSpot = Math.floor(Math.random() * 26);
    console.log(ranSpot);
    letter = alphabet[ranSpot];
    setLetter.push(letter);
    console.log("Chosen letter: " + letter);
    begin();
}
start();

function begin() {
    for (var i = 0; i < setLetter.length; i ++) {
        console.log("Guess the letter!");
        console.log("_ ");
    };
    inquier.prompt([
        {
            name: "letter",
            type: "What letter do you think I'm thinking of?"
        }
    ]).then(function(answer) {
        if (answer.letter === letter){
            console.log("Correct!");
        } else if (!guessedLetter.includes(answer.letter)) {
            console.log("Incorrect! Guess again.");
            guesses--;
            guessedLetter.push(answer.letter);
            console.log(guesses);
            begin();
        } else {
            console.log("You already guessed this, try again!");
            guesses--;
            begin();
        }
    })
}