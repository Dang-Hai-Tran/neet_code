function generateParenthesis(n: number): string[] {
    const ret: string[] = [];
    function backtrack(openB: number, closeB: number, stack: string = "") {
        if (openB === n && closeB === n) {
            ret.push(stack);
        }
        if (openB < n) {
            backtrack(openB + 1, closeB, stack + "(");
        }
        if (closeB < openB) {
            backtrack(openB, closeB + 1, stack + ")");
        }
    }
    backtrack(0, 0);
    return ret;
}

export { generateParenthesis };
