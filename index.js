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

let humanScore=0;
let computerScore=0;

function getUserChoice(){
    let userChoice = prompt("Rock, Paper or Scissors?");
    return userChoice.toLowerCase();
}
    let humanChoice = getUserChoice();
    let computerChoice=getComputerChoice();

  
    function playRound(humanChoice,computerChoice){

        if(humanChoice=="rock"){
         if(computerChoice=="scissors"){
             console.log("you win, rock beats scissors");
             humanScore+=1
         }else if(computerChoice=="paper"){
             console.log("computer wins, paper beats rock" );
             computerScore+=1
         }else {
             console.log("Draw")
         }
        }else if(humanChoice=="paper"){
         if(computerChoice=="rock"){
             console.log("paper beats rock, you win");
             humanScore+=1
         }else if(computerChoice=="scissors"){
             console.log("scissors beats paper, computer wins");
             computerScore+=1
         }else{
             console.log("Draw");
             
         }
        }else if(humanChoice=="scissors"){
         if(computerChoice=="paper"){
             console.log("You win, scissors beats paper");
             humanScore+=1
         }else if(computerChoice=="rock"){
             console.log("You lose, rock beats paper");
             computerScore+=1
         }else{
             console.log("draw");
             
         }
        }

    }




function playGame(){

    

   for(let i=0;i <5;i++){
    humanChoice=getUserChoice();
    computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
   }

   console.log(computerScore);
   console.log(humanScore);

   if(computerScore>humanScore){
    console.log("Human won");
   }else if(humanScore>computerScore){
    console.log("Computer won");
   }else{
    console.log("It's a draw!")
   }
}

playGame();

