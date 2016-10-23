var MainCharacter = function (game, x, y, name, frame) {
	Character.call(this, game, x, y, name, frame);

	this.scale.setTo(1, 1);
	game.add.existing(this);

};

MainCharacter.prototype = Object.create(Character.prototype);
MainCharacter.prototype.constructor = MainCharacter;

MainCharacter.prototype.update = function () {
	this.body.velocity.set(0);

	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		this.body.velocity.x = -MainCharacterVelocity;
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		this.body.velocity.x = MainCharacterVelocity;
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
		this.body.velocity.y = -MainCharacterVelocity;
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
		this.body.velocity.y = MainCharacterVelocity;
	}
};
