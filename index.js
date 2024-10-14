let rock = document.querySelector('.rock');
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let results = document.querySelector('.results');

let userChoice=" ";



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

    

function playRound(userChoice,computerChoice){

    if(userChoice=="rock"){
     if(computerChoice=="scissors"){
         results.textContent=("you win, rock beats scissors");
         humanScore+=1
     }else if(computerChoice=="paper"){
        results.textContent=("computer wins, paper beats rock" );
         computerScore+=1
     }else {
         console.log("Draw")
     }
    }else if(userChoice=="paper"){
     if(computerChoice=="rock"){
        results.textContent=("paper beats rock, you win");
         humanScore+=1
     }else if(computerChoice=="scissors"){
        results.textContent=("scissors beats paper, computer wins");
         computerScore+=1
     }else{
        results.textContent=("Draw");
         
     }
    }else if(userChoice=="scissors"){
     if(computerChoice=="paper"){
        results.textContent=("You win, scissors beats paper");
         humanScore+=1
     }else if(computerChoice=="rock"){
        results.textContent=("You lose, rock beats paper");
         computerScore+=1
     }else{
        results.textContent=("draw");
         
     }
    }
}

let roundCounter=0;
function playGame(){
  
    rock.addEventListener('click',()=>{
        userChoice="rock"
        console.log(userChoice)
        computerChoice=getComputerChoice();
        playRound(userChoice,computerChoice);
        console.log(humanScore)
        roundCounter+=1;
    })
    
    paper.addEventListener('click',()=>{
        userChoice = "paper"
        console.log(userChoice)
        computerChoice=getComputerChoice();
        playRound(userChoice,computerChoice);
        roundCounter+=1;
    })
    
    scissors.addEventListener('click',()=>{
        userChoice = "scissors"
        console.log(userChoice)
        computerChoice=getComputerChoice();
        playRound(userChoice,computerChoice);
        roundCounter+=1;
    })  

}

function getResults(){

playGame();
if(humanScore>=5){
    console.log("Human wins!");
    humanScore=0;
    computerScore=0;
}else if(computerScore>=5){
    console.log("Computer wins!");
    humanScore=0;
    computerScore=0;
}
}

getResults();

