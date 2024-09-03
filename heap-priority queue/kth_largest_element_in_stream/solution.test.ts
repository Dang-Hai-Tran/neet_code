import { KthLargest } from "./solution";

describe("test kth largest func", () => {
    it("test exp 1", () => {
        let kth = new KthLargest(3, [4, 5, 8, 2]);
        expect(kth.add(3)).toEqual(4);
        expect(kth.add(5)).toEqual(5);
        expect(kth.add(10)).toEqual(5);
        expect(kth.add(9)).toEqual(8);
        expect(kth.add(4)).toEqual(8);
    });
});
