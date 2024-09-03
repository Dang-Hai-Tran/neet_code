import { resultsArray } from "./solution";

describe("resultsArray", () => {
    it("should return the power of all subarrays of size k", () => {
        expect(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)).toEqual([3, 4, -1, -1, -1]);
        expect(resultsArray([2, 2, 2, 2, 2], 4)).toEqual([-1, -1]);
        expect(resultsArray([3, 2, 3, 2, 3, 2], 2)).toEqual([-1, 3, -1, 3, -1]);
        expect(resultsArray([3, 2, 3, 2, 3, 2], 1)).toEqual([3, 2, 3, 2, 3, 2]);
    });
});
