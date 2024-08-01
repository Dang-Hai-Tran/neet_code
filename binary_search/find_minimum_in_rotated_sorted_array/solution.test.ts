import { findMin } from "./solution";

describe("Test find min", () => {
    test("test 1", () => {
        let nums = [3, 4, 5, 1, 2];
        expect(findMin(nums)).toEqual(1);
    });
    test("test 2", () => {
        let nums = [3];
        expect(findMin(nums)).toEqual(3);
    });
    test("test 1", () => {
        let nums = [4, 5, 6, 7, 0, 1, 2];
        expect(findMin(nums)).toEqual(0);
    });
});
