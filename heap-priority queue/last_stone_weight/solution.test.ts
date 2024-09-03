import { lastStoneWeight } from "./solution";

describe("test last stone weight func", () => {
    it("test exp 1", () => {
        let stones = [2, 7, 4, 1, 8, 1];
        expect(lastStoneWeight(stones)).toEqual(1);
    });
});
