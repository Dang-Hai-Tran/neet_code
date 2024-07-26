import { largestRectangleArea } from "./solution";

describe("Test largest rectangle area", () => {
    test("test 1", () => {
        let heights = [2, 1, 5, 6, 2, 3];
        let out = 10;
        expect(largestRectangleArea(heights)).toEqual(out);
    });
    test("test 2", () => {
        let heights = [2, 1, 2];
        let out = 3;
        expect(largestRectangleArea(heights)).toEqual(out);
    });
    test("test 3", () => {
        let heights = [5, 4, 1, 2];
        let out = 8;
        expect(largestRectangleArea(heights)).toEqual(out);
    });
    test("test 4", () => {
        let heights = [3,6,5,7,4,8,1,0];
        let out = 20;
        expect(largestRectangleArea(heights)).toEqual(out);
    });
    test("test 5", () => {
        let heights = [4,2,0,3,2,5];
        let out = 6;
        expect(largestRectangleArea(heights)).toEqual(out);
    });
});
