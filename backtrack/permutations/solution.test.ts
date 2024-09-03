import { permute } from "./solution";

describe("Test permute function", () => {
    it("test nums have 3 elements", () => {
        let nums = [1, 2, 3];
        let out = [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ];
        expect(permute(nums)).toEqual(out);
    });
});
