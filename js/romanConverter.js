const app = {
	baseNumber: 0,
	romanNumber: [],

	init: function (nb) {
		app.baseNumber = nb;
		app.romanNumber = [];
	},

	convert: function (nb) {
		if (!nb) return '';
		app.init(nb);

		for (let i = 0; i < nb; i++) {
			app.decompose();
		}

		return app.romanNumber.join('');
	},

	decompose: function () {
		if (app.baseNumber >= 1000) {
			app.romanNumber = [...app.romanNumber, 'M'];
			app.baseNumber -= 1000;
		} else if (app.baseNumber >= 900) {
			app.romanNumber = [...app.romanNumber, 'CM'];
			app.baseNumber -= 900;
		} else if (app.baseNumber >= 500) {
			app.romanNumber = [...app.romanNumber, 'D'];
			app.baseNumber -= 500;
		} else if (app.baseNumber >= 400) {
			app.romanNumber = [...app.romanNumber, 'CD'];
			app.baseNumber -= 400;
		} else if (app.baseNumber >= 100) {
			app.romanNumber = [...app.romanNumber, 'C'];
			app.baseNumber -= 100;
		} else if (app.baseNumber >= 90) {
			app.romanNumber = [...app.romanNumber, 'XC'];
			app.baseNumber -= 90;
		} else if (app.baseNumber >= 50) {
			app.romanNumber = [...app.romanNumber, 'L'];
			app.baseNumber -= 50;
		} else if (app.baseNumber >= 40) {
			app.romanNumber = [...app.romanNumber, 'XL'];
			app.baseNumber -= 40;
		} else if (app.baseNumber >= 10) {
			app.romanNumber = [...app.romanNumber, 'X'];
			app.baseNumber -= 10;
		} else if (app.baseNumber >= 9) {
			app.romanNumber = [...app.romanNumber, 'IX'];
			app.baseNumber -= 9;
		} else if (app.baseNumber >= 5) {
			app.romanNumber = [...app.romanNumber, 'V'];
			app.baseNumber -= 5;
		} else if (app.baseNumber >= 4) {
			app.romanNumber = [...app.romanNumber, 'IV'];
			app.baseNumber -= 4;
		} else if (app.baseNumber >= 1) {
			app.romanNumber = [...app.romanNumber, 'I'];
			app.baseNumber -= 1;
		}
	},
};

module.exports = app;
