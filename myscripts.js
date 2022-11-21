// Variables
let thing = '';
let round = 0;

let computerScore = 0;
let playerScore = 0;

// Game = Set of 5 Rounds
function game() {
    while (round < 5) {
        playRound(getPlayerSelection(), getComputerChoice());
        round++;
        console.log('End of Round: ' + round + ': Player Score: ' + playerScore + '. Computer Score: ' + computerScore);
    }
    if (playerScore > computerScore) {
        alert('You Win!');
        return 'Player Wins';
    } else {
        alert('You Lose!');
        return 'Computer Wins';
    }
}

console.log(game() + '. Game Result: Player Score: ' + playerScore + '. Computer Score: ' + computerScore);

// Computer Play
function getComputerChoice() {
    const things = ['Rock', 'Paper', 'Scissors'];
    const thing = things[Math.floor(Math.random() * things.length)];
    return thing;
}

// Player Play Prompt
function getPlayerSelection() {
    loop:
    while (true) {
        var thing = prompt('Choose Rock Paper or Scissors');
        switch (capitalizeFirstLetter(thing)) {
            case "Rock":
                break loop;
            case "Paper":
                break loop;
            case "Scissors":
                break loop;
            default: alert("Please enter a valid value");
        }
    }
    return capitalizeFirstLetter(thing);
}

// Capitalize
function capitalizeFirstLetter(s) {
    s = s.toLowerCase();
    return s && s[0].toUpperCase() + s.slice(1);
}

// Round
function playRound(playerSelection, computerSelection) {
    console.log('Player Selection: ' + playerSelection);
    console.log('Computer Selection: ' + computerSelection);

    if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            computerScore++;
        } else if (computerSelection == 'Scissors') {
            playerScore++;
        } else if (computerSelection == 'Rock') {
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Paper') {
        } else if (computerSelection == 'Scissors') {
            computerScore++;
        } else if (computerSelection == 'Rock') {
            playerScore++;
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            playerScore++;
        } else if (computerSelection == 'Scissors') {
        } else if (computerSelection == 'Rock') {
            computerScore++;
        }
    }
}