import { findMedianSortedArrays } from "./solution";

describe("Test find median sorted arrays", () => {
    test("test 1", () => {
        let nums1 = [1, 3];
        let num2 = [2];
        expect(findMedianSortedArrays(nums1, num2)).toEqual(2);
    });
    test("test 2", () => {
        let nums1 = [1, 2];
        let num2 = [3, 4];
        expect(findMedianSortedArrays(nums1, num2)).toEqual(2.5);
    });
});
