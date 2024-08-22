import { findWords } from "./solution";

describe("Test find words function", () => {
    it("test example 1", () => {
        let board = [
                ["o", "a", "a", "n"],
                ["e", "t", "a", "e"],
                ["i", "h", "k", "r"],
                ["i", "f", "l", "v"],
            ],
            words = ["oath", "pea", "eat", "rain"];
        let out = ["eat", "oath"];
        let result = findWords(board, words);
        expect(result.length).toEqual(out.length);
        for (let item of result) {
            expect(out.includes(item)).toEqual(true);
        }
    });
    it("test example 2", () => {
        let board = [
                ["a", "b", "c"],
                ["a", "e", "d"],
                ["a", "f", "g"],
            ],
            words = ["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"];
        let out = ["abcdefg", "befa", "eaabcdgfa", "gfedcbaaa"];
        let result = findWords(board, words);
        expect(result.length).toEqual(out.length);
        for (let item of result) {
            expect(out.includes(item)).toEqual(true);
        }
    });
    it("test example 2", () => {
        let board = [["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]],
            words = ["oa","oaa"];
        let out = ["oa","oaa"];
        let result = findWords(board, words);
        expect(result.length).toEqual(out.length);
        for (let item of result) {
            expect(out.includes(item)).toEqual(true);
        }
    });
});
