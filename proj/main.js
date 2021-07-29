function calculate(InputVal) {
    const expression = /\+|\-|\*|\//

    const numbers = InputVal.split(expression)

    const num1 = parseInt(numbers[0])
    const num2 = parseInt(numbers[1])

    const operation = InputVal.match(expression)
    debugger;

    if(operation === null || Number.isNaN(num1) || Number.isNaN(num2)) {
            updateResult("operation not working")
            return
    }
    const calc = new Calc();
    calc.add(num1)

    let result
    switch (operation[0]) {
        case "+":
            result = calc.add(num2)
            break;
        case "-":
            result = calc.subtract(num2)
            break;
        case "*":
            result = calc.multiply(num2)
            break;
        case "/":
            result = calc.divide(num2)
            break;
    }
    debugger;
    updateResult(result);
}
export default calculate;