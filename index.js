let humanScore=0;
let computerScore=0;

function getComputerChoice(){
   let computerChoice= Math.floor(Math.random()*3);
   if(computerChoice==1){
    computerChoice="paper";
   }else if(computerChoice==2){
    computerChoice="scissors";
   }else{
    computerChoice="rock";
   }
   return computerChoice;
}

function getUserChoice(){
    let userChoice = prompt("Rock, Paper or Scissors?");
    return userChoice.toLowerCase();
}
    let humanChoice = getUserChoice();
    let computerChoice=getComputerChoice();
let winner;
function playRound(humanChoice,computerChoice){

    if(humanChoice=="rock"){
     if(computerChoice=="scissors"){
         console.log("you win, rock beats scissors");
         winner="human"
     }else if(computerChoice=="paper"){
         console.log("computer wins, paper beats rock" );
         computerScore+=1;
     }else {
         console.log("Draw")
         winner="draw"
     }
    }else if(humanChoice=="paper"){
     if(computerChoice=="rock"){
         console.log("paper beats rock, you win");
         winner="human"
     }else if(computerChoice=="scissors"){
         console.log("scissors beats paper, computer wins");
         winner="computer"
     }else{
         console.log("Draw");
         winner="draw"
     }
    }else if(humanChoice=="scissors"){
     if(computerChoice=="paper"){
         console.log("You win, scissors beats paper");
         winner="human"
     }else if(computerChoice=="rock"){
         console.log("You lose, rock beats paper");
         winner="computer"
     }else{
         console.log("draw");
         winner="draw"
     }
    }
    return winner;
}

console.log(playRound(humanChoice,computerChoice))

