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
        console.log('You Win!');
        return 'Player Wins';
    } else {
        console.log('You Lose!');
        return 'Computer Wins';
    }
}

console.log(game() + '. Game Result \(Round ' + round + '\): Player Score: ' + playerScore + '. Computer Score: ' + computerScore);

// Computer Play
function getComputerChoice() {
    const things = ['Rock', 'Paper', 'Scissors'];
    const thing = things[Math.floor(Math.random() * things.length)];
    // alert('The computer chose: ' + thing);
    return thing;
}

// Player Play Prompt
function getPlayerSelection() {
    loop:
    while (true) {
        var thing = prompt('Choose Rock Paper or Scissors');
        switch (capitalizeFirstLetter(thing)) {
            case "Rock":
                // alert('The player chose: ' + capitalizeFirstLetter(thing));
                break loop;
            case "Paper":
                // alert('The player chose: ' + capitalizeFirstLetter(thing));
                break loop;
            case "Scissors":
                // alert('The player chose: ' + capitalizeFirstLetter(thing));
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
            // alert('You Lose! Paper beats Rock');
            computerScore++;
            // return ('Computer Wins');
        } else if (computerSelection == 'Scissors') {
            // alert('You Win! Rock beats Scissors');
            playerScore++;
            // return ('You win!');
        } else if (computerSelection == 'Rock') {
            // alert('It\'s a tie');
            // return ('It\'s a tie');
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Paper') {
            // alert('It\'s a tie');
            // return ('It\'s a tie');
        } else if (computerSelection == 'Scissors') {
            // alert('You Lose! Rock beats Scissors');
            computerScore++;
            // return ('Computer Wins');
        } else if (computerSelection == 'Rock') {
            // alert('You Win! Paper beats Rock');
            playerScore++;
            // return ('You win!');
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            // alert('You Win! Rock beats Scissors');
            playerScore++;
            // return ('You win!');
        } else if (computerSelection == 'Scissors') {
            // alert('It\'s a tie');
            // return ('It\'s a tie');
        } else if (computerSelection == 'Rock') {
            // alert('You Lose! Rock beats Scissors');
            computerScore++;
            // return ('Computer Wins');
        }
    }
}