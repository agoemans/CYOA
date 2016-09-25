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

		/*this.npcDialogBubble = game.add.text(500, 100, this.npcDialog, {
			font: '35px Arial', fill:'#ff0044', align: 'left'});
		this.npcDialogBubble.anchor.setTo(0.5, 0.5);*/

		var player = game.add.sprite(30, 30, 'player');
		player.scale.set(1);

		//var player2 = game.add.sprite(60, 30, 'player', 10);
		//player2.scale.set(1);

		this.npcPlayer = new NpcCharacter(game, 60, 30, 'player', 10);

		game.input.onDown.add(this.npcPlayer.getDialog, this.npcPlayer);
	},

	/*getDialog: function (){
		var test = new backend(game);
		console.log('get dialog');
		this.npcDialog = test.getBadDialog();
		this.setNPCDialog();
	},

	setNPCDialog: function (){
		console.log('setNPCDialog', this.npcDialog);
		this.npcDialogBubble.setText(this.npcDialog);
		console.log('update text', this.npcDialogBubble.text);
	},*/

	createGround: function(){
		this.map = game.add.tilemap('map');
		this.map.addTilesetImage('Floor', 'Tile');
		this.map.addTilesetImage('Floor2', 'Floor');
		this.groundLayer = this.map.createLayer('dungeonFloor');
		this.groundLayer.resizeWorld();
		//game.add.existing(this.groundLayer);
	}

};