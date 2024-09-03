import { kClosest } from "./solution";

describe("test k closest func", () => {
    it("test exp 1", () => {
        let points = [
                [1, 3],
                [-2, 2],
            ],
            k = 1;
        expect(kClosest(points, k)).toEqual([[-2, 2]]);
    });
});
