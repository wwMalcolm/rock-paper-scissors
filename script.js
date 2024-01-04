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

function getUserInput() {
    return result = prompt("Enter either Rock, Paper or Scissors");
}

function playOneRound() {
    let player = getUserInput();
    let computer = getComputerChoice();
    let result = playRound(player, computer);
    let msgWin = `You win! ${player.charAt(0).toUpperCase() + player.slice(1)} beats ${computer}!`;
    let msgLose = `You lose! ${computer} beats ${player.charAt(0).toUpperCase() + player.slice(1)}`;
    let msgTie = "Tie! Nobody won!";

    if (result == 0) {
        console.log(msgLose);
    } else if (result == 1) {
        console.log(msgWin);
    } else if (result == 2) {
        console.log(msgTie)
    } else {
        console.log("An error has occured");
    }

    return result;
}


function game() {
    let player = 0;
    let computer = 0;

    console.log("Game of Rock Paper Scissors Begin!");
    console.log("Best out of five!");
    console.log("Start Game 1:");
    let result = playOneRound();
    if (result == 0) {
        computer += 1;
    } else if (result == 1) {
        player += 1;
    }

    console.log("Start Game 2:");
    result = playOneRound();
    if (result == 0) {
        computer += 1;
    } else if (result == 1) {
        player += 1;
    }

    console.log("Start Game 3:");
    result = playOneRound();
    if (result == 0) {
        computer += 1;
    } else if (result == 1) {
        player += 1;
    }

    console.log("Start Game 4:");
    result = playOneRound();
    if (result == 0) {
        computer += 1;
    } else if (result == 1) {
        player += 1;
    }

    console.log("Start Game 5:");
    result = playOneRound();
    if (result == 0) {
        computer += 1;
    } else if (result == 1) {
        player += 1;
    }

    console.log("END OF GAME! Printing scores.....");
    console.log("=========================================");
    console.log("Player Score: ", player);
    console.log("Computer Score: ", computer);

    if (player > computer) {
        console.log("Winner is the Player!!");
    } else if (player < computer) {
        console.log("Winner is Computer!!");
    } else {
        console.log("It is a tie!!");
    }
}

game();

// testFunction();

// function testFunction() {
//     let tempvalue = 0;
//     tempvalue += 1;
//     tempvalue += 5;
//     console.log(tempvalue);
// }


// const player = "rock";
// const computer = getComputerChoice();

// let userInput = prompt("Enter either Rock, Paper or Scissors");
// console.log(userInput);

// console.log("Computer choice: ", computer);
// console.log(playRound(player, computer));