import Calculator from '../../src/Calculator';

describe('calculator state', () => {

	it('reset the calculator', async () => {
		const calculator = new Calculator();

		const zero = calculator.reset().resolve();

		expect(zero).toBe(0);
	});

	it('reset the calculator before resolve operations', async () => {
		const calculator = new Calculator();

		const reset = calculator.reset().add(2).subtract(10).reset().resolve();

		expect(reset).toBe(0);
	});

});
