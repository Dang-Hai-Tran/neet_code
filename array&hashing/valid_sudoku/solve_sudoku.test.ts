import { solveSudoku } from "./solve_sudoku";

describe("solveSudoku", () => {
    test("solves a valid Sudoku puzzle", () => {
        const input = [
            "...5.3..8",
            "2.4.6..9.",
            ".1.......",
            ".7.....5.",
            "5.1..63..",
            ".9..1....",
            "...2..9..",
            "7........",
            "6.5.4..2.",
        ];
        const res = solveSudoku(input);
        for (const solution of res) {
            console.log(solution.map((row) => row.join(" ")).join("\n"));
        }
    });
});
