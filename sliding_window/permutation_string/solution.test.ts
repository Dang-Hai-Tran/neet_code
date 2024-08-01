import { checkInclusion } from "./solution";

describe("Test check permutation", () => {
    test("test 1", () => {
        let s1 = "ab";
        let s2 = "eidbaooo";
        expect(checkInclusion(s1, s2)).toEqual(true);
    });
    test("test 2", () => {
        let s1 = "ab";
        let s2 = "eidbgaooo";
        expect(checkInclusion(s1, s2)).toEqual(false);
    });
    test("test 3", () => {
        let s1 = "pqzhi";
        let s2 = "ghrqpihzybre";
        expect(checkInclusion(s1, s2)).toEqual(true);
    });
});
