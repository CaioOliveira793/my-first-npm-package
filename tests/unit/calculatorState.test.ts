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

	it('undo inexistent operation', async () => {
		const calculator = new Calculator();

		const five = calculator.reset(5).undo().resolve();

		expect(five).toBe(5);
	});

	it('undo operations', async () => {
		const calculator = new Calculator();

		const thirteen = calculator.reset(10).add(3).subtract(1).multiply(5).divide(2).add(13)
			.undo().undo().undo().undo().resolve();

		expect(thirteen).toBe(13);
	});

	it('resolve expression', async () => {
		const calculator = new Calculator();

		const twenty = calculator.reset(10).add(4).multiply(3).divide(4).add(10).subtract(6).divide(2).resolve();

		expect(twenty).toBe(20);
	});

});
