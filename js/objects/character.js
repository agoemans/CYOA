//todo create a base class for characters, then extend to NPC
var Character = function (game, x, y, name, frame) {
	Phaser.Sprite.call(this, game, x, y, name, frame);

	//dialog bubble and text
	this.npcDialog = '';
	this.diablogBG = null;
	this.npcDialogBubble = null;
	this.tempBadDialog = null;

	this.scale.setTo(1, 1);
	game.add.existing(this);

};

Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

Character.prototype.setupDialog = function(game) {
	//dialog bubble and text

	this.diablogBG = game.add.graphics(0, 0);
	this.diablogBG.beginFill(0xFFFFFF, 1);
	this.diablogBG.drawRect(200, 100, 150, 120);
	this.diablogBG.anchor.set(0.5, 0.5);
	this.diablogBG.visible = false;

	this.npcDialogBubble = game.add.text(205, 105, this.npcDialog, {
		font: '25px Arial', fill: '#ff0044', align: 'left'
	});
	this.npcDialogBubble.anchor.setTo(0, 0);

	//create temp list of bad dialog for bucket
	this.tempBadDialog = helper.shuffle(dialog.npc.bad.slice(0));
};

Character.prototype.setNPCDialog = function () {
	this.npcDialogBubble.setText(this.npcDialog);

	this.diablogBG.visible = true;

	this.diablogBG.clear()
		.beginFill(0xFFFFFF, 1)
		.drawRect(200, 100, this.npcDialogBubble.width + 10, this.npcDialogBubble.height + 10);
};

Character.prototype.getDialog = function () {
	//todo refactor this once the dialog data is final
	//move more of this to backend
	var randomIndex = helper.getRandomNumber(0, this.tempBadDialog.length - 1);
	this.npcDialog = this.tempBadDialog[randomIndex];

	if (this.tempBadDialog.length > 0) {
		this.tempBadDialog.splice(randomIndex, 1);
	}

	if (this.tempBadDialog.length <= 0) {
		this.tempBadDialog = helper.shuffle(dialog.npc.bad.slice(0));
	}

	this.setNPCDialog();
};


Character.prototype.moveLeft = function () {
	//todo change this when move to NPC class
	this.body.velocity.x = -BaseCharacterVelocity;
};

Character.prototype.moveRight = function () {
	this.scale.setTo(-1, -1);
	this.body.velocity.x = BaseCharacterVelocity;

};

Character.prototype.moveUp = function () {


};

Character.prototype.moveDown = function () {


};


