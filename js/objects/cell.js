function Cell() {
	this.back = null;
	this.row = null;
	this.col = null;
	this.x = null;
	this.y = null;

	this.fieldValue = null;
	this.text = null;
	this.hasMine = false;

	this.isBlockVisible = true;

	this.mineSignal = null;
	this.blankSignal = null;

	this.hasZero = false;
}

Cell.prototype.create = function (game, x, y, row, col, fieldValue, blankSignal, mineSignal) {
	this.row = row;
	this.col = col;
	this.x = x;
	this.y = y;

	this.fieldValue = fieldValue;
	this.mineSignal = mineSignal;
	this.blankSignal = blankSignal;

	 if (fieldValue == 'x'){
		 this.hasMine = true;
	 }

	console.log('fieldvalue', fieldValue);

	if (fieldValue == 0){
		this.hasZero = true;
	}

	this.back = game.add.graphics(0, 0);
	this.back.beginFill(0xFFAA3);
	this.back.drawRect(x, y, 50, 80);
	this.back.inputEnabled = true;
	this.back.input.useHandCursor = true;

	this.back.events.onInputDown.add(this.onDown, this);
	game.add.existing(this.back);

	var style =
	{
		font: "105px Arial", fill: "#ff0044", align: "center"
	};

	this.text = game.add.text(x, y, fieldValue, style);
	this.text.visible = false;

	return this;

};

Cell.prototype.onDown = function () {
	if(this.hasMine){
		console.log(this.hasMine);
		this.mineSignal.dispatch();
	} else {
		this.text.visible = true;
	}

	if(this.hasZero){
		console.log('hasZero', this.hasZero);
		this.blankSignal.dispatch(this.row, this.col);
	}

	//this.back.alpha = (this.isBlockVisible ? 0 : 1);
	//
	//this.text.visible = true;
	//
	//this.isBlockVisible = !this.isBlockVisible;

};

Cell.prototype.disableInput = function () {
	this.back.inputEnabled = false;
	this.back.input.useHandCursor = false;
	//this.back.alpha = 1;
};


Cell.prototype.checkForMines = function () {
	if(this.hasMine){
		var style =
		{
			font: "105px Arial", fill: "#000000", align: "center"
		};
		this.text.setStyle(style, true);
	}
};

Cell.prototype.showCell = function () {
	this.text.visible = true;
};
