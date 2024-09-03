import { partition } from "./solution";

describe("test function partition", () => {
    it("test exp 1", () => {
        let s = "aab";
        let out = [
            ["a", "a", "b"],
            ["aa", "b"],
        ];
        expect(partition(s)).toEqual(out);
    });
});
