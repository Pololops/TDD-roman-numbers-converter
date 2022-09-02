const app = {
	baseNumber: 0,
	romanNumber: [],

	combinations: {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	},

	init: function (nb) {
		app.baseNumber = nb;
		app.romanNumber = [];
	},

	convert: function (nb) {
		if (!nb) return '';

		app.init(nb);

		app.transcodeToRoman();
		return app.romanNumber.join('');
	},

	transcodeToRoman: function () {
		while (app.baseNumber > 0) {
			Object.entries(app.combinations).forEach(([key, value], index, array) => {
				if (app.baseNumber >= value) {
					app.romanNumber = [...app.romanNumber, key];
					app.baseNumber -= value;
					array.length = index + 1;
				}
			});
		}
	},
};

module.exports = app;
