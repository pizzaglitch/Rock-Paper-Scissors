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
document.getElementById('results').textContent = "Computer: " + computerSelection; 

if (input === computerSelection) {
    return "It's a tie."; 
} 
else if (input === "rock") {
    if (computerSelection === "scissors") {
        playerScore +=1;
        return "You win ! Rock beats scissors. Player has " + playerScore + " point(s).";
        } else {
        computerScore +=1;
        return "You lose. Paper beats rock. Computer has " + computerScore + " point(s).";
        }
    } 
else if (input === "paper") {
    if (computerSelection === "rock") {
        playerScore +=1;
        return "You win! Paper beats rock. Player has " + playerScore + " point(s).";
        } else {
        computerScore +=1;
        return "You lose. Scissors beats paper. Computer has " + computerScore + " point(s).";
        }
    } 
else if (input === "scissors") {
    if (computerSelection === "paper") {
        playerScore +=1;
        return "You win! Scissors beats paper. Player has " + playerScore + " point(s).";
        } else {
        computerScore +=1;
        return "You lose. Rock beats scissors. Computer has " + computerScore + " point(s).";
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
function printResults(playRound) {
    document.getElementById('results').textContent = playRound;
    console.log(playRound);
}

function winner() {
    if (playerScore > computerScore) {
    return "Player wins."; 
} else if (playerScore < computerScore) { 
    return "Computer wins."; 
} else if (playerScore === computerScore) {
    return "It's a draw!";
}
}

//event listener for button to run playRound function
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input = button.id;
        console.log(playRound(input));
    });
});


// possible solution to output round result to div 
// const results = document.querySelector('#results');
// const resultEachRound = document.createElement('div');
// content.textContent = console.log(playground);
// resultEachRound.classList.add('resultEachRound');
// results.appendChild(resultEachRound);



// function game() { --removing temporarily--
//     console.log(playRound() + " First round complete.");
//     console.log(playRound() + " Second round complete.");
//     console.log(playRound() + " Third round complete.");
//     console.log(playRound() + " Fourth round complete.");
//     console.log(playRound() + " Fifth round complete.");
//     console.log(winner());
     
// }

//game();