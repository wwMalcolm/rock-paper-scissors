function getComputerChoice() {
    // randomly return computerchoice selection
    const possibleChoices = ['Rock', 'Paper', 'Scissors'];  
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];  
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    // account for TIES
    // case insensitive inputs from playerSelection
    playerSelection = playerSelection.toLowerCase();
    let result = "";

    if (playerSelection == "rock" && computerSelection == "Rock") {
        result = "Tie! Nobody won!";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        result = "You Lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        result = "You Win! Rock beats Scissors!";

    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        result = "You Win! Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        result = "Tie! Nobody won!";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        result = "You Lose! Scissors beats Paper!";

    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        result = "You lose! Rock beats Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        result = "You win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        result = "Tie! Nobody won!";
    }

    return result;
}


const player = "rock";
const computer = getComputerChoice();

console.log(playRound(player, computer));