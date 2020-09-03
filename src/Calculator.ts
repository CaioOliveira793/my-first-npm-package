class Calculator {
	constructor() {
		this.operations = [['=', 0]];

		this.addSubtractIndex = [];
		this.multiplyDivideIndex = [];
	}

	public add(number: number): Calculator {
		this.addSubtractIndex.push(this.operations.length);
		this.operations.push(['+', number]);
		return this;
	}

	public subtract(number: number): Calculator {
		this.addSubtractIndex.push(this.operations.length);
		this.operations.push(['-', number]);
		return this;
	}

	public multiply(number: number): Calculator {
		this.multiplyDivideIndex.push(this.operations.length);
		this.operations.push(['*', number]);
		return this;
	}

	public divide(number: number): Calculator {
		this.multiplyDivideIndex.push(this.operations.length);
		this.operations.push(['/', number]);
		return this;
	}


	public expression(): string {
		let expression: string = 'x';

		if (this.operations.length <= 1) return '';

		for (const [operation, number] of this.operations) {
			expression += ` ${operation}`;

			if (number < 0) {
				expression += ` (${number})`;
			} else {
				expression += ` ${number}`;
			}
		}

		return expression;
	}


	public resolve(): number {
		for (let i = this.multiplyDivideIndex.length - 1; i >= 0; i--) {
			const index = this.multiplyDivideIndex[i];
			const previousIndex = index - 1;

			switch (this.operations[index][0]) {
				case '*':
					this.operations[previousIndex][1] *= this.operations[index][1];
					break;
				case '/':
					this.operations[previousIndex][1] /= this.operations[index][1];
					break;
			}
		}

		for (let i = this.addSubtractIndex.length - 1; i >= 0; i--) {
			const index = this.addSubtractIndex[i];
			let previousIndex = index - 1;

			while (previousIndex >= 0) {
				if (this.multiplyDivideIndex.includes(previousIndex))
					previousIndex--;
				else
					break;
			}

			switch (this.operations[index][0]) {
				case '+':
					this.operations[previousIndex][1] += this.operations[index][1];
					break;
				case '-':
					this.operations[previousIndex][1] -= this.operations[index][1];
					break;
			}
		}

		const result = this.operations[0][1];

		this.operations = [['=', result]];
		this.addSubtractIndex = [];
		this.multiplyDivideIndex = [];

		return result;
	}

	public reset(number = 0): Calculator {
		this.operations = [['=', number]];
		this.addSubtractIndex = [];
		this.multiplyDivideIndex = [];
		return this;
	}

	public undo(): Calculator {
		if (this.operations.length <= 1) return this;

		const operation = (this.operations.pop() as [string, number])[0];

		if (operation === '+' ||  operation === '-') {
			this.addSubtractIndex.pop();
		} else {
			this.multiplyDivideIndex.pop();
		}

		return this;
	}


	private operations: [string, number][];

	private addSubtractIndex: number[];
	private multiplyDivideIndex: number[];
}


export default Calculator;
