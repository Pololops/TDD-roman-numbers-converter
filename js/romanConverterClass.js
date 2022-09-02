class RomanConverter {
	inputNumber = [];
	romanNumber = [];

	init(nb) {
		this.baseNumber = nb;
		this.romanNumber = [];
	}

	convert(nb) {
		if (!nb) return '';
		this.init(nb);

		for (let i = 0; i < nb; i++) {
			this.decompose();
		}

		return this.romanNumber.join('');
	}

	decompose () {
		if (this.baseNumber >= 1000) {
			this.romanNumber = [...this.romanNumber, 'M'];
			this.baseNumber -= 1000;
		} else if (this.baseNumber >= 900) {
			this.romanNumber = [...this.romanNumber, 'CM'];
			this.baseNumber -= 900;
		} else if (this.baseNumber >= 500) {
			this.romanNumber = [...this.romanNumber, 'D'];
			this.baseNumber -= 500;
		} else if (this.baseNumber >= 400) {
			this.romanNumber = [...this.romanNumber, 'CD'];
			this.baseNumber -= 400;
		} else if (this.baseNumber >= 100) {
			this.romanNumber = [...this.romanNumber, 'C'];
			this.baseNumber -= 100;
		} else if (this.baseNumber >= 90) {
			this.romanNumber = [...this.romanNumber, 'XC'];
			this.baseNumber -= 90;
		} else if (this.baseNumber >= 50) {
			this.romanNumber = [...this.romanNumber, 'L'];
			this.baseNumber -= 50;
		} else if (this.baseNumber >= 40) {
			this.romanNumber = [...this.romanNumber, 'XL'];
			this.baseNumber -= 40;
		} else if (this.baseNumber >= 10) {
			this.romanNumber = [...this.romanNumber, 'X'];
			this.baseNumber -= 10;
		} else if (this.baseNumber >= 9) {
			this.romanNumber = [...this.romanNumber, 'IX'];
			this.baseNumber -= 9;
		} else if (this.baseNumber >= 5) {
			this.romanNumber = [...this.romanNumber, 'V'];
			this.baseNumber -= 5;
		} else if (this.baseNumber >= 4) {
			this.romanNumber = [...this.romanNumber, 'IV'];
			this.baseNumber -= 4;
		} else if (this.baseNumber >= 1) {
			this.romanNumber = [...this.romanNumber, 'I'];
			this.baseNumber -= 1;
		}
	}
}

module.exports = RomanConverter;
