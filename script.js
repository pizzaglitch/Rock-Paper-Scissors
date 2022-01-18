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

function playRound(playerSelection, computerSelection) {
var input = playerSelection.toLowerCase()
if (input === computerSelection) {
    return "It's a tie."; 
} 
else if (input === "rock") {
    if (computerSelection === "Scissors") {
            return "You win ! Rock beats scissors.";
            }
        else {
            return "You lose. Paper beats rock.";
         }
    } 
else if (input === "paper") {
    if (computerSelection === "Rock") {
            return "You win! Paper beats rock.";
            } 
        else {
            return "You lose. Scissors beats paper.";
        }
    } 
else if (input === "scissors") {
    if (computerSelection === "Paper") {
            return "You win! Scissors beats paper.";
            }
        else {
            return "You lose. Rock beats scissors."
        }
    }
}
const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));