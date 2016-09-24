var Preload = function (game) {

};

Preload.prototype = {
	preload: function (){
		console.log('starting preloader');
		game.load.spritesheet('door', 'assets/atlas/Door0.png');
		game.load.spritesheet('floor', 'assets/atlas/Floor.png');
		game.load.spritesheet('floorBase', 'assets/atlas/FloorBase.png', 48, 48);
		game.load.spritesheet('player1', 'assets/atlas/Player0.png', 16, 16, 5);
		game.load.spritesheet('player', 'assets/atlas/Player2.png', 16, 16, 19);
		game.load.spritesheet('tile', 'assets/atlas/Tile.png', 16, 16);
	},
	create: function (){
		game.state.start('GameState');
	}
};