function getComputerChoice() {
    // randomly return computerchoice selection
    const possibleChoices = ['Rock', 'Paper', 'Scissors'];  
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];  
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    // account for TIES
    // case insensitive inputs from playerSelection
    // result 0 = lose
    // result 1 = win
    // result 2 = tie
    playerSelection = playerSelection.toLowerCase();
    let result;

    if (playerSelection == "rock" && computerSelection == "Rock") {
        result = 2;
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        result = 0;
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        result = 1;

    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        result = 1;
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        result = 2;
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        result = 0;

    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        result = 0;
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        result = 1;
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        result = 2;
    } 
    else {
        result = "You have entered an incorrect value!";
    }

    return result;
}


function game() {}


const player = "rock";
const computer = getComputerChoice();

let msgWin = `You win! ${player.charAt(0).toUpperCase()} beats ${computer}!`;
let msgLose = `You lose! ${computer} beats ${player.charAt(0).toUpperCase()}`;
let msgTie = "Tie! Nobody won!";

let userInput = prompt("Enter either Rock, Paper or Scissors");
console.log(userInput);

// console.log(playRound(player, computer));