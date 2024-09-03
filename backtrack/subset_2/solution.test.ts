import { subsetsWithDup } from "./solution";

describe("test subsets with dup", () => {
    it("test exp 1", () => {
        let nums = [1, 2, 2];
        let out = [[1, 2, 2], [1, 2], [1], [2, 2], [2], []];
        expect(subsetsWithDup(nums)).toEqual(out);
    });
    it("test exp 2", () => {
        let nums = [4, 4, 4, 1, 4];
        let out = [[1, 4, 4, 4, 4], [1, 4, 4, 4], [1, 4, 4], [1, 4], [1], [4, 4, 4, 4], [4, 4, 4], [4, 4], [4], []];
        console.log(subsetsWithDup(nums));
        expect(subsetsWithDup(nums)).toEqual(out);
    });
});
