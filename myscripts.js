function computerPlay() {
    let rng = Math.floor((Math.random() * 3));
    // console.log(rng);
    if (rng === 0 ) {
        return "Scissors"
    }
    else if (rng === 1 ) {
        return "Rock"
    }
    else {
        return "Paper"
    }
}

const gameChoices = document.querySelector('.gameChoices')
const scoreArea = document.querySelector('.scoreArea');
const fightArea =document.querySelector('.fightArea');
const winArea =document.querySelector('.winArea');
const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');

function reload() {
    reload = location.reload();
}

const rockChoice = document.querySelector('.rockImage');
rockChoice.addEventListener('click', () => {
    game('Rock', computerPlay());
})
const paperChoice = document.querySelector('.paperImage');
paperChoice.addEventListener('click', () => {
    game('Paper', computerPlay());
})

const scissorsChoice = document.querySelector('.scissorsImage');
scissorsChoice.addEventListener('click', () => {
    game('Scissors', computerPlay());
})
aiScore = 0;
humanScore = 0;

function game(choice, cpuChoice) {
    pInput = choice
    cInput = cpuChoice
    if ((pInput === "Rock" && cInput === "Paper") ||
        (pInput === "Paper" && cInput === "Scissors") ||
        (pInput === "Scissors" && cInput === "Rock")) {
        console.log(cInput)
        aiScore++
        fightArea.style.textAlign = "center"
        fightArea.textContent = "Computer Win! Computer's " + cInput + " beats your " + pInput
        cpuScore.textContent = "Computer Score: " + aiScore
        if (aiScore === 5) {
            winArea.textContent = "Computer wins the match! \n"
            const playAgain = document.createElement("button");
            playAgain.textContent = "Play again?";
            playAgain.addEventListener('click', reload, false);
            winArea.appendChild(playAgain);
            gameChoices.style.display = 'none';
            document.querySelectorAll('.gameChoices .image').forEach(elem => {
                elem.disabled = true;  
            })
        }
    }
    else if ((pInput === "Rock" && cInput === "Scissors") ||
             (pInput === "Paper" && cInput === "Rock") ||
             (pInput === "Scissors" && cInput === "Paper")) {  
        console.log(cInput)
        humanScore++
        fightArea.style.textAlign = "center"
        fightArea.textContent = "Your win! Your " + pInput + " beats " + "Computer's "+ cInput
        playerScore.textContent = "Player Score: " + humanScore
        if (humanScore === 5 ){
            winArea.textContent = "You win the match! \n"
            const playAgain = document.createElement("button");
            playAgain.textContent = "Play again?";
            playAgain.addEventListener('click', reload, false);
            winArea.appendChild(playAgain);
            gameChoices.style.display = 'none';
            document.querySelectorAll('.gameChoices .image').forEach(elem => {
                elem.disabled = true;
            })
        }
    } 
    else if (cInput === pInput) {
            console.log(cInput)
            fightArea.style.textAlign = "center"
            fightArea.textContent = "Draw! " + pInput + " ties with " + cInput
        }
    
}

