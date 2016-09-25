//todo temp list, shuffle, pop and then get when empty

var backend = (function () {
	return {
		getGoodDialog: function () {
			var num = helper.getRandomNumber(0, dialog.npc.good.length);
			return dialog.npc.good[num];
		},
		getBadDialog: function (dialogArr) {
			//console.log('get bad dialog', dialogArr);
			var num = helper.getRandomNumber(0, dialogArr.length - 1);
			//console.log('get bad dialog', dialog.npc.bad[num], num);
			return dialogArr[num];
		}
	};
})();
