import { lengthOfLongestSubstring } from "./solution";

describe("Test length of longest substring", () => {
    test("test 1", () => {
        let s = "abcabcbb";
        expect(lengthOfLongestSubstring(s)).toEqual(3);
    });
    test("test 2", () => {
        let s = "bbbbb";
        expect(lengthOfLongestSubstring(s)).toEqual(1);
    });
    test("test 3", () => {
        let s = " ";
        expect(lengthOfLongestSubstring(s)).toEqual(1);
    });
    test("test 4", () => {
        let s = "abcd";
        expect(lengthOfLongestSubstring(s)).toEqual(4);
    });
});
