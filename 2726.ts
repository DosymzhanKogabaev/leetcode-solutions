class Calculator {
    x: number;
    constructor(value: number) {
        this.x = value;
    }
    
    add(value: number): Calculator {
        return new Calculator(this.x + value);
    }
    
    subtract(value: number): Calculator {
        return new Calculator(this.x - value);
    }
    
    multiply(value: number): Calculator {
        return new Calculator(this.x * value);
    }
    
    divide(value: number): Calculator {
        if(value === 0) throw Error("Division by zero is not allowed");
        return new Calculator(this.x / value);
    }
    
    power(value: number): Calculator {
        return new Calculator(this.x ** value);
    }
    
    getResult(): number {
        return this.x;
    }
}