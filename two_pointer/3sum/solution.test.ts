import { threeSum } from "./solution";

describe("Test three sum", () => {
    test("test 1", () => {
        let nums = [-1, 0, 1, 2, -1, -4];
        let out = [
            [-1, -1, 2],
            [-1, 0, 1],
        ];
        expect(threeSum(nums)).toEqual(out);
    });
    test("test 2", () => {
        let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
        let out = [
            [-4, 0, 4],
            [-4, 1, 3],
            [-3, -1, 4],
            [-3, 0, 3],
            [-3, 1, 2],
            [-2, -1, 3],
            [-2, 0, 2],
            [-1, -1, 2],
            [-1, 0, 1],
        ];
        expect(threeSum(nums)).toEqual(out);
    });
});
