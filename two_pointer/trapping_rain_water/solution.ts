// function trap(height: number[]): number {
//     const lengthH = height.length;
//     if (lengthH <= 2) return 0;
//     let vol = 0;
//     let maxLeft = findMaxLeft(height);
//     let maxRight = findMaxRight(height);
//     for (let i = 0; i < lengthH; i++) {
//         let diff = Math.min(maxLeft[i], maxRight[i]) - height[i];
//         vol += diff > 0 ? diff : 0;
//     }
//     return vol;
// }

// function findMaxLeft(heights: number[]): number[] {
//     let maxLeft = [];
//     let max = 0;
//     for (let i = 0; i < heights.length; i++) {
//         if (i > 0) {
//             max = Math.max(max, heights[i - 1]);
//         }
//         maxLeft.push(max);
//     }
//     return maxLeft;
// }
// function findMaxRight(heights: number[]): number[] {
//     let maxRight = [];
//     let max = 0;
//     for (let i = heights.length - 1; i >= 0; i--) {
//         if (i < heights.length - 1) {
//             max = Math.max(max, heights[i + 1]);
//         }
//         maxRight.unshift(max);
//     }
//     return maxRight;
// }

function trap(height: number[]): number {
    const length = height.length;
    if (length <= 2) return 0;
    let left = 0,
        right = length - 1;
    let leftMax = height[left],
        rightMax = height[right];
    let ret = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            ret += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            ret += rightMax - height[right];
        }
    }
    return ret;
}

export { trap };
