updateDom = function(score1, score2, whoseTurn, dice1, dice2, pot){
	$('#dice').html(dice1, dice2);
	$('#pot').html(pot);
	// here we'll toggle some class here to clearly show whose turn it is
	$('#score1').html(score1);
	$('#score2').html(score2);
}

//keep thisGame global
var thisGame ;

createGame = function(player1, player2, scoreMax){
	thisGame = new Game(player1, player2, scoreMax);

	//return thisGame;
	// here we'll change DOM elements to appear as when the page initially loads
}


$(document).ready(function(){
	createGame('mike', 'danny', 50);
	console.log( thisGame.players )
	console.log( thisGame.rollDice() )
	console.log( thisGame.switchPlayer() )
	console.log( thisGame.rollDice() )
	console.log( thisGame.switchPlayer() )
	console.log( thisGame.rollDice() )
	console.log( thisGame.switchPlayer() )
})