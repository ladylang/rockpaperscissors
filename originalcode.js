//javascript
/*
1 = rock
2 = paper
3 = scissors 
*/

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*(3)+1) //random # from 1 to 3 inclusive (#*(max-min+1)+1)
    if (randomNumber==1) {
        return "rock";
    } else if (randomNumber==2) {
        return "paper";
    } else if (randomNumber==3) {
        return "scissors";
    }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection==computerSelection) {
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
}

let playerScore = 0
let computerScore = 0

function game() {
    let totalRounds = prompt("How many rounds would you like to play?")
    for (currentRound=1; currentRound<=totalRounds; currentRound++) {
        console.log(`Round ${currentRound}`)
        let computerSelection = computerPlay()
        let playerSelection = prompt("Pick rock, paper, or scissors.").toLowerCase()
        console.log(playRound(playerSelection,computerSelection))
        console.log(`Current score is player:${playerScore} and computer:${computerScore}.`)
    }
    if (playerScore==computerScore) {
        return `Final score is player:${playerScore} and computer:${computerScore}. It's a tie!`
    } else if (playerScore>computerScore) {
        return `Final score is player:${playerScore} and computer:${computerScore}. YOU WIN!!`
    } else if (playerScore<computerScore) {
        return `Final score is player:${playerScore} and computer:${computerScore}. You lose. Maybe next time.`
    }
}
console.log(game())
