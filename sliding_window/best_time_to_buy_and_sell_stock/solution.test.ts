import { maxProfit } from "./solution";

describe("Test max profit", () => {
    test("test 1", () => {
        let prices = [7, 1, 5, 3, 6, 4];
        expect(maxProfit(prices)).toEqual(5);
    });
});
