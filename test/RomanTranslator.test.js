const convert = require('../js/romanConverter');

describe('Roman Translator', () => {
  it('should return a string', () => {
    expect(typeof convert()).toEqual('string');
  });

  it('should return I', () => {
		expect(convert(1)).toEqual('I');
	});

  it('should return II', () => {
		expect(convert(2)).toEqual('II');
	});

  it('should return III', () => {
		expect(convert(3)).toEqual('III');
	});

  it('should return IV', () => {
		expect(convert(4)).toEqual('IV');
	});

  it('should return V', () => {
		expect(convert(5)).toEqual('V');
	});
})