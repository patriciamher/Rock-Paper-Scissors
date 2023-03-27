let botScore=0,
	playerScore=0;

document.getElementById("rock").addEventListener('click', playerThrowsRock); 
document.getElementById("scissors").addEventListener('click', playerThrowsScissors);
document.getElementById("paper").addEventListener('click', playerThrowsPaper) ; 



function playerThrowsRock(){
	let botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	// console.log(botsWeapon)
}
function playerThrowsScissors(){
	let botsWeapon= getRandomWeapon;
	checkWhoWon(botsWeapon,"scissors");
	// console.log(botsWeapon)
}
function playerThrowsPaper(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper")
	// console.log(botsWeapon)
}
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon == playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerText = botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerText = playerScore;
	displayCompleteMessage("Winners win!");

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerText = msg;
}






