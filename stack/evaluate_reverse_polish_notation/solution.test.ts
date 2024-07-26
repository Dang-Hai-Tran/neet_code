import { evalRPN } from "./solution";

describe("Test eval rpn", () => {
    test("test 1", () => {
        let tokens = ["2", "1", "+", "3", "*"];
        let out = 9;
        expect(evalRPN(tokens)).toEqual(out);
    });
    test("test 2", () => {
        let tokens = ["4", "13", "5", "/", "+"];
        let out = 6;
        expect(evalRPN(tokens)).toEqual(out);
    });
    test("test 3", () => {
        let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
        let out = 22;
        expect(evalRPN(tokens)).toEqual(out);
    });
    test("test 4", () => {
        let tokens = ["2", "1", "+", "3", "*", "-"];
        let out = 9;
        expect(() => evalRPN(tokens)).toThrow(Error("Expression invalid"));
    });
});
