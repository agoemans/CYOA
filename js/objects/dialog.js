var DialogGroup = function (game) {
	Phaser.Group.call(this, game);

	this.scale.setTo(1, 1);
	game.add.existing(this);

};

DialogGroup.prototype = Object.create(Phaser.Group.prototype);
DialogGroup.prototype.constructor = DialogGroup;
