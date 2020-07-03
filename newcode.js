//javascript
/*
1 = rock
2 = paper
3 = scissors 
*/


const startBtn=document.getElementById('startBtn');
const rockBtn=document.getElementById('rock');
const paperBtn=document.getElementById('paper');
const scissorsBtn=document.getElementById('scissors');
const playerBtn=document.querySelector('playerBtn');
const gameBox = document.querySelector('gameBox');

let playerScore = 0
let computerScore = 0
let currentRound = 1
let totalRounds = 5

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*(3)+1) //random # from 1 to 3 inclusive (#*(max-min+1)+1)
    if (randomNumber==1) {
        return "rock";
    } else if (randomNumber==2) {
        return "paper";
    } else if (randomNumber==3) {
        return "scissors";
    }
};


startBtn.addEventListener('click', function(e){
    totalRounds = prompt("How many rounds would you like to play?")
    e.target.style.background = 'grey';
});

rockBtn.addEventListener('click', function(e){
    playerSelection = 'rock';
    console.log(playerSelection)
    let computerSelection = computerPlay()
    document.getElementById('currentScoreDisplay').innerHTML = playRound(playerSelection,computerSelection);
    gameRound();
});
paperBtn.addEventListener('click', function(e){
    playerSelection = 'paper';
    console.log(playerSelection);
    let computerSelection = computerPlay()
    document.getElementById('currentScoreDisplay').innerHTML = playRound(playerSelection,computerSelection);
    gameRound(currentRound);
});
scissorsBtn.addEventListener('click', function(e){
    playerSelection = 'scissors';
    console.log(playerSelection);
    let computerSelection = computerPlay()
    document.getElementById('currentScoreDisplay').innerHTML = playRound(playerSelection,computerSelection);
    gameRound(currentRound);
}); 

const currentRoundDisplay=document.querySelector('#currentRoundDisplay')
//currentRoundDisplay.textContent=`Round ${currentRound}`


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if (playerSelection===computerSelection) {
        return "It's a tie";
    } else if (playerSelection=="rock" && computerSelection=="scissors") {
        playerScore++
        return "You win! Rock beats scissors."; 
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        playerScore++
        return "You win! Paper beats rock.";
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        playerScore++
        return "You win! Scissors beats paper.";
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        computerScore++
        return "You lose! Paper beats rock.";
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        computerScore++
        return "You lose! Scissors beats paper.";
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        computerScore++
        return "You lose! Rock beats scissors.";
    }

};

const finalScoreDisplay=document.querySelector('#finalScoreDisplay')
//finalScoreDisplay.textContent=`The Final Score is player:${playerScore} vs computer:${computerScore}.`

function gameRound() {
    if (currentRound<totalRounds) {
        console.log(`Round ${currentRound}`)
        currentRoundDisplay.textContent=`Round ${currentRound}`
        currentRound++
        return finalScoreDisplay.textContent=`The current score is player:${playerScore} vs computer:${computerScore}.`
    } else {
        currentRoundDisplay.textContent=`Round ${currentRound}`
        if (playerScore==computerScore) {
        return finalScoreDisplay.textContent=`The final score is player:${playerScore} vs computer:${computerScore}. It's a tie!`
        } else if (playerScore>computerScore) {
        return finalScoreDisplay.textContent=`The final score is player:${playerScore} and computer:${computerScore}. YOU WIN!!`
        } else if (playerScore<computerScore) {
        return finalScoreDisplay.textContent=`The final score is player:${playerScore} and computer:${computerScore}. You lose. Maybe next time.`
    }
    }

    
};
