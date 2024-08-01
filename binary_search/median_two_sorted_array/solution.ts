function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let A: number[] = nums1;
    let B: number[] = nums2;
    if (A.length > B.length) {
        [A, B] = [B, A];
    }
    let totalLength = A.length + B.length;
    let [l, r] = [0, A.length - 1];
    while (true) {
        let index1 = Math.floor((l + r) / 2);
        let index2 = Math.floor(totalLength / 2) - index1 - 2;
        let Aleft = index1 >= 0 ? A[index1] : -Infinity;
        let Aright = index1 + 1 != A.length ? A[index1 + 1] : +Infinity;
        let Bleft = index2 >= 0 ? B[index2] : -Infinity;
        let Bright = index2 + 1 != B.length ? B[index2 + 1] : +Infinity;
        if (Aright >= Bleft && Bright >= Aleft) {
            if (totalLength % 2) {
                return Math.min(Aright, Bright);
            } else {
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            }
        } else if (Aright < Bleft) {
            l = index1 + 1;
        } else {
            r = index1 - 1;
        }
    }
}

export { findMedianSortedArrays };
