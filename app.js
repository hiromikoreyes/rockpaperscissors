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
    return prompt("what do you choose?: ");
}
