function Player(name) { 
	
	this.name = name;


}

Player.prototype.picks = function(pick) {

	this.pick = pick; //whether this needs to be global?

}


function Game(player1, player2) {
	
	this.pairs = {};
	this.pairs['rock'] = ['scissors','lizard'];
	this.pairs['scissors'] = ['paper', 'Lizard'];
	this.pairs['paper'] = ['rock', 'spock'];
	this.pairs['lizard'] = ['paper', 'spock'];
	this.pairs['spock'] = ['scissors', 'rock'];

	player1.prototype = 

	this.player1 = player1;
	this.player2 = player2;

}

Game.prototype.winner = function() {

	if (this.player1.pick == this.player2.pick) {
		return null;
	}

	if (this.pairs[this.player1.pick].indexOf(this.player2.pick) != -1) {
		return this.player1
	}
	// if ((this.pairs[this.player1.pick][0] == this.player2.pick) || (this.pairs[this.player1.pick][1] == this.player2.pick)) {
	// 	return this.player1;
	// }
	return this.player2;

}