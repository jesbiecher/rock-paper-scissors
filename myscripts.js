// Variables
const gameEl = document.querySelector('.gameButton');
const gameScreenEl = document.querySelector('.gameScreen');
const mainScreenEl = document.querySelector('.mainScreen');

let round = 0;
let computerScore = 0;
let playerScore = 0;

const playerPointsEl = document.getElementById('player-score');
const computerPointsEl = document.getElementById('computer-score');

const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');

const resultLogEl = document.getElementById('result-log');
const winnerEL = document.getElementById('winner');
const gameResultsEl = document.getElementById('gameResults');

// Event Listeners
gameEl.addEventListener('click', startGame);

let playerChoices = document.querySelectorAll('.button');
playerChoices.forEach((playerChoice) => {
    playerChoice.addEventListener('click', () => {
        playerSelection = capitalizeFirstLetter(playerChoice.id);
        computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
    });
});

// Functions
function startGame() {
    console.log("Clicked inside testGame gameButton");
    gameScreenEl.style.display = 'flex';
    mainScreenEl.style.display = 'none';
}

// Game = Set of 5 Rounds
function playGame() {
    if (round === 5) {
        if (playerScore > computerScore) {
            winnerEL.textContent = 'You Win!';
            console.log('**** End GAME');
            return stopGame();
        } else if (computerScore > playerScore) {
            winnerEL.textContent = 'You Lose!';
            console.log('**** End GAME');
            return stopGame();
        } else {
            winnerEL.textContent = 'It\'s a tie!';
            console.log('**** End GAME');
            return stopGame();
        }
    }
}

// Computer Play
function getComputerSelection() {
    const things = ['Rock', 'Paper', 'Scissors'];
    const thing = things[Math.floor(Math.random() * things.length)];
    return thing;
}

// Capitalize
function capitalizeFirstLetter(s) {
    s = s.toLowerCase();
    return s && s[0].toUpperCase() + s.slice(1);
}

// Round
function playRound(playerSelection, computerSelection) {
    round++;
    console.log('**** ROUND ' + round);
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
    playerChoiceEl.textContent = 'You chose: ' + `${playerSelection}`;
    computerChoiceEl.textContent = 'Computer chose: ' + `${computerSelection}`;
    playerPointsEl.textContent = 'Player Score: ' + playerScore;
    computerPointsEl.textContent = 'Computer Score: ' + computerScore;

    return playGame(playerSelection, computerSelection);
}

function stopGame() {
    playerChoices.forEach(button => {
        button.disabled = true;
    });
    gameResultsEl.style.visibility = 'visible';
}