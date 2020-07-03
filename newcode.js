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


    rockBtn.addEventListener('click', function(e){
        playerSelection = 'rock';
        console.log(playerSelection)
        let computerSelection = computerPlay()
        document.getElementById('finalScoreDisplay').innerHTML = playRound(playerSelection,computerSelection);
    });
    paperBtn.addEventListener('click', function(e){
        playerSelection = 'paper';
        console.log(playerSelection);
        let computerSelection = computerPlay()
        document.getElementById('finalScoreDisplay').innerHTML = playRound(playerSelection,computerSelection);
    });
    scissorsBtn.addEventListener('click', function(e){
        playerSelection = 'scissors';
        console.log(playerSelection);
        let computerSelection = computerPlay()
        document.getElementById('finalScoreDisplay').innerHTML = playRound(playerSelection,computerSelection);
    }); 



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


/* code for looping the game. still doesn't work 
function game() {
    for (; currentRound<=totalRounds;currentRound++) {
        console.log(`Round ${currentRound}`)
        let computerSelection = computerPlay()
        
        console.log(`${computerSelection},${playerSelection}`)
    };

    if (playerScore==computerScore) {
        return `Final score is player:${playerScore} and computer:${computerScore}. It's a tie!`
    } else if (playerScore>computerScore) {
        return `Final score is player:${playerScore} and computer:${computerScore}. YOU WIN!!`
    } else if (playerScore<computerScore) {
        return `Final score is player:${playerScore} and computer:${computerScore}. You lose. Maybe next time.`
    }
};

const currentRoundDisplay=document.querySelector('#currentRoundDisplay')
currentRoundDisplay.textContent=`Round ${currentRound}`

const finalScoreDisplay=document.querySelector('#finalScoreDisplay')
finalScoreDisplay.textContent=`The Final Score is player:${playerScore} vs computer:${computerScore}.`


startBtn.addEventListener('click', function(e){
    let totalRounds = prompt("How many rounds would you like to play?")
});

*/
