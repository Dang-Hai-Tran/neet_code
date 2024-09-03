import { combinationSum } from "./solution";

describe("test combination sum", () => {
    it("test exp 1", () => {
        let candidates = [2, 3, 6, 7];
        let target = 7;
        expect(combinationSum(candidates, target)).toEqual([[2, 2, 3], [7]]);
    });
});
