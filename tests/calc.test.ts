import Calculator from '../src/Calculator';

describe('Calculator constructor', () => {

	it('construct a new calculator', async () => {
		const calculator = new Calculator('calc');

		expect(calculator).toBeInstanceOf(Calculator);
	});

});
