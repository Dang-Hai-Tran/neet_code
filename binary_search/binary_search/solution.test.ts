import { search } from "./solution";

describe("Test binary search", () => {
    test("test 1", () => {
        let nums = [-1, 0, 3, 5, 9, 12];
        let target = 9;
        expect(search(nums, target)).toEqual(4);
    });
    test("test 2", () => {
        let nums = [-1, 0, 3, 5, 9, 12];
        let target = 2;
        expect(search(nums, target)).toEqual(-1);
    });
});
