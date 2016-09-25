var Game = function () {
	game = new Phaser.Game(GameWidth, GameHeight, Phaser.CANVAS, '');
};

Game.prototype = {
	start: function () {
		game.state.add('Preload', Preload, false, false);
		game.state.add('GameState', GameState, false, false);

		console.log('preloader create');
		game.state.start('Preload');
	}
};