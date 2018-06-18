var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
// var computerChoice = alphabet[Math.floor(Math.random() * (alphabet.length))].toLowerCase();

function resetGame() {
    // console.log("Game Over!");
    guessesLeft = 10;
    // wins = 0;
    // losses = 0;
    document.getElementById("win").innerHTML = "Wins: " + wins;
    document.getElementById("loss").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far: ";
    guessesSoFar = [];
    // console.log(guessesLeft, wins, losses)
    computerChoice = alphabet[Math.floor(Math.random() * (alphabet.length))].toLowerCase();
    document.getElementById("you-win").style.display = "none";
    document.getElementById("board").style.display = "block";
    document.getElementById("btn").style.display = "none";
}

function gameOver() {
    document.getElementById("win").innerHTML = "Game Over";
    document.getElementById("loss").innerHTML = "Game Over";
    resetGame();
    alert("Computer's Choice: " + computerChoice);
}

function youWin() {
    var x = document.getElementById("board");
    x.style.display === "none";
}

document.onkeypress = function (event) {
    // console.log("keyCode: " + event.keyCode); //helper//
    console.log(computerChoice);
    if (event.keyCode < 97 || event.keyCode > 122) {
        alert("invalid key!")
        guessesLeft++;
        losses--;
    } else {
        var letter = event.key.toLowerCase();
        guessesSoFar.push(letter);
        console.log("User guess: " + letter)
        guessesSoFar;
        // var x = "";
        // for (var i = 0; i < guessesSoFar.length; i++) {
        //     x = x + " " + guessesSoFar[i];
        // }
    }
    // document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far: " + x;
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far: " + guessesSoFar;
    if (letter !== computerChoice) {
        // console.log("Wrong!!!");
        document.getElementById("loss").innerHTML = "Losses: " + losses;
    } else {
        wins++;
        document.getElementById("win").innerHTML = "<h1>You Win!</h1>";
        document.getElementById("board").style.display = "none";
        document.getElementById("you-win").style.display = "block";
        document.getElementById("btn").style.display = "block";
    }
    // document.getElementById("win").innerHTML = "Wins: " + wins;
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    if (guessesLeft <= 0) {
        losses++;
        return gameOver();
    }
}