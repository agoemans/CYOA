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
	//console.log('setNPCDialog', this.npcDialog);
	this.npcDialogBubble.setText(this.npcDialog);

	this.diablogBG.visible = true;

	this.diablogBG.clear()
		.beginFill(0xFFFFFF, 1)
		.drawRect(200, 100, this.npcDialogBubble.width + 10, this.npcDialogBubble.height + 10);
};

Character.prototype.getDialog = function () {
	var randomIndex = helper.getRandomNumber(0, this.tempBadDialog.length - 1);
	this.npcDialog = this.tempBadDialog[randomIndex];
	//console.log('npcDialog', this.npcDialog);
	console.log('tempDialog', this.tempBadDialog);

	if (this.tempBadDialog.length > 0) {
		//this.tempBadDialog.pop();
		this.tempBadDialog.splice(randomIndex, 1);
	}

	if (this.tempBadDialog.length <= 0) {
		//console.log('get diablog, length of tempbadDialog', this.tempBadDialog.length);
		this.tempBadDialog = helper.shuffle(dialog.npc.bad.slice(0));
		console.log('get diablog, update length', this.tempBadDialog.length, this.tempBadDialog);
	}

	this.setNPCDialog();
};


Character.prototype.moveLeft = function () {
	this.body.velocity.x = -150;
};

Character.prototype.moveRight = function () {
	this.scale.setTo(-1, -1);
	this.body.velocity.x = 150;

};

Character.prototype.moveUp = function () {


};

Character.prototype.moveDown = function () {


};


