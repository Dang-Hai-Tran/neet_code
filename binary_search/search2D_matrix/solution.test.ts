import { searchMatrix } from "./solution";

describe("Test search matrix", () => {
    test("Test 1", () => {
        let matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];
        let target = 3;
        expect(searchMatrix(matrix, target)).toEqual(true);
    });
});
