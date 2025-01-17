const calculator = {
    num1: 10,
    num2: 5,

    add() {
        return this.num1 + this.num2;
    },

    subtract() {
        return this.num1 - this.num2;
    },

    multiply() {
        return this.num1 * this.num2;
    },

    divide() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
            return "გაყოფა ნულზე შეუძლებელია!";
        }
    }
};

// შედეგების გამოტანა
console.log(` ${calculator.add()}`); 
console.log(` ${calculator.subtract()}`); 
console.log(` ${calculator.multiply()}`); 
console.log(` ${calculator.divide()}`); 
