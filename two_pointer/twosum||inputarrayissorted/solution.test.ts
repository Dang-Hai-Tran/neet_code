import { twoSum } from "./solution";

describe("Test two sum", () => {
    test("Test 1", () => {
        let numbers = [2, 7, 11, 15];
        let target = 9;
        let out = [1, 2];
        expect(twoSum(numbers, target)).toEqual(out);
    });
});
