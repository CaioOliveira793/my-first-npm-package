import Calculator from '../../src/Calculator';

describe('basic operations', () => {

	it('add two numbers', async () => {
		const calculator = new Calculator();

		const four = calculator.reset(2).add(2).resolve();

		expect(four).toBe(4);
	});

	it('subtract two numbers', async () => {
		const calculator = new Calculator();

		const two = calculator.reset(4).subtract(2).resolve();

		expect(two).toBe(2);
	});

	it('multiply two numbers', async () => {
		const calculator = new Calculator();

		const eight = calculator.reset(4).multiply(2).resolve();

		expect(eight).toBe(8);
	});

	it('divide two numbers', async () => {
		const calculator = new Calculator();

		const five = calculator.reset(10).divide(2).resolve();

		expect(five).toBe(5);
	});

});
