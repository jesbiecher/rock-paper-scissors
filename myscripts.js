// Computer Play
function getComputerChoice() {
    const things = ['Rock', 'Paper', 'Scissor'];
    const thing = things[Math.floor(Math.random() * things.length)];
    alert('The computer chose: ' + thing);
    return thing;
}

// Player Play Prompt
function getPlayerSelection() {
    thing = prompt ('Choose Rock Paper or Scissors');
    alert('The player chose: ' + capitalizeFirstLetter(thing));
    return capitalizeFirstLetter(thing);
}

// Capitalize
function capitalizeFirstLetter(s) {
    s = s.toLowerCase();
    return s && s[0].toUpperCase() + s.slice(1);
}

// Rounds
function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log('Player Selection: ' + playerSelection);
    console.log('Computer Selection: ' + computerSelection);
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log('Play Round Result: ' + playRound(playerSelection, computerSelection));