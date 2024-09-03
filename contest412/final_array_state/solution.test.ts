import { getFinalState } from "./solution";

describe("test get final state", () => {
    it("test exp 1", () => {
        let nums = [2, 1, 3, 5, 6],
            k = 5,
            multiplier = 2;
        expect(getFinalState(nums, k, multiplier)).toEqual([8, 4, 6, 5, 6]);
    });
    it("test exp 2", () => {
        let nums = [1, 2],
            k = 3,
            multiplier = 4;
        expect(getFinalState(nums, k, multiplier)).toEqual([16, 8]);
    });
});
