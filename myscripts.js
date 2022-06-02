function computerPlay() {
    let rng = Math.floor((Math.random() * 3));
    // console.log(rng);
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

const scoreArea = document.querySelector('scoreArea');
const fightArea =document.querySelector('.fightArea');
const winArea =document.querySelector('.winArea');
const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');

function reload() {
    reload = location.reload();
}


const rockChoice = document.querySelector('#rockButton');
rockChoice.addEventListener('click', () => {
    game('rock', computerPlay());
})
const paperChoice = document.querySelector('#paperButton');
paperChoice.addEventListener('click', () => {
    game('paper', computerPlay());
})

const scissorsChoice = document.querySelector('#scissorsButton');
scissorsChoice.addEventListener('click', () => {
    game('scissors', computerPlay());
})
aiScore = 0;
humanScore = 0;

function game(choice, cpuChoice) {
    pInput = choice
    cInput = cpuChoice
    if ((pInput === "rock" && cInput === "paper") ||
        (pInput === "paper" && cInput === "scissors") ||
        (pInput === "scissors" && cInput === "rock")) {
        console.log(cInput)
        aiScore++
        fightArea.style.textAlign = "center"
        fightArea.textContent = "Computer's " + cInput + " beats your " + pInput
        cpuScore.textContent = "Computer Score: " + aiScore
        if (aiScore === 5) {
            winArea.textContent = "Computer wins! \n"
            const playAgain = document.createElement("button");
            playAgain.textContent = "Play again?";
            playAgain.addEventListener('click', reload, false);
            winArea.appendChild(playAgain);
            document.querySelectorAll('.gameChoices button').forEach(elem => {
                elem.disabled = true; 
            })
        }
    }
    else if ((pInput === "rock" && cInput === "scissors") ||
             (pInput === "paper" && cInput === "rock") ||
             (pInput === "scissors" && cInput === "paper")) {  
        console.log(cInput)
        humanScore++
        fightArea.style.textAlign = "center"
        fightArea.textContent = "Your " + pInput + " beats " + "Computer's "+ cInput
        playerScore.textContent = "Player Score: " + humanScore
        if (humanScore === 5 ){
            winArea.textContent = "You win! \n"
            const playAgain = document.createElement("button");
            playAgain.textContent = "Play again?";
            playAgain.addEventListener('click', reload, false);
            winArea.appendChild(playAgain);
            document.querySelectorAll('.gameChoices button').forEach(elem => {
                elem.disabled = true;
                
            })
        }
    } 
    else if (cInput === pInput) {
            console.log(cInput)
            fightArea.style.textAlign = "center"
            fightArea.textContent = pInput + " ties with " + cInput
        }
    
}

