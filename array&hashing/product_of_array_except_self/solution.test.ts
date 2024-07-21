import { productExceptSelf } from "./solution";

describe("Test product except self", () => {
    test("test 1", () => {
        let nums = [1, 2, 3, 4];
        let out = [24, 12, 8, 6];
        expect(productExceptSelf(nums)).toEqual(out);
    });
    test("test 2", () => {
        let nums = [-1, 1, 0, -3, 3];
        let out = [0, 0, 9, 0, 0];
        expect(productExceptSelf(nums)).toEqual(out);
    });
});
