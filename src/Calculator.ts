class Calculator {
	constructor() {
		this.result = 0;
	}

	public add(number: number): Calculator {
		this.result += number;
		return this;
	}

	public subtract(number: number): Calculator {
		this.result -= number;
		return this;
	}

	public multiply(number: number): Calculator {
		this.result *= number;
		return this;
	}

	public divide(number: number): Calculator {
		this.result /= number;
		return this;
	}

	public resolve(): number {
		return this.result;
	}

	public reset(number = 0): Calculator {
		this.result = number;
		return this;
	}


	private result: number;
}


export default Calculator;
