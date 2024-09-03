import { exist } from "./solution";

describe("Test exist function", () => {
    it("test exp 1", () => {
        let board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        let word = "ABCCED";
        expect(exist(board, word)).toEqual(true);
    });
    it("test exp 2", () => {
        let board = [
            ["a", "a", "b", "a", "a", "b"],
            ["a", "a", "b", "b", "b", "a"],
            ["a", "a", "a", "a", "b", "a"],
            ["b", "a", "b", "b", "a", "b"],
            ["a", "b", "b", "a", "b", "a"],
            ["b", "a", "a", "a", "a", "b"],
        ];
        let word = "bbbaabbbbbab";
        expect(exist(board, word)).toEqual(false);
    });
});
