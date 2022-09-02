const RomanConverter = require('../js/romanConverterClass');

const instance = new RomanConverter();

describe('Roman Translator', () => {
	it('should return a string', () => {
		expect(typeof instance.convert()).toEqual('string');
	});

	it('should return I', () => {
		expect(instance.convert(1)).toEqual('I');
	});

	it('should return II', () => {
		expect(instance.convert(2)).toEqual('II');
	});

	it('should return III', () => {
		expect(instance.convert(3)).toEqual('III');
	});

	// it('should return IV', () => {
	// 	expect(instance.convert(4)).toEqual('IV');
	// });
	//
	// it('should return V', () => {
	// 	expect(instance.convert(5)).toEqual('V');
	// });

	//it('should return VI', () => {
	//	expect(instance.convert(6)).toEqual('VI');
	//});
	//
	//it('should return VII', () => {
	//	expect(instance.convert(7)).toEqual('VII');
	//});
	//
	//it('should return VIII', () => {
	//	expect(instance.convert(8)).toEqual('VIII');
	//});
	//
	//it('should return IX', () => {
	//	expect(instance.convert(9)).toEqual('IX');
	//});
	//
	//it('should return X', () => {
	//	expect(instance.convert(10)).toEqual('X');
	//});
});
