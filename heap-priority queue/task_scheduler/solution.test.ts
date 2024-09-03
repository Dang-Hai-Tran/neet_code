import { leastInterval } from "./solution";

describe("Test leastInterval func", () => {
    it("test exp 1", () => {
        let tasks = ["A", "A", "A", "B", "B", "B"],
            n = 2;
        expect(leastInterval(tasks, n)).toEqual(8);
    });
    it("test exp 1", () => {
        let tasks = ["A", "C", "A", "B", "D", "B"],
            n = 1;
        expect(leastInterval(tasks, n)).toEqual(6);
    });
});
