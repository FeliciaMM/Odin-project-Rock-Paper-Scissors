let rock = document.querySelector('.rock');
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let results = document.querySelector('.results');
let scores = document.querySelector('.scores')
let humanScoreD=document.querySelector('.HumanScore');
let computerScoreD=document.querySelector('.ComputerScore');

let userChoice=" ";

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

let computerChoice=getComputerChoice();

function resetScore(){
    humanScore=0;
    computerScore=0;
    humanScoreD.textContent = humanScore;
    computerScoreD.textContent = computerScore;
}

function endOfGame(){
    if(computerScore>=5){
        alert("You lost!");
        resetScore();
    }else if( humanScore>=5){
        alert("You won!");
        resetScore();
    }
}

function playRound(userChoice,computerChoice){

    if(userChoice=="rock"){
     if(computerChoice=="scissors"){
         results.textContent=("you win, rock beats scissors");
         humanScore+=1;
         humanScoreD.textContent = humanScore;
     }else if(computerChoice=="paper"){
        results.textContent=("computer wins, paper beats rock" );
         computerScore+=1;
         computerScoreD.textContent = computerScore;
     }else {
        results.textContent=("Draw")
     }
    }else if(userChoice=="paper"){
     if(computerChoice=="rock"){
        results.textContent=("paper beats rock, you win");
         humanScore+=1;
         humanScoreD.textContent = humanScore;
     }else if(computerChoice=="scissors"){
        results.textContent=("scissors beats paper, computer wins");
         computerScore+=1;
         computerScoreD.textContent = computerScore;
     }else{
        results.textContent=("Draw");
         
     }
    }else if(userChoice=="scissors"){
     if(computerChoice=="paper"){
        results.textContent=("You win, scissors beats paper");
         humanScore+=1;
 
         humanScoreD.textContent = humanScore;
     }else if(computerChoice=="rock"){
        results.textContent=("You lose, rock beats paper");
         computerScore+=1;
         computerScoreD.textContent = computerScore;
     }else{
        results.textContent=("draw");
         
     }
    }
    endOfGame();
}

  
rock.addEventListener('click',()=>{
    userChoice="rock"
    computerChoice=getComputerChoice();
    playRound(userChoice,computerChoice);
})
    
paper.addEventListener('click',()=>{
    userChoice = "paper"
    computerChoice=getComputerChoice();
    playRound(userChoice,computerChoice);
})
    
scissors.addEventListener('click',()=>{
    userChoice = "scissors"
    computerChoice=getComputerChoice();
    playRound(userChoice,computerChoice);
})  

function restartGame(){
    humanScore=0;
    computerScore=0;
}




