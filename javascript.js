function getComputerChoice () {
    let choice = Math.random();

    return (choice < 0.33) ? "Rock" : (choice < 0.66) ? "Paper" : "Scissors"; 
}

function getHumanChoice () {
    let choice = prompt("Rock, Paper, Scissors. Which one? ");
    return choice;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();

        if (humanChoice === computerChoice){
            console.log("It's a tie!");
            return;
        }

        const winner = 
            (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') || 
            (humanChoice === 'PAPER' && computerChoice === 'ROCK') || 
            (humanChoice === 'SCISSORS' && computerChoice === 'PAPER');
        

        winner ? humanScore++ : computerScore++ ;

        console.log(
            winner ?
            `You win! ${humanChoice} beats ${computerChoice}` : 
            `You lose! ${computerChoice} beats ${humanChoice}` 
        );

    }

    let rounds = 1;
    console.log(`Round ${rounds}`);
    playRound(getHumanChoice(), getComputerChoice());
    rounds++;
    console.log(`Round ${rounds}`);
    playRound(getHumanChoice(), getComputerChoice());
    rounds++;
    console.log(`Round ${rounds}`);
    playRound(getHumanChoice(), getComputerChoice());
    rounds++;
    console.log(`Round ${rounds}`);
    playRound(getHumanChoice(), getComputerChoice());
    rounds++;
    console.log(`Round ${rounds}`);
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Final score — Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();