import { dailyTemperatures } from "./solution";

describe("Test daily temps", () => {
    test("test 1", () => {
        let temps = [73, 74, 75, 71, 69, 72, 76, 73];
        let out = [1, 1, 4, 2, 1, 1, 0, 0];
        expect(dailyTemperatures(temps)).toEqual(out);
    });
    test("test 2", () => {
        let temps = [30,40,50,60];
        let out = [1,1,1,0];
        expect(dailyTemperatures(temps)).toEqual(out);
    });
});
