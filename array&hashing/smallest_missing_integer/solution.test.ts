import { missingInteger } from "./solution";

describe("test missing integer", () => {
    test("test 1", () => {
        let nums = [1, 2, 3, 2, 5];
        expect(missingInteger(nums)).toEqual(6);
    });
    test("test 2", () => {
        let nums = [3, 4, 5, 1, 12, 14, 13];
        expect(missingInteger(nums)).toEqual(15);
    });
});
