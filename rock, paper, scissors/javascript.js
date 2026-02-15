const rockButton = document.createElement("button");
rockButton.classList.add("rock");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.classList.add("paper");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("scissors");
scissorsButton.textContent = "Scissors";

const containerBtn = document.createElement("div");
containerBtn.classList.add("containerBtn");
 
document.body.appendChild(containerBtn);
containerBtn.appendChild(rockButton);
containerBtn.appendChild(paperButton);
containerBtn.appendChild(scissorsButton);

const gameMaster = document.createElement("h1");
gameMaster.textContent = "Welcome to Rock, Paper, and Scissors Game!"

document.body.insertBefore(gameMaster, containerBtn);

const promptUser = document.createElement("p");
promptUser.textContent = "Here, you will compete with a computer. Try and beat it! First to five wins.";


document.body.insertBefore(promptUser, containerBtn);

function getComputerChoice () {
    let choice = Math.random();
    return (choice < 1/3) ? 'rock' : (choice < 2/3) ?
    'paper' : 'scissors';
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));


let humanScore = 0;
let computerScore = 0;

const gameAnnouncer = document.createElement("h1");
document.body.appendChild(gameAnnouncer);

function playRound(humanChoice){
    if (humanScore >= 5 || computerScore >= 5) return;
    
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
        gameAnnouncer.textContent = `It's a tie! You both chose ${humanChoice}. Score: ${humanScore}-${computerScore}`;
        return;
    }

    const roundWinner = 
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper');

    roundWinner ? humanScore++ : computerScore++;

    gameAnnouncer.textContent = roundWinner 
    ? `You win! ${humanChoice} beats ${computerChoice}. Score: ${humanScore}-${computerScore}`
    : `You lose! ${computerChoice} beats ${humanChoice}. Score: ${humanScore}-${computerScore}`;

    if (humanScore ===5 || computerScore === 5){
        gameAnnouncer.textContent += humanScore === 5 
        ? " — You won the match!"
        : " — Computer won the match!";
    }
}

const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.textContent = "Try Again";
document.body.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    gameAnnouncer.textContent = "New game started. First to five wins.";
});













