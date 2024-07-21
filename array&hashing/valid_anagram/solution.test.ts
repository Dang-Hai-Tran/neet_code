import { isAnagram } from "./solution";

describe("Test valid anagram", () => {
    test("test 1", () => {
        const [s, t] = ["anagram", "nagaram"];
        const output = true;
        expect(isAnagram(s, t)).toEqual(output);
    });
    test("test 2", () => {
        const [s, t] = ["rat", "car"];
        const output = false;
        expect(isAnagram(s, t)).toEqual(output);
    });
});
