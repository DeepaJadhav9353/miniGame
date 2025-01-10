// using variables to track Game Score.
let userScore = 0 ;
 let compScore = 0 ;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

 const showWinner = (userWin, compChoice, userChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `you lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 }

 const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "game was draw please play again";
    msg.style.backgroundColor = "#003049";
 }
//  generate computer random choice using class mehtod.
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx=  Math.floor(Math.random()*3);
    return options[randIdx];
}
// generate usre choice
const PlayGame = (userChoice) =>{
//  console.log("user choice=", userChoice);
//  generate comp choice
 const compChoice = genCompChoice();
//  console.log("comp choice =", compChoice);

  if(userChoice===compChoice){
    // draw game
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
        // paper, scissors
        userWin = compChoice === "paper" ? false:true;
    }else if(userChoice === "paper"){
        // scissors, rock
        userWin = compChoice === "scissors" ? false:true; 
    }else {
        // rock, paper
        userWin = compChoice === "rock" ? false:true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
}
//  adding forEach method  eventlistener to click indisual div
 choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    //   console.log("choice was clicked", userChoice);
      PlayGame(userChoice);
    })
 });