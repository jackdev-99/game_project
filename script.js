//COMPUTER CHOICE...............................................
// function getComputerChoice() {  //function declaration
    // return Math.floor(Math.random() * 3); 
// }
// console.log(getComputerChoice()); //calling inside console.log and the result in console is 0 or 1 or 2
//we want the functioon to return string values not numbers

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        console.log("computer entered rock");
        return "rock";
    } else if (randomNumber === 1) {
        console.log("computer entered paper");
        return "paper";
    } else { // no condion (randomNumber === 2) as it's only 0 or 1 or 2 so if its not 0 or 1 then it's 2
        console.log("computer entered scissors");
        return "scissors";
    }
}
// console.log(getComputerChoice()); 

 
//HUMAN CHOICE.....................................................
function getHumanChoice() {
    let answer = prompt("Rock, Paper, Scissors??").toLowerCase();
    console.log("human entered " + answer);
    return answer;  //case-insensitive
}
//console.log(getHumanChoice()); //delete it, so the prompt message does not appear twice when the function is called.

//THE PLAYERS SCORE................................................
let humanScore = 0;
let computerScore = 0; // in the globl scope so scores must be remebered between rounds if they were inside a function they reset every time

//PLAY A ROUND (only compare values : choices )......................................................
// human        computer

// rock         scissors   
// paper        rock       //human wins
// scissors     paper

// scissors     rock
// rock         paper      //computer wins
// paper        scissors

function playRound(humanChoice, computerChoice) { //humanChoice & computerChoice already given to me
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("human: " + humanChoice);
        console.log("computer: " + computerChoice);
        console.log("same, play again");
        return;
    } 
    
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log("you win, rock beats scissors");
        } else {
            computerScore++;
            console.log("computer wins, paper beats rock");
        }
        return;
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("you win, paper beats rock");
        } else {
            computerScore++;
            console.log("computer wins, scissors beats paper");
        }
        return;
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            console.log("you win, scissors beats paper");
        } else {
            computerScore++;
            console.log("computer wins, rock beats scissors");
        }
        return;
    }

}
//PLAY THE ENTIRE GAME (5 ROUNDS)
function playGame() {
      humanSelection = getHumanChoice();
      computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score:", humanScore, "Computer score:", computerScore);
      humanSelection = getHumanChoice();
      computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score:", humanScore, "Computer score:", computerScore);
     humanSelection = getHumanChoice();
     computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score:", humanScore, "Computer score:", computerScore);
      humanSelection = getHumanChoice();
      computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score:", humanScore, "Computer score:", computerScore);
      humanSelection = getHumanChoice();
      computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score:", humanScore, "Computer score:", computerScore);
}
playGame();