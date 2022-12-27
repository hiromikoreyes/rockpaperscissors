
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


/*
We don't really need this but I'll keep it for fun

function getPlayerChoice(){
    return prompt("what do you choose?: ").toLowerCase();
}
*/


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
            return 'It was a tie, both played ' + playerChoice;
            break;
        case 'player':
            return 'You won!!!1, you played: ' + playerChoice + ' computer played: ' + computerChoice;
            break;
        case 'computer':
            return 'You lost! :((( , you played: ' + playerChoice + ' computer played: ' + computerChoice;
            break;
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






