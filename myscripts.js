// Computer Play
function getComputerChoice() {
    const things = ['Rock', 'Paper', 'Scissors'];
    const thing = things[Math.floor(Math.random() * things.length)];
    alert('The computer chose: ' + thing);
    return thing;
}

// Player Play Prompt
function getPlayerSelection() {

    loop:
    while (true) {
        var thing = prompt('Choose Rock Paper or Scissors');
        switch (capitalizeFirstLetter(thing)) {
            case "Rock":
                alert('The player chose: ' + capitalizeFirstLetter(thing));
                break loop;
            case "Paper":
                alert('The player chose: ' + capitalizeFirstLetter(thing));
                break loop;
            case "Scissors":
                alert('The player chose: ' + capitalizeFirstLetter(thing));
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
    // your code here!
    console.log('Player Selection: ' + playerSelection);
    console.log('Computer Selection: ' + computerSelection);

    if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            alert('You Lose! Paper beats Rock');
            return ('Computer Wins');
        } else if (computerSelection == 'Scissors') {
            alert('You Win! Rock beats Scissors');
            return ('You win!');
        } else if (computerSelection == 'Rock') {
            alert('It\'s a tie');
            return ('It\'s a tie');
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Paper') {
            alert('It\'s a tie');
            return ('It\'s a tie');
        } else if (computerSelection == 'Scissors') {
            alert('You Lose! Rock beats Scissors');
            return ('Computer Wins');
        } else if (computerSelection == 'Rock') {
            alert('You Win! Paper beats Rock');
            return ('You win!');
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            alert('You Win! Rock beats Scissors');
            return ('You win!');
        } else if (computerSelection == 'Scissors') {
            alert('It\'s a tie');
            return ('It\'s a tie');
        } else if (computerSelection == 'Rock') {
            alert('You Lose! Rock beats Scissors');
            return ('Computer Wins');
        }
    }
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log('Play Round Result: ' + playRound(playerSelection, computerSelection));