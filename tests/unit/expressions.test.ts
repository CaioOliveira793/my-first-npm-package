import Calculator from '../../src/Calculator';

describe('Expressions', () => {

	it('generate preview of the expression', async () => {
		const calculator = new Calculator();

		const expression = calculator.reset(2).multiply(4).divide(8).subtract(-11).expression();

		expect(expression).toBe('x = 2 * 4 / 8 - (-11)');
	});

	it('generate empty expression when no value was passed to the calculator', async () => {
		const calculator = new Calculator();

		const expression = calculator.expression();

		expect(expression).toBe('');
	});

});
