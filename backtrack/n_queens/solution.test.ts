import { solveNQueens } from "./solution";

describe("test solve n queens", () => {
    it("test exp 1", () => {
        let n = 4;
        let out = [
            [".Q..", "...Q", "Q...", "..Q."],
            ["..Q.", "Q...", "...Q", ".Q.."],
        ];
        expect(solveNQueens(n)).toEqual(out);
    });
});
