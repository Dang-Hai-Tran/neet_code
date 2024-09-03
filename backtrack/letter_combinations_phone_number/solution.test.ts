import { letterCombinations } from "./solution";

describe("test function letter combination", () => {
    it("test exp 1", () => {
        let digits = "23";
        let out = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
        expect(letterCombinations(digits)).toEqual(out);
    });
});
