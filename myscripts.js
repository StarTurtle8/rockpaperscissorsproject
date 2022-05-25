function computerPlay() {
    let rng = Math.random();
    if (rng > .666) {
        return "scissors"
    }
    else if (rng < .333) {
        return "rock"
    }
    else {
        return "paper"
    }
}

console.log("Rock-Paper-Scissors");
let playerChoice;
let computerChoice;

// function computerPlay() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomChoice = Math.floor((Math.random() * 3));
//     return choices[randomChoice];
// }



function playRound(playerSelection, computerSelection) {
    // let lower = playerSelection.toLowerCase()
    let choices = playerSelection.toLowerCase() + computerSelection;
    let result = ''
    switch (choices) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result = "win";
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            result = "lose";
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            result = "draw";
            break;
    }

    if (result === "win") {
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    } else if (result === "lose") {
        return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    } else if (result === "draw") {
        return "It's a Draw";
    } else {
        return "Invalid Input";
    }
}

function game() {
    let compScore = 0;
    let playerScore = 0;
    let draw = 0;
    

    for (let rounds = 0; rounds < 5; rounds++) {
        playerChoice = prompt("Type your Choice: ");
        computerChoice = computerPlay();

        let round = playRound(playerChoice, computerChoice);
        console.log(round);

        if (round.includes("Win")){
            playerScore++;

        } else if (round.includes("Lose")) {
            compScore++;

        } else if (round.includes("Draw")){
            draw++;

        }
          else { 
        }

    }

    if (playerScore > compScore) {
        console.log("User Wins");
    } else if (playerScore < compScore) {
        console.log("Computer Wins");
    } else if (playerScore === compScore) {
        console.log("Draw");
    }
    return;
}

game();