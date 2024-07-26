import { carFleet } from "./solution";

describe("Test car fleet", () => {
    test("test 1", () => {
        let target = 12;
        let position = [10, 8, 0, 5, 3];
        let speed = [2, 4, 1, 1, 3];
        expect(carFleet(target, position, speed)).toEqual(3);
    });
    test("test 2", () => {
        let target = 10;
        let position = [3];
        let speed = [3];
        expect(carFleet(target, position, speed)).toEqual(1);
    });
    test("test 3", () => {
        let target = 100;
        let position = [0, 2, 4];
        let speed = [4, 2, 1];
        expect(carFleet(target, position, speed)).toEqual(1);
    });
});
