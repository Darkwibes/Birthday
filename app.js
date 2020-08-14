/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scoreboard, score, current_player,gameplaying;

current_player = 0;

newgame();

//document.querySelector("#current-"+current_player).textContent = dice or 
// document.querySelector("#current-"+current_player).innerHTML = "<strong>"+dice+"</strong>"

document.querySelector(".btn-roll").addEventListener("click",function(){
 if(gameplaying){
   var dice = Math.floor(Math.random()*6)+1;
  var diceroll = document.querySelector(".dice");
  diceroll.style.display = "block";
  diceroll.src = "dice-"+dice+".png";

  //update the round score if the number rolled is not 1
  if (dice!==1){
   score += dice;
   document.querySelector("#current-"+current_player).textContent = score;
  }
  else{ //Next Player
   nextplayer()
  }
 }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
 if(gameplaying){
   //add the score to the global
  scoreboard[current_player] += score;
   //update the ui
  document.querySelector("#score-"+current_player).textContent = scoreboard[current_player];
  //check if the player won the game
  if (scoreboard[current_player] >= 20){
   document.querySelector("#name-"+current_player).textContent = "Winner!!!";
   document.querySelector(".dice").style.display = "none";
   gameplaying = false;

   document.querySelector(".player-"+current_player+"-panel").classList.add("winner");
   document.querySelector(".player-"+current_player+"-panel").classList.remove("active");
  }else{
   //next player
   nextplayer();
  }
 }
});

function nextplayer(){
 current_player === 0 ? current_player = 1 : current_player = 0;
 score = 0;
 document.querySelector(".dice").style.display = "none";

 document.querySelector("#current-1").textContent = 0;
 document.querySelector("#current-0").textContent = 0;

 document.querySelector(".player-1-panel").classList.toggle("active");
 document.querySelector(".player-0-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener('click', newgame)

function newgame(){
 var player = current_player+1;
 document.querySelector("#name-"+current_player).textContent = "Player "+player;
 document.querySelector(".player-"+current_player+"-panel").classList.remove("winner");
 document.querySelector(".player-"+current_player+"-panel").classList.remove("active");

 scoreboard = [0,0];
 score=0;
 gameplaying=true;

 document.getElementById("score-1").textContent = 0
 document.getElementById("current-1").textContent = 0
 document.getElementById("score-0").textContent = 0
 document.getElementById("current-0").textContent = 0
 document.querySelector(".dice").style.display = "none";

 document.querySelector(".player-0-panel").classList.add("active");
}











































