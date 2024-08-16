import { minWindow } from "./solution";

describe("Test min windown", () => {
    test("test 1", () => {
        let s = "ADOBECODEBANC";
        let t = "ABC";
        expect(minWindow(s, t)).toEqual("BANC");
    });
    test("test 2", () => {
        let s = "a";
        let t = "aa";
        expect(minWindow(s, t)).toEqual("");
    });
    test("test 3", () => {
        let s = "a";
        let t = "a";
        expect(minWindow(s, t)).toEqual("a");
    });
    test("test 4", () => {
        let s = "aa";
        let t = "aa";
        expect(minWindow(s, t)).toEqual("aa");
    });
    test("test 5", () => {
        let s = "ab";
        let t = "b";
        expect(minWindow(s, t)).toEqual("b");
    });
});
