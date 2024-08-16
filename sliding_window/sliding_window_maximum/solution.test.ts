import { maxSlidingWindow } from "./solution_re";

describe("Test max sliding window", () => {
    test("test 1", () => {
        let nums = [1, 3, -1, -3, 5, 3, 6, 7];
        let k = 3;
        let out = [3, 3, 5, 5, 6, 7];
        expect(maxSlidingWindow(nums, k)).toEqual(out);
    });
    test("test 2", () => {
        let nums = [1];
        let k = 1;
        let out = [1];
        expect(maxSlidingWindow(nums, k)).toEqual(out);
    });
    test("test 3", () => {
        let nums = [7, 2, 4];
        let k = 2;
        let out = [7, 4];
        expect(maxSlidingWindow(nums, k)).toEqual(out);
    });
});
