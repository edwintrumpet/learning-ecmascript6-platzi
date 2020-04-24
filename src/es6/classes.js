class calculator {
    constructor(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
    }

    sum() {
        return this.valueA + this.valueB;
    }
}

const calc = new calculator(2, 6);

console.log(calc.sum());
