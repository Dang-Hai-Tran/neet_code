import { generateParenthesis } from "./solution";

describe("Test generate parenthesis", () => {
    test("test 1", () => {
        let n = 1;
        let out = ["()"];
        expect(generateParenthesis(n)).toEqual(out);
    });
    test("test 3", () => {
        let n = 3;
        let out = ["((()))", "(()())", "(())()", "()(())", "()()()"];
        expect(generateParenthesis(n)).toEqual(out);
    });
});
