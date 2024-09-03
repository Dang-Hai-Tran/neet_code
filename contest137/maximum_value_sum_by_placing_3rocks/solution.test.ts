import { maxValueSum } from "./solution";

describe("maxValueSum", () => {
    test("Example 1: board = [[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]", () => {
        const board = [
            [-3, 1, 1, 1],
            [-3, 1, -3, 1],
            [-3, 2, 1, 1],
        ];
        expect(maxValueSum(board)).toBe(4);
    });

    test("Example 2: board = [[1,2,3],[4,5,6],[7,8,9]]", () => {
        const board = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(maxValueSum(board)).toBe(15);
    });

    test("Example 3: board = [[1,1,1],[1,1,1],[1,1,1]]", () => {
        const board = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        expect(maxValueSum(board)).toBe(3);
    });

    test("Minimum board size: 3x3", () => {
        const board = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(maxValueSum(board)).toBe(15);
    });
});
