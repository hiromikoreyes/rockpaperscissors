let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //Return the play of the computer in the game.

    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}


function compareChoices(player,computer){
    //Return the winner of the round or a tie
    if (player == computer){
        return 'tie';
    }

    if (player == 'rock' && computer == 'scissors' ||
        player == 'paper' && computer == 'rock' ||
        player == 'scissors' && computer == 'paper'){

            return 'player';
    
        }
    return 'computer';
}


function playRound(playerChoice){
    /*Return a string message detailing the game choices and the outcome of
    the game*/

    let computerChoice = getComputerChoice();
    let outcome = compareChoices(playerChoice, computerChoice);

    switch(outcome){
        case 'tie':
            return 'It was a tie ......... both played ' + playerChoice;
            break;

        case 'player':
            scoreCheck('player');
            return ('Player Wins The Round!! ' + '.........' + ' Player played: ' +
            playerChoice + '        Computer played: ' + computerChoice); 
            break;

        case 'computer':
            scoreCheck('computer');
            return ('Computer Wins The Round!! ' + '.........' + ' Player played: ' +
            playerChoice + '        Computer played: ' + computerChoice);  
            break;
    }
}


function scoreCheck(choice){
    if (choice == 'player') playerScore++;
    else if(choice == 'computer') computerScore++;
    lblPlayer.textContent = 'Player Score: ' + playerScore;
    lblComputer.textContent = 'Computer Score: ' + computerScore;

    if (playerScore == 5){
        finalMessage.textContent = 'PLAYER WINS IT ALL!!!';
    }
    else if (computerScore == 5){
        finalMessage.textContent = 'COMPUTER WINS IT ALL!!!';
    }
    
}

/*
DOM manipulation stuff!!
*/

const resultDisplay = document.querySelector('div');


const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    resultDisplay.textContent = playRound('rock');
});


const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    resultDisplay.textContent = playRound('paper');
});


const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    resultDisplay.textContent = playRound('scissors');
});


const lblPlayer = document.querySelector('#playerScore');
const lblComputer = document.querySelector('#computerScore');
const finalMessage = document.querySelector('#victorMessage');


//Missing feature, reset the game once someone has won




