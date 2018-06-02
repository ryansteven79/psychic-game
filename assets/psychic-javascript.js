var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerChoice = alphabet[Math.floor(Math.random() * (alphabet.length))].toLowerCase();

function resetGame() {
    console.log("Game Over!");
    guessesLeft = 10;
    wins = 0;
    losses = 0;
    document.getElementById("win").innerHTML = "Wins: " + wins;
    document.getElementById("loss").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far: ";
    guessesSoFar = [];
    console.log(guessesLeft, wins, losses)
    computerChoice = alphabet[Math.floor(Math.random() * (alphabet.length))].toLowerCase();
}

function gameOver() {
    document.getElementById("win").innerHTML = "Game Over";
    document.getElementById("loss").innerHTML = "Game Over";
    alert("Computer's Choice: " + computerChoice);
}



document.onkeypress = function (event) {
    var letter = event.key.toLowerCase();
    guessesSoFar.push(letter);
    console.log(letter)
    var x = "";
    for (var i = 0; i < guessesSoFar.length; i++) {
        x = x + " " + guessesSoFar[i];
    }
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + x;
    if (letter === computerChoice) {
        console.log("you guessed correctly!");
        wins++;
    } else {
        console.log("Wrong!!!");
        losses++;
    }
    document.getElementById("win").innerHTML = "Wins: " + wins;
    document.getElementById("loss").innerHTML = "Losses: " + losses;
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    if (guessesLeft <= 0) {
        return gameOver();
    }
}






// If user guesses correct letter: wins++, reset game

// if not: loss++, guessesLeft--

// reset the game after guessesLeft === 0.

//