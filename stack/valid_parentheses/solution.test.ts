import { isValid } from "./solution";

describe("Test is valid parentheses", () => {
    test("test 1", () => {
        let s = "()";
        expect(isValid(s)).toEqual(true);
    });
    test("test 2", () => {
        let s = "()[]{}";
        expect(isValid(s)).toEqual(true);
    });
    test("test 3", () => {
        let s = "(}";
        expect(isValid(s)).toEqual(false);
    });
    test("test 4", () => {
        let s = "";
        expect(isValid(s)).toEqual(true);
    });
    test("test 5", () => {
        let s = "[";
        expect(isValid(s)).toEqual(false);
    });
});
