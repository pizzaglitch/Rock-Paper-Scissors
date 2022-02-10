let playerScore = 0; 
let computerScore = 0; 
function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else if (randomNumber === 2) {
        return "scissors";
    }
}

function playRound() {
// const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors.");
const computerSelection = computerPlay();
// const input = playerSelection.toLowerCase(); 
if (input === computerSelection) {
    return "It's a tie."; 
} 
else if (input === "rock") {
    if (computerSelection === "scissors") {
        playerScore +=1;
        return "You win! Rock beats scissors.";
        } else {
        computerScore +=1;
        return "You lose. Paper beats rock.";
        }
    } 
else if (input === "paper") {
    if (computerSelection === "rock") {
        playerScore +=1;
        return "You win! Paper beats rock.";
        } else {
        computerScore +=1;
        return "You lose. Scissors beats paper.";
        }
    } 
else if (input === "scissors") {
    if (computerSelection === "paper") {
        playerScore +=1;
        return "You win! Scissors beats paper.";
        } else {
        computerScore +=1;
        return "You lose. Rock beats scissors.";
        }
    }

/* Returns "Invalid entry" when user inputs a value other than RPS. Doesn't work yet.
Keeps counting subsequent rounds 
     let isValid = false; 
while (isValid==false){
     if (input != ("rock" || "paper" || "scissors")) {
        return "Invalid entry";
        
    } else {
        isValid = true;
    }
}
*/
}
//document.getElementById('results').textContent = 

// possible solution to print playRound to div 
//  function printResults(playRound) {
//      document.getElementById('results').textContent = playRound;
//      console.log(playRound);
//  }

function winner() {
    if (playerScore > computerScore) {
    return "The all-knowing computer has been defeated. The Player has won. Humanity rejoices!"; 
} else if (playerScore < computerScore) { 
    return "Player has been defeated. The robots have taken over..."; 
} else if (playerScore === computerScore) {
    return "It's a draw! Hmm... what're the odds?";
}
}


//event listener for button to run playRound function
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input = button.id;
        document.getElementById('results').textContent = playRound(input) + ` The score is Player: ${playerScore}, Computer: ${computerScore}.`;
        if (playerScore >= 5 || computerScore >= 5) {
        document.getElementById('winner').textContent = winner();
        }
        
    });
});





 //function game() { 
 //    playRound + " First round complete.";
//     console.log(playRound() + " Second round complete.");
//     console.log(playRound() + " Third round complete.");
//     console.log(playRound() + " Fourth round complete.");
//     console.log(playRound() + " Fifth round complete.");
//     console.log(winner());
 // }

// game()