function computerPlay() {
    let rng = Math.floor((Math.random() * 3));
    console.log(rng);
    if (rng === 0 ) {
        return "scissors"
    }
    else if (rng === 1 ) {
        return "rock"
    }
    else {
        return "paper"
    }
}

const scoreArea = document.querySelector('scoreArea')
const playerScore = document.querySelector('.playerScore')
const cpuScore = document.querySelector('.cpuScore')
const buttonChoice = document.querySelector('#paperButton');
buttonChoice.addEventListener('click', () => {
    game();
});
aiScore = 0;
humanScore = 0;

function game() {
    if (computerPlay() === "paper") {
        aiScore++
        cpuScore.textContent = "Computer Score: " + aiScore
        if (aiScore === 5) {
            alert('Cpu Wins!')
        }
    }  
    else {
        humanScore++
        playerScore.textContent = "Player Score: " + humanScore
        if (humanScore === 5 ){
            alert('You Win!')
        }
    }
}

// console.log(computerPlay())


// let playerChoice;
// let computerChoice;

// function playRound(playerSelection, computerSelection) {
//     // let lower = playerSelection.toLowerCase()
//     let choices = playerSelection.toLowerCase() + computerSelection;
//     let result = ''
//     switch (choices) {
//         case "rockscissors":
//         case "paperrock":
//         case "scissorspaper":
//             result = "win";
//             break;
//         case "scissorsrock":
//         case "rockpaper":
//         case "paperscissors":
//             result = "lose";
//             break;
//         case "paperpaper":
//         case "rockrock":
//         case "scissorsscissors":
//             result = "draw";
//             break;
//     }

//     if (result === "win") {
//         return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
//     } else if (result === "lose") {
//         return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
//     } else if (result === "draw") {
//         return "It's a Draw";
//     } else {
//         return "Invalid Input";
//     }
// }

// function game() {
//     let compScore = 0;
//     let playerScore = 0;
//     let draw = 0;
    

//     for (let rounds = 0; rounds < 5; rounds++) {
//         playerChoice = prompt("Type your Choice: ");
//         computerChoice = computerPlay();

//         let round = playRound(playerChoice, computerChoice);
//         console.log(round);

//         if (round.includes("Win")){
//             playerScore++;

//         } else if (round.includes("Lose")) {
//             compScore++;

//         } else if (round.includes("Draw")){
//             draw++;

//         }
//           else { 
//         }

//     }

//     if (playerScore > compScore) {
//         console.log("User Wins");
//     } else if (playerScore < compScore) {
//         console.log("Computer Wins");
//     } else if (playerScore === compScore) {
//         console.log("Draw");
//     }
//     return;
// }

// game();
