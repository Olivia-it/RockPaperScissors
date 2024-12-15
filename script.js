const computer = document.getElementById("computer");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const result = document.getElementById("result");
const score = document.getElementById("score");
const winner = document.getElementById("winner");
const reset = document.getElementById("reset");


result.textContent = "Round result";
winner.textContent = "Winner";

let options = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let compScore = 0;

// Function to get a random computer choice
function compChoise() {
    let optionsComp = Math.floor(Math.random() * options.length);
    return options[optionsComp];
}

// Function to determine the winner of a round
function determineWinner(playerChoice, cChoice) {
    if (playerChoice === cChoice) {
        return "IT'S A TIE!";
    } else if (
        (playerChoice === "Rock" && cChoice === "Scissors") ||
        (playerChoice === "Paper" && cChoice === "Rock") ||
        (playerChoice === "Scissors" && cChoice === "Paper")
    ) {
        userScore++;
        return "YOU WIN!";
    } else {
        compScore++;
        return "YOU LOSE!";
    }
}

// Function to handle a player's choice and the round result
function handleChoice(playerChoice) {
    let cChoice = compChoise();
    console.log(`Computer: ${cChoice}`);
    console.log(`You: ${playerChoice}`);

    let roundResult = determineWinner(playerChoice, cChoice);

    // Update the result and scores
    result.textContent = roundResult;
    score.textContent = `Your Score: ${userScore} - Computer's Score: ${compScore}`;

    // Show the computer's choice
    computer.textContent = `Computer chose: ${cChoice}`;

    // Update the winner text based on the scores
    if (userScore > compScore) {
        winner.textContent = "You are winning!";
    } else if (compScore > userScore) {
        winner.textContent = "Computer is winning!";
    } else {
        winner.textContent = "It's a tie!";
    }
    endGame();
}

// Add event listeners to each button and pass the player's choice
btn1.addEventListener("click", () => handleChoice("Rock"));
btn2.addEventListener("click", () => handleChoice("Paper"));
btn3.addEventListener("click", () => handleChoice("Scissors"));

function resetGame() {
    location.reload();
}

function endGame() {
    if (userScore === 10 || compScore === 10) {
        resetGame();
    }
} 

reset.addEventListener("click", resetGame);

