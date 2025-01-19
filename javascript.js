let playerScore = 0;
let computerScore = 0;
let rounds = 5;

// Player choice prompt
function getPlayerChoice() {
    let choice;
    do {
        choice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

// Computer choice generator
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Game logic
function determineWinner(playerChoice, computerChoice) {
    let result;
    
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Display the result on the page
    document.getElementById("result").textContent = result;
    return result;
}

function incrementScore(winner) {
    if (winner === "You win!") {
        playerScore++;
        document.getElementById("playerScore").textContent = playerScore;
    } else if (winner === "Computer wins!") {
        computerScore++;
        document.getElementById("computerScore").textContent = computerScore;
    }
}

// Main game loop (5 rounds)
for (let i = 0; i < rounds; i++) {
    // Get choices from player and computer
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    
    // Determine the winner of the round
    let result = determineWinner(playerChoice, computerChoice);
    
    // Increment the score based on the result
    incrementScore(result);
}

// After the loop, display the final score (optional)
console.log("Final Score: Player - " + playerScore + " Computer - " + computerScore);
