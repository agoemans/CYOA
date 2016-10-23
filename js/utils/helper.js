var helper = (function () {
	return {
		getRandomNumber: function (min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		},

		shuffle: function (array) {
			//todo inefficient, need to change this!
			var oldArray = array;
			var tempArray = [];
			while(oldArray.length > 0){
				var currentIndex = this.getRandomNumber(0, oldArray.length - 1);
				tempArray.push(oldArray[currentIndex]);
				oldArray.splice(currentIndex, 1);
			}
			return tempArray;
		}
	};
})();
