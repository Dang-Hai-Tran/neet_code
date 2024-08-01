import { characterReplacement } from "./solution";

describe("Test character replacement", () => {
    test("test 1", () => {
        let s = "ABAB";
        let k = 2;
        expect(characterReplacement(s, k)).toEqual(4);
    });
    test("test 2", () => {
        let s = "AABABBA";
        let k = 1;
        expect(characterReplacement(s, k)).toEqual(4);
    });
    test("test 3", () => {
        let s = "ABBB";
        let k = 2;
        expect(characterReplacement(s, k)).toEqual(4);
    });
    test("test 4", () => {
        let s = "ABCDBBB";
        let k = 1;
        expect(characterReplacement(s, k)).toEqual(4);
    });
});
