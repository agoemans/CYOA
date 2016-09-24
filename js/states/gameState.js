var GameState = function (game) {
	this.npcDialog = '';
	this.npcDialogBubble = null;
};

GameState.prototype = {
	preload: function (){
		console.log('starting gameState');
		game.state.backgroundColor = '#806000';

		game.input.onDown.add(this.getDialog, this);

		this.npcDialogBubble = game.add.text(500, 100, this.npcDialog, {
			font: '35px Arial', fill:'#ff0044', align: 'left'});
		this.npcDialogBubble.anchor.setTo(0.5, 0.5);

		var floor = game.add.sprite(100, 100, 'floorBase');
		floor.scale.set(2.5);


		var player = game.add.sprite(100, 100, 'player');
		player.scale.set(2);

		var player2 = game.add.sprite(150, 100, 'player', 10);
		player2.scale.set(2);
	},

	getDialog: function (){
		var test = new backend(game);
		console.log('get dialog');
		this.npcDialog = test.getBadDialog();
		this.setNPCDialog();
	},

	setNPCDialog: function (){
		console.log('setNPCDialog', this.npcDialog);
		this.npcDialogBubble.setText(this.npcDialog);
		console.log('update text', this.npcDialogBubble.text);
	}
};