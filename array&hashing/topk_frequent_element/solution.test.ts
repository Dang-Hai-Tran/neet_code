import { topKFrequent } from "./solution";

describe("Top K frequent", () => {
    test("test 1", () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const k = 2;
        expect(topKFrequent(nums, k)).toEqual([1, 2]);
    });
    test("test 2", () => {
        const nums = [1];
        const k = 1;
        expect(topKFrequent(nums, k)).toEqual([1]);
    });
});
