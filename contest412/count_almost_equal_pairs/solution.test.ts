import { countPairs } from "./solution";

describe("test count pairs", () => {
    it("test exp 1", () => {
        let nums = [3, 12, 30, 17, 21];
        expect(countPairs(nums)).toEqual(2);
    });
});
