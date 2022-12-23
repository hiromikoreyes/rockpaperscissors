/*

functions to work on:

getComputerChoice


getPlayerChoice


compareChoices


playRound

*/

function getComputerChoice(){
    //Return the play of the computer in the game.

    let random = Math.floor(Math.random() * 2);

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


function getPlayerChoice(){
    return prompt("what do you choose?: ").toLowerCase();
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


function playRound(){
    /*Return a string message detailing the game choices and the outcome of
    the game*/
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let outcome = compareChoices(playerChoice,computerChoice);



    switch(outcome){
        case 'tie':
            return 'It was a tie, both played ' + playerChoice;
            break;
        case 'player':
            return 'You won!!!1, you played: ' + playerChoice + ' computer played: ' + computerChoice;
            break;
        case 'player':
            return 'You lost! :((( , you played: ' + playerChoice + ' computer played: ' + computerChoice;
            break;

    }


}

function game(){
    for (i = 0; i < 3; i++){
        playRound()
    }
}





