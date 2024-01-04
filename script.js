console.log(getComputerChoice());

function getComputerChoice() {
    // randomy return computerchoice selection
    const possibleChoices = ['Rock', 'Paper', 'Scissors'];  
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];  
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    // account for TIES
    // case insensitive inputs from playerSelection
    result = "You Lose! Paper beats Rock";
    return result;
}