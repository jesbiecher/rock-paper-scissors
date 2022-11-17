function getComputerChoice() {
    const things = ['Rock', 'Paper', 'Scissor'];
    const thing = things[Math.floor(Math.random() * things.length)];
    alert('The computer chose:' + thing);
}

console.log(getComputerChoice());
