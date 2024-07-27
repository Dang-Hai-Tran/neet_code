import { maxArea } from "./solution";

describe("Test max area", () => {
    test("test 1", () => {
        let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        let out = 49;
        expect(maxArea(height)).toEqual(out);
    });
    test("test 2", () => {
        let height = [1,3,2,5,25,24,5];
        let out = 24;
        expect(maxArea(height)).toEqual(out);
    });
});
