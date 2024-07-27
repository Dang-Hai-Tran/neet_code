import { trap } from "./solution";

describe("test trap", () => {
    test("test 1", () => {
        let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        let out = 6;
        expect(trap(heights)).toEqual(out);
    });
    test("test 2", () => {
        let heights = [4, 2, 0, 3, 2, 5];
        let out = 9;
        expect(trap(heights)).toEqual(out);
    });
});
