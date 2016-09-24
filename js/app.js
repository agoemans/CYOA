function init(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { init: init, create: create, update: update, shutdown: shutdown });

	var fieldGroup = [];
	var gameBoardGrid;
	var catchMines;
	var catchBlanks;
	var restartText;

	function init() {
		fieldGroup = [];
	}

	function create() {
		var bg = game.add.graphics(0,0);
		bg.beginFill(0xFFF300);
		bg.drawRect(0,0, window.innerWidth, window.innerHeight);
		game.add.existing(bg);

		drawField();

		var style = { font: '30px Arial', fill: '#ff0044', align: 'center' };
		restartText = new Phaser.Text (this.game, 500, 100, 'Restart', style, null);
		restartText.inputEnabled = true;
		restartText.events.onInputDown.add(function (){
			console.log('onInput up');
			game.state.restart();

		});
		game.add.existing(restartText);

	}

	function update() {
	}

	function drawField(){
		gameBoardGrid = fieldCreation.mineLevelCreator();

		//Phaser Signals to reveal Mines and Blanks
		catchMines = new Phaser.Signal();
		catchMines.add(revealAllMines, this);

		catchBlanks = new Phaser.Signal();
		catchBlanks.add(revealAllBlanks, this);

		//global var # of Row, # of Col
		rowNumber = gameBoardGrid.length;
		colNumber = gameBoardGrid[0].length;

		var x = 0, y = 0;

		for (var i = 0; i < gameBoardGrid.length; i++){
			var fieldRow = [];
			fieldRow[i] = [];
			y += 100;
			for (var j = 0; j < gameBoardGrid[i].length; j++){

				if ( j == 0 ) {
					x = 100;
				} else {
					x += 100;
				}


				var adjacentCellCalc = cellProcessor.getSurroundings(gameBoardGrid, i, j);
				var cell = new Cell();
				cell.create(game, x, y, i, j, gameBoardGrid[i][j], catchBlanks, catchMines);
				fieldRow[i][j] = cell;

				//console.log(i, j, x, y);
				//console.log(this.gameBoardGrid[i], this.gameBoardGrid[i][j]);
			}
			fieldGroup.push(fieldRow[i]);
		}

		console.log(fieldGroup);

	}

	function revealAllMines() {
		console.log('revealAllMines called');
		console.log(fieldGroup, fieldGroup.length);
		for (var i = 0; i < fieldGroup.length; i++){
			console.log(fieldGroup[i].length, fieldGroup[i]);
			for (var j = 0; j < fieldGroup[i].length; j++){
				fieldGroup[i][j].disableInput();
				if (fieldGroup[i][j].hasMine){
					fieldGroup[i][j].showCell();
				}
			}
		}
	}

	function revealAllBlanks(row, col) {
		console.log('revealAllBlanks called');
		cellProcessor.loopOverAllNeighbors(fieldGroup, row, col);
	}

	function shutdown() {
		fieldGroup = [];
		catchMines.remove(revealAllMines, this)
	}
}
