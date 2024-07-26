function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for (let token of tokens) {
        if (!Number.isNaN(Number(token))) {
            stack.push(Number(token));
        } else {
            if (stack.length >= 2) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(calculate(a!, b!, token));
            } else {
                throw new Error("Expression invalid");
            }
        }
    }
    return stack[0];
}

function calculate(a: number, b: number, operator: string) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (a * b > 0) {
                return Math.floor(a / b);
            } else {
                return Math.ceil(a / b);
            }
        default:
            throw Error("Unsupported operator");
    }
}

export { evalRPN };
