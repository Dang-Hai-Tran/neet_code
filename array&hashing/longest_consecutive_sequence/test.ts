import { longestConsecutive } from "./solution";

describe("Test longest consecutive", () => {
    test("test 1", () => {
        let nums = [100, 4, 200, 1, 3, 2];
        let out = 4;
        expect(longestConsecutive(nums)).toEqual(out);
    });
    test("test 2", () => {
        let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
        let out = 9;
        expect(longestConsecutive(nums)).toEqual(out);
    });
    test("test 3", () => {
        let nums: number[] = [];
        let out = 0;
        expect(longestConsecutive(nums)).toEqual(out);
    });
});
