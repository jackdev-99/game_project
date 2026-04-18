//COMPUTER CHOICE...............................................
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
//HUMAN CHOICE.....................................................
/*Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step) */
let rockBtn= document.querySelector('#rock'); //select the button with id
rockBtn.addEventListener("click",()=>{
    console.log("Human entered Rock");
    playRound("Rock",getComputerChoice());
});

let paperBtn= document.querySelector('#paper'); //select the button with id
paperBtn.addEventListener("click",()=>{
    console.log("Human entered Paper");
    playRound("Paper",getComputerChoice());
});

let scissorsBtn= document.querySelector('#scissors'); //select the button with id
scissorsBtn.addEventListener("click",()=>{
    console.log("Human entered Scissors");
    playRound("Scissors",getComputerChoice());
});
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

const resultDiv= document.querySelector("#Result");
const scoreDiv=document.querySelector("#Score");

function playRound(humanChoice, computerChoice) { //humanChoice & computerChoice already given to me
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        // console.log("human: " + humanChoice);
        // console.log("computer: " + computerChoice);
        resultDiv.textContent="same, play again";
        
    } 
    
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            resultDiv.textContent="you win, rock beats scissors";
        } else {
            computerScore++;
            resultDiv.textContent="computer wins, paper beats rock";
        }
        
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            resultDiv.textContent="you win, paper beats rock";
        } else {
            computerScore++;
            resultDiv.textContent="computer wins, scissors beats paper";
        }
        
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            resultDiv.textContent="you win, scissors beats paper";
        } else {
            computerScore++;
            resultDiv.textContent="computer wins, rock beats scissors";
        }
        
    }
    scoreDiv.textContent="human score is " + humanScore + " | computer score is " + computerScore;


    if (humanScore===5){
    resultDiv.textContent="you win";
    disableButtons(); //stop the game
    } else if(computerScore===5){
    resultDiv.textContent="Computer wins";
    disableButtons();
    }
   
 
}

// a new function to stop the game when hitting the button
function disableButtons() {
    document.querySelector("#rock").disabled= true; //the button dont work anymore 
    document.querySelector("#paper").disabled= true;
    document.querySelector("#scissors").disabled= true;
}