var NpcCharacter = function (game, x, y, name, frame) {
	Phaser.Sprite.call(this, game, x, y, name, frame);

	this.npcDialog = '';

	this.diablogBG = game.add.graphics(0, 0);
	this.diablogBG.beginFill(0xFFFFFF, 1);
	this.diablogBG.drawRect(200, 100, 150, 120);
	this.diablogBG.anchor.set(0.5, 0.5);
	this.diablogBG.visible = false;

	this.npcDialogBubble = game.add.text(205, 105, this.npcDialog, {
		font: '25px Arial', fill: '#ff0044', align: 'left'
	});
	this.npcDialogBubble.anchor.setTo(0, 0);

	this.scale.setTo(1, 1);
	game.add.existing(this);

};

NpcCharacter.prototype = Object.create(Phaser.Sprite.prototype);
NpcCharacter.prototype.constructor = NpcCharacter;

NpcCharacter.prototype.setNPCDialog = function () {
	//console.log('setNPCDialog', this.npcDialog);
	this.npcDialogBubble.setText(this.npcDialog);

	this.diablogBG.visible = true;

	console.log(this.npcDialogBubble);

	this.diablogBG.clear()
		.beginFill(0xFFFFFF, 1)
		.drawRect(200, 100, this.npcDialogBubble.width + 10, this.npcDialogBubble.height + 10);

	//console.log('update text', this.npcDialogBubble.text);
};

NpcCharacter.prototype.getDialog = function () {
	console.log('get dialog');
	this.npcDialog = backend.getBadDialog();
	this.setNPCDialog();
};

