var GameState = function (game) {
	this.npcDialog = '';
	this.npcDialogBubble = null;
	this.map = null;
	this.groundLayer = null;
	this.npcPlayer = null;
	this.mainPlayer = null;
};

GameState.prototype = {
	preload: function (){
		console.log('starting gameState');
		game.state.backgroundColor = '#806000';

		this.createGround();

		//todo move to own class, same as NPC
		this.mainPlayer = new MainCharacter(game, 30, 30, 'player', 0);
		this.physics.arcade.enable(this.mainPlayer, Phaser.Physics.ARCADE);
		/*this.mainPlayer.body.collideWorldBounds = true;
		this.mainPlayer.body.checkCollision.up = true;
		this.mainPlayer.body.checkCollision.down = true;
		this.mainPlayer.body.checkCollision.left = true;
		this.mainPlayer.body.checkCollision.right = true;*/

		this.npcPlayer = new Character(game, 60, 30, 'player', 10);
		this.npcPlayer.setupDialog(game);
		this.physics.arcade.enable(this.npcPlayer, Phaser.Physics.ARCADE);
		/*this.npcPlayer.body.collideWorldBounds = true;
		this.npcPlayer.body.checkCollision.up = true;
		this.npcPlayer.body.checkCollision.down = true;
		this.npcPlayer.body.checkCollision.left = true;
		this.npcPlayer.body.checkCollision.right = true;*/

		game.input.onDown.add(this.npcPlayer.getDialog, this.npcPlayer);

	},

	createGround: function(){
		this.map = game.add.tilemap('map2');

		this.map.addTilesetImage('Wall', 'Tile');

		this.groundLayer = this.map.createLayer('Tile Layer 1');
		this.groundLayer.resizeWorld();

		this.map.setCollision(1, true, 'Tile Layer 1');
		//game.add.existing(this.groundLayer);
	},

	update: function () {
		game.physics.arcade.collide(this.mainPlayer, this.groundLayer);
		game.physics.arcade.collide(this.mainPlayer, this.npcPlayer);
	},

	render: function () {
		game.debug.bodyInfo(this.groundLayer);
	}

};