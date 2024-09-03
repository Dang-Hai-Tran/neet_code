import { numIslands } from "./solution";

describe("test func num islands", () => {
    it("test exp 1", () => {
        let grid = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
        ];
        expect(numIslands(grid)).toEqual(1);
    });
    it("test exp 2", () => {
        let grid = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ];
        expect(numIslands(grid)).toEqual(3);
    });
});
