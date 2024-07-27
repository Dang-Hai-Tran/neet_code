import { minEatingSpeed } from "./solution";

describe("Test min eating speed", () => {
    test("Test 1", () => {
        let piles = [2, 2];
        let h = 4;
        expect(minEatingSpeed(piles, h)).toEqual(1);
    });
});
