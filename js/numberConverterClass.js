class NumberConverter {
	constructor(language) {
		this.language = language || 'roman';
	}

	#combinations = [
		{ value: 3000, greek: '͵Γ' },
		{ value: 2000, greek: '͵B' },
		{ value: 1000, roman: 'M', greek: '͵Α' },
		{ value: 900, roman: 'CM', greek: 'Ϡ' },
		{ value: 800, greek: 'Ω' },
		{ value: 700, greek: 'Ψ' },
		{ value: 600, greek: 'X' },
		{ value: 500, roman: 'D', greek: 'Φ' },
		{ value: 400, roman: 'CD', greek: 'Y' },
		{ value: 300, greek: 'T' },
		{ value: 200, greek: 'Σ' },
		{ value: 100, roman: 'C', greek: 'Ρ' },
		{ value: 90, roman: 'XC', greek: 'Ϟ' },
		{ value: 80, greek: 'Π' },
		{ value: 70, greek: 'Ο' },
		{ value: 60, greek: 'Ξ' },
		{ value: 50, roman: 'L', greek: 'N' },
		{ value: 40, roman: 'XL', greek: 'M' },
		{ value: 30, greek: 'Λ' },
		{ value: 20, greek: 'K' },
		{ value: 10, roman: 'X', greek: 'Ι' },
		{ value: 9, roman: 'IX', greek: 'Θ' },
		{ value: 8, greek: 'Η' },
		{ value: 7, greek: 'Ζ' },
		{ value: 6, greek: 'Ϛ' },
		{ value: 5, roman: 'V', greek: 'Ε' },
		{ value: 4, roman: 'IV', greek: 'Δ' },
		{ value: 3, greek: 'Γ' },
		{ value: 2, greek: 'B' },
		{ value: 1, roman: 'I', greek: 'A' },
	];

	convert(nb) {
		if (nb < 1 || (this.language !== 'roman' && this.language !== 'greek'))
			return '';

		return this.transcode(nb).join('');
	}

	foundCombination(nb) {
		return this.#combinations.find((combination) => {
			if (nb >= combination.value && combination[this.language]) {
				return combination;
			}
		});
	}

	transcode(nb) {
		let combinationNumber = [];
		while (nb > 0) {
			const found = this.foundCombination(nb);
			if (found) {
				combinationNumber = [...combinationNumber, found[this.language]];
				nb -= found.value;
			}
		}

		return combinationNumber;
	}
}

module.exports = NumberConverter;
