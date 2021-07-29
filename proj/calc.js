function Calc() {
    this.total = 0;
}

Calc.prototype.add = (num) => {
    return this.total += num;
}

Calc.prototype.subtract = (num) => {
    return this.total -= num;
}

Calc.prototype.multiply = (num) => {
    return this.total *= num;
}

Calc.prototype.divide = (num) => {
    if(num === 0) throw new Error('Error cannot divide by zero')
    return this.total /= num;
}

export default Calc;