// Computer Play
function getComputerChoice() {
    const things = ['Rock', 'Paper', 'Scissor'];
    const thing = things[Math.floor(Math.random() * things.length)];
    alert('The computer chose: ' + thing);
    return thing;
}

// Player Temp Play
function getPlayerSelection() {
    const things = ['Rock', 'Paper', 'Scissor'];
    const thing = things[Math.floor(Math.random() * things.length)];
    alert('The player chose:' + thing);
    return thing;
}

// Rounds
function playRound(playerSelection, computerSelection) {
    // your code here!
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));