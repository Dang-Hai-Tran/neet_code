import { search } from "./solution";

describe("Test search", () => {
    test("test 1", () => {
        let nums = [4, 5, 6, 7, 0, 1, 2];
        let target = 0;
        expect(search(nums, target)).toEqual(4);
    });
    test("test 2", () => {
        let nums = [4, 5, 6, 7, 0, 1, 2];
        let target = 5;
        expect(search(nums, target)).toEqual(1);
    });
    test("test 2", () => {
        let nums = [4, 5, 6, 7, 0, 1, 2];
        let target = 3;
        expect(search(nums, target)).toEqual(-1);
    });
    test("test 2", () => {
        let nums = [4, 5, 6, 7, 0, 1, 2];
        let target = 0;
        expect(search(nums, target)).toEqual(4);
    });
});
