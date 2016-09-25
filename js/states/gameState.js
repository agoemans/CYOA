var GameState = function (game) {
	this.npcDialog = '';
	this.npcDialogBubble = null;
	this.map = null;
	this.groundLayer = null;
	this.npcPlayer = null;
};

GameState.prototype = {
	preload: function (){
		console.log('starting gameState');
		game.state.backgroundColor = '#806000';

		this.createGround();

		//todo move to own class, same as NPC
		var player = game.add.sprite(30, 30, 'player');
		player.scale.set(1);

		this.npcPlayer = new NpcCharacter(game, 60, 30, 'player', 10);

		game.input.onDown.add(this.npcPlayer.getDialog, this.npcPlayer);
	},

	createGround: function(){
		this.map = game.add.tilemap('map');
		this.map.addTilesetImage('Floor', 'Tile');
		this.map.addTilesetImage('Floor2', 'Floor');
		this.groundLayer = this.map.createLayer('dungeonFloor');
		this.groundLayer.resizeWorld();
		//game.add.existing(this.groundLayer);
	}

};