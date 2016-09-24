var cellProcessor = (function () {
	//todo link back to where I found this solution
	var getCell = function (matrix, row, col) {
		var noValue = null;
		var hasValue, value;
		try {
			hasValue = matrix[row][col] != 'undefined';
			value = hasValue ? matrix[row][col] : noValue;
			//console.log(hasValue, 'hasValue', matrix[row][col])
		} catch (e) {
			value = noValue;
			//console.log(value, 'error', e)
		}
		return value;
	};

	var checkCell = function (matrix, row, col) {
		//zero is true, any number is false, undefined is null
		console.log('check cell', row, col);
		//console.log('check cell, fieldvalue');

		if(row == -1 || col == -1 || row >= rowNumber || col >= colNumber || matrix[row][col] == undefined){
			console.log('hits null');
			return null;
		}

		console.log('what the fuxk is the value', matrix[row][col]);

		if (matrix[row][col].fieldValue == 0) {
			return true;
		} else if (matrix[row][col].fieldValue > 0) {
			return false;
		} else {
			return null;
		}

	};

	return {
		blankCellList : [],
		adjacentBlankCells : [],
		//todo refactor this to the zero checking function
		getSurroundings: function (matrix, row, col) {
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
		},

		revealCells: function (matrix, row, col) {
			//todo rename getCell, combine with checkCell
			var adjacentCell = checkCell(matrix, row, col);

			console.log('adjacentCell', adjacentCell);
			if (adjacentCell == true || adjacentCell == false) {
				matrix[row][col].showCell();
				if (adjacentCell == true) {
					this.adjacentBlankCells.push([row, col]);
				}
			}
		},

		loopOverImmediateNeighbors: function (matrix, row, col) {
			//for (var i = 0; i < 4; i++) {
				/*var newRow = this.blankCellList[0][0];
				var newCol = this.blankCellList[0][1];*/
				var newRow = row;
				var newCol = col;
				this.revealCells(matrix, newRow - 1, newCol);
				this.revealCells(matrix, newRow - 1, newCol - 1);
				this.revealCells(matrix, newRow - 1, newCol + 1);
				this.revealCells(matrix, newRow, newCol + 1);
				this.revealCells(matrix, newRow, newCol - 1);
				this.revealCells(matrix, newRow + 1, newCol);
				this.revealCells(matrix, newRow + 1, newCol - 1);
				this.revealCells(matrix, newRow + 1, newCol + 1);
			if(this.adjacentBlankCells.length > 0){
				this.adjacentBlankCells.shift();
			}
			//}
			//this.blankCellList.pop();
			//this.blankCellList.pop()
			//console.log('loop over immediate neighbor', this.blankCellList);
		},

		loopOverAllNeighbors: function (matrix, row, col) {
			//console.log('what is coming through', matrix);
			this.adjacentBlankCells = [];
			this.blankCellList = [];
			this.blankCellList.push([row, col]);

			this.loopOverImmediateNeighbors(matrix, row, col);

			for (var i = 0; i < this.adjacentBlankCells.length; i++) {
				this.loopOverImmediateNeighbors(matrix, this.adjacentBlankCells[0][0], this.adjacentBlankCells[0][1])
			}

			/*while (this.blankCellList.length > 0) {
				console.log('loop blank', this.blankCellList);
				this.loopOverImmediateNeighbors(matrix);

			}*/

		}

	}
}());


