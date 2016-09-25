var Preload = function (game) {

};

Preload.prototype = {
	init: function(){
		this.physics.startSystem(Phaser.Physics.ARCADE);

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertcally = true;
		//this.game.scale.set(1,1);
		this.game.scale.refresh();

	},

	preload: function (){
		console.log('starting preloader');
		game.load.tilemap('map', 'assets/atlas/map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.spritesheet('door', 'assets/atlas/Door0.png');
		game.load.spritesheet('Floor', 'assets/atlas/Floor.png', 16, 16);
		game.load.spritesheet('floorBase', 'assets/atlas/FloorBase.png', 48, 48);
		game.load.spritesheet('player1', 'assets/atlas/Player0.png', 16, 16, 5);
		game.load.spritesheet('player', 'assets/atlas/Player2.png', 16, 16, 19);
		game.load.spritesheet('Tile', 'assets/atlas/Tile.png', 16, 16);
	},
	create: function (){
		game.state.start('GameState');
	}
};