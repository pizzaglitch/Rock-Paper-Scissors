let playerScore = 0; 
let computerScore = 0; 
let draws = 0; 
function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else if (randomNumber === 2) {
        return "Scissors";
    }
}

function playRound() {
const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors.");
const computerSelection = computerPlay();
const input = playerSelection.toLowerCase()
if (input === computerSelection) {
    return "It's a tie."; 
} 
else if (input === "rock") {
    if (computerSelection === "Scissors") {
        playerScore +=1;
        return "You win ! Rock beats scissors. Player has " + playerScore + " point(s).";
        } else {
        computerScore +=1;
        return "You lose. Paper beats rock. Computer has " + computerScore + " point(s).";
        }
    } 
else if (input === "paper") {
    if (computerSelection === "Rock") {
        playerScore +=1;
        return "You win! Paper beats rock. Player has " + playerScore + " point(s).";
        } else {
        computerScore +=1;
        return "You lose. Scissors beats paper. Computer has " + computerScore + " point(s).";
        }
    } 
else if (input === "scissors") {
    if (computerSelection === "Paper") {
        playerScore +=1;
        return "You win! Scissors beats paper. Player has " + playerScore + " point(s).";
        } else {
        computerScore +=1;
        return "You lose. Rock beats scissors. Computer has " + computerScore + " point(s)."
        }
    }
}

function winner() {
    if (playerScore >= 3) {
    return "Player wins."; 
} else  { (computerScore >= 3) 
    return "Computer wins.";
}
}
    
function game() {
    console.log(playRound() + " First round complete.");
    console.log(playRound() + " Second round complete.");
    console.log(playRound() + " Third round complete.");
    console.log(playRound() + " Fourth round complete.");
    console.log(playRound() + " Fifth round complete.");
    console.log(winner());
}

game();



