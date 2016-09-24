var fieldCreation = (function() {
	var randomNumGen = function (num) {
		return Math.floor(Math.random() * (num - 1) + 1);
	};

	var createBasicMineBoard = function (number) {
		var mineMainList = [];
		console.log('mineMainList', mineMainList);

		for (var i = 0; i < number; i++){
			var rowList = [];
			rowList[i] = [];
			for (var j = 0; j < number; j++){
				rowList[i][j] = 0;
			}
			mineMainList.push(rowList[i]);
		}
		return mineMainList;
	};

	/*var getCell = function (matrix, row, col) {
		var noValue = null;
		var hasValue, value;
		try {
			hasValue = matrix[row][col] != 'undefined';
			value = hasValue ? matrix[row][col] : noValue;
			//console.log(hasValue, 'hasValue', matrix[row][col])
		} catch(e){
			value = noValue;
			//console.log(value, 'error', e)
		}
		return value;
	};

	var surroundings = function (matrix, row, col) {
		return {
			upRight: getCell(matrix, row - 1, col - 1),
			up: getCell(matrix, row - 1, col),
			upLeft: getCell(matrix, row - 1, col + 1),
			right: getCell(matrix, row, col + 1),
			left: getCell(matrix, row, col - 1),
			downLeft: getCell(matrix, row + 1, col - 1),
			down: getCell(matrix, row + 1, col),
			downRight: getCell(matrix, row + 1, col + 1)

		}
	};*/

	var calculateMineNumber = function (cellObject, board, row, column) {
		for (var property in cellObject){
			if(cellObject.hasOwnProperty(property)){
				//console.log(property, cellObject[property]);
				if(cellObject[property] == 'x' && board[row][column] != 'x'){
					//console.log('it is x')
					board[row][column]++;
				}
			}
		}
	}

	return {
		fullGrid: [],

		basicMineBoard: [],

		rowList: [],

		mineLevelCreator: function () {
			this.basicMineBoard = [];
			this.basicMineBoard = createBasicMineBoard(Math.sqrt(16));

			var mines = 4;

			while (mines > 0){
				var row = randomNumGen(4);
				var column = randomNumGen(4);

				this.basicMineBoard [row][column] = 'x';
				mines -= 1;
			}

			for (var i = 0; i < 4; i ++) {
				for (var j = 0; j < 4; j++) {
					//console.log('adjacent to', i, j);
					//console.log(surroundings(this.basicMineBoard, i,j));
					//var cellSurroundings = new cellProcessor();
					calculateMineNumber(cellProcessor.getSurroundings(this.basicMineBoard, i, j), this.basicMineBoard, i, j);
					//calculateMineNumber(cellProcessor.getSurroundings(this.basicMineBoard, i,j), this.basicMineBoard, i, j);
				}
			}
			return this.basicMineBoard;
		}

	}

})();
